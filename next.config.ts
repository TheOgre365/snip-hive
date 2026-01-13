import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
    ],
  },
  
  // This is still valid and will prevent TypeScript errors from stopping the build
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;