'use client'

import Link from 'next/link'
import Brand from './Brand.jsx'
import LanguageSwitcher from '@/components/LanguageSwitcher.jsx'
import { useI18n } from '@/i18n/I18nProvider'

/** Sticky top bar — frosted glass, brand left, nav links + language switch right. */
export default function Navbar() {
  const { t } = useI18n()

  return (
    <header className="glass-bar sticky top-0 z-40">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Brand />

        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/category/wedding"
            className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-slate-100 hover:text-ink sm:inline-flex"
          >
            {t('nav.templates', 'Templates')}
          </Link>
          <span aria-hidden className="mx-1 hidden h-5 w-px bg-slate-200 sm:block" />
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}
