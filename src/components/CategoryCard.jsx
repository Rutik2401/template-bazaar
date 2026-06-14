'use client'

import Link from 'next/link'
import { getTemplatesByCategory } from '@/templates'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Premium category card for the homepage.
 * Not a generic box — a gradient hero band, floating glyph, and live count.
 */
export default function CategoryCard({ category, index = 0 }) {
  const { t } = useI18n()
  const count = getTemplatesByCategory(category.id).length

  return (
    <Link
      href={`/category/${category.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2.5xl border border-slate-200/80 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300/80 hover:shadow-lift animate-fade-up"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      {/* Gradient hero band */}
      <div className={`relative h-36 bg-gradient-to-br ${category.accent}`}>
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute -bottom-5 left-6 grid h-16 w-16 place-items-center rounded-2xl border border-white/40 bg-white/15 text-3xl shadow-soft backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
          {category.icon}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-8">
        <h3 className="text-xl font-bold text-ink">
          {t(`categories.${category.id}.name`, category.name)}
        </h3>
        <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">
          {t(`categories.${category.id}.tagline`, category.tagline)}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-ink-soft">
            {count} {t('common.templates')}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-transform group-hover:translate-x-1">
            {t('common.browse')}
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
