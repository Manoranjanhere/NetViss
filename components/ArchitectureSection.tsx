"use client";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { CircuitBackground } from "./CircuitBackground";

const FLOWS = [
  { d: "M 449 167 H 582", dur: 2.4 },
  { d: "M 449 167 V 250", dur: 2.0 },
  { d: "M 519 256 V 310", dur: 1.8 },
  { d: "M 182 428 V 335 H 366", dur: 3.2 },
  { d: "M 508 333 H 867", dur: 3.6 },
  { d: "M 774 248 V 416", dur: 2.8 },
  { d: "M 774 251 H 916 V 333", dur: 3.0 },
  { d: "M 723 333 V 416 H 625", dur: 2.6 },
  { d: "M 723 416 H 910", dur: 2.4 },
  { d: "M 723 416 V 450", dur: 1.6 },
];

export function ArchitectureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const inView = useInView(contentRef, { once: true, amount: 0.15 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const cardY = useTransform(scrollYProgress, [0, 0.28], [80, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2], [0.55, 1]);

  return (
    <section
      id="architecture"
      ref={sectionRef}
      className="relative z-20 -mt-[100vh] overflow-hidden bg-white pt-[18vh] pb-20 sm:pt-[22vh] sm:pb-28"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-[-12%] will-change-transform">
        <CircuitBackground uid="architecture" />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-white/80 to-white"
        aria-hidden
      />

      <div ref={contentRef} className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 xl:px-14">
        <motion.div
          style={{ y: cardY, opacity: cardOpacity }}
          className="relative will-change-transform overflow-hidden rounded-[28px] bg-white shadow-[0_30px_90px_rgba(20,60,90,0.18)] sm:rounded-[36px]"
        >
          <div className="relative">
            <Image
              src="/architecture.png"
              alt="NetViss deployment architecture"
              width={1024}
              height={653}
              className="block h-auto w-full"
            />

            <svg
              viewBox="0 0 1024 653"
              preserveAspectRatio="xMidYMid meet"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <radialGradient id="nvCloudGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3ec6ff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3ec6ff" stopOpacity="0" />
                </radialGradient>
                <filter id="nvDotGlow" x="-90%" y="-90%" width="280%" height="280%">
                  <feGaussianBlur stdDeviation="2.2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <ellipse cx="400" cy="318" rx="118" ry="64" fill="url(#nvCloudGlow)">
                {inView && (
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="3.2s"
                    repeatCount="indefinite"
                  />
                )}
              </ellipse>

              {inView &&
                FLOWS.flatMap((flow, i) =>
                  [0, 1].map((copy) => (
                    <g key={`${flow.d}-${copy}`} filter="url(#nvDotGlow)">
                      <circle r="5" fill="#1aa3d8">
                        <animateMotion
                          path={flow.d}
                          dur={`${flow.dur}s`}
                          begin={`${copy * (flow.dur / 2) + i * 0.15}s`}
                          repeatCount="indefinite"
                          rotate="0"
                        />
                        <animate
                          attributeName="opacity"
                          values="0;1;1;0"
                          keyTimes="0;0.08;0.9;1"
                          dur={`${flow.dur}s`}
                          begin={`${copy * (flow.dur / 2) + i * 0.15}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle r="2.2" fill="#fff">
                        <animateMotion
                          path={flow.d}
                          dur={`${flow.dur}s`}
                          begin={`${copy * (flow.dur / 2) + i * 0.15}s`}
                          repeatCount="indefinite"
                          rotate="0"
                        />
                      </circle>
                    </g>
                  )),
                )}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
