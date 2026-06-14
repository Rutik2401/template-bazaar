'use client'

import Link from 'next/link'
import Brand from './Brand.jsx'
import { categories } from '@/data/categories'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Global site footer. Deliberately links ONLY to destinations that actually
 * exist — the template category pages and the on-page "how it works" section —
 * so nothing here is a dead placeholder. Multi-column on desktop, stacked and
 * centered on mobile. Rendered by Layout on every non-`bare` page.
 */
export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  const half = Math.ceil(categories.length / 2)
  const colA = categories.slice(0, half)
  const colB = categories.slice(half)

  const CatLinks = ({ items }) => (
    <ul className="mt-4 space-y-2.5">
      {items.map((c) => (
        <li key={c.id}>
          <Link
            href={`/category/${c.id}`}
            className="text-[15px] text-ink-muted transition-colors hover:text-ink"
          >
            {t(`categories.${c.id}.name`, c.name)}
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <footer className="mt-auto border-t border-slate-200/70 bg-white/70 backdrop-blur-xl">
      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-12 lg:gap-8">
          {/* Brand + tagline */}
          <div className="sm:col-span-2 lg:col-span-6">
            <div className="flex justify-center sm:justify-start">
              <Brand />
            </div>
            <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-ink-muted sm:mx-0">
              {t(
                'footer.tagline',
                "India's handcrafted bazaar of beautiful templates — for every celebration and every milestone.",
              )}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-start">
              <Link
                href="/#how-it-works"
                className="inline-flex text-[15px] font-semibold text-gold-700 transition-colors hover:text-gold-500"
              >
                {t('footer.howItWorks', 'How it works')} →
              </Link>
              <Link
                href="/#faq"
                className="inline-flex text-[15px] font-semibold text-gold-700 transition-colors hover:text-gold-500"
              >
                {t('faq.badge', 'FAQ')} →
              </Link>
            </div>
          </div>

          {/* Template categories — split across two columns, all real pages */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wide text-ink">
              {t('footer.templatesHeading', 'Templates')}
            </h3>
            <CatLinks items={colA} />
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wide text-ink">
              {t('footer.moreHeading', 'More templates')}
            </h3>
            <CatLinks items={colB} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-2 border-t border-slate-200/70 pt-6 text-center text-sm text-ink-muted sm:flex-row sm:justify-between sm:gap-4 sm:text-left">
          <p>
            © {year} {t('common.appName', 'Template Bazaar')} ·{' '}
            {t('footer.rights', 'All rights reserved.')}
          </p>
          <p className="font-medium text-ink-soft">
            {t('footer.madeWithLove', 'Made with ❤️ in India')}
          </p>
        </div>
      </div>
    </footer>
  )
}
