'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Art-deco ornamental pieces ────────────────────────────────────────── */

function DecoCorner({ className = '' }) {
  return (
    <svg viewBox="0 0 130 130" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square">
      <path d="M6 6h60M6 6v60" />
      <path d="M14 14h44M14 14v44" opacity="0.7" />
      <path d="M6 6l40 40" opacity="0.5" />
      <path d="M70 6l10 10M6 70l10 10" />
      {/* deco fan */}
      <path d="M22 22c0 14 6 26 18 32M22 22c14 0 26 6 32 18" opacity="0.85" />
      <circle cx="22" cy="22" r="3" fill="currentColor" stroke="none" />
      <path d="M58 26l8-8 8 8-8 8-8-8Z" fill="currentColor" fillOpacity="0.25" />
    </svg>
  )
}

function DecoCrest({ className = '' }) {
  return (
    <svg viewBox="0 0 160 70" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M80 6l24 18-24 18-24-18 24-18Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M80 16l12 9-12 9-12-9 12-9Z" />
      <path d="M2 30h44M114 30h44" strokeLinecap="round" />
      <path d="M30 30l-8-8M30 30l-8 8" opacity="0.7" />
      <path d="M130 30l8-8M130 30l8 8" opacity="0.7" />
      <circle cx="80" cy="58" r="3.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function DecoRule({ className = '' }) {
  return (
    <svg viewBox="0 0 280 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M8 10h96M176 10h96" strokeLinecap="round" />
      <path d="M140 2l10 8-10 8-10-8 10-8Z" fill="currentColor" fillOpacity="0.22" />
      <circle cx="116" cy="10" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="164" cy="10" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Luxury gold wedding invitation — black & gold, art-deco border,
 * gold-foil gradient text. Opulent and very premium.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function LuxuryWedding({ values }) {
  const { t } = useI18n()
  const bride = values.brideName?.trim() || 'Priya'
  const groom = values.groomName?.trim() || 'Arjun'
  const date = formatDate(values.weddingDate, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'The Grand Palace, Jaipur'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#0b0b0d] font-serif text-gold-200"
    >
      {/* deep onyx gradient + subtle gold vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#15140f] via-[#0b0b0d] to-[#000000]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,134,11,0.16),_transparent_62%)]" />

      {/* double deco frame */}
      <div className="absolute inset-6 border border-gold-500/70" />
      <div className="absolute inset-[34px] border border-gold-500/30" />

      {/* deco corners */}
      <DecoCorner className="absolute left-8 top-8 h-20 w-20 text-gold-400" />
      <DecoCorner className="absolute right-8 top-8 h-20 w-20 text-gold-400 [transform:scaleX(-1)]" />
      <DecoCorner className="absolute bottom-8 left-8 h-20 w-20 text-gold-400 [transform:scaleY(-1)]" />
      <DecoCorner className="absolute bottom-8 right-8 h-20 w-20 text-gold-400 [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-20 py-20 text-center">
        <header className="flex flex-col items-center">
          <DecoCrest className="h-14 w-44 text-gold-400" />
          <p className="mt-5 font-sans text-[11px] font-semibold uppercase tracking-[0.55em] text-gold-400">
            {t('template.common.togetherWithFamilies', 'Together with their families')}
          </p>
          <p className="mt-4 text-[15px] italic tracking-wide text-gold-200/70">
            {t('template.common.requestPresence', 'request the pleasure of your company')}
          </p>
        </header>

        <main className="flex flex-col items-center">
          <h1 className="font-display text-[60px] font-semibold leading-[1.02] tracking-tight">
            <span
              data-pdf-color="#d4a437"
              className="bg-gradient-to-b from-gold-100 via-gold-300 to-gold-600 bg-clip-text text-transparent"
            >
              {bride}
            </span>
          </h1>

          <DecoRule className="my-5 h-5 w-56 text-gold-400" />

          <span className="font-display text-3xl italic tracking-wide text-gold-300/90">{t('template.common.and', '&')}</span>

          <DecoRule className="my-5 h-5 w-56 text-gold-400" />

          <h1 className="font-display text-[60px] font-semibold leading-[1.02] tracking-tight">
            <span
              data-pdf-color="#d4a437"
              className="bg-gradient-to-b from-gold-100 via-gold-300 to-gold-600 bg-clip-text text-transparent"
            >
              {groom}
            </span>
          </h1>
        </main>

        <footer className="flex w-full flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-1 border-y border-gold-500/40 px-10 py-4">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.45em] text-gold-400">
              {t('template.common.saveTheDate', 'Save the Date')}
            </p>
            <p className="font-display text-2xl tracking-wide text-gold-100">{date}{time && ` · ${time}`}</p>
          </div>
          <p className="max-w-[22rem] text-[16px] leading-snug tracking-wide text-gold-200/90">{venue}</p>
          <p className="text-[13px] italic tracking-wide text-gold-300/70">
            {t('template.common.withBestCompliments', 'With best compliments from')}
            <br />
            <span className="font-display text-lg not-italic tracking-wide text-gold-100">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
