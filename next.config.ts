import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site is fully static, so it can be hosted anywhere
  // (GitHub Pages, Netlify, S3, any nginx). `next/image` therefore runs
  // unoptimized — demo images come straight from Unsplash's CDN anyway.
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
