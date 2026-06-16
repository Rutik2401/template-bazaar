'use client'

import { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout.jsx'
import TemplateCard from '@/components/TemplateCard.jsx'
import { getCategoryById } from '@/data/categories'
import { getTemplatesByCategory, isPremium } from '@/templates'
import { cn } from '@/utils/cn'
import { useI18n } from '@/i18n/I18nProvider'

export default function TemplateSelectPage({ categoryId }) {
  const { t } = useI18n()
  const [filter, setFilter] = useState('all') // 'all' | 'free' | 'premium'
  const category = getCategoryById(categoryId)
  const allTemplates = getTemplatesByCategory(categoryId)
  const hasPremium = allTemplates.some(isPremium)
  const templates = allTemplates.filter((tpl) =>
    filter === 'free' ? !isPremium(tpl) : filter === 'premium' ? isPremium(tpl) : true,
  )

  if (!category) {
    return (
      <Layout>
        <div className="container-page text-center">
          <h1 className="text-2xl font-bold text-ink">{t('categoryPage.categoryNotFound')}</h1>
          <Link href="/" className="btn-primary mt-6">
            {t('common.backHome')}
          </Link>
        </div>
      </Layout>
    )
  }

  const name = t(`categories.${category.id}.name`, category.name)
  const tagline = t(`categories.${category.id}.tagline`, category.tagline)

  return (
    <Layout>
      <div className="container-page">
        {/* Breadcrumb / back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted transition-colors hover:text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t('categoryPage.allCategories')}
        </Link>

        <header className="mt-6 max-w-2xl animate-fade-up">
          <h1 className="flex items-center gap-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            <span aria-hidden className="text-2xl sm:text-3xl">{category.icon}</span>
            {name}
          </h1>
          <p className="mt-2 text-lg text-ink-muted">{tagline}</p>
        </header>

        {/* Free / Premium filter — only shown when the category actually has both. */}
        {hasPremium && (
          <div className="mt-7 inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            {[
              ['all', t('categoryPage.filterAll', 'All')],
              ['free', t('categoryPage.filterFree', 'Free')],
              ['premium', t('common.premium', 'Premium')],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-semibold transition-colors',
                  filter === key
                    ? 'bg-ink text-white shadow-sm'
                    : 'text-ink-muted hover:text-ink',
                )}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <div className="mt-7 grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
          {templates.map((template, i) => (
            <TemplateCard key={template.id} templateId={template.id} index={i} />
          ))}
        </div>

        {templates.length === 0 && (
          <p className="mt-12 text-center text-ink-muted">{t('categoryPage.comingSoon')}</p>
        )}
      </div>
    </Layout>
  )
}
