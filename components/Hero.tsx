"use client";

import { motion } from "framer-motion";
import { CircuitBackground } from "./CircuitBackground";
import { CountUp } from "./CountUp";
import { DashboardPreview } from "./DashboardPreview";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.12 * i, ease },
  }),
};

const stats = [
  { end: 95, label: "Greater Accuracy" },
  { end: 70, label: "Increased Efficiency" },
  { end: 80, label: "Customer Satisfaction" },
];

export function Hero() {
  return (
    <section id="platform" className="relative overflow-hidden bg-white pt-[72px]">
      <CircuitBackground uid="hero" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-8 py-8 sm:py-10 lg:grid-cols-12 lg:gap-8 lg:py-6 xl:gap-10">
          <div className="flex flex-col justify-center lg:col-span-5 lg:min-h-[420px] xl:col-span-5">
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-display text-[1.85rem] font-extrabold leading-[1.15] tracking-tight text-[#152536] sm:text-4xl md:text-[2.6rem] lg:text-[2.75rem] xl:text-[3rem]"
            >
              Unified AI-Powered Platform for{" "}
              <span className="bg-gradient-to-r from-[#1aa3d8] to-[#2bb8a8] bg-clip-text text-transparent">
                Control, Visibility, Security and Management
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-5 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg md:text-xl"
            >
              Simplify Infrastructure, strengthen security and gain total control
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 w-fit max-w-full rounded-lg bg-[#1aa3d8] px-4 py-2.5 text-[13px] font-bold leading-snug text-white shadow-[0_12px_30px_rgba(26,163,216,0.35)] sm:mt-7 sm:px-5 sm:py-3 sm:text-base"
            >
              SMB, SME, Enterprises, MSPs and Technology
            </motion.div>

            <motion.a
              href="#rocket"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25 }}
              className="mt-8 hidden items-center gap-3 text-sm font-semibold text-slate-400 lg:inline-flex"
            >
              <span className="relative flex h-9 w-6 items-start justify-center rounded-full border border-slate-300 pt-1.5">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#1aa3d8]" />
              </span>
              Scroll to launch
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="relative z-20 w-full lg:col-span-7 lg:-mb-20 xl:-mb-24"
          >
            <div className="float-y">
              <DashboardPreview />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hero-stats relative z-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-3 py-7 sm:py-9 lg:w-[46%] lg:max-w-xl">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 + i * 0.12, duration: 0.65, ease }}
                className={`px-1 text-center text-white ${
                  i === 1 ? "border-x border-white/25" : ""
                }`}
              >
                <CountUp
                  end={stat.end}
                  className="font-display text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
                />
                <p className="mt-1 text-[10px] font-medium text-white/90 sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
