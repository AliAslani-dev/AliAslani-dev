import { SitemapStream, streamToPromise } from 'sitemap'
import { setHeader } from 'h3'

export default defineEventHandler(async (event) => {
  const { serverQueryContent } = await import('#content/server') // <-- dynamic import

  // Fetch all content pages
  const docs = await serverQueryContent(event).find()

  const sitemap = new SitemapStream({ hostname: 'https://canvas.hrcd.fr' })

  // Add content pages
  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'daily',
    })
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
