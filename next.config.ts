import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'instagram.fhan15-1.fna.fbcdn.net',
      'instagram.fhan5-8.fna.fbcdn.net',
      'instagram.fdel27-1.fna.fbcdn.net',
    ],
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

export default nextConfig
