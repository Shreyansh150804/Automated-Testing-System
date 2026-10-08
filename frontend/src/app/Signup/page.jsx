"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Top Bar */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3">
            <div className="w-4 h-4 bg-white rotate-45" />
            <span className="font-medium">vulNexa</span>
          </Link>

          <Link
            href="/login"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            Already have an account?
          </Link>

        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 min-h-[calc(100vh-64px)]">

        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-64px)]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center pr-12"
          >

            <span className="text-zinc-500 uppercase tracking-[0.25em] text-sm">
              Security Infrastructure
            </span>

            <h1 className="mt-6 text-6xl md:text-7xl font-semibold leading-[0.95]">
              Build securely
              <br />
              from day one.
            </h1>

            <p className="mt-8 text-zinc-400 text-lg max-w-xl">
              Join vulNexa and start monitoring vulnerabilities,
              generating reports and protecting your applications
              with AI-powered security insights.
            </p>

            {/* Feature Cards */}
            <div className="mt-12 space-y-4">

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                <h3 className="font-medium">
                  OWASP Top 10 Detection
                </h3>
                <p className="text-zinc-500 mt-2 text-sm">
                  Automated vulnerability discovery.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                <h3 className="font-medium">
                  AI Security Assistant
                </h3>
                <p className="text-zinc-500 mt-2 text-sm">
                  Get remediation suggestions instantly.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                <h3 className="font-medium">
                  Professional Reports
                </h3>
                <p className="text-zinc-500 mt-2 text-sm">
                  Export enterprise-grade security reports.
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >

            <div className="w-full max-w-md">

              <div className="border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8">

                <h2 className="text-3xl font-semibold">
                  Create Account
                </h2>

                <p className="text-zinc-500 mt-2">
                  Start scanning websites in minutes.
                </p>

                <form className="mt-8 space-y-5">

                  <div>
                    <label className="text-sm text-zinc-400">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full mt-2 bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-zinc-400">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full mt-2 bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-zinc-400">
                      Password
                    </label>

                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full mt-2 bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition"
                  >
                    Create Account
                  </button>

                </form>

                <div className="mt-6 text-center text-sm text-zinc-500">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-white"
                  >
                    Sign In
                  </Link>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </main>
  );
}