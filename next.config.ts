import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'financial-sass.vercel.app',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
