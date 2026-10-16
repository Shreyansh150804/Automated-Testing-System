const express = require("express");
const {
  signup,
  login,
  getProfile,
  updateProfile,
  changePassword,
  uploadAvatar,
  removeAvatar,
} = require("../controllers/authController");
const { authMiddleware } = require("../middleware/authMiddleware");
const { upload } = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);
router.put("/password", authMiddleware, changePassword);

// Avatar upload with safe multer error handling
router.post(
  "/profile/avatar",
  authMiddleware,
  (req, res, next) => {
    upload.single("avatar")(req, res, (err) => {
      if (err) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res
            .status(400)
            .json({ message: "Image is too large. Maximum file size is 5MB." });
        }
        return res
          .status(400)
          .json({ message: err.message || "Failed to process uploaded file." });
      }
      next();
    });
  },
  uploadAvatar
);

// Avatar deletion
router.delete("/profile/avatar", authMiddleware, removeAvatar);

module.exports = router;

