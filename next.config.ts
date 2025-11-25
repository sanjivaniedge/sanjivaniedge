import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: ["images.unsplash.com"],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
