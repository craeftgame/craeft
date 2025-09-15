import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA)
  basePath: "",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
