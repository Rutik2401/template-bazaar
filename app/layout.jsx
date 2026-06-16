import './globals.css'
import { Inter, Playfair_Display, Cormorant_Garamond, Poppins } from 'next/font/google'
import { I18nProvider } from '@/i18n/I18nProvider'
import AuthProvider from '@/components/AuthProvider.jsx'
import JsonLd from '@/components/JsonLd.jsx'
import { siteUrl, absoluteUrl } from '@/utils/siteUrl'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
})
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})
// Great Vibes (calligraphy / --font-script) is self-hosted via @font-face in
// globals.css. next/font is intentionally avoided for it — bundling a 5th
// Google font through next/font triggered an out-of-memory crash during the
// static-generation build step.

const SITE_NAME = 'Template Bazaar'
const DEFAULT_TITLE = `${SITE_NAME} · India's Bazaar of Beautiful Templates`
const DEFAULT_DESCRIPTION =
  'Template Bazaar is India\'s handcrafted marketplace of designer templates — wedding & baras invites, festival greetings, marriage biodatas and job-ready resumes. Pick a design, fill a simple form in English, मराठी or हिंदी, and download a print-ready PDF in minutes. No sign-up.'

export const metadata = {
  // Absolute base so canonical / Open Graph / sitemap URLs resolve correctly on
  // every Vercel deployment. Set NEXT_PUBLIC_SITE_URL to your real domain.
  metadataBase: new URL(siteUrl()),
  title: {
    default: DEFAULT_TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'wedding invitation template',
    'marriage biodata',
    'resume template',
    'festival greetings',
    'birthday invitation',
    'Indian templates',
    'Marathi',
    'Hindi',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: '/',
    locale: 'en_IN',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
  category: 'design',
}

/** Sitewide structured data — identifies the brand + the searchable site. */
const ORGANIZATION_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: siteUrl(),
  logo: absoluteUrl('/favicon.svg'),
  description: DEFAULT_DESCRIPTION,
}

const WEBSITE_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: siteUrl(),
  inLanguage: ['en-IN', 'mr-IN', 'hi-IN'],
}

export const viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${poppins.variable}`}
    >
      <body>
        <JsonLd data={ORGANIZATION_LD} />
        <JsonLd data={WEBSITE_LD} />
        <AuthProvider>
          <I18nProvider>{children}</I18nProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
