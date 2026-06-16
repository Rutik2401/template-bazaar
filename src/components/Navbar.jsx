'use client'

import Link from 'next/link'
import Brand from './Brand.jsx'
import CategorySearch from '@/components/CategorySearch.jsx'
import LanguageSwitcher from '@/components/LanguageSwitcher.jsx'
import AuthButton from '@/components/AuthButton.jsx'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Sticky frosted top bar. Brand on the left; a category search in the middle
 * (live-filters all 25+ categories and jumps straight to one); on the right:
 * nav links (revealed as the viewport widens), the language switcher and the
 * auth control. The search replaces the old primary CTA in the header.
 */
export default function Navbar() {
  const { t } = useI18n()

  return (
    <header className="glass-bar sticky top-0 z-40">
      <div className="container-page flex h-16 items-center gap-3">
        <Brand />

        {/* Category search — present on every page; jumps to a category page. */}
        <div className="min-w-0 flex-1">
          <CategorySearch />
        </div>

        <nav className="flex shrink-0 items-center gap-1 sm:gap-2">
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
          <AuthButton />
        </nav>
      </div>
    </header>
  )
}
