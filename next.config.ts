import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/grace-portfolio',
  assetPrefix: '/grace-portfolio',
};

export default nextConfig;
