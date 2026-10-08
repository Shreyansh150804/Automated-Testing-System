"use client";

import { motion } from "framer-motion";

export default function ScannerPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header */}
      <section className="pt-32 pb-16 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-light tracking-tight"
          >
            Security Scanner
          </motion.h1>

          <p className="mt-6 text-zinc-400 max-w-xl text-lg">
            Analyze websites for vulnerabilities and discover security risks before attackers do.
          </p>

        </div>

      </section>

      {/* Scan Box */}
      <section className="py-20">

        <div className="max-w-4xl mx-auto px-6">

          <div className="border border-white/10 bg-white/[0.02] rounded-3xl p-8">

            <h2 className="text-2xl font-medium">
              Start New Scan
            </h2>

            <div className="mt-8 flex flex-col md:flex-row gap-4">

              <input
                type="text"
                placeholder="https://example.com"
                className="
                  flex-1
                  bg-black
                  border
                  border-white/10
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  focus:border-white/30
                "
              />

              <button
                className="
                  px-8
                  py-4
                  bg-white
                  text-black
                  rounded-xl
                  font-medium
                "
              >
                Scan Website
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border border-white/10 rounded-3xl p-8">
              <p className="text-zinc-500">Risk Score</p>
              <h3 className="text-5xl mt-4">82</h3>
            </div>

            <div className="border border-white/10 rounded-3xl p-8">
              <p className="text-zinc-500">Vulnerabilities</p>
              <h3 className="text-5xl mt-4">12</h3>
            </div>

            <div className="border border-white/10 rounded-3xl p-8">
              <p className="text-zinc-500">OWASP Matches</p>
              <h3 className="text-5xl mt-4">5</h3>
            </div>

          </div>

        </div>

      </section>

      {/* Recent Scans */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-light mb-10">
            Recent Scans
          </h2>

          <div className="space-y-4">

            <div className="border border-white/10 rounded-2xl p-5 flex justify-between">
              <span>example.com</span>
              <span className="text-zinc-500">Medium Risk</span>
            </div>

            <div className="border border-white/10 rounded-2xl p-5 flex justify-between">
              <span>testsite.com</span>
              <span className="text-zinc-500">High Risk</span>
            </div>

            <div className="border border-white/10 rounded-2xl p-5 flex justify-between">
              <span>secureapp.io</span>
              <span className="text-zinc-500">Low Risk</span>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}