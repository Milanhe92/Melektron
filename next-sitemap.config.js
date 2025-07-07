// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://melektron.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://melektron.com/server-sitemap.xml',
    ],
  },
}