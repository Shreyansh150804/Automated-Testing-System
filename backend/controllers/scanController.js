const { performScan } = require("../services/scanService");
const {
  createScan,
  getScanById,
  getUserScans,
  deleteScan,
  getUserScanStats,
} = require("../database/db");

// Run a vulnerability scan against target
const runScan = async (req, res) => {
  try {
    const { target } = req.body;

    if (!target) {
      return res.status(400).json({
        message: "Target URL is required",
      });
    }

    // Perform the actual network and header scan
    const result = await performScan(target);

    // Attach unique scan identifier
    const scanId = `scn_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    const fullResult = {
      ...result,
      scanId,
      id: scanId,
      scannedAt: new Date().toISOString(),
    };

    // If user is authenticated, automatically associate their ID
    if (req.user && req.user.id) {
      fullResult.userId = req.user.id;
    }

    res.json(fullResult);
  } catch (error) {
    console.error("Scan execution error:", error);
    res.status(500).json({
      message: "Scan failed",
      error: error.message,
    });
  }
};

// Explicitly save scan results to database
const saveScan = async (req, res) => {
  try {
    const scanData = req.body;

    if (!scanData || !scanData.target) {
      return res.status(400).json({
        message: "Invalid scan payload. Target URL is required.",
      });
    }

    const userId = req.user ? req.user.id : null;
    const saved = await createScan({
      ...scanData,
      userId,
    });

    return res.status(201).json({
      message: "Scan saved successfully",
      scan: saved,
    });
  } catch (error) {
    console.error("Save scan error:", error);
    return res.status(500).json({
      message: "Failed to save scan record",
      error: error.message,
    });
  }
};

// Get scan history for authenticated user
const getHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const { search, status, severity, sort } = req.query;

    const scans = await getUserScans(userId, {
      search,
      status,
      severity,
      sort,
    });

    return res.json({
      total: scans.length,
      scans,
    });
  } catch (error) {
    console.error("Get history error:", error);
    return res.status(500).json({
      message: "Failed to retrieve scan history",
      error: error.message,
    });
  }
};

// Get dashboard statistics for authenticated user
const getStats = async (req, res) => {
  try {
    const userId = req.user.id;
    const stats = await getUserScanStats(userId);

    return res.json(stats);
  } catch (error) {
    console.error("Get stats error:", error);
    return res.status(500).json({
      message: "Failed to load dashboard statistics",
      error: error.message,
    });
  }
};

// Get single scan by ID
const getScan = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user ? req.user.id : null;

    const scan = await getScanById(id, userId);

    if (!scan) {
      return res.status(404).json({
        message: "Scan report not found or access denied",
      });
    }

    return res.json(scan);
  } catch (error) {
    console.error("Get scan error:", error);
    return res.status(500).json({
      message: "Failed to load scan report",
      error: error.message,
    });
  }
};

// Delete a scan by ID
const deleteScanRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const deleted = await deleteScan(id, userId);

    if (!deleted) {
      return res.status(404).json({
        message: "Scan report not found or not authorized to delete",
      });
    }

    return res.json({
      message: "Scan report deleted successfully",
      id,
    });
  } catch (error) {
    console.error("Delete scan error:", error);
    return res.status(500).json({
      message: "Failed to delete scan report",
      error: error.message,
    });
  }
};

module.exports = {
  runScan,
  saveScan,
  getHistory,
  getStats,
  getScan,
  deleteScanRecord,
};