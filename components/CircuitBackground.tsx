export function CircuitBackground({
  className = "",
  accent = false,
  uid = "main",
}: {
  className?: string;
  accent?: boolean;
  uid?: string;
}) {
  const grid = `circuit-grid-${uid}`;
  const fade = `circuit-fade-${uid}`;
  const mask = `circuit-mask-${uid}`;
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id={grid}
          width="92"
          height="92"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 46h18m56 0h18M46 0v18m0 56v18"
            fill="none"
            stroke={accent ? "rgba(26,163,216,0.18)" : "rgba(148,174,196,0.35)"}
            strokeWidth="1"
          />
          <circle
            cx="46"
            cy="46"
            r="2.2"
            fill={accent ? "rgba(0,168,213,0.45)" : "rgba(148,174,196,0.45)"}
          />
          <path
            d="M18 46h10v-16h18"
            fill="none"
            stroke={accent ? "rgba(26,163,216,0.14)" : "rgba(148,174,196,0.28)"}
            strokeWidth="1"
          />
          <circle
            cx="46"
            cy="30"
            r="1.6"
            fill={accent ? "#2bb8a8" : "rgba(148,174,196,0.5)"}
          />
        </pattern>
        <linearGradient id={fade} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="55%" stopColor="white" stopOpacity="0.45" />
          <stop offset="100%" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
        <mask id={mask}>
          <rect width="100%" height="100%" fill={`url(#${fade})`} />
        </mask>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${grid})`}
        mask={`url(#${mask})`}
      />
      <g
        fill="none"
        stroke={accent ? "rgba(26,163,216,0.22)" : "rgba(120,160,190,0.28)"}
        strokeWidth="1.2"
        className="grid-pulse"
      >
        <path d="M-20 80h140 l30 0 v70 h90" />
        <path d="M920 40v90h-120v40" />
        <path d="M80 480 h160 v-80 h70" />
        <circle cx="120" cy="80" r="3.5" fill="#00a8d5" stroke="none" />
        <circle cx="250" cy="150" r="3" fill="#2bb8a8" stroke="none" />
      </g>
    </svg>
  );
}
