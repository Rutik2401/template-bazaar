'use client'

import Link from 'next/link'
import Brand from './Brand.jsx'
import LanguageSwitcher from '@/components/LanguageSwitcher.jsx'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Sticky frosted top bar. Brand on the left; on the right: nav links (revealed
 * progressively as the viewport widens), the language switcher, and a primary
 * CTA. Mobile stays intentionally minimal (brand + language) — the hero carries
 * the primary CTA there — so nothing crowds or overflows on small screens.
 */
export default function Navbar() {
  const { t } = useI18n()

  return (
    <header className="glass-bar sticky top-0 z-40">
      <div className="container-page flex h-16 items-center justify-between gap-2">
        <Brand />

        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/category/wedding"
            className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-slate-100 hover:text-ink sm:inline-flex"
          >
            {t('nav.templates', 'Templates')}
          </Link>
          <Link
            href="/#how-it-works"
            className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-slate-100 hover:text-ink md:inline-flex"
          >
            {t('nav.howItWorks', 'How it works')}
          </Link>
          <Link
            href="/#faq"
            className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-slate-100 hover:text-ink md:inline-flex"
          >
            {t('faq.badge', 'FAQ')}
          </Link>

          <span aria-hidden className="mx-1 hidden h-5 w-px bg-slate-200 sm:block" />

          <LanguageSwitcher />

          <Link
            href="/category/wedding"
            className="btn-gold hidden whitespace-nowrap rounded-full px-4 py-2 text-sm sm:inline-flex"
          >
            {t('home.ctaPrimary', 'Explore the bazaar')}
          </Link>
        </nav>
      </div>
    </header>
  )
}
