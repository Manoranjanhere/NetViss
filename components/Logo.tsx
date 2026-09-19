import Image from "next/image";

const LOGO_LIGHT_BG = "/netviss-logo-color.svg";
const LOGO_DARK_BG =
  "https://cdn-ilejlpo.nitrocdn.com/LzaVZSmyykjCDDQSJGcMUtFfDnQFyayc/assets/images/optimized/rev-fec5bf9/www.netviss.com/wp-content/uploads/2025/05/netviss-logo-1.svg";

export function Logo({
  compact = false,
  light = false,
}: {
  compact?: boolean;
  light?: boolean;
  uid?: string;
}) {
  return (
    <a href="#top" className="group inline-flex min-w-0 items-center">
      <Image
        src={light ? LOGO_DARK_BG : LOGO_LIGHT_BG}
        alt="NetViss"
        width={192}
        height={50}
        priority
        unoptimized
        className={`h-auto w-auto max-w-full object-contain ${
          compact ? "h-8 sm:h-9" : "h-9 sm:h-11"
        }`}
      />
    </a>
  );
}
