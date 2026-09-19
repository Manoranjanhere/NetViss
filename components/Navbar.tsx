"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";

const links = [
  { href: "#platform", label: "Platform" },
  { href: "#rocket", label: "Deployment" },
  { href: "#architecture", label: "Architecture" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "glass-nav border-b border-white/60 shadow-sm" : "bg-white/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
        <Logo compact uid="nav" />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-[#1aa3d8]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#architecture"
          className="shrink-0 rounded-full bg-gradient-to-r from-[#1aa3d8] to-[#2bb8a8] px-3.5 py-2 text-xs font-semibold text-white shadow-[0_10px_24px_rgba(26,163,216,0.35)] transition hover:brightness-110 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Get a demo
        </a>
      </div>
    </motion.header>
  );
}
