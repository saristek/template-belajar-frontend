/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */

module.exports = {
  // !STARTERCONF Change the siteUrl
  siteUrl: process.env.NEXT_PUBLIC_APP_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
