'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Art-deco gold motifs ──────────────────────────────────────────────── */

/** Top-centered art-deco fan — radiating hairlines from a small disc. */
function DecoFan({ className = '' }) {
  return (
    <svg viewBox="0 0 160 84" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      {/* radiating rays from base centre */}
      <path d="M80 78V14" opacity="0.95" />
      <path d="M80 78L58 18M80 78L102 18" opacity="0.8" />
      <path d="M80 78L38 26M80 78L122 26" opacity="0.6" />
      <path d="M80 78L20 38M80 78L140 38" opacity="0.4" />
      {/* arcing brim */}
      <path d="M22 40C40 18 64 8 80 8s40 10 58 32" opacity="0.7" />
      <path d="M34 48C48 30 64 22 80 22s32 8 46 26" opacity="0.45" />
      {/* crown disc */}
      <circle cx="80" cy="78" r="4.5" fill="currentColor" stroke="none" />
      <circle cx="80" cy="8" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Hairline divider with a tiny lozenge centre. */
function HairlineDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 260 14" className={className} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M4 7h108M148 7h108" strokeLinecap="round" />
      <path d="M130 1.5l9 5.5-9 5.5-9-5.5 9-5.5Z" fill="currentColor" fillOpacity="0.3" />
      <circle cx="112" cy="7" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="148" cy="7" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Black & Gold engagement card — sleek modern fashion-editorial luxury.
 * Matte black ground, thin gold geometric frame, top art-deco fan motif,
 * spaced-caps eyebrow, refined gold serif names, hairline rule, tidy caps meta.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function BlackGoldEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const date = formatDate(values.date, 'November 20, 2025')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#0a0a0a] font-serif text-gold-200"
    >
      {/* matte black ground with the faintest centred gold glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121110] via-[#0a0a0a] to-[#060606]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,_rgba(201,162,77,0.10),_transparent_62%)]" />

      {/* thin gold geometric frame — double hairline keyline */}
      <div className="absolute inset-8 border border-gold-500/60" />
      <div className="absolute inset-[38px] border border-gold-500/20" />

      {/* corner tick accents on the frame */}
      <div className="absolute left-8 top-8 h-5 w-5 border-l border-t border-gold-300/80" />
      <div className="absolute right-8 top-8 h-5 w-5 border-r border-t border-gold-300/80" />
      <div className="absolute bottom-8 left-8 h-5 w-5 border-b border-l border-gold-300/80" />
      <div className="absolute bottom-8 right-8 h-5 w-5 border-b border-r border-gold-300/80" />

      {/* content */}
      <div className="relative flex h-full flex-col items-center px-[84px] pt-[96px] pb-[104px] text-center">
        {/* top-centered art-deco fan motif */}
        <DecoFan className="h-[88px] w-44 text-gold-400" />

        {/* eyebrow */}
        <p className="mt-9 font-sans text-[12px] font-medium uppercase tracking-[0.62em] text-gold-400">
          {t('template.common.engagement', 'Engagement')}
        </p>

        {/* couple name — large refined gold serif, gradient clip-text */}
        <h1 className="mt-auto font-display text-[58px] font-medium leading-[1.05] tracking-tight">
          <span
            data-pdf-color="#c9a24d"
            className="bg-gradient-to-b from-gold-100 via-gold-300 to-gold-500 bg-clip-text text-transparent"
          >
            {couple}
          </span>
        </h1>

        {/* hairline gold divider */}
        <HairlineDivider className="mt-8 h-3.5 w-56 text-gold-400" />

        {/* meta — date · time · venue, tidy spaced caps */}
        <div className="mt-auto flex flex-col items-center gap-3">
          <p className="font-sans text-[13px] font-medium uppercase tracking-[0.42em] text-gold-100">
            {date}{time && ` · ${time}`}
          </p>
          <p className="font-sans text-[12px] font-medium uppercase tracking-[0.36em] text-gold-300/80">
            {venue}
          </p>
        </div>
      </div>
    </div>
  )
}
