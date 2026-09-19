"use client";

type CyberVideoBackgroundProps = {
  variant?: "light" | "rocket";
};

export function CyberVideoBackground({
  variant = "light",
}: CyberVideoBackgroundProps) {
  const isRocket = variant === "rocket";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className={`absolute inset-0 ${
          isRocket
            ? "bg-gradient-to-br from-[#040b12] via-[#0a1824] to-[#06141c]"
            : "bg-gradient-to-br from-[#061018] via-[#0a1a28] to-[#071820]"
        }`}
      />

      <div className={`cyber-grid absolute inset-0 ${isRocket ? "opacity-55" : "opacity-[0.45]"}`} />
      <div className={`cyber-hex absolute inset-0 ${isRocket ? "opacity-40" : "opacity-30"}`} />

      <div className="absolute inset-0">
        {Array.from({ length: isRocket ? 22 : 18 }).map((_, i) => (
          <span
            key={`col-${i}`}
            className="cyber-rain absolute top-0 w-px bg-gradient-to-b from-transparent via-cyan-400/55 to-transparent"
            style={{
              left: `${3 + i * (isRocket ? 4.4 : 5.4)}%`,
              height: `${28 + (i % 5) * 10}%`,
              animationDelay: `${i * 0.32}s`,
              animationDuration: `${4.2 + (i % 4) * 1.1}s`,
            }}
          />
        ))}
      </div>

      <div className={`cyber-scan absolute inset-x-0 h-24 ${isRocket ? "opacity-50" : "opacity-40"}`} />

      <div className="absolute inset-0">
        {Array.from({ length: isRocket ? 16 : 12 }).map((_, i) => (
          <span
            key={`node-${i}`}
            className="cyber-node absolute h-1.5 w-1.5 rounded-full bg-cyan-300"
            style={{
              left: `${6 + ((i * 17) % 88)}%`,
              top: `${10 + ((i * 23) % 76)}%`,
              animationDelay: `${i * 0.35}s`,
            }}
          />
        ))}
      </div>

      {isRocket && (
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={`lock-${i}`}
              className="absolute rounded border border-cyan-400/25 bg-cyan-400/5"
              style={{
                left: `${10 + ((i * 11) % 70)}%`,
                top: `${18 + ((i * 13) % 55)}%`,
                width: 36 + (i % 3) * 10,
                height: 22 + (i % 2) * 8,
                animation: `cyberNodeBlink ${3 + (i % 3)}s ease-in-out ${i * 0.5}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      <svg
        className={`absolute inset-0 h-full w-full ${isRocket ? "opacity-45" : "opacity-[0.35]"}`}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={`cyber-line-${variant}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1aa3d8" stopOpacity="0" />
            <stop offset="50%" stopColor="#2ee6c7" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1aa3d8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 180 H280 L340 240 H520 L580 180 H900 L960 240 H1200"
          fill="none"
          stroke={`url(#cyber-line-${variant})`}
          strokeWidth="1.5"
          className="cyber-dash"
        />
        <path
          d="M0 420 H160 L220 360 H480 L540 420 H780 L860 340 H1200"
          fill="none"
          stroke={`url(#cyber-line-${variant})`}
          strokeWidth="1.5"
          className="cyber-dash"
          style={{ animationDelay: "1.2s" }}
        />
        <path
          d="M0 620 H200 L260 560 H640 L720 620 H1200"
          fill="none"
          stroke={`url(#cyber-line-${variant})`}
          strokeWidth="1.5"
          className="cyber-dash"
          style={{ animationDelay: "2.1s" }}
        />
        {isRocket && (
          <>
            <path
              d="M80 80 V720 M1120 80 V720"
              fill="none"
              stroke={`url(#cyber-line-${variant})`}
              strokeWidth="1"
              className="cyber-dash"
              style={{ animationDelay: "0.6s" }}
            />
            <circle cx="280" cy="240" r="4" fill="#2ee6c7" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="780" cy="340" r="4" fill="#1aa3d8" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.4s" begin="0.5s" repeatCount="indefinite" />
            </circle>
          </>
        )}
      </svg>

      {isRocket ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#07141f]/55 via-[#0a1c28]/35 to-[#061018]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(26,163,216,0.16),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(46,230,199,0.1),transparent_45%)]" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-white/88 via-white/72 to-white/92" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(26,163,216,0.12),transparent_55%)]" />
        </>
      )}
    </div>
  );
}
