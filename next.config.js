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
  basePath: process.env.NODE_ENV === 'production' ? '/assignment4_next' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/assignment4_next/' : '',
  trailingSlash: true
}

module.exports = nextConfig
