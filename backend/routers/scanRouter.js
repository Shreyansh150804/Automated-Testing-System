const express = require("express");
const {
  runScan,
  saveScan,
  getHistory,
  getStats,
  getScan,
  deleteScanRecord,
} = require("../controllers/scanController");
const {
  authMiddleware,
  optionalAuthMiddleware,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    message: "Scan API is working",
  });
});

// Scan execution (supports guest or authenticated user)
router.post("/", optionalAuthMiddleware, runScan);

// Save scan results explicitly to persistent database
router.post("/save", optionalAuthMiddleware, saveScan);

// Authenticated user scan history
router.get("/history", authMiddleware, getHistory);

// Authenticated user dashboard statistics
router.get("/stats", authMiddleware, getStats);

// Get single scan by ID
router.get("/:id", optionalAuthMiddleware, getScan);

// Delete scan record by ID
router.delete("/:id", authMiddleware, deleteScanRecord);

module.exports = router;