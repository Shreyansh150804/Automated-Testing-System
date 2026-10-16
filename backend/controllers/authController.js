const {
  createUser,
  findUserByEmail,
  findUserById,
  updateUser,
} = require("../database/db");
const {
  hashPassword,
  verifyPassword,
  generateToken,
} = require("../services/authService");
const {
  uploadProfileImage,
  deleteProfileImage,
  isCloudinaryConfigured,
} = require("../services/cloudinaryService");

// Register a new user
async function signup(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ message: "Name is required" });
    }
    if (!email || !email.trim()) {
      return res.status(400).json({ message: "Email is required" });
    }
    if (!password || password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "An account with this email already exists" });
    }

    const { hash, salt } = hashPassword(password);
    const user = await createUser({
      name: name.trim(),
      email: email.trim(),
      passwordHash: hash,
      salt,
    });

    const token = generateToken(user);

    return res.status(201).json({
      message: "Registration successful",
      token,
      user,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({
      message: error.message || "Failed to register user",
    });
  }
}

// Log in existing user
async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isValid = verifyPassword(password, user.passwordHash, user.salt);
    if (!isValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const { passwordHash: _, salt: __, ...safeUser } = user;
    const token = generateToken(safeUser);

    return res.json({
      message: "Login successful",
      token,
      user: safeUser,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      message: "Failed to login. Please try again.",
    });
  }
}

// Get current user profile
async function getProfile(req, res) {
  try {
    const { passwordHash: _, salt: __, ...safeUser } = req.user;
    return res.json({ user: safeUser });
  } catch (error) {
    return res.status(500).json({ message: "Failed to load user profile" });
  }
}

// Update profile fields
async function updateProfile(req, res) {
  try {
    const { name, email } = req.body;
    const updates = {};

    if (name && name.trim()) {
      updates.name = name.trim();
    }

    if (email && email.trim() && email.trim() !== req.user.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }

      const existing = await findUserByEmail(email);
      if (existing && existing.id !== req.user.id) {
        return res.status(409).json({ message: "Email is already taken" });
      }
      updates.email = email.trim().toLowerCase();
    }

    const updatedUser = await updateUser(req.user.id, updates);
    return res.json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Update profile error:", error);
    return res.status(500).json({ message: "Failed to update profile" });
  }
}

// Change password
async function changePassword(req, res) {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        message: "Current password and new password are required",
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        message: "New password must be at least 6 characters long",
      });
    }

    const user = await findUserById(req.user.id);
    const isCurrentValid = verifyPassword(
      currentPassword,
      user.passwordHash,
      user.salt
    );

    if (!isCurrentValid) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    const { hash, salt } = hashPassword(newPassword);
    await updateUser(req.user.id, {
      passwordHash: hash,
      salt,
    });

    return res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Change password error:", error);
    return res.status(500).json({ message: "Failed to change password" });
  }
}

// Upload or replace profile avatar image
async function uploadAvatar(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image file provided" });
    }

    if (!isCloudinaryConfigured()) {
      return res.status(503).json({
        message:
          "Cloudinary image service is not configured. Please define CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in backend environment variables.",
      });
    }

    // Securely upload buffer and clean up existing image if user had one
    const uploadResult = await uploadProfileImage(
      req.file.buffer,
      req.file.mimetype,
      req.user.profileImagePublicId
    );

    const updatedUser = await updateUser(req.user.id, {
      profileImageUrl: uploadResult.url,
      profileImagePublicId: uploadResult.publicId,
    });

    return res.json({
      message: "Profile picture updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Avatar upload error:", error);
    return res.status(500).json({
      message: error.message || "Failed to upload avatar",
    });
  }
}

// Remove profile avatar
async function removeAvatar(req, res) {
  try {
    if (req.user.profileImagePublicId) {
      await deleteProfileImage(req.user.profileImagePublicId);
    }

    const updatedUser = await updateUser(req.user.id, {
      profileImageUrl: null,
      profileImagePublicId: null,
    });

    return res.json({
      message: "Profile picture removed successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Avatar removal error:", error);
    return res.status(500).json({
      message: error.message || "Failed to remove avatar",
    });
  }
}

module.exports = {
  signup,
  login,
  getProfile,
  updateProfile,
  changePassword,
  uploadAvatar,
  removeAvatar,
};

