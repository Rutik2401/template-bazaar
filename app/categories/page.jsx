'use client'

import { useMemo, useState } from 'react'
import Layout from '@/components/Layout.jsx'
import CategoryCard from '@/components/CategoryCard.jsx'
import { categories } from '@/data/categories'
import { useI18n } from '@/i18n/I18nProvider'

export default function CategoriesPage() {
  const { t } = useI18n()
  const [query, setQuery] = useState('')

  const q = query.trim().toLowerCase()

  const filtered = useMemo(() => {
    if (!q) return categories
    return categories.filter((cat) => {
      const name = t(`categories.${cat.id}.name`, cat.name)
      const tagline = t(`categories.${cat.id}.tagline`, cat.tagline)
      return `${name} ${tagline} ${cat.name} ${cat.tagline} ${cat.id}`.toLowerCase().includes(q)
    })
  }, [q, t])

  return (
    <Layout>
      <section className="container-page py-12 sm:py-16">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {t('categories.pageTitle', 'All Categories')}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-balance text-base text-ink-muted sm:text-lg">
            {t('categories.pageSubtitle', 'Browse our full collection of template categories')}
          </p>

          {/* Search bar */}
          <div className="mx-auto mt-8 max-w-lg">
            <div className="relative">
              <svg
                viewBox="0 0 24 24"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('categories.searchPlaceholder', 'Search categories…')}
                aria-label={t('categories.searchPlaceholder', 'Search categories')}
                className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-base text-ink shadow-sm outline-none backdrop-blur transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-gold-400 focus:bg-white focus:ring-4 focus:ring-gold-200/50"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-ink-muted hover:bg-slate-100 hover:text-ink"
                  aria-label="Clear search"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}
            </div>
            {q && (
              <p className="mt-3 text-sm text-ink-muted">
                {filtered.length === 0
                  ? t('categories.noResults', 'No categories found')
                  : t('categories.showing', { count: filtered.length, defaultValue: `Showing ${filtered.length} categor${filtered.length === 1 ? 'y' : 'ies'}` })}
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((category, i) => (
            <CategoryCard key={category.id} category={category} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-lg text-ink-muted">{t('categories.emptyState', 'Try a different search term')}</p>
          </div>
        )}
      </section>
    </Layout>
  )
}
