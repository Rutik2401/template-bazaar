import { siteUrl } from '@/utils/siteUrl'

/**
 * robots.txt served at /robots.txt. Allows the whole public site, blocks the
 * API and the headless /print render targets, and points crawlers at the
 * sitemap.
 *
 * @returns {import('next').MetadataRoute.Robots}
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/print/'],
      },
    ],
    sitemap: `${siteUrl()}/sitemap.xml`,
    host: siteUrl(),
  }
}
