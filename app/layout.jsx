import './globals.css'
import { Inter, Playfair_Display, Cormorant_Garamond, Poppins } from 'next/font/google'
import { I18nProvider } from '@/i18n/I18nProvider'

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

export const metadata = {
  title: 'Template Bazaar · India\'s Bazaar of Beautiful Templates',
  description:
    'Template Bazaar is India\'s handcrafted marketplace of designer templates — wedding & baras invites, festival greetings, marriage biodatas and job-ready resumes. Pick a design, fill a simple form in English, मराठी or हिंदी, and download a print-ready PDF in minutes. No sign-up.',
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
  icons: { icon: '/favicon.svg' },
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
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
