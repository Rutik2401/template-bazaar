import HomePage from '@/views/HomePage.jsx'
import JsonLd from '@/components/JsonLd.jsx'
import { languageAlternates, absoluteUrl } from '@/utils/siteUrl'
import { resolvedFaq } from '@/data/faq'
import { dictionaries } from '@/i18n/locales'

export const metadata = {
  alternates: {
    canonical: '/',
    languages: languageAlternates('/'),
  },
}

// FAQPage rich result — built from the SAME data the visible accordion renders
// (src/data/faq.js), resolved to English copy on the server.
const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: resolvedFaq(dictionaries.en).map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

const WEBPAGE_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Template Bazaar · India\'s Bazaar of Beautiful Templates',
  url: absoluteUrl('/'),
  inLanguage: 'en-IN',
}

export default function Page() {
  return (
    <>
      <JsonLd data={WEBPAGE_LD} />
      <JsonLd data={FAQ_LD} />
      <HomePage />
    </>
  )
}
