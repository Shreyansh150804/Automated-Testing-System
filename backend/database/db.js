const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const SCANS_FILE = path.join(DATA_DIR, "scans.json");

// Ensure data directory and files exist
function initDb() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2), "utf8");
  }
  if (!fs.existsSync(SCANS_FILE)) {
    fs.writeFileSync(SCANS_FILE, JSON.stringify([], null, 2), "utf8");
  }
}

initDb();

// Safe async read
async function readJson(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(data || "[]");
  } catch (err) {
    if (err.code === "ENOENT") {
      return [];
    }
    console.error(`Error reading ${filePath}:`, err);
    return [];
  }
}

// Atomic async write to prevent partial writes
async function writeJson(filePath, data) {
  const tempPath = `${filePath}.tmp.${Date.now()}`;
  await fs.promises.writeFile(tempPath, JSON.stringify(data, null, 2), "utf8");
  await fs.promises.rename(tempPath, filePath);
}

// ==========================================
// USER REPOSITORY
// ==========================================

async function getAllUsers() {
  return await readJson(USERS_FILE);
}

async function findUserByEmail(email) {
  if (!email) return null;
  const users = await getAllUsers();
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase().trim()) || null;
}

async function findUserById(id) {
  if (!id) return null;
  const users = await getAllUsers();
  return users.find((u) => u.id === id) || null;
}

async function createUser({ name, email, passwordHash, salt }) {
  const users = await getAllUsers();
  const existing = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase().trim()
  );
  if (existing) {
    throw new Error("A user with this email already exists");
  }

  const newUser = {
    id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
    name: name.trim(),
    email: email.toLowerCase().trim(),
    passwordHash,
    salt,
    profileImageUrl: null,
    profileImagePublicId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  users.push(newUser);
  await writeJson(USERS_FILE, users);

  const { passwordHash: _, salt: __, ...safeUser } = newUser;
  return safeUser;
}

async function updateUser(id, updates) {
  const users = await getAllUsers();
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) {
    throw new Error("User not found");
  }

  const updated = {
    ...users[idx],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  users[idx] = updated;
  await writeJson(USERS_FILE, users);

  const { passwordHash: _, salt: __, ...safeUser } = updated;
  return safeUser;
}

// ==========================================
// SCAN REPOSITORY
// ==========================================

async function getAllScans() {
  return await readJson(SCANS_FILE);
}

