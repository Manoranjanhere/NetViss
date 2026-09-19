"use client";

import { motion } from "framer-motion";

function Donut({
  value,
  size = 72,
  color = "#3dd6c4",
  track = "#1e334d",
  delay = 0,
}: {
  value: number;
  size?: number;
  color?: string;
  track?: string;
  delay?: number;
}) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox="0 0 72 72" className="h-auto w-full max-w-[72px] overflow-visible">
      <circle cx="36" cy="36" r={r} fill="none" stroke={track} strokeWidth="8" />
      <motion.circle
        cx="36"
        cy="36"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        animate={{ strokeDashoffset: c - (value / 100) * c }}
        transition={{ duration: 1.6, delay, ease: [0.22, 1, 0.36, 1] }}
        transform="rotate(-90 36 36)"
      />
    </svg>
  );
}

export function DashboardPreview() {
  return (
    <div className="dash-glow relative overflow-hidden rounded-2xl bg-[#0c1730] text-white sm:rounded-[22px]">
      <div className="scan-line pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-cyan-300/20 to-transparent sm:h-24" />

      <div className="flex">
        <aside className="hidden w-[148px] shrink-0 border-r border-white/5 bg-[#0a1428] p-3 xl:block xl:w-[168px] xl:p-4">
          <div className="mb-5 flex items-center gap-2 px-1">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 to-teal-500" />
            <span className="text-xs font-bold tracking-wide">
              NET<span className="text-cyan-400">VISS</span>
            </span>
          </div>
          {[
            { label: "Dashboard", active: true },
            { label: "Management" },
            { label: "Playback" },
            { label: "Activity Reports" },
            { label: "Integration" },
            { label: "System Management" },
          ].map((item) => (
            <div
              key={item.label}
              className={`mb-1 rounded-lg px-3 py-2 text-[11px] font-medium ${
                item.active
                  ? "bg-cyan-400/15 text-cyan-300"
                  : "text-slate-400"
              }`}
            >
              {item.label}
            </div>
          ))}
        </aside>

        <div className="min-w-0 flex-1 p-3 sm:p-4 xl:p-5">
          <div className="mb-3 flex items-center justify-between sm:mb-4">
            <h3 className="text-sm font-semibold tracking-wide text-slate-100 sm:text-lg">
              Dashboard
            </h3>
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400/80" />
              <span className="h-2 w-2 rounded-full bg-amber-300/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <StatCard label="Total Host" value="11,235" delta="↑ 12% vs last month" />
            <StatCard label="Active Host" value="9,034" badge="81.4%" />
            <StatCard label="Total Live Alert" value="2,201" warn />
          </div>

          <div className="mt-2 grid grid-cols-3 gap-2 sm:mt-3 sm:gap-3">
            <div className="rounded-xl bg-[#12203a] p-2 sm:p-3">
              <p className="mb-1 truncate text-[9px] text-slate-400 sm:mb-2 sm:text-[11px]">
                Top Operating System
              </p>
              <div className="flex items-center justify-center">
                <Donut value={68} delay={0.4} />
              </div>
            </div>
            <div className="rounded-xl bg-[#12203a] p-2 sm:p-3">
              <p className="mb-1 truncate text-[9px] text-slate-400 sm:mb-2 sm:text-[11px]">
                Real-Time Connectivity
              </p>
              <svg viewBox="0 0 180 70" className="h-[52px] w-full sm:h-[70px]">
                <defs>
                  <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2ee6c7" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#2ee6c7" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 48 C20 46, 30 40, 45 38 S70 44, 90 28 S120 18, 145 22 S170 30, 180 16 V70 H0 Z"
                  fill="url(#lineFill)"
                />
                <motion.path
                  d="M0 48 C20 46, 30 40, 45 38 S70 44, 90 28 S120 18, 145 22 S170 30, 180 16"
                  fill="none"
                  stroke="#2ee6c7"
                  strokeWidth="2.2"
                  strokeDasharray="420"
                  initial={{ strokeDashoffset: 420 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 2.2, delay: 0.5, ease: "easeOut" }}
                />
              </svg>
            </div>
            <div className="rounded-xl bg-[#12203a] p-2 sm:p-3">
              <p className="mb-1 truncate text-[9px] text-slate-400 sm:text-[11px]">Risk Score</p>
              <div className="flex flex-col items-center">
                <Donut value={98} color="#36e08a" delay={0.6} />
                <p className="mt-[-6px] text-[10px] font-semibold text-emerald-300 sm:text-xs">
                  98%
                </p>
              </div>
            </div>
          </div>

          <div className="mt-2 hidden grid-cols-3 gap-2 sm:mt-3 sm:grid sm:gap-3">
            <div className="rounded-xl bg-[#12203a] p-3">
              <p className="mb-2 text-[11px] text-slate-400">Compliance</p>
              <div className="flex justify-around">
                <Donut value={45} size={58} color="#4da6ff" delay={0.7} />
                <Donut value={55} size={58} color="#2ee6c7" delay={0.85} />
              </div>
            </div>
            <div className="rounded-xl bg-[#12203a] p-3">
              <p className="mb-3 text-[11px] text-slate-400">Asset Mix</p>
              {[
                { label: "Linux", w: "70%", color: "bg-sky-400" },
                { label: "Windows", w: "48%", color: "bg-cyan-300" },
                { label: "Network", w: "32%", color: "bg-teal-400" },
              ].map((row) => (
                <div key={row.label} className="mb-2 flex items-center gap-2 text-[10px] text-slate-400">
                  <span className="w-14 shrink-0">{row.label}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className={`h-full origin-left rounded-full ${row.color}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                      style={{ width: row.w }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-[#12203a] p-3">
              <p className="mb-2 text-[11px] text-slate-400">Domain</p>
              <div className="flex justify-around">
                <Donut value={34} size={58} color="#5b8def" delay={0.9} />
                <Donut value={66} size={58} color="#3dd6c4" delay={1.05} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  delta,
  badge,
  warn,
}: {
  label: string;
  value: string;
  delta?: string;
  badge?: string;
  warn?: boolean;
}) {
  return (
    <div className="rounded-lg bg-[#12203a] p-2 sm:rounded-xl sm:p-3">
      <p className="truncate text-[9px] text-slate-400 sm:text-[11px]">{label}</p>
      <div className="mt-0.5 flex flex-wrap items-end gap-1 sm:mt-1 sm:gap-2">
        <motion.p
          className="font-display text-sm font-bold tracking-tight sm:text-xl md:text-2xl"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {value}
        </motion.p>
        {badge && (
          <span className="mb-0.5 rounded bg-emerald-400/15 px-1 py-0.5 text-[8px] font-semibold text-emerald-300 sm:text-[10px]">
            {badge}
          </span>
        )}
      </div>
      {delta && (
        <p className="mt-1 hidden text-[10px] text-emerald-300 sm:block">{delta}</p>
      )}
      {warn && (
        <p className="mt-1 hidden text-[10px] text-amber-300 sm:block">4 critical events</p>
      )}
    </div>
  );
}
