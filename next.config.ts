import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 420, 768, 1024, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'placeholder.com',
      },
    ],
  },
  // Empty turbopack config to silence warning
  turbopack: {},
  // Optimize GSAP imports (fallback for webpack mode)
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'gsap': 'gsap/dist/gsap',
      'gsap/ScrollTrigger': 'gsap/dist/ScrollTrigger',
    };
    return config;
  },
  // Disable source maps in production
  productionBrowserSourceMaps: false,
};

export default withBundleAnalyzer(nextConfig);
