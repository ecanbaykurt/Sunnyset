import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Enable this for Cloudflare Pages deployment
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
