"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Shield } from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-4 py-10">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-orange-500/20 blur-[120px] rounded-full top-20 left-20"></div>
      <div className="absolute w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full bottom-20 right-20"></div>

      <div className="relative w-full max-w-6xl grid md:grid-cols-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-orange-500/20 to-transparent">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-orange-500" size={40} />
            <h1 className="text-4xl font-bold text-white">
              vulNexa
            </h1>
          </div>

          <h2 className="text-5xl font-bold text-white leading-tight">
            Secure Your
            <br />
            Applications
          </h2>

          <p className="text-gray-300 mt-6 text-lg">
            Join vulNexa and start scanning websites for
            vulnerabilities using AI-powered security analysis.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3 text-gray-300">
              ✓ OWASP Top 10 Detection
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              ✓ AI Security Assistant
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              ✓ Detailed Security Reports
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-2">
            Create Account
          </h2>

          <p className="text-gray-400 mb-8">
            Start protecting websites today.
          </p>

          <form className="space-y-5">
            <div>
              <label className="text-gray-300 text-sm">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Company / Organization"
                className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">
                Password
              </label>

              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-3 text-gray-400"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="text-gray-300 text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition-all py-3 rounded-xl font-semibold text-white"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-orange-500 hover:text-orange-400"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}