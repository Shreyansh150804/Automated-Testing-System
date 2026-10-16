"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles, FileText, Lock } from "lucide-react";

const previewCards = [
  {
    id: "dashboard",
    badge: "DASHBOARD",
    heading: "Your Security at a Glance",
    description:
      "Monitor scan activity, security statistics, and vulnerability insights from one unified dashboard.",
    href: "/dashboard",
    image: "/images/preview-dashboard.png",
    alt: "vulNexa Security Dashboard showing real-time statistics, severity breakdown, and scan intelligence",
    browserUrl: "vulnexa.io/dashboard",
    icon: ShieldCheck,
  },
  {
    id: "assistant",
    badge: "AI ASSISTANT",
    heading: "Intelligence Meets Security",
    description:
      "Analyze vulnerabilities, understand security findings, and get AI-assisted explanations.",
    href: "/assistant",
    image: "/images/preview-assistant.png",
    alt: "vulNexa AI Security Assistant interface powered by Gemini for interactive vulnerability analysis",
    browserUrl: "vulnexa.io/assistant",
    icon: Sparkles,
  },
  {
    id: "reports",
    badge: "REPORTS",
    heading: "Every Scan. Every Finding.",
    description:
      "Explore scan results, review detected vulnerabilities, and access detailed security reports.",
    href: "/report",
    image: "/images/preview-reports.png",
    alt: "vulNexa Security Reports view featuring executive posture rating, OWASP score, and finding catalog",
    browserUrl: "vulnexa.io/report",
    icon: FileText,
  },
];

export default function RealWebsitePreview() {
  return (
    <section className="relative py-28 md:py-36 border-t border-white/10 bg-black overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-white/[0.02] blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 text-xs tracking-[0.2em] uppercase font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Live Platform Preview
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.08]">
              Engineered for precision.
              <br />
              <span className="text-zinc-400 font-normal">
                Experience the live interface.
              </span>
            </h2>

            <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl">
              Inspect genuine views from our production cybersecurity suite.
              From unified posture monitoring to AI-assisted risk resolution
              and actionable audit reports.
            </p>
          </motion.div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {previewCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#09090b]/80 backdrop-blur-xl p-5 md:p-6 transition-all duration-300 hover:border-white/30 hover:bg-[#0d0d10] hover:shadow-[0_0_35px_rgba(255,255,255,0.06)]"
              >
                <div>
                  {/* Subtle Browser Window Frame */}
                  <div className="rounded-2xl border border-white/10 bg-[#050505] overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-white/20">
                    {/* Browser Chrome Header */}
                    <div className="px-4 py-2.5 border-b border-white/10 bg-[#0c0c0e] flex items-center justify-between gap-3">
                      {/* Window Controls */}
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-red-500/70 transition-colors" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-yellow-500/70 transition-colors" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-green-500/70 transition-colors" />
                      </div>

                      {/* Mock URL Bar */}
                      <div className="flex-1 max-w-[210px] mx-auto flex items-center justify-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-zinc-400 truncate">
                        <Lock size={10} className="text-zinc-500 shrink-0" />
                        <span className="truncate">{card.browserUrl}</span>
                      </div>

                      {/* Right indicator */}
                      <div className="w-6 flex justify-end">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                      </div>
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                        priority={index === 0}
                      />
                      {/* Inner border overlay for polish */}
                      <div className="absolute inset-0 pointer-events-none rounded-b-2xl ring-1 ring-inset ring-white/5" />
                    </div>
                  </div>

                  {/* Feature Label Badge */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono tracking-widest text-zinc-300 uppercase">
                      <Icon size={12} className="text-zinc-400" />
                      {card.badge}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="mt-3 text-xl font-semibold text-white tracking-tight">
                    {card.heading}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Footer Action Link */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 group-hover:text-white transition-colors"
                  >
                    <span>View Feature</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <span className="text-[11px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
