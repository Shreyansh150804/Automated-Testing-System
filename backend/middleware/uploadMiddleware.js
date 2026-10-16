const multer = require("multer");

// Use memory storage so we have access to the file buffer directly
const storage = multer.memoryStorage();

// Allowed image MIME types
const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",
];

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB maximum file size
  },
  fileFilter: (req, file, cb) => {
    if (!ALLOWED_MIME_TYPES.includes(file.mimetype.toLowerCase())) {
      const err = new Error(
        "Invalid file type. Only JPEG, PNG, WEBP, and GIF images are allowed."
      );
      err.code = "INVALID_FILE_TYPE";
      return cb(err, false);
    }
    cb(null, true);
  },
});

module.exports = {
  upload,
};
