// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output settings
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  
  // Image optimization
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },

  // Internationalization (i18n) - opcionalno
  i18n: {
    locales: ['en', 'sr'],
    defaultLocale: 'sr',
  },

  // Security headers
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Webpack optimizacije
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }
    return config
  },

  // Dev-only settings
  ...(process.env.NODE_ENV === 'development' && {
    experimental: {
      serverActions: true,
    },
  }),
}

module.exports = nextConfig