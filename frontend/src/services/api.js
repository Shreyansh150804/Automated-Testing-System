const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// ==========================================
// TOKEN & AUTH STORAGE HELPERS
// ==========================================

export function getToken() {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem("vulnexa_token");
  } catch {
    return null;
  }
}

export function getCurrentUser() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem("vulnexa_user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setAuth(token, user) {
  if (typeof window === "undefined") return;
  try {
    if (token) localStorage.setItem("vulnexa_token", token);
    if (user) localStorage.setItem("vulnexa_user", JSON.stringify(user));
    window.dispatchEvent(
      new CustomEvent("vulnexa_auth_change", {
        detail: { token, user: user || getCurrentUser() },
      })
    );
  } catch (err) {
    console.error("Failed to store auth:", err);
  }
}

export function clearAuth() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem("vulnexa_token");
    localStorage.removeItem("vulnexa_user");
    window.dispatchEvent(
      new CustomEvent("vulnexa_auth_change", {
        detail: { token: null, user: null },
      })
    );
  } catch (err) {
    console.error("Failed to clear auth:", err);
  }
}

export function isAuthenticated() {
  return Boolean(getToken());
}

export function getAuthHeaders() {
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}

// ==========================================
// AUTHENTICATION API CALLS
// ==========================================

export async function loginUser(email, password) {
  const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to log in");
  }

  setAuth(data.token, data.user);
  return data;
}

export async function signupUser(name, email, password) {
  const res = await fetch(`${API_BASE_URL}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to create account");
  }

  setAuth(data.token, data.user);
  return data;
}

export async function getUserProfile() {
  const token = getToken();
  if (!token) {
    throw new Error("No authentication token found");
  }

  const res = await fetch(`${API_BASE_URL}/api/auth/me`, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  const data = await res.json();
  if (!res.ok) {
    if (res.status === 401) {
      clearAuth();
    }
    throw new Error(data.message || "Failed to load profile");
  }

  if (data.user) {
    setAuth(token, data.user);
  }
  return data.user;
}

export async function updateUserProfile({ name, email }) {
  const res = await fetch(`${API_BASE_URL}/api/auth/profile`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify({ name, email }),
  });

  const data = await res.json();
  if (!res.ok) {
    if (res.status === 401) {
      clearAuth();
    }
    throw new Error(data.message || "Failed to update profile");
  }

  if (data.user) {
    setAuth(getToken(), data.user);
  }
  return data.user;
}

export async function uploadUserAvatar(file) {
  const token = getToken();
  if (!token) {
    throw new Error("You must be logged in to upload an avatar");
  }

  const formData = new FormData();
  formData.append("avatar", file);

  const res = await fetch(`${API_BASE_URL}/api/auth/profile/avatar`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      // Note: do not set Content-Type header so browser sets multipart boundary
    },
    body: formData,
  });

  const data = await res.json();
  if (!res.ok) {
    if (res.status === 401) {
      clearAuth();
    }
    throw new Error(data.message || "Failed to upload avatar");
  }

  if (data.user) {
    setAuth(token, data.user);
  }
  return data.user;
}

export async function deleteUserAvatar() {
  const token = getToken();
  if (!token) {
    throw new Error("You must be logged in to delete your avatar");
  }

  const res = await fetch(`${API_BASE_URL}/api/auth/profile/avatar`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  const data = await res.json();
  if (!res.ok) {
    if (res.status === 401) {
      clearAuth();
    }
    throw new Error(data.message || "Failed to remove avatar");
  }

  if (data.user) {
    setAuth(token, data.user);
  }
  return data.user;
}

export async function changeUserPassword({ currentPassword, newPassword }) {
  const res = await fetch(`${API_BASE_URL}/api/auth/password`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify({ currentPassword, newPassword }),
  });

  const data = await res.json();
  if (!res.ok) {
    if (res.status === 401) {
      clearAuth();
    }
    throw new Error(data.message || "Failed to change password");
  }

  return data;
}

// ==========================================
// URL NORMALIZATION & HEALTH CHECK
// ==========================================

export function normalizeTargetUrl(input) {
  let trimmed = (input || "").trim();
  if (!trimmed) return "";
  if (!/^https?:\/\//i.test(trimmed)) {
    trimmed = `https://${trimmed}`;
  }
  return trimmed;
}

