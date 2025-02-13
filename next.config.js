/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }

    // Add HMR configuration for development
    if (dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        runtimeChunk: 'single',
      }
    }

    return config
  },
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/assignment1' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/assignment1/' : '',
  trailingSlash: true
}

module.exports = nextConfig

