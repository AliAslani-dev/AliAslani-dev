import { SitemapStream, streamToPromise } from 'sitemap'
import { setHeader } from 'h3'

export default defineEventHandler(async (event) => {
  const { serverQueryContent } = await import('#content/server') // <-- dynamic import

  // Fetch all content pages
  const docs = await serverQueryContent(event).find()

  const sitemap = new SitemapStream({ hostname: 'https://ali-aslani-dev.vercel.app' })


  // Add content pages
  const locales = ["fa", "en"];

  for (const doc of docs) {
    for (const locale of locales) {
      sitemap.write({
        url: `/${locale}${doc._path === "/" ? "" : doc._path}`,
        changefreq: "daily",
      });
    }
  }

  // Add static routes
  const staticRoutes = ['/', '/about', '/contact', '/works', '/writing']
  for (const route of staticRoutes) {
    sitemap.write({ url: route, changefreq: 'daily' })
  }

  sitemap.end()
  const xml = await streamToPromise(sitemap)

  setHeader(event, 'Content-Type', 'application/xml')
  return xml.toString()
})
