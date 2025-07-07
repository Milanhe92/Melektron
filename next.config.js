/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Obavezno za statički export
  reactStrictMode: true,
  images: {
    unoptimized: true, // Obavezno za statički export
    domains: ['cdn.sanity.io'],
  },
  // Uklonjen experimental deo sa allowedDevOrigins
  // jer je zastareo u Next.js 15.3+
};

// Dinamička CORS konfiguracija za Replit
if (process.env.NODE_ENV === 'development') {
  nextConfig.experimental = {
    serverActions: true,
    // allowedDevOrigins je zamenjen modernijim pristupom
  };
  
  // Dodajemo headers za CORS
  nextConfig.headers = async () => [
    {
      source: '/_next/:path*',
      headers: [
        { key: 'Access-Control-Allow-Origin', value: '*' },
        { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS' },
      ],
    }
  ];
}

module.exports = nextConfig;