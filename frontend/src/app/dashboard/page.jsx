
"use client";
import { getToken, getAuthHeaders, isAuthenticated, clearAuth } from "../../services/api";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bug,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Globe,
  LoaderCircle,
  RefreshCw,
  ScanSearch,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  TriangleAlert,
  XCircle,
} from "lucide-react";
import { motion } from "framer-motion";

// Change this if your backend uses another port or API prefix.
const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const SCAN_API = `${API_BASE.replace(/\/$/, "")}/api/scan`;

const severityLevels = [
  { name: "Critical", color: "bg-white", text: "text-white" },
  { name: "High", color: "bg-zinc-300", text: "text-zinc-200" },
  { name: "Medium", color: "bg-zinc-500", text: "text-zinc-400" },
  { name: "Low", color: "bg-zinc-700", text: "text-zinc-400" },
];


async function apiRequest(path) {
  const token = getToken();

  if (!token) {
    clearAuth();
    throw new Error("No login token found. Please log in again.");
  }

  const response = await fetch(`${SCAN_API}${path}`, {
    method: "GET",
    headers: getAuthHeaders(),
    cache: "no-store",
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    if (response.status === 401) {
      clearAuth();
    }
    throw new Error(
      data.message || `Request failed (${response.status})`
    );
  }

  return data;
}



function getNumber(object, keys) {
  for (const key of keys) {
    const value = object?.[key];

    if (
      value !== null &&
      value !== undefined &&
      value !== "" &&
      Number.isFinite(Number(value))
    ) {
      return Number(value);
    }
  }

  return null;
}

function getFindings(scan) {
  if (Array.isArray(scan?.findings)) return scan.findings;
  if (Array.isArray(scan?.vulnerabilities)) return scan.vulnerabilities;
  if (Array.isArray(scan?.results)) return scan.results;
  return [];
}

function getSeverity(finding) {
  return String(finding?.severity || "Info").toLowerCase();
}

function countSeverity(scans, level) {
  return scans.reduce((total, scan) => {
    const findings = getFindings(scan);

    return (
      total +
      findings.filter((finding) => {
        const severity = getSeverity(finding);

        if (level === "critical") return severity === "critical";
        if (level === "high") return severity === "high";
        if (level === "medium") return severity === "medium";
        if (level === "low") return severity === "low";

        return false;
      }).length
    );
  }, 0);
}

function formatDate(value) {
  if (!value) return "Date unavailable";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "Date unavailable";

  return date.toLocaleString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getScanDate(scan) {
  return (
    scan.scannedAt ||
    scan.createdAt ||
    scan.created_at ||
    scan.timestamp ||
    scan.date ||
    null
  );
}

function getScanId(scan) {
  return scan.scanId || scan.id || scan._id || null;
}

function getScanStatus(scan) {
  return String(scan.status || "Unknown");
}

function getTarget(scan) {
  return scan.target || scan.targetUrl || scan.url || "Target unavailable";
}

function getScanTotal(stats) {
  return getNumber(stats, [
    "totalScans",
    "total_scans",
    "total",
    "scanCount",
    "scansCount",
  ]);
}

function getFindingTotal(stats) {
  return getNumber(stats, [
    "totalFindings",
    "totalVulnerabilities",
    "total_vulnerabilities",
    "findingsCount",
    "vulnerabilityCount",
  ]);
}

function getRiskScore(stats, scans) {
  const direct = getNumber(stats, ["riskScore", "risk_score"]);

  if (direct !== null) return direct;

  const latest = scans[0];
  const latestScore = getNumber(latest, ["riskScore", "risk_score"]);

  // Do not invent a score if the scanner has not calculated one.
  return latestScore;
}

function MetricCard({ label, value, description, icon: Icon, loading }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="group rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 transition-colors hover:border-white/25 hover:bg-[#101010]"
    >
      <div className="flex items-start justify-between">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
          <Icon size={19} className="text-zinc-300" />
        </div>
        <Activity size={15} className="text-zinc-600" />
      </div>

      <p className="mt-6 text-sm text-zinc-400">{label}</p>

      <div className="mt-2 min-h-10">
        {loading ? (
          <LoaderCircle className="mt-2 animate-spin text-zinc-500" size={22} />
        ) : (
          <p className="text-3xl font-semibold tracking-tight text-white">
            {value === null || value === undefined ? "—" : value}
          </p>
        )}
      </div>

      <p className="mt-2 text-xs text-zinc-600">{description}</p>
    </motion.div>
  );
}

function SeverityBar({ name, count, total }) {
  const percentage =
    total > 0 ? Math.min(100, (count / total) * 100) : 0;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-zinc-400">{name}</span>
        <span className="font-medium text-white">{count}</span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.7 }}
          className="h-full rounded-full bg-zinc-200"
        />
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const normalized = status.toLowerCase();

  const isSuccess =
    normalized.includes("complete") ||
    normalized === "completed" ||
    normalized === "success";

  const isFailure =
    normalized.includes("fail") || normalized.includes("error");

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-300">
      {isSuccess ? (
        <CheckCircle2 size={12} />
      ) : isFailure ? (
        <XCircle size={12} />
      ) : (
        <Clock3 size={12} />
      )}
      {status}
    </span>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [scans, setScans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [historyError, setHistoryError] = useState("");
  const [lastUpdated, setLastUpdated] = useState(null);

  const loadDashboard = useCallback(async (manual = false) => {
    if (!isAuthenticated()) {
      router.push("/Login?redirect=/dashboard");
      return;
    }

    if (manual) setRefreshing(true);
    else setLoading(true);

    setError("");
    setHistoryError("");

    try {
      const statsRequest = apiRequest("/stats");
      const historyRequest = apiRequest("/history");

      // Statistics and history are independent requests.
      const [statsResult, historyResult] = await Promise.allSettled([
        statsRequest,
        historyRequest,
      ]);

      if (statsResult.status === "fulfilled") {
        setStats(statsResult.value);
      } else {
        const errMsg = statsResult.reason?.message || "Unable to load statistics.";
        setError(errMsg);
        if (errMsg.includes("401") || !isAuthenticated()) {
          router.push("/Login?redirect=/dashboard");
          return;
        }
      }

      if (historyResult.status === "fulfilled") {
        const payload = historyResult.value;
        const records = Array.isArray(payload)
          ? payload
          : payload.scans || payload.history || payload.results || [];

        setScans(Array.isArray(records) ? records : []);
      } else {
        setHistoryError(
          historyResult.reason?.message || "Unable to load scan history."
        );
      }

      setLastUpdated(new Date());
    } catch (err) {
      if (!isAuthenticated()) {
        router.push("/Login?redirect=/dashboard");
        return;
      }
      setError(err.message || "Unable to connect to the backend.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [router]);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/Login?redirect=/dashboard");
      return;
    }
    loadDashboard();

    // Refresh displayed data periodically while this page is open.
    const timer = setInterval(() => loadDashboard(true), 30000);

    return () => clearInterval(timer);
  }, [loadDashboard, router]);

  const totalScans =
    getScanTotal(stats) ?? (scans.length > 0 ? scans.length : null);

  const totalFindings = getFindingTotal(stats);

  const critical = countSeverity(scans, "critical");
  const high = countSeverity(scans, "high");
  const medium = countSeverity(scans, "medium");
  const low = countSeverity(scans, "low");

  const findingsFromHistory = critical + high + medium + low;

  const findingCount =
    totalFindings !== null ? totalFindings : findingsFromHistory;

  const riskScore = getRiskScore(stats, scans);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/2 top-0 h-[360px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-16 pt-24 sm:px-8 lg:px-12">
        {/* Header */}
        <header className="flex flex-col justify-between gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white text-black">
              <Shield size={23} />
            </div>

            <div>
              <Link href="/" className="text-xl font-semibold tracking-tight">
                vulNexa<span className="text-zinc-500">.</span>
              </Link>
              <p className="mt-0.5 text-[10px] tracking-[0.22em] text-zinc-500">
                SECURITY OPERATIONS CENTER
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Connected to scan API
            </div>

            <button
              type="button"
              onClick={() => loadDashboard(true)}
              disabled={refreshing}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-2.5 text-sm transition hover:bg-white hover:text-black disabled:opacity-50"
            >
              <RefreshCw
                size={15}
                className={refreshing ? "animate-spin" : ""}
              />
              Refresh
            </button>

            <Link
              href="/scan"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              <ScanSearch size={16} />
              New scan
            </Link>
          </div>
        </header>

        {/* Page introduction */}
        <section className="flex flex-col justify-between gap-5 py-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              Overview / Dashboard
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Security overview<span className="text-zinc-500">.</span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
              Your scan activity, detected findings, and security posture —
              presented from your available scan records.
            </p>
          </div>

          <div className="text-xs text-zinc-500">
            Last updated:{" "}
            {lastUpdated ? lastUpdated.toLocaleTimeString() : "Not yet updated"}
          </div>
        </section>

        {/* Error states */}
        {error && (
          <div className="mb-5 flex gap-3 rounded-2xl border border-white/15 bg-white/[0.04] p-4">
            <TriangleAlert className="mt-0.5 shrink-0 text-zinc-300" size={19} />
            <div>
              <p className="text-sm font-medium text-white">
                Statistics could not be loaded
              </p>
              <p className="mt-1 text-sm text-zinc-400">{error}</p>
              <p className="mt-2 text-xs text-zinc-500">
                Check that the backend is running, the API URL is correct, and
                your login token is being sent.
              </p>
            </div>
          </div>
        )}

        {historyError && (
          <div className="mb-5 rounded-xl border border-white/10 p-4 text-sm text-zinc-400">
            Scan history: {historyError}
          </div>
        )}

        {/* Metrics */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            label="Total scans"
            value={totalScans}
            description="Saved scan records returned by the API"
            icon={ScanSearch}
            loading={loading}
          />
          <MetricCard
            label="Total findings"
            value={findingCount}
            description="Finding total from stats or available history"
            icon={Bug}
            loading={loading}
          />
          <MetricCard
            label="Critical findings"
            value={scans.length > 0 ? critical : null}
            description="Critical findings in the returned history"
            icon={ShieldAlert}
            loading={loading}
          />
          <MetricCard
            label="Latest risk score"
            value={riskScore === null ? "N/A" : `${riskScore}/100`}
            description="Shown only when your API provides a score"
            icon={Activity}
            loading={loading}
          />
        </section>

        {/* Analysis panels */}
        <section className="mt-6 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-[#080808] p-5 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Finding distribution
                </p>
                <h2 className="mt-2 text-xl font-semibold">
                  Severity breakdown
                </h2>
              </div>
              <ShieldCheck className="text-zinc-400" size={21} />
            </div>

            {scans.length === 0 && !loading ? (
              <div className="mt-8 rounded-xl border border-dashed border-white/10 p-6 text-center">
                <Bug className="mx-auto text-zinc-600" size={25} />
                <p className="mt-3 text-sm text-zinc-300">
                  No scan findings available
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Run and save a scan to populate this section.
                </p>
              </div>
            ) : (
              <>
                <div className="mt-8 space-y-6">
                  <SeverityBar
                    name="Critical"
                    count={critical}
                    total={findingsFromHistory}
                  />
                  <SeverityBar
                    name="High"
                    count={high}
                    total={findingsFromHistory}
                  />
                  <SeverityBar
                    name="Medium"
                    count={medium}
                    total={findingsFromHistory}
                  />
                  <SeverityBar
                    name="Low"
                    count={low}
                    total={findingsFromHistory}
                  />
                </div>

                <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-5 text-zinc-500">
                  Breakdown is calculated from the finding severity values in
                  the scan history returned by your API. Info and Manual
                  Review findings are not counted as confirmed severity issues.
                </p>
              </>
            )}
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#080808] p-5 sm:p-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Latest activity
                </p>
                <h2 className="mt-2 text-xl font-semibold">Scan intelligence</h2>
              </div>
              <Terminal className="text-zinc-400" size={21} />
            </div>

            <div className="mt-7 space-y-0">
              {scans.slice(0, 4).map((scan, index) => (
                <div
                  key={getScanId(scan) || `${getTarget(scan)}-${index}`}
                  className="flex gap-3 border-b border-white/[0.07] py-4 last:border-0"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Globe size={16} className="text-zinc-300" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-zinc-200">
                      {getTarget(scan)}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      {formatDate(getScanDate(scan))}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <StatusBadge status={getScanStatus(scan)} />
                  </div>
                </div>
              ))}

              {scans.length === 0 && !loading && (
                <div className="py-10 text-center">
                  <Clock3 className="mx-auto text-zinc-600" size={24} />
                  <p className="mt-3 text-sm text-zinc-400">
                    No saved scans yet
                  </p>
                </div>
              )}

              {loading && (
                <div className="flex items-center justify-center gap-2 py-10 text-sm text-zinc-500">
                  <LoaderCircle size={17} className="animate-spin" />
                  Loading scan history...
                </div>
              )}
            </div>

            <Link
              href="/report"
              className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white"
            >
              View reports <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        {/* Scan history table */}
        <section className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
          <div className="flex flex-col justify-between gap-3 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:px-7">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Activity log
              </p>
              <h2 className="mt-2 text-xl font-semibold">Recent scans</h2>
            </div>

            <span className="text-xs text-zinc-500">
              {scans.length} records returned
            </span>
          </div>

          {scans.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/[0.07] text-xs text-zinc-500">
                    <th className="px-6 py-4 font-medium">Target</th>
                    <th className="px-6 py-4 font-medium">Scan date</th>
                    <th className="px-6 py-4 font-medium">Findings</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Report</th>
                  </tr>
                </thead>

                <tbody>
                  {scans.slice(0, 10).map((scan, index) => {
                    const findings = getFindings(scan);
                    const id = getScanId(scan);

                    return (
                      <tr
                        key={id || `${getTarget(scan)}-${index}`}
                        className="border-b border-white/[0.05] transition hover:bg-white/[0.025] last:border-0"
                      >
                        <td className="max-w-[320px] truncate px-6 py-5 font-medium text-zinc-200">
                          {getTarget(scan)}
                        </td>
                        <td className="whitespace-nowrap px-6 py-5 text-zinc-400">
                          {formatDate(getScanDate(scan))}
                        </td>
                        <td className="px-6 py-5 text-zinc-300">
                          {getNumber(scan, ["totalFindings", "totalVulnerabilities"]) ??
                            (findings.length || "—")}
                        </td>
                        <td className="px-6 py-5">
                          <StatusBadge status={getScanStatus(scan)} />
                        </td>
                        <td className="px-6 py-5">
                          {id ? (
                            <Link
                              href={`/report/${encodeURIComponent(id)}`}
                              className="inline-flex items-center gap-1.5 text-zinc-400 transition hover:text-white"
                            >
                              Open <ExternalLink size={13} />
                            </Link>
                          ) : (
                            <span className="text-zinc-600">Unavailable</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="px-6 py-12 text-center">
              <ScanSearch className="mx-auto text-zinc-600" size={30} />
              <h3 className="mt-4 font-medium text-zinc-200">
                Your scan history will appear here
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
                Start a scan and save its results. The dashboard will display
                records returned by your backend.
              </p>
              <Link
                href="/scan"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Start your first scan <ArrowRight size={15} />
              </Link>
            </div>
          )}
        </section>

        {/* Footer note */}
        <footer className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>vulNexa Security Operations Center</p>
          <p className="flex items-center gap-2">
            <ShieldCheck size={13} />
            Only assess systems you own or are authorized to test.
          </p>
        </footer>
      </div>
    </main>
  );
}
