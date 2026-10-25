"use client";



import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import Link from "next/link";
import Navbar from "../components/Navbar";

import { motion, AnimatePresence } from "framer-motion";

import {

  Globe,

  AlertTriangle,

  CheckCircle,

  ScanSearch,

  RefreshCw,

  Info,

  XCircle,

  ArrowRight,

  FileText,

  AlertCircle,

  Check,

  ChevronRight,

  Sparkles,

  Bookmark,

  LayoutDashboard,

  Lock,

  User,

} from "lucide-react";

import {

  scanTarget,

  checkBackendHealth,

  normalizeTargetUrl,

  saveScanResult,

  getCurrentUser,

  isAuthenticated,

} from "../../services/api";



export default function ScanPage() {

  const router = useRouter();

  const [url, setUrl] = useState("");

  const [scanning, setScanning] = useState(false);

  const [scanStage, setScanStage] = useState(0);

  const [results, setResults] = useState(null);

  const [error, setError] = useState(null);

  const [activeFilter, setActiveFilter] = useState("all");

  const [backendStatus, setBackendStatus] = useState("checking"); // 'online' | 'offline' | 'checking'

  const [user, setUser] = useState(null);



  // Save scan states

  const [isSaving, setIsSaving] = useState(false);

  const [saveSuccess, setSaveSuccess] = useState(false);

  const [saveMessage, setSaveMessage] = useState(null);

  const [saveError, setSaveError] = useState(null);

  const [showAuthModal, setShowAuthModal] = useState(false);



  // Check backend server status & current user on mount

  useEffect(() => {

    setUser(getCurrentUser());

    checkBackendHealth()

      .then((res) => {

        setBackendStatus(res.ok ? "online" : "offline");

      })

      .catch(() => setBackendStatus("offline"));

  }, []);



  // Pre-fill last scan from localStorage if available

  useEffect(() => {

    try {

      const cached = localStorage.getItem("last_scan_result");

      if (cached) {

        const parsed = JSON.parse(cached);

        if (parsed && parsed.target) {

          setUrl(parsed.target);

        }

      }

    } catch {

      // Ignore cache load failure

    }

  }, []);



  const startScan = async (e) => {

    if (e) e.preventDefault();

    if (!url.trim()) {

      setError("Please enter a valid website URL to scan.");

      return;

    }



    const targetUrl = normalizeTargetUrl(url);

    setUrl(targetUrl);

    setScanning(true);

    setError(null);

    setResults(null);

    setScanStage(0);

    setSaveSuccess(false);

    setSaveError(null);

    setSaveMessage(null);



    // Staged visual feedback while awaiting response

    const stageTimer1 = setTimeout(() => setScanStage(1), 800);

    const stageTimer2 = setTimeout(() => setScanStage(2), 1600);

    const stageTimer3 = setTimeout(() => setScanStage(3), 2400);



    try {

      const scanData = await scanTarget(targetUrl);

      setBackendStatus("online");



      // If user is authenticated, automatically persist scan record to database

      if (isAuthenticated()) {

        try {

          const savedRecord = await saveScanResult(scanData);

          setResults(savedRecord);

          setSaveSuccess(true);

          setSaveMessage("Scan automatically saved to your Dashboard.");

          // Cache to localStorage as well

          localStorage.setItem("last_scan_result", JSON.stringify(savedRecord));

        } catch (saveErr) {

          setResults(scanData);

          localStorage.setItem("last_scan_result", JSON.stringify(scanData));

        }

      } else {

        setResults(scanData);

        try {

          localStorage.setItem("last_scan_result", JSON.stringify(scanData));

        } catch {

          // ignore quota

        }

      }

    } catch (err) {

      setError(

        err.message ||

          "Failed to scan target. Please verify the URL and backend status."

      );

      if (err.message && err.message.includes("Cannot connect to backend")) {

        setBackendStatus("offline");

      }

    } finally {

      clearTimeout(stageTimer1);

      clearTimeout(stageTimer2);

      clearTimeout(stageTimer3);

      setScanning(false);

    }

  };



  const handleManualSave = async () => {

    if (!results) return;



    if (!isAuthenticated()) {

      setShowAuthModal(true);

      return;

    }



    if (saveSuccess) return;



    setIsSaving(true);

    setSaveError(null);



    try {

      const saved = await saveScanResult(results);

      setResults(saved);

      setSaveSuccess(true);

      setSaveMessage("Scan successfully saved to your Dashboard and Reports.");

      try {

        localStorage.setItem("last_scan_result", JSON.stringify(saved));

      } catch {

        // ignore

      }

    } catch (err) {

      setSaveError(err.message || "Failed to save scan to database.");

    } finally {

      setIsSaving(false);

    }

  };



  const handleQuickUrl = (sample) => {

    setUrl(sample);

    if (error) setError(null);

  };



  // Filter findings based on active tab

  const filteredFindings = results?.findings

    ? results.findings.filter((f) => {

        if (activeFilter === "fail") return f.status === "Fail";

        if (activeFilter === "pass") return f.status === "Pass";

        if (activeFilter === "manual") return f.status === "Manual Review";

        return true;

      })

    : [];



  const issuesList =

    results?.findings?.filter((f) => f.status === "Fail") || [];



  return (

    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden relative">

      {/* Background Ambient Glow */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-white/[0.03] blur-[180px] rounded-full" />

      </div>



      {/* Navbar matching website design system */}
      <Navbar />

      {/* Main Content Area */}
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative z-10">
        {/* Header Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs text-zinc-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Automated Security Engine</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-white/10 bg-white/[0.02]">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  backendStatus === "online"
                    ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
                    : backendStatus === "offline"
                    ? "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.6)]"
                    : "bg-zinc-400 animate-pulse"
                }`}
              />
              <span className="text-zinc-500">API:</span>
              <span className="text-zinc-300">
                {backendStatus === "online"
                  ? "Connected"
                  : backendStatus === "offline"
                  ? "Offline"
                  : "Checking..."}
              </span>
            </div>
          </div>



          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05]">

            Scan. Analyze. Protect.

          </h1>

          <p className="mt-5 text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">

            Conduct automated audits against OWASP Top 10 vulnerabilities.

            Inspect HTTP headers, TLS posture, configuration weaknesses, and

            persist results to your unified security dashboard.

          </p>

        </motion.div>



        {/* Backend offline warning banner */}

        {backendStatus === "offline" && (

          <motion.div

            initial={{ opacity: 0, y: -10 }}

            animate={{ opacity: 1, y: 0 }}

            className="max-w-3xl mx-auto mb-8 p-4 rounded-2xl bg-white/[0.02] border border-white/15 text-sm flex items-start gap-3 backdrop-blur-md"

          >

            <AlertCircle size={18} className="shrink-0 text-zinc-400 mt-0.5" />

            <div className="flex-1 text-xs text-zinc-300">

              <span className="font-medium text-white block mb-0.5">

                Backend Service Unreachable

              </span>

              Security analysis server is not responding on port 5000. Start the

              backend in a new terminal:

              <code className="inline-block mt-2 px-2.5 py-1 bg-black border border-white/10 rounded-md text-zinc-200 font-mono">

                npm run dev --prefix backend

              </code>

            </div>

          </motion.div>

        )}



        {/* Scanner Form Box */}

        <div className="max-w-3xl mx-auto border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl relative">

          <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />



          <form onSubmit={startScan}>

            <div className="flex flex-col sm:flex-row gap-3">

              <div className="flex-1 relative">

                <Globe

                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"

                  size={18}

                />

                <input

                  type="text"

                  value={url}

                  onChange={(e) => {

                    setUrl(e.target.value);

                    if (error) setError(null);

                  }}

                  placeholder="https://example.com"

                  className="w-full bg-black/60 border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-white placeholder-zinc-500 outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all font-mono text-sm"

                />

              </div>



              <button

                type="submit"

                disabled={scanning}

                className="bg-white text-black hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed px-7 py-3.5 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.99] shrink-0"

              >

                {scanning ? (

                  <>

                    <RefreshCw className="animate-spin" size={16} />

                    <span>Scanning...</span>

                  </>

                ) : (

                  <>

                    <ScanSearch size={16} />

                    <span>Start Scan</span>

                  </>

                )}

              </button>

            </div>



            {/* Quick URL Suggestions */}

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">

              <span className="text-zinc-500 font-mono text-[11px]">

                Quick targets:

              </span>

              {[

                "https://example.com",

                "https://owasp.org",

                "http\://testphp.vulnweb.com",

              ].map((sample) => (

                <button

                  key={sample}

                  type="button"

                  onClick={() => handleQuickUrl(sample)}

                  className="px-2.5 py-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] hover:text-white text-zinc-400 border border-white/10 transition font-mono text-[11px] cursor-pointer"

                >

                  {sample}

                </button>

              ))}

            </div>

          </form>



          {/* Error Message */} 

          <AnimatePresence>

            {error && (

              <motion.div

                initial={{ opacity: 0, height: 0 }}

                animate={{ opacity: 1, height: "auto" }}

                exit={{ opacity: 0, height: 0 }}

                className="mt-5 p-4 rounded-2xl bg-white/[0.02] border border-white/15 text-xs text-zinc-300 flex items-start gap-3"

              >

                <XCircle size={16} className="shrink-0 text-zinc-400 mt-0.5" />

                <div className="flex-1">

                  <p className="font-medium text-white">Scan Error</p>

                  <p className="text-zinc-400 mt-0.5 leading-relaxed">{error}</p>

                </div>

              </motion.div>

            )}

          </AnimatePresence>

        </div>



        {/* Scanning Progress State */}

        <AnimatePresence>

          {scanning && (

            <motion.div

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              exit={{ opacity: 0, y: -10 }}

              className="max-w-3xl mx-auto mt-8 border border-white/10 bg-white/[0.02] rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden"

            >

              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />



              <div className="flex items-center gap-4 mb-8">

                <div className="w-10 h-10 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center">

                  <RefreshCw className="animate-spin text-white" size={18} />

                </div>

                <div>

                  <h3 className="text-lg font-medium text-white">

                    Analyzing Security Posture...

                  </h3>

                  <p className="text-xs text-zinc-400 font-mono mt-0.5 truncate max-w-md">

                    Target: {url}

                  </p>

                </div>

              </div>



              <div className="space-y-3 font-mono text-xs">

                {[

                  "Connecting to target host & evaluating HTTP/TLS handshake",

                  "Analyzing HTTP Security Headers (CSP, HSTS, X-Frame-Options)",

                  "Evaluating OWASP Top 10 categories (Access Control, Cryptography, Injection)",

                  "Compiling vulnerability findings & generating remediation steps",

                ].map((stepText, idx) => {

                  const isDone = scanStage > idx;

                  const isCurrent = scanStage === idx;

                  return (

                    <div

                      key={idx}

                      className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${

                        isDone

                          ? "border-white/10 bg-white/[0.03] text-zinc-300"

                          : isCurrent

                          ? "border-white/20 bg-white/[0.05] text-white"

                          : "border-transparent text-zinc-600"

                      }`}

                    >

                      <div

                        className={`w-5 h-5 rounded-full flex items-center justify-center border text-[10px] ${

                          isDone

                            ? "border-white bg-white text-black font-semibold"

                            : isCurrent

                            ? "border-white/40 text-white animate-pulse"

                            : "border-zinc-800 text-zinc-700"

                        }`}

                      >

                        {isDone ? <Check size={10} strokeWidth={3} /> : idx + 1}

                      </div>

                      <span className="flex-1">{stepText}</span>

                      {isCurrent && (

                        <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">

                          Processing...

                        </span>

                      )}

                    </div>

                  );

                })}

              </div>

            </motion.div>

          )}

        </AnimatePresence>



        {/* Real Results from Backend */}

        <AnimatePresence>

          {results && !scanning && (

            <motion.div

              initial={{ opacity: 0, y: 25 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.6 }}

              className="mt-12 space-y-8"

            >

              {/* Save Success Banner */}

              {saveSuccess && (

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-emerald-500/20 text-xs text-zinc-300 flex items-center justify-between">

                  <div className="flex items-center gap-2.5">

                    <CheckCircle className="text-emerald-400 shrink-0" size={16} />

                    <span>

                      {saveMessage || "Scan successfully stored in persistent database."}

                    </span>

                  </div>

                  <Link

                    href="/dashboard"

                    className="text-xs text-zinc-400 hover:text-white underline font-mono"

                  >

                    View in Dashboard &rarr;

                  </Link>

                </div>

              )}



              {saveError && (

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-red-500/20 text-xs text-red-300 flex items-center gap-2.5">

                  <AlertCircle size={16} className="text-red-400 shrink-0" />

                  <span>{saveError}</span>

                </div>

              )}



              {/* Top Overview Card */}

              <div className="border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 md:p-8">

                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

                  {/* Left: Target and Status */}

                  <div className="flex-1 space-y-3">

                    <div className="flex items-center gap-2">

                      <span className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 font-mono">

                        Status {results.statusCode || 200} OK

                      </span>

                      <span className="text-xs text-zinc-500 font-mono">

                        {new Date(results.scannedAt).toLocaleTimeString()}

                      </span>

                      {results.id && (

                        <span className="text-xs text-zinc-500 font-mono hidden md:inline">

                          ID: {results.id.slice(0, 14)}...

                        </span>

                      )}

                    </div>



                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white truncate max-w-xl">

                      {results.target}

                    </h2>



                    <p className="text-sm text-zinc-400">

                      Automated audit completed with{" "}

                      <span className="text-white font-medium">

                        {results.totalFindings || results.findings?.length || 0}

                      </span>{" "}

                      checks performed.

                    </p>



                    <div className="pt-2 flex flex-wrap items-center gap-3">

                      {/* View Report Button */}

                      <button

                        onClick={() =>

                          router.push(

                            `/report?id=${results.id || results.scanId || ""}`

                          )

                        }

                        className="px-5 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 font-medium text-xs flex items-center gap-2 transition cursor-pointer"

                      >

                        <FileText size={15} />

                        <span>View Detailed Report</span>

                      </button>


                      {/* AI Assistant Button */}
                      <Link
                        href="/assistant"
                        className="px-5 py-2.5 rounded-xl border border-white/20 bg-white/[0.04] hover:bg-white hover:text-black text-white font-medium text-xs flex items-center gap-2 transition-all duration-200"
                      >
                        <Sparkles size={15} />
                        <span>Ask AI to Analyze</span>
                        <ArrowRight size={14} />
                      </Link>

                      {/* Functional Save Scan Button */}

                      {!saveSuccess ? (

                        <button

                          onClick={handleManualSave}

                          disabled={isSaving}

                          className="px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-white text-xs font-medium flex items-center gap-2 transition cursor-pointer disabled:opacity-50"

                        >

                          {isSaving ? (

                            <>

                              <RefreshCw className="animate-spin" size={14} />

                              <span>Saving to DB...</span>

                            </>

                          ) : (

                            <>

                              <Bookmark size={14} />

                              <span>Save Scan</span>

                            </>

                          )}

                        </button>

                      ) : (

                        <div className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 text-xs font-mono flex items-center gap-1.5">

                          <Check size={14} className="text-emerald-400" />

                          <span>Saved to Account</span>

                        </div>

                      )}



                      {/* Dashboard Link */}

                      <Link

                        href="/dashboard"

                        className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-zinc-300 hover:text-white text-xs transition flex items-center gap-2"

                      >

                        <LayoutDashboard size={14} />

                        <span>Dashboard</span>

                      </Link>



                      {/* New Scan */}

                      <button

                        onClick={() => {

                          setResults(null);

                          setUrl("");

                          setSaveSuccess(false);

                        }}

                        className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-zinc-300 hover:text-white text-xs transition cursor-pointer"

                      >

                        New Scan

                      </button>

                    </div>

                  </div>



                  {/* Right: Security Score Circle */}

                  <div className="flex items-center gap-6">

                    <div className="relative w-36 h-36 flex items-center justify-center">

                      <svg

                        className="w-full h-full -rotate-90"

                        viewBox="0 0 100 100"

                      >

                        {/* Background track */}

                        <circle

                          cx="50"

                          cy="50"

                          r="42"

                          stroke="currentColor"

                          strokeWidth="7"

                          className="text-white/10"

                          fill="transparent"

                        />

                        {/* Progress ring */}

                        <circle

                          cx="50"

                          cy="50"

                          r="42"

                          stroke="currentColor"

                          strokeWidth="7"

                          strokeDasharray={264}

                          strokeDashoffset={

                            264 -

                            (264 * (results.scoreDetails?.score ?? 100)) / 100

                          }

                          strokeLinecap="round"

                          fill="transparent"

                          className="text-white transition-all duration-1000 ease-out"

                        />

                      </svg>

                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

                        <span className="text-4xl font-light tracking-tight text-white">

                          {results.scoreDetails?.score ?? 100}

                        </span>

                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">

                          / 100

                        </span>

                      </div>

                    </div>



                    <div className="space-y-1">

                      <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono">

                        Security Rating

                      </div>

                      <div className="text-xl font-medium text-white">

                        {results.scoreDetails?.label || "Evaluated"}

                      </div>

                      <div className="text-xs text-zinc-400 max-w-[150px] leading-relaxed">

                        {results.summary?.failed > 0

                          ? `${results.summary.failed} security issue(s) detected`

                          : "Baseline security intact"}

                      </div>

                    </div>

                  </div>

                </div>



                {/* Counters row */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">

                  <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">

                    <span className="text-[11px] text-zinc-500 font-mono uppercase tracking-wider block">

                      Total Checks

                    </span>

                    <p className="text-3xl font-light mt-2 text-white">

                      {results.summary?.total}

                    </p>

                  </div>

                  <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">

                    <span className="text-[11px] text-zinc-500 font-mono uppercase tracking-wider block">

                      Passed

                    </span>

                    <p className="text-3xl font-light mt-2 text-white">

                      {results.summary?.passed}

                    </p>

                  </div>

                  <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">

                    <span className="text-[11px] text-zinc-500 font-mono uppercase tracking-wider block">

                      Security Issues

                    </span>

                    <p className="text-3xl font-light mt-2 text-white">

                      {results.summary?.failed}

                    </p>

                  </div>

                  <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">

                    <span className="text-[11px] text-zinc-500 font-mono uppercase tracking-wider block">

                      Manual Review

                    </span>

                    <p className="text-3xl font-light mt-2 text-white">

                      {results.summary?.manual}

                    </p>

                  </div>

                </div>

              </div>



              {/* Actionable Recommendations (if issues found) */}

              {issuesList.length > 0 && (

                <div className="border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 md:p-8">

                  <div className="flex items-center gap-3 mb-6">

                    <div className="w-10 h-10 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white">

                      <AlertTriangle size={18} />

                    </div>

                    <div>

                      <h3 className="text-lg font-medium text-white">

                        Actionable Remediation Checklist

                      </h3>

                      <p className="text-xs text-zinc-400">

                        Top priority fixes identified by automated inspection

                      </p>

                    </div>

                  </div>



                  <div className="grid md:grid-cols-2 gap-4">

                    {issuesList.map((item, idx) => (

                      <div

                        key={idx}

                        className="p-5 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-200"

                      >

                        <div className="flex items-start gap-3 mb-3">

                          <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />

                          <p className="text-sm font-medium text-white leading-snug">

                            {item.description}

                          </p>

                        </div>

                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-zinc-300">

                          <span className="text-zinc-500 block text-[10px] uppercase tracking-wider mb-1">

                            Recommended Fix

                          </span>

                          {item.recommendation}

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              )}



              {/* Detailed Findings List */}

              <div className="border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 md:p-8">

                {/* Section header + filters */}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">

                  <div>

                    <h3 className="text-lg font-medium text-white">

                      OWASP Findings Details

                    </h3>

                    <p className="text-xs text-zinc-400">

                      Individual category evaluations reported from security

                      engine

                    </p>

                  </div>



                  {/* Filter Pills */}

                  <div className="flex flex-wrap items-center gap-2">

                    {[

                      {

                        id: "all",

                        label: `All (${results.summary?.total || 0})`,

                      },

                      {

                        id: "fail",

                        label: `Issues (${results.summary?.failed || 0})`,

                      },

                      {

                        id: "pass",

                        label: `Passed (${results.summary?.passed || 0})`,

                      },

                      {

                        id: "manual",

                        label: `Review (${results.summary?.manual || 0})`,

                      },

                    ].map((tab) => (

                      <button

                        key={tab.id}

                        onClick={() => setActiveFilter(tab.id)}

                        className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer ${

                          activeFilter === tab.id

                            ? "bg-white text-black font-semibold shadow-sm"

                            : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-white/10"

                        }`}

                      >

                        {tab.label}

                      </button>

                    ))}

                  </div>

                </div>



                {/* Findings Cards Grid */}

                <div className="grid gap-3">

                  {filteredFindings.map((finding, idx) => {

                    const isFail = finding.status === "Fail";

                    const isPass = finding.status === "Pass";



                    return (

                      <motion.div

                        key={idx}

                        layout

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-200"

                      >

                        <div className="space-y-2.5">

                          {/* Badges row */}

                          <div className="flex flex-wrap items-center gap-2">

                            <span className="text-sm font-medium text-white">

                              {finding.owasp}

                            </span>



                            {/* Status Badge */}

                            <span className="text-[11px] px-2.5 py-0.5 rounded-full font-mono inline-flex items-center gap-1.5 border border-white/10 bg-white/[0.04] text-zinc-200">

                              <span

                                className={`w-1.5 h-1.5 rounded-full ${

                                  isFail

                                    ? "bg-red-400"

                                    : isPass

                                    ? "bg-emerald-400"

                                    : "bg-zinc-400"

                                }`}

                              />

                              {finding.status}

                            </span>



                            {/* Severity Badge */}

                            <span className="text-[11px] px-2 py-0.5 rounded-full font-mono border border-white/10 bg-white/[0.02] text-zinc-400">

                              {finding.severity}

                            </span>

                          </div>



                          {/* Description */}

                          <p className="text-xs text-zinc-300 leading-relaxed">

                            {finding.description}

                          </p>



                          {/* Recommendation */}

                          <div className="pt-2 border-t border-white/5 flex items-start gap-2 font-mono text-xs text-zinc-400">

                            <span className="text-zinc-500">Fix:</span>

                            <span className="text-zinc-300">

                              {finding.recommendation}

                            </span>

                          </div>

                        </div>

                      </motion.div>

                    );

                  })}



                  {filteredFindings.length === 0 && (

                    <div className="text-center py-12 text-zinc-500 text-sm">

                      No findings match the selected filter.

                    </div>

                  )}

                </div>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </main>



      {/* Auth Prompt Modal for Guests */}

      <AnimatePresence>

        {showAuthModal && (

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">

            <motion.div

              initial={{ opacity: 0, scale: 0.95 }}

              animate={{ opacity: 1, scale: 1 }}

              exit={{ opacity: 0, scale: 0.95 }}

              className="w-full max-w-md border border-white/15 bg-zinc-950 rounded-3xl p-6 shadow-2xl relative"

            >

              <div className="flex items-center gap-3 mb-4">

                <div className="w-10 h-10 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white">

                  <Lock size={18} />

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-white">

                    Save Scan to Account

                  </h3>

                  <p className="text-xs text-zinc-400">

                    Sign in to keep your scan results permanently

                  </p>

                </div>

              </div>



              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">

                You are currently testing as a guest. To save this scan to your

                dashboard, track historical risk trends, and export enterprise

                reports, please sign in or create a free account.

              </p>



              <div className="grid grid-cols-2 gap-3">

                <Link

                  href="/Login"

                  className="py-2.5 text-center rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-xs font-medium text-white transition"

                >

                  Log In

                </Link>

                <Link

                  href="/Signup"

                  className="py-2.5 text-center rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-medium transition"

                >

                  Create Account

                </Link>

              </div>



              <div className="mt-4 text-center">

                <button

                  onClick={() => setShowAuthModal(false)}

                  className="text-xs text-zinc-500 hover:text-white"

                >

                  Continue without saving

                </button>

              </div>

            </motion.div>

          </div>

        )}

      </AnimatePresence>

    </div>

  );

}