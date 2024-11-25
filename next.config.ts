import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*', // Match all routes
        headers: [
          {
            key: 'Content-Type',
            value: 'text/html', // Default Content-Type for HTML responses
          },
        ],
      },
    ];
  },
};

export default nextConfig;
