"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { signupUser, isAuthenticated } from "../../services/api";
import { AlertCircle, RefreshCw, ArrowRight } from "lucide-react";

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams?.get("redirect") || "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace(redirectTo);
    }
  }, [router, redirectTo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password) {
      setError("Please fill in all required fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await signupUser(name, email, password);
      router.push(redirectTo);
      router.refresh();
    } catch (err) {
      setError(err.message || "Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.03] blur-[180px] rounded-full pointer-events-none" />

      {/* Header */}
      <header className="relative z-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-4 h-4 bg-white rotate-45" />
            <span className="font-medium tracking-wide">vulNexa</span>
          </Link>

          <Link
            href="/Login"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            Sign In
          </Link>
        </div>
      </header>

      {/* Main Section */}
      <section className="relative z-10 min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Hero */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block"
          >
            <span className="text-zinc-500 uppercase tracking-[0.25em] text-sm">
              Start Free
            </span>

            <h1 className="mt-6 text-7xl font-semibold leading-[0.95] tracking-tight">
              Continuous
              <br />
              protection.
            </h1>

            <p className="mt-8 text-zinc-400 text-lg max-w-lg leading-relaxed">
              Create your account to start scanning web assets against OWASP Top
              10 vulnerabilities, store persistent audit reports, and monitor risk
              trends.
            </p>

            <div className="mt-12 space-y-4 text-sm text-zinc-400">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Automated headers, TLS, and OWASP audit checks</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Persistent scan storage and downloadable reports</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Security dashboard with risk trend tracking</span>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md">
              <div className="border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8">
                <h2 className="text-3xl font-semibold">Create Account</h2>
                <p className="text-zinc-500 mt-2 text-sm">
                  Start auditing web targets in seconds.
                </p>

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/15 text-xs text-zinc-300 flex items-start gap-2.5"
                    >
                      <AlertCircle
                        size={16}
                        className="shrink-0 text-red-400 mt-0.5"
                      />
                      <span className="leading-relaxed">{error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (error) setError(null);
                      }}
                      placeholder="Alex Mercer"
                      className="w-full mt-2 bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-white/30 transition"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError(null);
                      }}
                      placeholder="alex@example.com"
                      className="w-full mt-2 bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-white/30 transition font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Password (min 6 characters)
                    </label>
                    <input
                      type="password"
                      required
                      minLength={6}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (error) setError(null);
                      }}
                      placeholder="••••••••"
                      className="w-full mt-2 bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-white/30 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 disabled:opacity-50 transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="animate-spin" size={16} />
                        <span>Creating Account...</span>
                      </>
                    ) : (
                      <>
                        <span>Create Account</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center text-sm text-zinc-500">
                  Already have an account?{" "}
                  <Link
                    href="/Login"
                    className="text-white hover:underline font-medium"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <SignupForm />
    </Suspense>
  );
}