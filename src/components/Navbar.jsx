'use client'

import Brand from './Brand.jsx'
import LanguageSwitcher from '@/components/LanguageSwitcher.jsx'
import { useI18n } from '@/i18n/I18nProvider'

/** Minimal sticky top bar — frosted glass, brand left, language switch right. */
export default function Navbar() {
  const { t } = useI18n()

  return (
    <header className="glass-bar sticky top-0 z-40">
      <div className="container-page flex h-16 items-center justify-between">
        <Brand />
        <div className="flex items-center gap-4">
          <span className="hidden text-sm font-medium text-ink-muted sm:block">
            {t('nav.tagline')}
          </span>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
