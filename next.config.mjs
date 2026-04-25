/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/grace-portfolio',
  assetPrefix: '/grace-portfolio',
};

export default nextConfig;
