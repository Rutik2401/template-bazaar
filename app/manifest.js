/**
 * PWA web app manifest served at /manifest.webmanifest. Enables "Add to Home
 * Screen", a branded theme colour and richer mobile install metadata.
 *
 * @returns {import('next').MetadataRoute.Manifest}
 */
export default function manifest() {
  return {
    name: 'Template Bazaar · India\'s Bazaar of Beautiful Templates',
    short_name: 'Template Bazaar',
    description:
      'Free, print-ready Indian templates — wedding & baras invites, festival greetings, marriage biodatas and resumes. Personalise in English, मराठी or हिंदी and download in minutes.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    lang: 'en-IN',
    categories: ['lifestyle', 'productivity', 'graphics'],
    icons: [
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
