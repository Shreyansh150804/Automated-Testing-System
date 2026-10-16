"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import {
  Shield,
  ShieldCheck,
  ScanSearch,
  Globe,
  CheckCircle2,
  Sparkles,
  LayoutDashboard,
  FileText,
  Lock,
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
  Layers,
  Bot,
  Zap,
  Terminal,
  Activity,
} from "lucide-react";

export default function Home() {
  // Handle direct hash navigation on initial page load
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar />

      {/* ========================================================= */}
      {/* 1. HERO SECTION (Preserved branding, visual & Start Scan) */}
      {/* ========================================================= */}
      <section className="pt-36 pb-24 min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.03] blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-[1.4fr_0.8fr_0.8fr] items-center gap-16 lg:gap-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-20"
            >
              <span className="text-zinc-500 text-xs sm:text-sm uppercase tracking-[0.25em] font-mono">
                AI Security Platform
              </span>

              <h1 className="mt-6 text-6xl sm:text-7xl md:text-8xl font-semibold leading-[0.92] tracking-tight">
                Detect.
                <br />
                Analyze.
                <br />
                Protect.
              </h1>

              <p className="mt-8 max-w-xl text-zinc-400 text-base sm:text-lg leading-relaxed">
                vulNexa continuously scans websites for OWASP Top 10
                vulnerabilities, generates security reports, and helps teams
                identify risks before attackers do.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/scan"
                  className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg text-sm sm:text-base inline-flex items-center gap-2"
                >
                  <span>Start Scan</span>
                  <ArrowRight size={17} />
                </Link>
                <a
                  href="#how-it-works"
                  className="px-6 py-4 border border-white/10 rounded-xl hover:bg-white/5 transition duration-200 text-zinc-300 hover:text-white text-sm sm:text-base"
                >
                  How It Works
                </a>
              </div>
            </motion.div>

            {/* Triangle Animation */}
            <div className="flex justify-center relative py-8 lg:py-0">
              <div className="absolute -inset-20 bg-white/10 blur-[120px] rounded-full" />

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[240px] h-[240px] sm:w-[260px] sm:h-[260px] border border-white/10 bg-gradient-to-b from-white/10 to-transparent shadow-2xl"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              />
            </div>

            {/* Right Highlights */}
            <div className="space-y-7 text-zinc-400">
              <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                <h3 className="text-white text-lg font-medium flex items-center gap-2">
                  <Shield size={18} className="text-zinc-300" />
                  OWASP Top 10
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Automated vulnerability detection covering key web security risks.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                <h3 className="text-white text-lg font-medium flex items-center gap-2">
                  <Sparkles size={18} className="text-zinc-300" />
                  AI Security Assistant
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Understand vulnerabilities with actionable code and server fixes.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                <h3 className="text-white text-lg font-medium flex items-center gap-2">
                  <FileText size={18} className="text-zinc-300" />
                  Enterprise Reports
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Professional security reports for engineering teams and stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. FEATURES SECTION (Automated Scanner, AI, Dashboard, Reports, OWASP) */}
      {/* ========================================================= */}
      <section
        id="features"
        className="scroll-mt-20 py-28 md:py-36 border-t border-white/10 bg-[#040404] relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <span className="text-zinc-500 uppercase tracking-[0.25em] text-xs font-mono">
              Core Capabilities
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08]">
              Engineered for modern cybersecurity.
            </h2>
            <p className="mt-5 text-zinc-400 text-base sm:text-lg leading-relaxed">
              Explore vulNexa's five core modules designed to audit, interpret,
              and resolve web vulnerabilities with precision.
            </p>
          </div>

          {/* Feature Grid: 5 Premium Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Automated Website Vulnerability Scanner */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#09090b] p-6 transition-all duration-300 hover:border-white/30 hover:bg-[#0e0e12]"
            >
              <div>
                {/* Screenshot preview */}
                <div className="rounded-2xl border border-white/10 bg-black overflow-hidden aspect-[16/10] relative mb-6">
                  <Image
                    src="/dashboard-1.png"
                    alt="Automated Website Vulnerability Scanner interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono tracking-wider text-zinc-300 uppercase">
                    Scanner
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold text-white tracking-tight">
                  Automated Website Vulnerability Scanner
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Perform comprehensive web security audits. Checks HTTP security
                  headers, SSL/TLS configurations, cookie flags, and injection vectors.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/scan"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 group-hover:text-white transition"
                >
                  <span>Launch Scanner</span>
                  <ArrowUpRight size={14} />
                </Link>
                <span className="text-[11px] font-mono text-zinc-600">01</span>
              </div>
            </motion.div>

            {/* Card 2: AI Security Assistant */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#09090b] p-6 transition-all duration-300 hover:border-white/30 hover:bg-[#0e0e12]"
            >
              <div>
                <div className="rounded-2xl border border-white/10 bg-black overflow-hidden aspect-[16/10] relative mb-6">
                  <Image
                    src="/images/preview-assistant.png"
                    alt="vulNexa AI Security Assistant"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono tracking-wider text-zinc-300 uppercase">
                    AI Assistant
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold text-white tracking-tight">
                  AI Security Assistant
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Understand security findings instantly. The assistant explains
                  risks, answers vulnerability questions, and suggests concrete fixes.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/assistant"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 group-hover:text-white transition"
                >
                  <span>Open AI Assistant</span>
                  <ArrowUpRight size={14} />
                </Link>
                <span className="text-[11px] font-mono text-zinc-600">02</span>
              </div>
            </motion.div>

            {/* Card 3: Security Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#09090b] p-6 transition-all duration-300 hover:border-white/30 hover:bg-[#0e0e12]"
            >
              <div>
                <div className="rounded-2xl border border-white/10 bg-black overflow-hidden aspect-[16/10] relative mb-6">
                  <Image
                    src="/images/preview-dashboard.png"
                    alt="vulNexa Security Dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono tracking-wider text-zinc-300 uppercase">
                    Dashboard
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold text-white tracking-tight">
                  Security Dashboard
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Monitor scan activity, overall risk score, severity distributions,
                  and recent scan history from one unified operational interface.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 group-hover:text-white transition"
                >
                  <span>View Dashboard</span>
                  <ArrowUpRight size={14} />
                </Link>
                <span className="text-[11px] font-mono text-zinc-600">03</span>
              </div>
            </motion.div>

            {/* Card 4: Detailed Scan Reports */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#09090b] p-6 transition-all duration-300 hover:border-white/30 hover:bg-[#0e0e12]"
            >
              <div>
                <div className="rounded-2xl border border-white/10 bg-black overflow-hidden aspect-[16/10] relative mb-6">
                  <Image
                    src="/images/preview-reports.png"
                    alt="vulNexa Detailed Scan Reports"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono tracking-wider text-zinc-300 uppercase">
                    Audit Reports
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold text-white tracking-tight">
                  Detailed Scan Reports
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Generate structured audit reports with executive posture grades,
                  vulnerability breakdown, and one-click PDF & JSON exports.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/report"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 group-hover:text-white transition"
                >
                  <span>Access Reports</span>
                  <ArrowUpRight size={14} />
                </Link>
                <span className="text-[11px] font-mono text-zinc-600">04</span>
              </div>
            </motion.div>

            {/* Card 5: OWASP Top 10 Threat Detection (Span 2 columns on lg screens) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#09090b] p-6 md:col-span-2 lg:col-span-2 transition-all duration-300 hover:border-white/30 hover:bg-[#0e0e12]"
            >
              <div>
                {/* Visual OWASP grid badge showcase */}
                <div className="rounded-2xl border border-white/10 bg-[#060608] p-5 mb-6">
                  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={16} className="text-zinc-300" />
                      <span className="text-xs font-mono text-zinc-300">
                        OWASP Top 10 Coverage Engine
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/10 text-zinc-400">
                      Standard: 2021
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      { code: "A01", label: "Broken Access Control" },
                      { code: "A02", label: "Cryptographic Failures" },
                      { code: "A03", label: "Injection" },
                      { code: "A04", label: "Insecure Design" },
                      { code: "A05", label: "Security Misconfig" },
                      { code: "A06", label: "Vulnerable Components" },
                    ].map((item) => (
                      <div
                        key={item.code}
                        className="px-3 py-2 rounded-xl border border-white/5 bg-white/[0.02] flex items-center gap-2"
                      >
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white font-semibold">
                          {item.code}
                        </span>
                        <span className="text-xs text-zinc-400 truncate">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono tracking-wider text-zinc-300 uppercase">
                    Security Benchmark
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold text-white tracking-tight">
                  OWASP Top 10 Threat Detection
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed max-w-2xl">
                  Benchmark your web application against global security standards.
                  Detect missing security headers, insecure transports, and
                  misconfigurations recognized by the Open Web Application Security Project.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/owasp"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 group-hover:text-white transition"
                >
                  <span>Explore Threat Library</span>
                  <ArrowUpRight size={14} />
                </Link>
                <span className="text-[11px] font-mono text-zinc-600">05</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. HOW IT WORKS SECTION (Simple 3-step workflow)          */}
      {/* ========================================================= */}
      <section
        id="how-it-works"
        className="scroll-mt-20 py-28 md:py-36 border-t border-white/10 bg-black relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <span className="text-zinc-500 uppercase tracking-[0.25em] text-xs font-mono">
              Workflow
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08]">
              How vulNexa works.
            </h2>
            <p className="mt-5 text-zinc-400 text-base sm:text-lg leading-relaxed">
              Three simple steps from entering your target URL to reviewing
              actionable security intelligence.
            </p>
          </div>

          {/* 3-Step Horizontal Workflow (Desktop) / Vertical (Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-[#08080a] group hover:border-white/30 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl border border-white/15 bg-white/[0.04] flex items-center justify-center text-white">
                    <Globe size={22} />
                  </div>
                  <span className="text-3xl font-mono font-semibold text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    01
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white tracking-tight">
                  Enter target website URL
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Enter any public website or domain endpoint. vulNexa normalizes
                  the URL, checks connectivity, and initializes scanning rules.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-zinc-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Target validation & setup
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-[#08080a] group hover:border-white/30 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl border border-white/15 bg-white/[0.04] flex items-center justify-center text-white">
                    <ScanSearch size={22} />
                  </div>
                  <span className="text-3xl font-mono font-semibold text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    02
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white tracking-tight">
                  Run automated security checks
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  The automated engine evaluates HTTP security headers, SSL/TLS
                  certificates, OWASP Top 10 vulnerabilities, and security configurations.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-zinc-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Multi-vector threat analysis
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-[#08080a] group hover:border-white/30 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl border border-white/15 bg-white/[0.04] flex items-center justify-center text-white">
                    <CheckCircle2 size={22} />
                  </div>
                  <span className="text-3xl font-mono font-semibold text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    03
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white tracking-tight">
                  Review vulnerabilities & report
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Inspect detected findings ranked by severity, read remediation
                  steps, and consult the AI Security Assistant for immediate guidance.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-zinc-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Audit report & AI guidance
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. THREAT LIBRARY SECTION (OWASP Knowledge Base)          */}
      {/* ========================================================= */}
      <section
        id="threat-library"
        className="scroll-mt-20 py-28 md:py-36 border-t border-white/10 bg-[#050505] relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="text-zinc-500 uppercase tracking-[0.25em] text-xs font-mono">
                Security Knowledge Base
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
                Threat Library & OWASP Top 10.
              </h2>
              <p className="mt-6 text-zinc-400 text-base sm:text-lg leading-relaxed">
                Explore common security vulnerabilities, OWASP Top 10 categories,
                severity metrics, and verified prevention techniques. vulNexa
                provides an extensive reference catalog to help developers harden
                their applications.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <p className="text-sm text-zinc-300">
                    <strong className="text-white">OWASP Top 10 Standard:</strong> Detailed
                    breakdowns of Injection, Broken Access Control, Cryptographic
                    Failures, and Misconfigurations.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <p className="text-sm text-zinc-300">
                    <strong className="text-white">Severity Levels:</strong> Clear
                    classification into Critical, High, Medium, and Low risk tiers.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <p className="text-sm text-zinc-300">
                    <strong className="text-white">Actionable Prevention:</strong> Recommended
                    HTTP headers, safe coding patterns, and remediation guides.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/owasp"
                  className="px-6 py-3.5 rounded-xl border border-white/20 bg-white/[0.04] text-white hover:bg-white hover:text-black transition duration-200 inline-flex items-center gap-2 text-sm font-medium"
                >
                  <span>Open Threat Library</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="rounded-3xl border border-white/10 bg-[#09090b] p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-white">
                  Risk Severity Classification
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  4 Tiers
                </span>
              </div>

              {[
                {
                  level: "Critical",
                  desc: "Direct remote code execution, database compromise, or severe privilege escalation.",
                  badge: "bg-white text-black",
                },
                {
                  level: "High",
                  desc: "Significant data exposure, missing authentication checks, or broken authorization.",
                  badge: "bg-zinc-200 text-black",
                },
                {
                  level: "Medium",
                  desc: "Missing defense-in-depth headers, information disclosure, or weak transport security.",
                  badge: "bg-zinc-700 text-white",
                },
                {
                  level: "Low",
                  desc: "Best-practice deviations, minor server banner disclosure, or informational notes.",
                  badge: "bg-zinc-900 text-zinc-400 border border-white/10",
                },
              ].map((tier) => (
                <div
                  key={tier.level}
                  className="p-4 rounded-2xl border border-white/5 bg-white/[0.02]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm text-white">
                      {tier.level} Severity
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${tier.badge}`}
                    >
                      {tier.level.toUpperCase()}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. ABOUT US SECTION (Purpose, scanning & AI analysis)     */}
      {/* ========================================================= */}
      <section
        id="about-us"
        className="scroll-mt-20 py-28 md:py-36 border-t border-white/10 bg-black relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-zinc-500 uppercase tracking-[0.25em] text-xs font-mono">
              About vulNexa
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08]">
              Democratizing web security analysis.
            </h2>
            <p className="mt-6 text-zinc-400 text-base sm:text-lg leading-relaxed">
              vulNexa is built with a singular mission: helping developers,
              security auditors, and teams understand website security through
              automated vulnerability scanning, clear reports, and AI-assisted
              security analysis.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-white/10 bg-[#09090b]">
              <div className="w-10 h-10 rounded-xl border border-white/15 bg-white/[0.04] flex items-center justify-center text-white mb-6">
                <ScanSearch size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Automated Scanning
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Fast, automated evaluation of external web endpoints against
                standardized security policies and header configurations without
                requiring heavy installation.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-[#09090b]">
              <div className="w-10 h-10 rounded-xl border border-white/15 bg-white/[0.04] flex items-center justify-center text-white mb-6">
                <FileText size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Clear Reports
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Vulnerability findings are organized into actionable,
                human-readable audit reports complete with severity metrics and
                concrete mitigation instructions.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-[#09090b]">
              <div className="w-10 h-10 rounded-xl border border-white/15 bg-white/[0.04] flex items-center justify-center text-white mb-6">
                <Sparkles size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                AI-Assisted Analysis
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Integrated AI assistant capable of breaking down technical security
                findings into clear explanations and providing tailored remediation
                guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. FOOTER                                                 */}
      {/* ========================================================= */}
      <footer id="contact" className="py-20 border-t border-white/10 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-4 h-4 bg-white rotate-45" />
                <span className="font-medium tracking-wide text-white text-lg">
                  vulNexa
                </span>
              </Link>
              <p className="text-zinc-500 text-sm mt-4 max-w-sm leading-relaxed">
                Automated vulnerability scanning, OWASP Top 10 detection, and
                AI-assisted cybersecurity analysis for modern web applications.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm text-zinc-400">
                <li>
                  <a href="#features" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition">
                    How It Works
                  </a>
                </li>
                <li>
                  <Link href="/owasp" className="hover:text-white transition">
                    Threat Library
                  </Link>
                </li>
                <li>
                  <a href="#about-us" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
                Platform
              </h4>
              <ul className="space-y-2.5 text-sm text-zinc-400">
                <li>
                  <Link href="/scan" className="hover:text-white transition">
                    Scanner
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-white transition">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/report" className="hover:text-white transition">
                    Reports
                  </Link>
                </li>
                <li>
                  <Link href="/assistant" className="hover:text-white transition">
                    AI Assistant
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
            <p>© {new Date().getFullYear()} vulNexa. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/Login" className="hover:text-zinc-300 transition">
                Log In
              </Link>
              <Link href="/Signup" className="hover:text-zinc-300 transition">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}