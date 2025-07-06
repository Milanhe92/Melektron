// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Replit-specific CORS settings
  experimental: {
    serverActions: true,
  },

  // Image configuration
  images: {
    unoptimized: true, // Required for static export
    domains: ['cdn.sanity.io'], // Add your Sanity domain
  },

  // Enable React Strict Mode
  reactStrictMode: true,
}

// Dynamic CORS configuration for Replit
if (process.env.NODE_ENV === 'development') {
  nextConfig.experimental = {
    ...nextConfig.experimental,
    serverActions: true,
    allowedOrigins: [
      `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`,
      'http://localhost:3000'
    ]
  }
}

module.exports = nextConfig