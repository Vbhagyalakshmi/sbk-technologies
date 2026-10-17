import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Only domains actually used (see lib/images.ts)
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.jhansiengineeringworks.in" },
    ],
  },
};
export default nextConfig;
