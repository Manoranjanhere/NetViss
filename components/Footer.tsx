"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative z-30 overflow-hidden bg-[#0c1730] py-16 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-10 px-6 sm:px-10 lg:flex-row lg:items-center xl:px-14">
        <div>
          <Logo light uid="footer" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
            Unified AI-powered control, visibility, security and management for
            SMBs, enterprises, and MSPs.
          </p>
        </div>
        <motion.a
          href="#platform"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full bg-gradient-to-r from-[#1aa3d8] to-[#2bb8a8] px-8 py-3.5 text-sm font-semibold shadow-[0_12px_30px_rgba(26,163,216,0.35)]"
        >
          Back to platform
        </motion.a>
      </div>
      <p className="relative mx-auto mt-10 max-w-[1440px] px-6 text-xs text-slate-500 sm:px-10 xl:px-14">
        © {new Date().getFullYear()} NetViss. All rights reserved.
      </p>
    </footer>
  );
}
