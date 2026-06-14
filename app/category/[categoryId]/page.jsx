import TemplateSelectPage from '@/views/TemplateSelectPage.jsx'
import JsonLd from '@/components/JsonLd.jsx'
import { categories, getCategoryById } from '@/data/categories'
import { getTemplatesByCategory } from '@/templates'
import { absoluteUrl, languageAlternates } from '@/utils/siteUrl'

// Pre-render every category page at build time (fast first paint / good CWV);
// still allow unknown ids to render on demand.
export function generateStaticParams() {
  return categories.map((c) => ({ categoryId: c.id }))
}

export const dynamicParams = true

/**
 * Per-category SEO metadata. Each category gets a unique, keyword-rich title +
 * description and a self-referencing canonical so Google indexes them as
 * distinct landing pages.
 */
export async function generateMetadata({ params }) {
  const category = getCategoryById(params.categoryId)
  if (!category) {
    return { title: 'Category not found', robots: { index: false, follow: false } }
  }

  const count = getTemplatesByCategory(category.id).length
  const title = `${category.name} Templates — Free, Print-ready`
  const description = `${category.tagline}. Browse ${count || 'our'} free ${category.name.toLowerCase()} templates on Template Bazaar — personalise in English, मराठी or हिंदी and download a print-ready PDF in minutes. No sign-up.`
  const path = `/category/${category.id}`

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: 'website',
      title: `${title} · Template Bazaar`,
      description,
      url: path,
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function Page({ params }) {
  const category = getCategoryById(params.categoryId)
  const path = `/category/${params.categoryId}`

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      ...(category
        ? [{ '@type': 'ListItem', position: 2, name: category.name, item: absoluteUrl(path) }]
        : []),
    ],
  }

  const collectionLd = category && {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} Templates`,
    description: category.tagline,
    url: absoluteUrl(path),
    isPartOf: { '@type': 'WebSite', name: 'Template Bazaar', url: absoluteUrl('/') },
  }

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      {collectionLd && <JsonLd data={collectionLd} />}
      <TemplateSelectPage categoryId={params.categoryId} />
    </>
  )
}
