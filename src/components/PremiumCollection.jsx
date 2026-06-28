'use client'

import Link from 'next/link'
import LazyPreview from './LazyPreview.jsx'
import { getTemplateById, getDefaultValues, localizedTemplate } from '@/templates'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Homepage "Premium Collection" showcase — features the Wedding and Engagement
 * categories separately as the flagship designs, each with a row of hand-picked
 * live previews and a link into the full category. Previews lazy-mount.
 */
const COLLECTIONS = [
  {
    categoryId: 'wedding',
    titleKey: 'home.premiumWedding',
    titleFallback: 'Premium Wedding Collection',
    blurbKey: 'home.premiumWeddingBlurb',
    blurbFallback: '20+ designer wedding invitations — royal, floral, illustrated, regional & more.',
    ids: ['wedding-royal', 'wedding-palace', 'wedding-watercolor'],
  },
  {
    categoryId: 'engagement',
    titleKey: 'home.premiumEngagement',
    titleFallback: 'Premium Engagement Collection',
    blurbKey: 'home.premiumEngagementBlurb',
    blurbFallback: '20+ premium engagement cards — ring, diamond, royal, pastel & illustrated.',
    ids: ['engagement-diamond', 'engagement-pink', 'engagement-royal'],
  },
]

function MiniCard({ id, locale }) {
  const template = getTemplateById(id)
  if (!template) return null
  const name = localizedTemplate(template, 'name', locale)
  return (
    <Link
      href={`/editor/${id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gold-200/60 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-lift"
    >
      <div className="overflow-hidden bg-gradient-to-b from-gold-50 to-amber-50/40 p-3">
        <div className="pointer-events-none overflow-hidden rounded-lg ring-1 ring-gold-200/50 transition-transform duration-500 group-hover:scale-[1.02]">
          <LazyPreview template={template} values={getDefaultValues(template)} />
        </div>
      </div>
      <p className="truncate px-4 py-3 text-sm font-semibold text-ink">{name}</p>
    </Link>
  )
}

export default function PremiumCollection() {
  const { t, locale } = useI18n()

  return (
    <section className="container-page mt-16 sm:mt-20">
      {COLLECTIONS.map((c, ci) => (
        <div key={c.categoryId} className={ci > 0 ? 'mt-14' : ''}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <span className="chip bg-gradient-to-r from-gold-100 to-amber-100 text-gold-700">
                ✦ {t('home.premiumBadge', 'Premium Collection')}
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
                {t(c.titleKey, c.titleFallback)}
              </h2>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">
                {t(c.blurbKey, c.blurbFallback)}
              </p>
            </div>
            <Link
              href={`/category/${c.categoryId}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-gold-300 px-5 py-2.5 text-sm font-semibold text-gold-700 transition-all hover:-translate-y-0.5 hover:bg-gold-50"
            >
              {t('home.viewAll', 'View all designs')}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {c.ids.map((id) => (
              <MiniCard key={id} id={id} locale={locale} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
