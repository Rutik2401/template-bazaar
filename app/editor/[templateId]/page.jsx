import EditorPage from '@/views/EditorPage.jsx'
import JsonLd from '@/components/JsonLd.jsx'
import { templateList, getTemplateById, localizedTemplate } from '@/templates'
import { getCategoryById } from '@/data/categories'
import { absoluteUrl, languageAlternates } from '@/utils/siteUrl'

// Pre-render every template editor page at build time; unknown ids fall through
// to on-demand rendering (the view handles the not-found state).
export function generateStaticParams() {
  return templateList.map((t) => ({ templateId: t.id }))
}

export const dynamicParams = true

/** Per-template SEO metadata, localised name/description with a self canonical. */
export async function generateMetadata({ params }) {
  const template = getTemplateById(params.templateId)
  if (!template) {
    return { title: 'Template not found', robots: { index: false, follow: false } }
  }

  const name = localizedTemplate(template, 'name', 'en') || 'Template'
  const description =
    localizedTemplate(template, 'description', 'en') ||
    `Personalise the ${name} template and download a print-ready PDF in minutes — free, no sign-up.`
  const title = `${name} — Free Editable Template`
  const path = `/editor/${template.id}`

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
  const template = getTemplateById(params.templateId)
  const category = template && getCategoryById(template.category)
  const path = `/editor/${params.templateId}`
  const name = template ? localizedTemplate(template, 'name', 'en') : ''

  const breadcrumbLd = template && {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      ...(category
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name: category.name,
              item: absoluteUrl(`/category/${category.id}`),
            },
          ]
        : []),
      {
        '@type': 'ListItem',
        position: category ? 3 : 2,
        name,
        item: absoluteUrl(path),
      },
    ],
  }

  const creativeWorkLd = template && {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    description: localizedTemplate(template, 'description', 'en') || name,
    about: category ? category.name : undefined,
    url: absoluteUrl(path),
    inLanguage: ['en-IN', 'mr-IN', 'hi-IN'],
    isAccessibleForFree: true,
    isPartOf: { '@type': 'WebSite', name: 'Template Bazaar', url: absoluteUrl('/') },
  }

  return (
    <>
      {breadcrumbLd && <JsonLd data={breadcrumbLd} />}
      {creativeWorkLd && <JsonLd data={creativeWorkLd} />}
      <EditorPage templateId={params.templateId} />
    </>
  )
}
