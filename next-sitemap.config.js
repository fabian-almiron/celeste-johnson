/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://celestefordistrict59.com',
  generateRobotsTxt: false,
  outDir: './public',
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/about': 0.8,
      '/issues': 0.8,
      '/why-im-running': 0.8,
      '/get-involved': 0.6,
      '/donate': 0.6,
    }
    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: priorities[path] ?? config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
