"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { loginUser, isAuthenticated } from "../../services/api";
import { AlertCircle, RefreshCw, ArrowRight } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams?.get("redirect") || "/";

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
    if (!email.trim() || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await loginUser(email, password);
      router.push(redirectTo);
      router.refresh();
    } catch (err) {
      setError(err.message || "Failed to log in. Please check your credentials.");
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
            href="/Signup"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            Create Account
          </Link>
        </div>
      </header>

      {/* Main */}
      <section className="relative z-10 min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block"
          >
            <span className="text-zinc-500 uppercase tracking-[0.25em] text-sm">
              Welcome Back
            </span>

            <h1 className="mt-6 text-7xl font-semibold leading-[0.95] tracking-tight">
              Security
              <br />
              starts here.
            </h1>

            <p className="mt-8 text-zinc-400 text-lg max-w-lg leading-relaxed">
              Access vulnerability scans, real-time security dashboards,
              automated audit reports, and unified posture analytics from one
              centralized platform.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                <h3 className="text-2xl font-semibold">10+</h3>
                <p className="text-zinc-500 text-sm mt-1">OWASP Checks</p>
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                <h3 className="text-2xl font-semibold">Live</h3>
                <p className="text-zinc-500 text-sm mt-1">Audit Engine</p>
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                <h3 className="text-2xl font-semibold">100%</h3>
                <p className="text-zinc-500 text-sm mt-1">Persistent</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE (Form) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md">
              <div className="border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8">
                <h2 className="text-3xl font-semibold">Log in</h2>
                <p className="mt-2 text-zinc-500 text-sm">
                  Continue to your vulNexa workspace.
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
                      placeholder="admin@vulnexa.io"
                      className="w-full mt-2 bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-white/30 transition font-mono"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        Password
                      </label>
                    </div>

                    <input
                      type="password"
                      required
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
                        <span>Signing In...</span>
                      </>
                    ) : (
                      <>
                        <span>Log In</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center text-sm text-zinc-500">
                  Don't have an account?{" "}
                  <Link
                    href="/Signup"
                    className="text-white hover:underline font-medium"
                  >
                    Create one
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

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <LoginForm />
    </Suspense>
  );
}