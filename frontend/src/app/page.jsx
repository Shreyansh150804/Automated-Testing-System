"use client";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-white rotate-45" />
            <span className="font-medium tracking-wide">
              vulNexa
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#features">Features</a>
            <a href="#assistant">Assistant</a>
            <a href="#reports">Reports</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="flex gap-3">

            <Link
              href="/Login"
              className="px-4 py-2 border border-white/10 rounded-xl hover:bg-white/5"
            >
              Login
            </Link>
            <Link
              href="/Signup"
              className="px-4 py-2 bg-white text-black rounded-xl font-medium"
            >
              Sign Up
            </Link>

            <Link
              href="/owasp"
              className="
    px-4
    py-2
    rounded-xl
    text-sm
    font-medium
    text-zinc-300
    border
    border-white/10
    hover:border-white/20
    hover:bg-white/[0.04]
    hover:text-white
    transition-all
    duration-300
  "
            >
              Threat Library
            </Link>
            <Link
              href="/dashboard"
              className=" px-4
    py-2
    rounded-xl
    text-sm
    font-medium
    text-zinc-300
    border
    border-white/10
    hover:border-white/20
    hover:bg-white/[0.04]
    hover:text-white
    transition-all
    duration-300"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-36 pb-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="grid lg:grid-cols-[1.4fr_0.8fr_0.8fr] items-center gap-20">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-20"
            >
              <span className="text-zinc-500 text-sm uppercase tracking-[0.25em]">
                AI Security Platform
              </span>

              <h1 className="mt-6 text-7xl md:text-8xl font-semibold leading-[0.9] tracking-tight">
                Detect.
                <br />
                Analyze.
                <br />
                Protect.
              </h1>

              <p className="mt-8 max-w-xl text-zinc-400 text-lg leading-relaxed">
                vulNexa continuously scans websites for OWASP Top 10
                vulnerabilities, generates security reports, and helps
                teams identify risks before attackers do.
              </p>

              <div className="mt-10 flex gap-4">
                <Link
                  href="/scanner"
                  className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Start Scan
                </Link>
                <button className="px-6 py-3 border border-white/10 rounded-full hover:bg-white/5">
                  Watch Demo
                </button>
              </div>
            </motion.div>

            {/* Triangle */}
            <div className="flex justify-center relative">
              <div
                className="
  absolute
  -inset-20
  bg-white/10
  blur-[120px]
  rounded-full
  "
              />

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="relative w-[260px] h-[260px] border border-white/10 bg-gradient-to-b from-white/10 to-transparent"
                style={{
                  clipPath:
                    "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6 text-zinc-400">
              <div>
                <h3 className="text-white text-lg font-medium">
                  OWASP Top 10
                </h3>
                <p className="mt-2">
                  Automated vulnerability detection and analysis.
                </p>
              </div>

              <div>
                <h3 className="text-white text-lg font-medium">
                  AI Security Assistant
                </h3>
                <p className="mt-2">
                  Understand vulnerabilities with actionable fixes.
                </p>
              </div>

              <div>
                <h3 className="text-white text-lg font-medium">
                  Enterprise Reports
                </h3>
                <p className="mt-2">
                  Professional security reports for teams and clients.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-40 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-7xl font-semibold tracking-tight max-w-4xl">
            Security infrastructure
            <br />
            trusted by modern teams.
          </h2>

        </div>

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">

              <div>

                <p className="text-zinc-500 mb-6">
                  Continuous Monitoring
                </p>

                <h3 className="text-4xl font-semibold">
                  Detect vulnerabilities
                  before attackers do.
                </h3>

                <ul className="mt-8 space-y-4 text-zinc-400">

                  <li>OWASP Top 10 Scanning</li>

                  <li>Real-Time Risk Detection</li>

                  <li>Automated Security Checks</li>

                  <li>Continuous Monitoring</li>

                </ul>

              </div>

              <div className="rounded-3xl border border-white/10 bg-[#080808] p-4">

                <img
                  src="/dashboard-1.png"
                  alt="Dashboard"
                  className="rounded-2xl w-full"
                />

              </div>

            </div>

          </div>

        </section>
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

              <div className="rounded-3xl border border-white/10 bg-[#080808] p-4">

                <img
                  src="/dashboard-2.png"
                  alt="AI Assistant"
                  className="rounded-2xl w-full"
                />

              </div>

              <div>

                <p className="text-zinc-500 mb-6">
                  AI Security Assistant
                </p>

                <h3 className="text-4xl font-semibold">
                  Understand security
                  findings instantly.
                </h3>

                <p className="mt-6 text-zinc-400">
                  vulNexa AI explains risks,
                  suggests fixes and helps teams
                  prioritize vulnerabilities.
                </p>

              </div>

            </div>

          </div>

        </section>
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">

              <div>

                <p className="text-zinc-500 mb-6">
                  Enterprise Reports
                </p>

                <h3 className="text-4xl font-semibold">
                  Reports your clients
                  can actually understand.
                </h3>

              </div>

              <div className="rounded-3xl border border-white/10 bg-[#080808] p-4">

                <img
                  src="/dashboard-3.png"
                  alt="Reports"
                  className="rounded-2xl w-full"
                />

              </div>

            </div>

          </div>

        </section>
      </section>


      {/* Footer */}
      <footer
        id="contact"
        className="py-20 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h3 className="text-2xl font-semibold">
            vulNexa
          </h3>

          <p className="text-zinc-500 mt-4">
            AI-Powered Security Infrastructure.
          </p>

        </div>
      </footer>

    </main>
  );
}