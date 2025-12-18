/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  // Performance optimizations
  swcMinify: true,
  optimizeFonts: true,
  
  // Faster builds
  typescript: {
    // Skip type checking during build (faster, but less safe)
    // Uncomment if builds are too slow:
    // ignoreBuildErrors: false,
  },
  
  eslint: {
    // Skip ESLint during build for faster compilation
    // Run linting separately: npm run lint
    ignoreDuringBuilds: true,
  },
  
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Faster builds in development
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    
    return config;
  },
}

module.exports = nextConfig

