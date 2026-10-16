const cloudinary = require("cloudinary").v2;

/**
 * Check if Cloudinary credentials are fully and validly configured in environment
 */
function isCloudinaryConfigured() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  return Boolean(
    cloudName &&
    apiKey &&
    apiSecret &&
    !cloudName.includes("your_") &&
    !apiKey.includes("your_") &&
    !apiSecret.includes("your_")
  );
}

/**
 * Configure and get Cloudinary instance
 */
function getCloudinary() {
  if (!isCloudinaryConfigured()) {
    return null;
  }
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
  return cloudinary;
}

/**
 * Upload profile avatar buffer to Cloudinary
 * Cleans up existing image if previous publicId is provided
 */
async function uploadProfileImage(buffer, mimetype, existingPublicId = null) {
  if (!isCloudinaryConfigured()) {
    throw new Error(
      "Cloudinary is not configured. Please define CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in your backend environment variables (.env)."
    );
  }

  const cld = getCloudinary();

  // If replacing existing avatar, clean up previous asset in Cloudinary
  if (existingPublicId) {
    try {
      await cld.uploader.destroy(existingPublicId);
    } catch (cleanupErr) {
      console.warn("Failed to clean up old Cloudinary image:", cleanupErr.message);
    }
  }

  return new Promise((resolve, reject) => {
    const uploadStream = cld.uploader.upload_stream(
      {
        folder: "vulnexa/avatars",
        resource_type: "image",
        transformation: [
          { width: 400, height: 400, crop: "fill", gravity: "face" },
          { quality: "auto", fetch_format: "auto" },
        ],
      },
      (error, result) => {
        if (error) {
          return reject(
            new Error(error.message || "Failed to upload image to Cloudinary")
          );
        }
        resolve({
          url: result.secure_url,
          publicId: result.public_id,
        });
      }
    );

    uploadStream.end(buffer);
  });
}

/**
 * Delete a profile image from Cloudinary by its public ID
 */
async function deleteProfileImage(publicId) {
  if (!publicId || !isCloudinaryConfigured()) {
    return false;
  }
  const cld = getCloudinary();
  try {
    const res = await cld.uploader.destroy(publicId);
    return res.result === "ok";
  } catch (err) {
    console.warn("Failed to delete Cloudinary image:", err.message);
    return false;
  }
}

module.exports = {
  isCloudinaryConfigured,
  uploadProfileImage,
  deleteProfileImage,
};
