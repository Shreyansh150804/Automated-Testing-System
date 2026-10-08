"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const owaspRisks = [
  {
    id: "A01",
    title: "Broken Access Control",
    risk: "Critical",
    desc: "Users can access data or functionality beyond their intended permissions."
  },
  {
    id: "A02",
    title: "Cryptographic Failures",
    risk: "High",
    desc: "Weak encryption or improper handling of sensitive data."
  },
  {
    id: "A03",
    title: "Injection",
    risk: "Critical",
    desc: "Attackers inject malicious commands into applications."
  },
  {
    id: "A04",
    title: "Insecure Design",
    risk: "High",
    desc: "Security flaws caused by poor architecture and design decisions."
  },
  {
    id: "A05",
    title: "Security Misconfiguration",
    risk: "High",
    desc: "Incorrectly configured servers, frameworks or permissions."
  },
  {
    id: "A06",
    title: "Vulnerable Components",
    risk: "Medium",
    desc: "Using outdated libraries and software with known vulnerabilities."
  },
  {
    id: "A07",
    title: "Authentication Failures",
    risk: "Critical",
    desc: "Weak login mechanisms leading to account compromise."
  },
  {
    id: "A08",
    title: "Software & Data Integrity Failures",
    risk: "High",
    desc: "Untrusted software updates and insecure CI/CD pipelines."
  },
  {
    id: "A09",
    title: "Logging & Monitoring Failures",
    risk: "Medium",
    desc: "Lack of monitoring prevents detection of attacks."
  },
  {
    id: "A10",
    title: "Server-Side Request Forgery",
    risk: "High",
    desc: "Attackers force servers to make unintended requests."
  },
];

export default function OWASPPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/[0.03] blur-[180px] rounded-full" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3">
            <div className="w-4 h-4 bg-white rotate-45" />
            <span className="font-medium tracking-wide">
              vulNexa
            </span>
          </Link>

          <div className="flex gap-3">
            <Link
              href="/login"
              className="px-4 py-2 border border-white/10 rounded-xl hover:bg-white/5 transition"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="px-4 py-2 bg-white text-black rounded-xl font-medium"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="text-zinc-500 uppercase tracking-[0.25em] text-sm">
              OWASP SECURITY GUIDE
            </span>

            <h1 className="mt-8 text-6xl md:text-8xl font-semibold leading-[0.9] tracking-tight max-w-5xl">
              OWASP Top 10
              <br />
              Security Risks.
            </h1>

            <p className="mt-8 text-zinc-400 text-xl max-w-3xl">
              Explore the ten most critical web application security risks.
              Learn how vulnerabilities occur, why they matter, and how
              vulNexa helps detect and prevent them.
            </p>

          </motion.div>

        </div>
      </section>

      {/* Cards Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-8">

            {owaspRisks.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05
                }}
                viewport={{ once: true }}
                className="
                  group
                  border
                  border-white/10
                  bg-[#0a0a0a]
                  rounded-3xl
                  p-8
                  hover:border-white/20
                  hover:bg-white/[0.02]
                  transition-all
                  duration-300
                "
              >

                <div className="flex items-center justify-between">

                  <div className="text-zinc-500 text-sm">
                    {item.id}
                  </div>

                  <div className="
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    border
                    border-white/10
                    text-zinc-400
                  ">
                    {item.risk}
                  </div>

                </div>

                <h2 className="mt-6 text-3xl font-semibold leading-tight">
                  {item.title}
                </h2>

                <p className="mt-5 text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-8 pt-6 border-t border-white/10">

                  <button className="
                    px-5
                    py-3
                    rounded-xl
                    bg-white
                    text-black
                    font-medium
                    hover:opacity-90
                    transition
                  ">
                    Scan for this Risk
                  </button>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/10 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-5xl md:text-6xl font-semibold">
            Ready to secure your website?
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
            Use vulNexa to detect OWASP Top 10 vulnerabilities,
            generate professional security reports and improve
            your application's security posture.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <Link
              href="/signup"
              className="
                px-8
                py-4
                rounded-xl
                bg-white
                text-black
                font-medium
              "
            >
              Start Free Scan
            </Link>

            <Link
              href="/"
              className="
                px-8
                py-4
                rounded-xl
                border
                border-white/10
              "
            >
              Back Home
            </Link>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-white rotate-45" />
            <span>vulNexa</span>
          </div>

          <p className="mt-4 text-zinc-500">
            AI-Powered Security Infrastructure
          </p>

        </div>
      </footer>

    </main>
  );
}