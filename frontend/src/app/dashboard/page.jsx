"use client";

import { motion } from "framer-motion";
import {
  Shield,
  ScanSearch,
  Bot,
  FileText,
  Settings,
  LogOut,
  AlertTriangle,
  Globe,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Websites Scanned",
      value: "2,584",
      icon: Globe,
    },
    {
      title: "Threats Found",
      value: "148",
      icon: AlertTriangle,
    },
    {
      title: "OWASP Score",
      value: "92%",
      icon: Shield,
    },
    {
      title: "Security Rating",
      value: "A+",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white flex">

      {/* Sidebar */}
      <aside className="w-72 border-r border-white/10 bg-black/20 backdrop-blur-xl p-6">

        <h1 className="text-3xl font-bold text-orange-500 mb-10">
          vulNexa
        </h1>

        <nav className="space-y-3">

          <div className="flex items-center gap-3 bg-orange-500/20 p-3 rounded-xl">
            <Shield size={20} />
            Dashboard
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer">
            <ScanSearch size={20} />
            Scan Website
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer">
            <FileText size={20} />
            Reports
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer">
            <Bot size={20} />
            AI Assistant
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer">
            <Settings size={20} />
            Settings
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/10 cursor-pointer text-red-400">
            <LogOut size={20} />
            Logout
          </div>

        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        <div className="mb-10">
          <h2 className="text-4xl font-bold">
            Security Dashboard
          </h2>

          <p className="text-gray-400 mt-2">
            Monitor vulnerabilities and secure your applications.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6"
            >
              <item.icon
                className="text-orange-500 mb-4"
                size={32}
              />

              <h3 className="text-gray-400 text-sm">
                {item.title}
              </h3>

              <p className="text-3xl font-bold mt-2">
                {item.value}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Security Score + AI Assistant */}
        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-6">
              Security Score
            </h3>

            <div className="flex items-center justify-center">

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

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-6">
              AI Security Assistant
            </h3>

            <div className="space-y-4">

              <div className="bg-black/30 rounded-xl p-4">
                <p className="text-orange-400">
                  How do I fix SQL Injection?
                </p>
              </div>

              <div className="bg-black/30 rounded-xl p-4">
                <p className="text-gray-300">
                  Use parameterized queries,
                  prepared statements and input validation
                  to prevent malicious SQL execution.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Recent Scans */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">

          <h3 className="text-2xl font-bold mb-6">
            Recent Scans
          </h3>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="text-left text-gray-400 border-b border-white/10">
                  <th className="pb-4">Website</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Risk</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b border-white/5">
                  <td className="py-4">amazon.com</td>
                  <td className="py-4 text-green-400">Safe</td>
                  <td className="py-4">Low</td>
                </tr>

                <tr className="border-b border-white/5">
                  <td className="py-4">testsite.com</td>
                  <td className="py-4 text-yellow-400">
                    Warning
                  </td>
                  <td className="py-4">Medium</td>
                </tr>

                <tr>
                  <td className="py-4">demoapp.com</td>
                  <td className="py-4 text-red-400">
                    Critical
                  </td>
                  <td className="py-4">High</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </main>
    </div>
  );
}