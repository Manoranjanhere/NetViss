"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  type MotionValue,
} from "framer-motion";
import { CyberVideoBackground } from "./CyberVideoBackground";

const rows = [
  {
    spec: "Supported Hypervisor",
    value: "VMware ESX, Microsoft Hyper-V, Nutanix AHV",
  },
  { spec: "Minimum Specs: 100+ devices", value: "Dual Core CPU, 4–8 GB RAM" },
  { spec: "Minimum Specs: 500+ devices", value: "Quad Core CPU, 8–12 GB RAM" },
  { spec: "Minimum Specs: 1000+ devices", value: "Quad Core CPU, 16 GB RAM" },
  { spec: "Minimum Specs: 5000+ devices", value: "Quad Core CPU, 32 GB RAM" },
  { spec: "Storage Capacity", value: "100 GB – 2 TB" },
];

export function RocketSection() {
  const ref = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stickyRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const rocketY = useTransform(
    scrollYProgress,
    [0, 0.12, 0.45, 0.75, 1],
    [240, 90, 10, -30, -48],
  );
  const rocketRotate = useTransform(
    scrollYProgress,
    [0, 0.1, 0.28, 0.55, 0.8, 1],
    [5, -1.8, 1.2, -0.8, 0.4, 0],
  );
  const rocketScale = useTransform(scrollYProgress, [0, 0.18, 1], [0.86, 1, 1.04]);
  const exhaustOpacity = useTransform(scrollYProgress, [0.02, 0.1], [0, 1]);
  const flameHeight = useTransform(scrollYProgress, [0.02, 0.2, 1], [52, 108, 124]);
  const skyY = useTransform(scrollYProgress, [0, 1], [-40, 520]);
  const titleY = useTransform(scrollYProgress, [0, 0.08], [18, 0]);
  const shakeX = useTransform(scrollYProgress, [0.08, 0.2, 0.35, 0.5], [0, 1.5, -1.2, 0]);

  return (
    <section
      id="rocket"
      ref={ref}
      className="relative z-10 h-[340vh] md:h-[400vh]"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 z-10 flex h-svh flex-col overflow-hidden"
      >
        <CyberVideoBackground variant="rocket" />

        <motion.div
          style={{ y: skyY }}
          className="pointer-events-none absolute inset-0"
        >
          {Array.from({ length: 36 }).map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-cyan-400/70"
              style={{
                left: `${(i * 29) % 100}%`,
                top: `${(i * 17) % 120}%`,
                width: i % 4 === 0 ? 6 : 3,
                height: i % 4 === 0 ? 18 : 3,
                opacity: 0.35 + (i % 5) * 0.1,
                filter: i % 4 === 0 ? "blur(0.5px)" : undefined,
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col px-6 pb-4 pt-20 sm:px-10 xl:px-14">
          <motion.h2
            style={{ y: titleY }}
            className="font-display shrink-0 text-center text-[1.65rem] font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Ready to superpower your business with{" "}
            <span className="bg-gradient-to-r from-[#4ec3e0] to-[#2ee6c7] bg-clip-text text-transparent">
              NetViss
            </span>
          </motion.h2>

          <div className="grid min-h-0 flex-1 items-center gap-3 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:gap-8 lg:gap-12">
            <div className="relative flex h-[46vh] items-center justify-center md:h-full">
              <motion.div
                style={{
                  y: rocketY,
                  rotate: rocketRotate,
                  scale: rocketScale,
                  x: shakeX,
                }}
                className="relative will-change-transform"
              >
                <div className="origin-center max-sm:scale-[0.72]">
                  <RocketShip
                    progress={scrollYProgress}
                    exhaustOpacity={exhaustOpacity}
                    flameHeight={flameHeight}
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[42vh] overflow-auto rounded-2xl border border-cyan-400/20 bg-white/95 shadow-[0_24px_80px_rgba(0,20,40,0.35)] backdrop-blur-md md:max-h-none md:overflow-visible md:rounded-[28px]"
            >
              <div className="bg-[#1aa3d8] px-5 py-3 text-center sm:px-6 sm:py-4">
                <p className="font-display text-lg font-bold text-white sm:text-2xl">
                  NetViss
                </p>
                <p className="font-display text-sm font-semibold text-white/95 sm:text-lg">
                  Deployment Requirement
                </p>
              </div>
              <div>
                {rows.map((row, i) => (
                  <div
                    key={row.spec}
                    className={`grid grid-cols-1 gap-0.5 px-4 py-2.5 text-[13px] sm:grid-cols-[1.15fr_1fr] sm:gap-3 sm:px-6 sm:py-3.5 sm:text-sm ${
                      i % 2 === 1 ? "bg-slate-50/90" : "bg-white"
                    }`}
                  >
                    <span className="font-semibold text-slate-700">{row.spec}</span>
                    <span className="text-slate-500">{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RocketShip({
  progress,
  exhaustOpacity,
  flameHeight,
}: {
  progress: MotionValue<number>;
  exhaustOpacity: MotionValue<number>;
  flameHeight: MotionValue<number>;
}) {
  return (
    <div className="relative flex items-center">
      <div className="relative h-[430px] w-[96px] sm:w-[138px]">
        <div className="absolute right-0 top-[190px]">
          <FlyLabel progress={progress} appearAt={0.22} name="On-Premise" />
        </div>
        <div className="absolute right-0 top-[268px]">
          <FlyLabel progress={progress} appearAt={0.34} name="Cloud" />
        </div>
        <div className="absolute right-0 top-[340px]">
          <FlyLabel progress={progress} appearAt={0.46} name="MSP" />
        </div>
      </div>
      <div className="relative">
        <RocketGraphic />
        <Exhaust opacity={exhaustOpacity} height={flameHeight} />
      </div>
    </div>
  );
}

function FlyLabel({
  progress,
  appearAt,
  name,
}: {
  progress: MotionValue<number>;
  appearAt: number;
  name: string;
}) {
  const opacity = useTransform(progress, [appearAt - 0.06, appearAt, 1], [0, 1, 1]);
  const x = useTransform(progress, [appearAt - 0.06, appearAt], [-28, 0]);

  return (
    <motion.div
      style={{ opacity, x }}
      className="flex items-center justify-end gap-2"
    >
      <span className="text-[11px] font-semibold text-cyan-100 sm:text-sm">{name}</span>
      <span className="h-px w-8 bg-cyan-400/50 lg:w-12" />
      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#2ee6c7] shadow-[0_0_12px_#2ee6c7]" />
    </motion.div>
  );
}

function Exhaust({
  opacity,
  height,
}: {
  opacity: MotionValue<number>;
  height: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute left-[calc(90px+1.3mm)] top-[90%] z-0 w-16 origin-top -translate-x-1/2"
    >
      <div>
        <motion.div style={{ height }} className="relative w-14 origin-top">
          <div className="flame-flicker absolute left-1/2 top-0 h-full w-11 -translate-x-1/2 rounded-[40%] bg-gradient-to-b from-white via-amber-300 to-orange-600 blur-[1px]" />
          <div className="flame-flicker absolute left-1/2 top-1 h-[86%] w-7 -translate-x-1/2 rounded-full bg-gradient-to-b from-yellow-50 via-orange-400 to-transparent" />
          <div className="absolute left-1/2 top-4 h-24 w-16 -translate-x-1/2 rounded-full bg-orange-500/35 blur-xl" />
          <div className="absolute left-1/2 top-8 h-20 w-20 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-2xl" />
        </motion.div>

        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={`smoke-${i}`}
            className="smoke-puff absolute left-1/2 top-10 rounded-full bg-slate-400/55"
            style={{
              width: 12 + (i % 5) * 4,
              height: 12 + (i % 5) * 4,
              marginLeft: -18 + (i % 7) * 6,
              animationDuration: `${0.85 + (i % 5) * 0.16}s`,
              animationDelay: `${i * 0.07}s`,
              filter: "blur(2px)",
            }}
          />
        ))}

        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={`ember-${i}`}
            className="ember absolute left-1/2 top-6 h-1.5 w-1.5 rounded-full bg-amber-300"
            style={{
              marginLeft: -10 + (i % 6) * 4,
              animationDuration: `${0.5 + (i % 4) * 0.12}s`,
              animationDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function RocketGraphic() {
  return (
    <svg
      width="180"
      height="430"
      viewBox="0 0 180 430"
      className="drop-shadow-[0_24px_32px_rgba(26,163,216,0.32)]"
    >
      <defs>
        <linearGradient id="desk-rk-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9adbf3" />
          <stop offset="42%" stopColor="#3eb3e4" />
          <stop offset="100%" stopColor="#1789c4" />
        </linearGradient>
        <linearGradient id="desk-rk-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#57c0ea" />
          <stop offset="100%" stopColor="#2aa0d6" />
        </linearGradient>
        <linearGradient id="desk-rk-fin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ad0c8" />
          <stop offset="100%" stopColor="#2f9e4a" />
        </linearGradient>
        <linearGradient id="desk-rk-window" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4fcff" />
          <stop offset="100%" stopColor="#8fd4f0" />
        </linearGradient>
      </defs>

      <path
        d="M90 6 C128 72, 136 124, 128 168 L52 168 C44 124, 52 72, 90 6Z"
        fill="url(#desk-rk-body)"
      />
      <ellipse cx="90" cy="78" rx="24" ry="20" fill="url(#desk-rk-window)" />
      <ellipse cx="90" cy="78" rx="13" ry="11" fill="#1aa3d8" opacity="0.32" />

      <rect x="46" y="166" width="88" height="74" rx="12" fill="url(#desk-rk-body)" />
      <rect x="46" y="244" width="88" height="74" rx="12" fill="url(#desk-rk-mid)" />
      <rect x="46" y="322" width="88" height="48" rx="14" fill="#2498d0" />

      <g transform="translate(74 184)">{building()}</g>
      <g transform="translate(72 260)">{cloud()}</g>
      <g transform="translate(72 330)">{people()}</g>

      <path d="M46 338 L8 404 L46 376 Z" fill="url(#desk-rk-fin)" />
      <path d="M134 338 L172 404 L134 376 Z" fill="url(#desk-rk-fin)" />
      <path d="M64 364 L90 424 L116 364 Z" fill="url(#desk-rk-fin)" />
    </svg>
  );
}

function building() {
  return (
    <g fill="#f4fbff">
      <rect x="4" y="8" width="22" height="20" rx="1.5" />
      <path d="M8 8 V2 h14 v6" />
      <rect x="8" y="12" width="3.5" height="3.5" fill="#2b9fd4" />
      <rect x="14" y="12" width="3.5" height="3.5" fill="#2b9fd4" />
      <rect x="20" y="12" width="3.5" height="3.5" fill="#2b9fd4" />
      <rect x="12" y="20" width="6" height="8" fill="#2b9fd4" />
    </g>
  );
}

function cloud() {
  return (
    <g fill="#f4fbff">
      <ellipse cx="12" cy="14" rx="9" ry="7" />
      <ellipse cx="22" cy="15" rx="8" ry="6" />
      <ellipse cx="16" cy="10" rx="7" ry="6" />
      <path
        d="M10 20 v8 M16 20 v8 M22 20 v8"
        stroke="#f4fbff"
        strokeWidth="2"
        fill="none"
      />
    </g>
  );
}

function people() {
  return (
    <g fill="#f4fbff">
      <circle cx="10" cy="8" r="4.2" />
      <circle cx="22" cy="8" r="4.2" />
      <path d="M3 22c0-5 4-8 7-8s7 3 7 8" />
      <path d="M15 22c0-5 4-8 7-8s7 3 7 8" />
    </g>
  );
}
