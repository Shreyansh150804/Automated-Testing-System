"use client";

import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-light tracking-tight"
          >
            Security Dashboard
          </motion.h1>

          <p className="mt-6 text-zinc-400 text-lg max-w-2xl">
            Monitor vulnerabilities, track security posture and
            manage website risks from a single dashboard.
          </p>

        </div>

      </section>

      {/* Stats */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]">
              <p className="text-zinc-500">Security Score</p>
              <h2 className="text-5xl mt-4 font-light">87</h2>
            </div>

            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]">
              <p className="text-zinc-500">Active Threats</p>
              <h2 className="text-5xl mt-4 font-light">12</h2>
            </div>

            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]">
              <p className="text-zinc-500">Critical Issues</p>
              <h2 className="text-5xl mt-4 font-light">3</h2>
            </div>

            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]">
              <p className="text-zinc-500">Scans</p>
              <h2 className="text-5xl mt-4 font-light">48</h2>
            </div>

          </div>

        </div>

      </section>

      {/* Main Grid */}
      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Recent Scans */}
            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]">

              <h3 className="text-2xl font-medium mb-8">
                Recent Scans
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span>example.com</span>
                  <span className="text-zinc-500">High Risk</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span>shop.com</span>
                  <span className="text-zinc-500">Medium Risk</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span>secureapp.io</span>
                  <span className="text-zinc-500">Low Risk</span>
                </div>

              </div>

            </div>

            {/* AI Insights */}
            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]">

              <h3 className="text-2xl font-medium mb-8">
                AI Security Insights
              </h3>

              <div className="space-y-5 text-zinc-400">

                <p>• SQL Injection patterns detected.</p>

                <p>• Missing Content-Security-Policy header.</p>

                <p>• Weak password validation flow.</p>

                <p>• Update outdated dependencies.</p>

                <p>• Enable Multi-Factor Authentication.</p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* OWASP Breakdown */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="border border-white/10 rounded-3xl p-10 bg-white/[0.02]">

            <h3 className="text-3xl font-light mb-10">
              OWASP Risk Breakdown
            </h3>

            <div className="space-y-8">

              <div>
                <div className="flex justify-between mb-2">
                  <span>A01 Broken Access Control</span>
                  <span>82%</span>
                </div>

                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[82%] bg-white"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>A02 Cryptographic Failures</span>
                  <span>63%</span>
                </div>

                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[63%] bg-white"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>A03 Injection</span>
                  <span>71%</span>
                </div>

                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[71%] bg-white"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>A04 Insecure Design</span>
                  <span>55%</span>
                </div>

                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[55%] bg-white"></div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}