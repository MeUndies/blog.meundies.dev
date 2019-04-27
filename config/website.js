const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'MeUndies EDP', // Navigation and Site Title
  siteTitleAlt: 'MeUndies', // Alternative Site title for SEO
  siteTitleShort: 'MeUndies', // short_name for manifest
  siteHeadline: 'Look sharp, live smart.', // Headline for schema.org JSONLD
  siteUrl: 'https://blog.meundies.dev', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'A Blog by the MeUndies Engineering and Digital Product team',
  author: 'MeUndies', // Author for schema.org JSONLD

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}