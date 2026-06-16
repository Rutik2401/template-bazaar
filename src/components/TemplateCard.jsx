'use client'

import Link from 'next/link'
import LazyPreview from './LazyPreview.jsx'
import { getTemplateById, getDefaultValues, localizedTemplate, isPremium } from '@/templates'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Template card showing a *real* live preview thumbnail (rendered from the
 * actual template with its default values) — so what the user sees is exactly
 * what they'll get. The preview is lazy-mounted (see LazyPreview) so galleries
 * with 20+ designs stay smooth.
 *
 * Wedding & engagement (the Premium Collection) get a larger, gold-framed
 * thumbnail treatment so the gallery instantly reads as premium.
 *
 * It receives only the serializable `templateId` and resolves the template from
 * the registry here on the client, so a server component never has to serialize
 * the template's React `Preview` across the boundary.
 */
const PREMIUM_CATEGORIES = new Set(['wedding', 'engagement'])

export default function TemplateCard({ templateId, index = 0 }) {
  const { t, locale } = useI18n()
  const template = getTemplateById(templateId)
  if (!template) return null

  const previewValues = getDefaultValues(template)
  const name = localizedTemplate(template, 'name', locale)
  const description = localizedTemplate(template, 'description', locale)
  const premium = PREMIUM_CATEGORIES.has(template.category)

  return (
    <Link
      href={`/editor/${template.id}`}
      className={`group flex animate-fade-up flex-col overflow-hidden rounded-2.5xl border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold-200/50 ${
        premium ? 'border-gold-200/70 hover:border-gold-300' : 'border-slate-200/70 hover:border-gold-200'
      }`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Live thumbnail (lazy-mounted) */}
      <div
        className={`relative overflow-hidden ${
          premium ? 'bg-gradient-to-b from-gold-50 to-amber-50/40 p-3 sm:p-4' : 'bg-gradient-to-b from-slate-50 to-slate-100 p-5'
        }`}
      >
        <div
          className={`pointer-events-none overflow-hidden rounded-xl shadow-card ring-1 transition-transform duration-500 group-hover:scale-[1.02] ${
            premium ? 'ring-gold-200/50' : 'ring-black/5'
          }`}
        >
          <LazyPreview template={template} values={previewValues} />
        </div>
        {/* Badge only on paid designs — free templates stay clean (no badge). */}
        {isPremium(template) && (
          <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-gradient-to-b from-gold-400 to-gold-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden>
              <path d="M3 7l4.5 3L12 4l4.5 6L21 7l-1.8 11H4.8L3 7z" />
            </svg>
            {t('common.premium')}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-bold text-ink">{name}</h3>
          <p className="mt-0.5 truncate text-sm text-ink-muted">{description}</p>
        </div>
        <span className="btn-gold shrink-0 !px-4 !py-2.5 !text-sm transition-transform group-hover:scale-105">
          {t('common.use')}
        </span>
      </div>
    </Link>
  )
}
