/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/assignment4_next' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/assignment4_next/' : '',
  trailingSlash: true
}

module.exports = nextConfig
