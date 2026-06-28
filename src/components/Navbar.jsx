'use client'

import Link from 'next/link'
import Brand from './Brand.jsx'
import LanguageSwitcher from '@/components/LanguageSwitcher.jsx'
import AuthButton from '@/components/AuthButton.jsx'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Sticky frosted top bar. Brand on the left; nav links and controls on the
 * right. Clean and minimal — no search in the header.
 */
export default function Navbar() {
  const { t } = useI18n()

  return (
    <header className="glass-bar sticky top-0 z-40">
      <div className="container-page flex h-16 items-center gap-3">
        <Brand />

        <nav className="flex flex-1 items-center justify-end gap-1 sm:gap-2">
          <Link
            href="/categories"
            className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-slate-100 hover:text-ink md:inline-flex"
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
          <AuthButton />
        </nav>
      </div>
    </header>
  )
}
