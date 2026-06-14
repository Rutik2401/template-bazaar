import { categories } from '@/data/categories'
import { templateList } from '@/templates'
import { absoluteUrl } from '@/utils/siteUrl'

/**
 * XML sitemap served at /sitemap.xml — lists every indexable URL so crawlers
 * discover all category landing pages and template editors. Regenerated on each
 * build, so new templates appear automatically.
 *
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default function sitemap() {
  const home = {
    url: absoluteUrl('/'),
    changeFrequency: 'weekly',
    priority: 1,
  }

  const categoryUrls = categories.map((c) => ({
    url: absoluteUrl(`/category/${c.id}`),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const templateUrls = templateList.map((t) => ({
    url: absoluteUrl(`/editor/${t.id}`),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [home, ...categoryUrls, ...templateUrls]
}
