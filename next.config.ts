import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // İleride static export istenirse:
  output: "export",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
