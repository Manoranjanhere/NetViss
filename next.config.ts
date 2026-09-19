import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-ilejlpo.nitrocdn.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
