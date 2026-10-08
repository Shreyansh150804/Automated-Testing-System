"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.03] blur-[180px] rounded-full pointer-events-none" />

      {/* Header */}
      <header className="relative z-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3">
            <div className="w-4 h-4 bg-white rotate-45" />
            <span className="font-medium tracking-wide">
              vulNexa
            </span>
          </Link>

          <Link
            href="/signup"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            Create Account
          </Link>

        </div>
      </header>

      {/* Main */}
      <section className="relative z-10 min-h-[calc(100vh-64px)] flex items-center justify-center px-6">

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

            <p className="mt-8 text-zinc-400 text-lg max-w-lg">
              Access vulnerability scans, AI-powered analysis,
              enterprise reports, and real-time security insights
              from one unified platform.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                <h3 className="text-2xl font-semibold">10+</h3>
                <p className="text-zinc-500 text-sm mt-1">
                  OWASP Checks
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                <h3 className="text-2xl font-semibold">AI</h3>
                <p className="text-zinc-500 text-sm mt-1">
                  Assistant
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                <h3 className="text-2xl font-semibold">24/7</h3>
                <p className="text-zinc-500 text-sm mt-1">
                  Monitoring
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >

            <div className="w-full max-w-md">

              <div className="border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8">

                <h2 className="text-3xl font-semibold">
                  Log in
                </h2>

                <p className="mt-2 text-zinc-500">
                  Continue to your vulNexa workspace.
                </p>

                {/* Google Button */}
                <button
                  className="
                  w-full
                  mt-8
                  border
                  border-white/10
                  rounded-xl
                  py-3
                  hover:bg-white/[0.03]
                  transition
                  "
                >
                  Continue with Google
                </button>

                <div className="flex items-center gap-4 my-6">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-zinc-500 text-sm">OR</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <form className="space-y-5">

                  <div>
                    <label className="text-sm text-zinc-400">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="
                      w-full
                      mt-2
                      bg-black
                      border
                      border-white/10
                      rounded-xl
                      px-4
                      py-3
                      outline-none
                      focus:border-white/30
                      "
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <label className="text-sm text-zinc-400">
                        Password
                      </label>

                      <a
                        href="#"
                        className="text-sm text-zinc-500 hover:text-white"
                      >
                        Forgot Password?
                      </a>
                    </div>

                    <input
                      type="password"
                      placeholder="••••••••"
                      className="
                      w-full
                      mt-2
                      bg-black
                      border
                      border-white/10
                      rounded-xl
                      px-4
                      py-3
                      outline-none
                      focus:border-white/30
                      "
                    />
                  </div>

                  <button
                    type="submit"
                    className="
                    w-full
                    py-3
                    rounded-xl
                    bg-white
                    text-black
                    font-medium
                    hover:opacity-90
                    transition
                    "
                  >
                    Log In
                  </button>

                </form>

                <div className="mt-6 text-center text-sm text-zinc-500">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-white hover:underline"
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