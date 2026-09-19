export function Logo({
  compact = false,
  light = false,
  uid = "logo",
}: {
  compact?: boolean;
  light?: boolean;
  uid?: string;
}) {
  return (
    <a href="#top" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
      <svg
        width={compact ? 36 : 46}
        height={compact ? 36 : 46}
        viewBox="0 0 46 46"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <defs>
          <linearGradient id={`${uid}-n-a`} x1="6" y1="4" x2="40" y2="42">
            <stop stopColor="#4ec3e0" />
            <stop offset="1" stopColor="#1488b0" />
          </linearGradient>
          <linearGradient id={`${uid}-n-b`} x1="18" y1="2" x2="44" y2="40">
            <stop stopColor="#7fe0f2" />
            <stop offset="1" stopColor="#1aa3d8" />
          </linearGradient>
        </defs>
        <path
          d="M7 8.5 20 4l7.5 13.5L14.2 22.2 7 8.5Z"
          fill={`url(#${uid}-n-a)`}
        />
        <path
          d="M21.2 19.6 39.5 13.2 33.8 41.2 16.2 34.6l5-15Z"
          fill={`url(#${uid}-n-b)`}
        />
        <path
          d="M16.5 33.2 33 39.4 14.8 42.8 8.4 24.6l8.1 8.6Z"
          fill="#0e8fb8"
          opacity="0.95"
        />
      </svg>
      <span className="leading-tight">
        <span className="block font-display text-[22px] font-extrabold tracking-[0.01em] sm:text-[24px]">
          <span className={light ? "text-white" : "text-[#1b3a4d]"}>NET</span>
          <span className={light ? "text-cyan-300" : "text-[#1aa3d8]"}>VISS</span>
        </span>
        {!compact && (
          <span
            className={`hidden text-[10px] font-medium tracking-wide sm:block ${
              light ? "text-slate-300" : "text-slate-500"
            }`}
          >
            Secure your network with us
          </span>
        )}
      </span>
    </a>
  );
}