async function createScan(scanData) {
  const scans = await getAllScans();

  const scanId =
    scanData.scanId ||
    `scn_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

  // Prevent duplicate save if same scanId already exists for this user
  if (scanData.userId) {
    const existing = scans.find(
      (s) => s.id === scanId || (s.scanId === scanId && s.userId === scanData.userId)
    );
    if (existing) {
      return existing;
    }
  }

  const findings = scanData.findings || [];
  const passed = findings.filter((f) => f.status === "Pass").length;
  const failed = findings.filter((f) => f.status === "Fail").length;
  const manual = findings.filter((f) => f.status === "Manual Review").length;

  const critical = findings.filter(
    (f) => (f.severity || "").toLowerCase() === "critical" && f.status === "Fail"
  ).length;
  const high = findings.filter(
    (f) => (f.severity || "").toLowerCase() === "high" && f.status === "Fail"
  ).length;
  const medium = findings.filter(
    (f) => (f.severity || "").toLowerCase() === "medium" && f.status === "Fail"
  ).length;
  const low = findings.filter(
    (f) => (f.severity || "").toLowerCase() === "low" && f.status === "Fail"
  ).length;

  const newScan = {
    id: scanId,
    scanId,
    userId: scanData.userId || null,
    target: scanData.target,
    scannedAt: scanData.scannedAt || new Date().toISOString(),
    status: scanData.status || "Completed",
    statusCode: scanData.statusCode || 200,
    scoreDetails: scanData.scoreDetails || { score: 100, label: "Excellent" },
    findings: findings,
    summary: {
      total: findings.length,
      passed,
      failed,
      manual,
      critical,
      high,
      medium,
      low,
    },
    createdAt: new Date().toISOString(),
  };

  scans.unshift(newScan);
  await writeJson(SCANS_FILE, scans);
  return newScan;
}

async function getScanById(id, userId = null) {
  const scans = await getAllScans();
  const scan = scans.find((s) => s.id === id || s.scanId === id);
  if (!scan) return null;
  // If scan is owned by a user, only that authenticated user can access it
  if (scan.userId) {
    if (!userId || scan.userId !== userId) {
      return null;
    }
  }
  return scan;
}

async function getUserScans(userId, filters = {}) {
  let scans = await getAllScans();

  // Filter by user
  if (userId) {
    scans = scans.filter((s) => s.userId === userId);
  }

  // Filter by search query
  if (filters.search) {
    const q = filters.search.toLowerCase().trim();
    scans = scans.filter(
      (s) =>
        (s.target || "").toLowerCase().includes(q) ||
        (s.id || "").toLowerCase().includes(q)
    );
  }

  // Filter by status
  if (filters.status && filters.status !== "all") {
    scans = scans.filter(
      (s) => (s.status || "").toLowerCase() === filters.status.toLowerCase()
    );
  }

  // Filter by minimum severity presence
  if (filters.severity && filters.severity !== "all") {
    const sev = filters.severity.toLowerCase();
    scans = scans.filter((s) => {
      if (sev === "critical") return (s.summary?.critical || 0) > 0;
      if (sev === "high") return (s.summary?.high || 0) > 0;
      if (sev === "medium") return (s.summary?.medium || 0) > 0;
      if (sev === "low") return (s.summary?.low || 0) > 0;
      return true;
    });
  }

  // Sort
  if (filters.sort === "oldest") {
    scans.sort((a, b) => new Date(a.scannedAt) - new Date(b.scannedAt));
  } else {
    // Default newest first
    scans.sort((a, b) => new Date(b.scannedAt) - new Date(a.scannedAt));
  }

  return scans;
}

async function deleteScan(id, userId) {
  const scans = await getAllScans();
  const idx = scans.findIndex(
    (s) => (s.id === id || s.scanId === id) && (!userId || s.userId === userId)
  );

  if (idx === -1) {
    return false;
  }

  scans.splice(idx, 1);
  await writeJson(SCANS_FILE, scans);
  return true;
}

async function getUserScanStats(userId) {
  const scans = await getUserScans(userId);

  const totalScans = scans.length;
  const uniqueWebsites = new Set();
  let totalVulnerabilities = 0;
  let criticalCount = 0;
  let highCount = 0;
  let mediumCount = 0;
  let lowCount = 0;
  let totalScore = 0;
  let completedCount = 0;
  let failedCount = 0;
  let runningCount = 0;

  scans.forEach((s) => {
    try {
      const urlObj = new URL(s.target);
      uniqueWebsites.add(urlObj.hostname);
    } catch {
      uniqueWebsites.add(s.target);
    }

    const sSummary = s.summary || {};
    totalVulnerabilities += sSummary.failed || 0;
    criticalCount += sSummary.critical || 0;
    highCount += sSummary.high || 0;
    mediumCount += sSummary.medium || 0;
    lowCount += sSummary.low || 0;

    const score = s.scoreDetails?.score ?? 100;
    totalScore += score;

    const status = (s.status || "Completed").toLowerCase();
    if (status === "completed") completedCount++;
    else if (status === "failed") failedCount++;
    else if (status === "running") runningCount++;
  });

  const averageScore = totalScans > 0 ? Math.round(totalScore / totalScans) : 100;

  let overallPosture = "Excellent";
  if (averageScore < 50) overallPosture = "Critical Risk";
  else if (averageScore < 70) overallPosture = "Moderate Risk";
  else if (averageScore < 85) overallPosture = "Fair Protection";

  // Recent scans (top 5)
  const recentScans = scans.slice(0, 5).map((s) => ({
    id: s.id,
    target: s.target,
    scannedAt: s.scannedAt,
    status: s.status,
    score: s.scoreDetails?.score ?? 100,
    scoreLabel: s.scoreDetails?.label ?? "Good",
    vulnerabilities: s.summary?.failed || 0,
    summary: s.summary,
  }));

  // Timeline activity (group by date YYYY-MM-DD for the past 7 days)
  const timeline = {};
  scans.forEach((s) => {
    const d = s.scannedAt ? s.scannedAt.slice(0, 10) : new Date().toISOString().slice(0, 10);
    timeline[d] = (timeline[d] || 0) + 1;
  });

  return {
    totalScans,
    uniqueWebsitesCount: uniqueWebsites.size,
    uniqueWebsites: Array.from(uniqueWebsites),
    totalVulnerabilities,
    severityBreakdown: {
      critical: criticalCount,
      high: highCount,
      medium: mediumCount,
      low: lowCount,
    },
    averageScore,
    overallPosture,
    statusCounts: {
      completed: completedCount,
      failed: failedCount,
      running: runningCount,
    },
    recentScans,
    timeline,
    lastScan: scans[0] || null,
  };
}

module.exports = {
  findUserByEmail,
  findUserById,
  createUser,
  updateUser,
  createScan,
  getScanById,
  getUserScans,
  deleteScan,
  getUserScanStats,
};
