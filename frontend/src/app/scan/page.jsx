"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Shield,
  AlertTriangle,
  CheckCircle,
  ScanSearch,
} from "lucide-react";

export default function ScanPage() {
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const startScan = () => {
    setScanning(true);

    setTimeout(() => {
      setScanning(false);
      setShowResults(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white p-8">

      {/* Header */}
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold mb-4">
            Website Vulnerability Scanner
          </h1>

          <p className="text-gray-400 text-lg">
            Analyze websites for OWASP Top 10 vulnerabilities
            and security risks.
          </p>
        </motion.div>

        {/* Scanner Box */}
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8">

          <div className="flex flex-col md:flex-row gap-4">

            <div className="flex-1 relative">

              <Globe
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />

              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full bg-black/30 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-orange-500"
              />

            </div>

            <button
              onClick={startScan}
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold"
            >
              Start Scan
            </button>

          </div>

        </div>

        {/* Scanning State */}
        {scanning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto mt-10 bg-white/5 border border-white/10 rounded-3xl p-8"
          >

            <div className="flex items-center gap-3 mb-6">

              <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

              <h3 className="text-xl font-semibold">
                Scanning Website...
              </h3>

            </div>

            <div className="space-y-3 text-gray-300">

              <p>✓ Checking Security Headers...</p>
              <p>✓ Checking SSL Configuration...</p>
              <p>✓ Checking SQL Injection...</p>
              <p>✓ Checking XSS Vulnerabilities...</p>
              <p>✓ Analyzing Risk Score...</p>

            </div>

          </motion.div>
        )}

        {/* Results */}
        {showResults && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10"
          >

            {/* Score */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">

              <h2 className="text-2xl font-bold mb-6">
                Security Score
              </h2>

              <div className="flex justify-center">

                <div className="w-52 h-52 rounded-full border-8 border-orange-500 flex items-center justify-center">

                  <div className="text-center">
                    <h2 className="text-5xl font-bold">
                      92
                    </h2>

                    <p className="text-gray-400">
                      Excellent
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Results Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <CheckCircle
                  className="text-green-400 mb-4"
                  size={40}
                />
                <h3 className="font-bold">
                  SQL Injection
                </h3>
                <p className="text-green-400 mt-2">
                  Safe
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <AlertTriangle
                  className="text-yellow-400 mb-4"
                  size={40}
                />
                <h3 className="font-bold">
                  XSS Detection
                </h3>
                <p className="text-yellow-400 mt-2">
                  Warning
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <CheckCircle
                  className="text-green-400 mb-4"
                  size={40}
                />
                <h3 className="font-bold">
                  CSRF Protection
                </h3>
                <p className="text-green-400 mt-2">
                  Safe
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <Shield
                  className="text-red-400 mb-4"
                  size={40}
                />
                <h3 className="font-bold">
                  Security Headers
                </h3>
                <p className="text-red-400 mt-2">
                  Missing Headers
                </p>
              </div>

            </div>

            {/* AI Recommendation */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mt-8">

              <div className="flex items-center gap-3 mb-6">
                <ScanSearch className="text-orange-500" />
                <h2 className="text-2xl font-bold">
                  AI Recommendation
                </h2>
              </div>

              <ul className="space-y-3 text-gray-300">

                <li>
                  ✓ Add Content-Security-Policy header
                </li>

                <li>
                  ✓ Enable HSTS protection
                </li>

                <li>
                  ✓ Sanitize user inputs properly
                </li>

                <li>
                  ✓ Upgrade SSL/TLS configuration
                </li>

              </ul>

            </div>

          </motion.div>
        )}

      </div>
    </div>
  );
}