export async function checkBackendHealth() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/scan/test`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return { ok: true, data };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

// ==========================================
// SCORING ENGINE
// ==========================================

export function computeSecurityScore(findings = []) {
  if (!findings || findings.length === 0) return 100;

  let score = 100;
  for (const f of findings) {
    if (f.status === "Fail") {
      switch ((f.severity || "").toLowerCase()) {
        case "critical":
          score -= 25;
          break;
        case "high":
          score -= 15;
          break;
        case "medium":
          score -= 10;
          break;
        case "low":
          score -= 5;
          break;
        default:
          score -= 5;
      }
    }
  }

  score = Math.max(0, Math.min(100, score));

  let label = "Excellent";
  let color = "text-emerald-400";
  let ringColor = "#10b981";
  let badgeBg = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";

  if (score < 50) {
    label = "Critical Risk";
    color = "text-red-400";
    ringColor = "#ef4444";
    badgeBg = "bg-red-500/10 text-red-400 border-red-500/20";
  } else if (score < 70) {
    label = "Moderate Risk";
    color = "text-orange-400";
    ringColor = "#f97316";
    badgeBg = "bg-orange-500/10 text-orange-400 border-orange-500/20";
  } else if (score < 85) {
    label = "Fair Protection";
    color = "text-yellow-400";
    ringColor = "#eab308";
    badgeBg = "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
  }

  return { score, label, color, ringColor, badgeBg };
}

// ==========================================
// SCAN OPERATIONS & PERSISTENCE
// ==========================================

export async function scanTarget(targetUrl) {
  const normalized = normalizeTargetUrl(targetUrl);
  if (!normalized) {
    throw new Error("Please enter a valid target URL");
  }

  let response;
  try {
    const url = `${API_BASE_URL}/api/scan`;
    response = await fetch(url, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({ target: normalized }),
    });
  } catch (netErr) {
    throw new Error(
      `Cannot connect to backend server at ${API_BASE_URL}. Ensure Express is running.`
    );
  }

  if (!response.ok) {
    let errMessage = `Scan failed (Status ${response.status})`;
    try {
      const errData = await response.json();
      if (errData && errData.message) {
        errMessage =
          errData.message + (errData.error ? `: ${errData.error}` : "");
      }
    } catch {
      // ignore
    }
    throw new Error(errMessage);
  }

  const data = await response.json();
  const findings = data.findings || [];
  const passed = findings.filter((f) => f.status === "Pass");
  const failed = findings.filter((f) => f.status === "Fail");
  const manual = findings.filter((f) => f.status === "Manual Review");
  const scoreDetails = computeSecurityScore(findings);

  return {
    ...data,
    target: normalized,
    scannedAt: data.scannedAt || new Date().toISOString(),
    scoreDetails,
    summary: {
      total: findings.length,
      passed: passed.length,
      failed: failed.length,
      manual: manual.length,
    },
  };
}

export async function saveScanResult(scanData) {
  if (!scanData || !scanData.target) {
    throw new Error("Invalid scan data to save");
  }

  const res = await fetch(`${API_BASE_URL}/api/scan/save`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(scanData),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to persist scan record");
  }

  return data.scan;
}

export async function getUserScans(params = {}) {
  const query = new URLSearchParams();
  if (params.search) query.set("search", params.search);
  if (params.status) query.set("status", params.status);
  if (params.severity) query.set("severity", params.severity);
  if (params.sort) query.set("sort", params.sort);

  const url = `${API_BASE_URL}/api/scan/history?${query.toString()}`;
  const res = await fetch(url, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to retrieve scan history");
  }

  return data.scans || [];
}

export async function getUserScanStats() {
  const res = await fetch(`${API_BASE_URL}/api/scan/stats`, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to load dashboard statistics");
  }

  return data;
}

export async function getScanById(scanId) {
  const res = await fetch(`${API_BASE_URL}/api/scan/${scanId}`, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to load scan report");
  }

  return data;
}

export async function deleteScan(scanId) {
  const res = await fetch(`${API_BASE_URL}/api/scan/${scanId}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to delete scan report");
  }

  return data;
}
