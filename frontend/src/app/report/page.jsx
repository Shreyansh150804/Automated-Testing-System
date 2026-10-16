"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useSearchParams } from "next/navigation";
import { getScanById } from "../../services/api";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  Download,
  FileText,
  FileJson,
  Trash2,
  ArrowLeft,
  CheckCircle,
  Info,
  ExternalLink,
  Search,
  Filter,
  ArrowUpDown,
  RefreshCw,
  X,
  AlertCircle,
  Sparkles,
  LayoutGrid,
  List,
} from "lucide-react";

function ReportContent() {
  const searchParams = useSearchParams();
  const [scanData, setScanData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeverity, setSelectedSeverity] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sortBy, setSortBy] = useState("severity"); // 'severity' | 'category' | 'status'
  const [viewMode, setViewMode] = useState("table"); // 'table' | 'cards'
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Sample data fallback for demonstration if no scan has been run yet
  const sampleData = {
    target: "https://example.com",
    scannedAt: new Date().toISOString(),
    scoreDetails: {
      score: 92,
      label: "Excellent",
    },
    findings: [
      {
        owasp: "A05:2021 - Security Misconfiguration",
        description: "Missing Content-Security-Policy header",
        severity: "High",
        status: "Fail",
        recommendation: "Configure the Content-Security-Policy HTTP header.",
      },
      {
        owasp: "A05:2021 - Security Misconfiguration",
        description: "Missing Strict-Transport-Security header",
        severity: "Medium",
        status: "Fail",
        recommendation: "Configure the Strict-Transport-Security HTTP header.",
      },
      {
        owasp: "A02:2021 - Cryptographic Failures",
        description: "The target is using HTTPS with modern TLS cipher suites.",
        severity: "Info",
        status: "Pass",
        recommendation: "Continue using HTTPS and modern TLS configuration.",
      },
      {
        owasp: "A03:2021 - Injection",
        description:
          "Injection vulnerabilities require application-level input analysis.",
        severity: "Info",
        status: "Manual Review",
        recommendation:
          "Use parameterized queries, input validation and safe APIs.",
      },
    ],
  };

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      const scanId = searchParams?.get("id");
      if (scanId) {
        try {
          const scan = await getScanById(scanId);
          if (isMounted && scan) {
            setScanData(scan);
            try {
              localStorage.setItem("last_scan_result", JSON.stringify(scan));
            } catch (storageErr) {
              // ignore
            }
            setLoading(false);
            return;
          }
        } catch (fetchErr) {
          console.warn("Failed to fetch scan by ID, falling back to local cache:", fetchErr);
        }
      }

      try {
        const saved = localStorage.getItem("last_scan_result");
        if (saved && isMounted) {
          const parsed = JSON.parse(saved);
          setScanData(parsed);
        } else if (isMounted) {
          setScanData(null);
        }
      } catch (err) {
        console.error("Could not load cached scan:", err);
        if (isMounted) setError("Failed to parse report data from storage.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, [searchParams]);

  const handleLoadSample = () => {
    setScanData(sampleData);
  };

  const handleDeleteReport = () => {
    try {
      localStorage.removeItem("last_scan_result");
      setScanData(null);
      setShowDeleteModal(false);
    } catch (err) {
      console.error("Error clearing report:", err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportJSON = () => {
    const dataToExport = scanData || sampleData;
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vulnexa-audit-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Active findings and stats
  const activeData = scanData;
  const target = activeData?.target || "No Target Audited";
  const scanDate = activeData?.scannedAt
    ? new Date(activeData.scannedAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "Not available";

  const score = activeData?.scoreDetails?.score ?? 0;
  const scoreLabel =
    activeData?.scoreDetails?.label ||
    (score >= 85
      ? "Excellent"
      : score >= 70
      ? "Fair Protection"
      : score >= 50
      ? "Moderate Risk"
      : "Critical Risk");

  const findings = activeData?.findings || [];
  const failedItems = findings.filter((f) => f.status === "Fail");
  const criticalCount = findings.filter(
    (f) => (f.severity || "").toLowerCase() === "critical" && f.status === "Fail"
  ).length;
  const highCount = findings.filter(
    (f) => (f.severity || "").toLowerCase() === "high" && f.status === "Fail"
  ).length;
  const mediumCount = findings.filter(
    (f) => (f.severity || "").toLowerCase() === "medium" && f.status === "Fail"
  ).length;
  const lowCount = findings.filter(
    (f) => (f.severity || "").toLowerCase() === "low" && f.status === "Fail"
  ).length;
  const passCount = findings.filter((f) => f.status === "Pass").length;

  // Filter and search logic
  const severityWeights = { critical: 4, high: 3, medium: 2, low: 1, info: 0 };

  const filteredFindings = findings
    .filter((f) => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesCategory = (f.owasp || "").toLowerCase().includes(query);
        const matchesDesc = (f.description || "").toLowerCase().includes(query);
        const matchesRec = (f.recommendation || "").toLowerCase().includes(query);
        if (!matchesCategory && !matchesDesc && !matchesRec) return false;
      }

      if (selectedSeverity !== "all") {
        if ((f.severity || "").toLowerCase() !== selectedSeverity.toLowerCase()) {
          return false;
        }
      }

      if (selectedStatus !== "all") {
        if (selectedStatus === "fail" && f.status !== "Fail") return false;
        if (selectedStatus === "pass" && f.status !== "Pass") return false;
        if (selectedStatus === "manual" && f.status !== "Manual Review") return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === "severity") {
        const weightA = severityWeights[(a.severity || "").toLowerCase()] ?? -1;
        const weightB = severityWeights[(b.severity || "").toLowerCase()] ?? -1;
        return weightB - weightA;
      }
      if (sortBy === "category") {
        return (a.owasp || "").localeCompare(b.owasp || "");
      }
      if (sortBy === "status") {
        return (a.status || "").localeCompare(b.status || "");
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden relative print:bg-white print:text-black">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden print:hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-white/[0.03] blur-[180px] rounded-full" />
      </div>

      {/* Unified Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative z-10 print:pt-4 print:pb-4 print:px-0">
        {/* Navigation Breadcrumbs & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 print:hidden">
          <Link
            href="/scan"
            className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06]"
          >
            <ArrowLeft size={13} />
            <span>Back to Scanner</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            {activeData && (
              <>
                <button
                  onClick={handlePrint}
                  className="px-3.5 py-1.5 border border-white/10 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition flex items-center gap-2 cursor-pointer"
                  title="Print or export as PDF"
                >
                  <Download size={13} />
                  <span>Export PDF</span>
                </button>
                <button
                  onClick={handleExportJSON}
                  className="px-3.5 py-1.5 border border-white/10 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition flex items-center gap-2 cursor-pointer hidden md:flex"
                  title="Export raw JSON"
                >
                  <FileJson size={13} />
                  <span>JSON</span>
                </button>
                <button
                  onClick={() => setShowDeleteModal(true)}
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-red-400 px-3 py-1.5 rounded-xl border border-transparent hover:border-red-500/20 hover:bg-red-500/10 transition cursor-pointer"
                  title="Delete current report from cache"
                >
                  <Trash2 size={13} />
                  <span>Delete</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs text-zinc-400 font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>Security Reports & Audits</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight print:text-black">
            Security Reports
          </h1>
          <p className="mt-4 text-zinc-400 text-sm md:text-base max-w-2xl print:text-zinc-600 leading-relaxed">
            Review detailed findings, risk evaluations, and actionable engineering
            remediation roadmaps from your previous automated OWASP vulnerability
            scans.
          </p>
        </motion.div>

        {/* Error Banner */}
        {error && (
          <div className="mb-8 p-4 rounded-2xl bg-white/[0.02] border border-white/15 text-xs text-zinc-300 flex items-start gap-3">
            <AlertCircle size={16} className="shrink-0 text-zinc-400 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-white">Report Notice</p>
              <p className="text-zinc-400 mt-0.5">{error}</p>
            </div>
            <button
              onClick={() => setError(null)}
              className="text-zinc-500 hover:text-white"
            >
              <X size={14} />
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-3xl p-16 text-center">
            <RefreshCw className="animate-spin text-zinc-400 mx-auto mb-4" size={24} />
            <p className="text-sm text-zinc-400 font-mono">
              Retrieving security audit report...
            </p>
          </div>
        )}

        {/* Empty State when no scan result is stored */}
        {!loading && !activeData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-3xl p-12 md:p-16 text-center max-w-2xl mx-auto"
          >
            <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white mx-auto mb-6">
              <Shield size={24} />
            </div>

            <h3 className="text-2xl font-semibold text-white mb-2">
              No Report Available
            </h3>
            <p className="text-sm text-zinc-400 mb-8 max-w-md mx-auto leading-relaxed">
              No vulnerability assessment is currently saved in your workspace.
              Launch a live scan on any target URL to produce an automated OWASP Top 10 report.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/scan"
                className="w-full sm:w-auto px-6 py-3 bg-white text-black hover:bg-zinc-200 rounded-xl font-medium text-sm transition"
              >
                Launch First Scan
              </Link>
              <button
                onClick={handleLoadSample}
                className="w-full sm:w-auto px-6 py-3 border border-white/10 hover:bg-white/5 text-zinc-300 hover:text-white rounded-xl font-medium text-sm transition cursor-pointer"
              >
                Load Sample Baseline
              </button>
            </div>
          </motion.div>
        )}

        {/* Report Active View */}
        {!loading && activeData && (
          <div className="space-y-8">
            {/* Target Specifications Overview Card */}
            <div className="border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 md:p-8 print:border-zinc-300 print:bg-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/10 print:border-zinc-200 gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                    Target Audit Scope
                  </span>
                  <div className="flex items-center gap-3 mt-1.5">
                    <a
                      href={target}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl md:text-2xl font-mono font-medium text-white hover:underline flex items-center gap-2 print:text-black"
                    >
                      {target}
                      <ExternalLink size={15} className="text-zinc-500 print:hidden" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-zinc-200 font-mono inline-flex items-center gap-2 print:border-zinc-300 print:text-black">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                    Audit Complete
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">
                    Audit Date
                  </span>
                  <span className="text-white font-mono text-sm mt-1 block print:text-black">
                    {scanDate}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">
                    Inspection Framework
                  </span>
                  <span className="text-white font-mono text-sm mt-1 block print:text-black">
                    OWASP Top 10 (2021)
                  </span>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">
                    Total Checks Evaluated
                  </span>
                  <span className="text-white font-mono text-sm mt-1 block print:text-black">
                    {findings.length} Automated Tests
                  </span>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">
                    Overall Posture
                  </span>
                  <span className="text-white font-mono text-sm mt-1 block print:text-black">
                    {scoreLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Security Posture Rating Card */}
            <div className="border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 md:p-8 print:border-zinc-300 print:bg-white">
              <h2 className="text-lg font-medium text-white mb-6 print:text-black">
                Security Posture Rating
              </h2>

              <div className="flex flex-col md:flex-row items-center justify-around gap-8">
                {/* Circular Score Gauge */}
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="currentColor"
                      strokeWidth="7"
                      className="text-white/10 print:text-zinc-200"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="currentColor"
                      strokeWidth="7"
                      strokeDasharray={264}
                      strokeDashoffset={264 - (264 * score) / 100}
                      strokeLinecap="round"
                      fill="transparent"
                      className="text-white print:text-black transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-5xl font-light tracking-tight text-white print:text-black">
                      {score}
                    </span>
                    <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono mt-0.5">
                      {scoreLabel}
                    </span>
                  </div>
                </div>

                {/* Score Breakdown Note */}
                <div className="max-w-lg space-y-3 text-sm text-zinc-400 print:text-zinc-700">
                  <p className="font-medium text-white text-base print:text-black">
                    Executive Evaluation
                  </p>
                  <p className="leading-relaxed">
                    {score >= 85
                      ? "The target maintains a solid baseline defense with fundamental security headers, active TLS encryption, and standard server hardening."
                      : score >= 60
                      ? "Several important security headers or configurations are absent, leaving the application vulnerable to clickjacking, cross-site leakage, or downgrade threats."
                      : "Significant vulnerabilities and missing security controls were detected. Immediate remediation is strongly recommended."}
                  </p>
                  <p className="text-xs text-zinc-500 font-mono">
                    Scoring algorithm incorporates OWASP Top 10 weights for missing
                    security headers, weak cryptographic setups, and exposure risks.
                  </p>
                </div>
              </div>
            </div>

            {/* Summary Metric Counters (Monochrome 5-Column Grid) */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="border border-white/10 bg-white/[0.02] rounded-2xl p-5 print:border-zinc-300 print:bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                    Critical
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                </div>
                <p className="text-3xl font-light mt-2 text-white print:text-black">
                  {criticalCount}
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.02] rounded-2xl p-5 print:border-zinc-300 print:bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                    High
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
                </div>
                <p className="text-3xl font-light mt-2 text-white print:text-black">
                  {highCount}
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.02] rounded-2xl p-5 print:border-zinc-300 print:bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                    Medium
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                </div>
                <p className="text-3xl font-light mt-2 text-white print:text-black">
                  {mediumCount}
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.02] rounded-2xl p-5 print:border-zinc-300 print:bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                    Low
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                </div>
                <p className="text-3xl font-light mt-2 text-white print:text-black">
                  {lowCount}
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.02] rounded-2xl p-5 print:border-zinc-300 print:bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                    Passed
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <p className="text-3xl font-light mt-2 text-white print:text-black">
                  {passCount}
                </p>
              </div>
            </div>

            {/* Search, Filter & Controls Toolbar */}
            <div className="border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 print:hidden">
              <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
                {/* Search Field */}
                <div className="flex-1 relative">
                  <Search
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
                    size={16}
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search findings by category, issue description, or fix..."
                    className="w-full bg-black/60 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-zinc-500 outline-none focus:border-white/30 transition text-xs font-mono"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                {/* Filter Controls Row */}
                <div className="flex flex-wrap items-center gap-2.5">
                  {/* Status Filter */}
                  <div className="flex items-center gap-1 border border-white/10 rounded-xl p-1 bg-black/40">
                    {[
                      { id: "all", label: "All" },
                      { id: "fail", label: `Issues (${failedItems.length})` },
                      { id: "pass", label: `Passed (${passCount})` },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setSelectedStatus(tab.id)}
                        className={`px-3 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                          selectedStatus === tab.id
                            ? "bg-white text-black font-semibold shadow-sm"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Severity Filter Dropdown */}
                  <div className="relative">
                    <select
                      value={selectedSeverity}
                      onChange={(e) => setSelectedSeverity(e.target.value)}
                      className="appearance-none bg-black/40 border border-white/10 rounded-xl px-3.5 py-1.5 text-xs text-zinc-300 outline-none focus:border-white/30 transition cursor-pointer pr-8 font-mono"
                    >
                      <option value="all">Severity: All</option>
                      <option value="critical">Critical</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                      <option value="info">Info</option>
                    </select>
                    <Filter
                      size={12}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
                    />
                  </div>

                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-black/40 border border-white/10 rounded-xl px-3.5 py-1.5 text-xs text-zinc-300 outline-none focus:border-white/30 transition cursor-pointer pr-8 font-mono"
                    >
                      <option value="severity">Sort: Severity</option>
                      <option value="category">Sort: Category</option>
                      <option value="status">Sort: Status</option>
                    </select>
                    <ArrowUpDown
                      size={12}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
                    />
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex items-center border border-white/10 rounded-xl p-1 bg-black/40">
                    <button
                      onClick={() => setViewMode("table")}
                      className={`p-1.5 rounded-lg transition cursor-pointer ${
                        viewMode === "table"
                          ? "bg-white text-black"
                          : "text-zinc-400 hover:text-white"
                      }`}
                      title="Table View"
                    >
                      <List size={14} />
                    </button>
                    <button
                      onClick={() => setViewMode("cards")}
                      className={`p-1.5 rounded-lg transition cursor-pointer ${
                        viewMode === "cards"
                          ? "bg-white text-black"
                          : "text-zinc-400 hover:text-white"
                      }`}
                      title="Card View"
                    >
                      <LayoutGrid size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Findings Display (Table View) */}
            {viewMode === "table" && (
              <div className="border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 md:p-8 print:border-zinc-300 print:bg-white">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-medium text-white print:text-black">
                      Complete Findings Breakdown
                    </h2>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Granular inspection results categorized by OWASP classification
                    </p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    Showing {filteredFindings.length} of {findings.length} Findings
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-xs text-zinc-500 uppercase tracking-wider font-mono print:border-zinc-200">
                        <th className="pb-3 pr-4 font-normal">Category</th>
                        <th className="pb-3 pr-4 font-normal">Status</th>
                        <th className="pb-3 pr-4 font-normal">Severity</th>
                        <th className="pb-3 pr-4 font-normal">Description</th>
                        <th className="pb-3 font-normal">Recommendation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 print:divide-zinc-200">
                      {filteredFindings.map((item, index) => {
                        const isFail = item.status === "Fail";
                        const isPass = item.status === "Pass";

                        return (
                          <tr
                            key={index}
                            className="hover:bg-white/[0.02] transition-colors"
                          >
                            <td className="py-4 font-medium text-white pr-4 align-top print:text-black whitespace-nowrap">
                              {item.owasp}
                            </td>

                            <td className="py-4 pr-4 align-top whitespace-nowrap">
                              <span className="text-[11px] px-2.5 py-0.5 rounded-full font-mono font-medium inline-flex items-center gap-1.5 border border-white/10 bg-white/[0.03] text-zinc-200 print:border-zinc-300 print:text-black">
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    isFail
                                      ? "bg-red-400"
                                      : isPass
                                      ? "bg-emerald-400"
                                      : "bg-zinc-400"
                                  }`}
                                />
                                {item.status}
                              </span>
                            </td>

                            <td className="py-4 pr-4 align-top whitespace-nowrap">
                              <span className="text-[11px] px-2 py-0.5 rounded-full font-mono border border-white/10 bg-white/[0.02] text-zinc-400 print:border-zinc-300 print:text-zinc-700">
                                {item.severity}
                              </span>
                            </td>

                            <td className="py-4 text-xs text-zinc-300 pr-4 align-top max-w-xs leading-relaxed print:text-zinc-800">
                              {item.description}
                            </td>

                            <td className="py-4 text-xs text-zinc-300 font-mono align-top max-w-xs leading-relaxed print:text-zinc-800">
                              {item.recommendation}
                            </td>
                          </tr>
                        );
                      })}

                      {filteredFindings.length === 0 && (
                        <tr>
                          <td
                            colSpan={5}
                            className="text-center py-12 text-zinc-500 text-sm"
                          >
                            No findings match your search or filter criteria.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Findings Display (Card View) */}
            {viewMode === "cards" && (
              <div className="border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-medium text-white">
                      Findings Cards
                    </h2>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Card-based overview of evaluated security rules
                    </p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    Showing {filteredFindings.length} of {findings.length}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {filteredFindings.map((item, index) => {
                    const isFail = item.status === "Fail";
                    const isPass = item.status === "Pass";

                    return (
                      <div
                        key={index}
                        className="p-5 rounded-2xl border border-white/10 bg-black/60 hover:border-white/20 transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-sm font-medium text-white">
                              {item.owasp}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] px-2.5 py-0.5 rounded-full font-mono inline-flex items-center gap-1.5 border border-white/10 bg-white/[0.03] text-zinc-200">
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    isFail
                                      ? "bg-red-400"
                                      : isPass
                                      ? "bg-emerald-400"
                                      : "bg-zinc-400"
                                  }`}
                                />
                                {item.status}
                              </span>
                              <span className="text-[11px] px-2 py-0.5 rounded-full font-mono border border-white/10 bg-white/[0.02] text-zinc-400">
                                {item.severity}
                              </span>
                            </div>
                          </div>

                          <p className="text-xs text-zinc-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-white/5 font-mono text-xs text-zinc-300">
                          <span className="text-zinc-500 block text-[10px] uppercase tracking-wider mb-1">
                            Actionable Guidance
                          </span>
                          {item.recommendation}
                        </div>
                      </div>
                    );
                  })}

                  {filteredFindings.length === 0 && (
                    <div className="col-span-2 text-center py-12 text-zinc-500 text-sm">
                      No findings match your search or filter criteria.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Actionable Remediation Roadmap */}
            <div className="border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 md:p-8 mb-10 print:border-zinc-300 print:bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white print:border-zinc-300 print:text-black">
                  <Shield size={18} />
                </div>
                <div>
                  <h2 className="text-lg font-medium text-white print:text-black">
                    Recommended Mitigation Roadmap
                  </h2>
                  <p className="text-xs text-zinc-400">
                    Immediate engineering steps prioritized by OWASP severity
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {failedItems.length > 0 ? (
                  failedItems.map((fail, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-200 print:bg-white print:border-zinc-300"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0 print:bg-black" />
                        <p className="text-sm font-medium text-white leading-snug print:text-black">
                          {fail.description}
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-zinc-300 print:border-zinc-200 print:text-zinc-800">
                        <span className="text-zinc-500 block text-[10px] uppercase tracking-wider mb-1">
                          Action Required
                        </span>
                        {fail.recommendation}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-sm text-zinc-400 text-center">
                    All basic automated header tests passed. Maintain periodic
                    scans and schedule penetration testing for application-level logic.
                  </div>
                )}
              </div>
            </div>

            {/* Action Footer */}
            <div className="flex flex-wrap items-center justify-center gap-4 print:hidden pt-4">
              <button
                onClick={handlePrint}
                className="px-6 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 font-medium text-sm flex items-center gap-2 transition cursor-pointer shadow-sm active:scale-[0.99]"
              >
                <Download size={16} />
                <span>Export / Print PDF</span>
              </button>
              <button
                onClick={handleExportJSON}
                className="px-6 py-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-zinc-300 hover:text-white font-medium text-sm flex items-center gap-2 transition cursor-pointer"
              >
                <FileJson size={16} />
                <span>Download JSON Data</span>
              </button>
              <Link
                href="/scan"
                className="px-6 py-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-zinc-300 hover:text-white font-medium text-sm flex items-center gap-2 transition"
              >
                Run Another Scan
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md border border-white/15 bg-zinc-950 rounded-3xl p-6 shadow-2xl relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl border border-red-500/20 bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                  <Trash2 size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Delete Cached Report?
                  </h3>
                  <p className="text-xs text-zinc-400">
                    This will remove the current report from local memory.
                  </p>
                </div>
              </div>

              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                Are you sure you want to delete this scan report? To view these results
                again, you will need to re-run the scan on target URL.
              </p>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white border border-white/10 hover:bg-white/5 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteReport}
                  className="px-4 py-2 rounded-xl text-xs font-medium bg-white text-black hover:bg-zinc-200 transition cursor-pointer"
                >
                  Confirm Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ReportPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <ReportContent />
    </Suspense>
  );
}