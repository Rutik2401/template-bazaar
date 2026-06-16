'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Gold ornamentation (filigree for the phone-card invitation) ─────────── */

/** Ornate top medallion — concentric rings, radiating petals and a paisley crown. */
function Medallion({ className = '' }) {
  const petals = Array.from({ length: 16 })
  return (
    <svg viewBox="0 0 160 160" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="80" cy="80" r="74" opacity="0.3" />
      <circle cx="80" cy="80" r="62" opacity="0.5" />
      <g>
        {petals.map((_, i) => (
          <path
            key={i}
            d="M80 16c4 12 4 24 0 36-4-12-4-24 0-36Z"
            fill="currentColor"
            fillOpacity="0.16"
            stroke="none"
            transform={`rotate(${(i / petals.length) * 360} 80 80)`}
          />
        ))}
      </g>
      <circle cx="80" cy="80" r="40" opacity="0.65" />
      <circle cx="80" cy="80" r="26" fill="currentColor" fillOpacity="0.1" stroke="none" />
      <circle cx="80" cy="80" r="20" opacity="0.8" />
      <circle cx="80" cy="80" r="5" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Long gold filigree divider — tapering rules, paisley swirls and a lotus diamond. */
function Filigree({ className = '' }) {
  return (
    <svg viewBox="0 0 340 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M16 14h112M212 14h112" strokeLinecap="round" />
      {/* central lotus diamond */}
      <path d="M170 3l13 11-13 11-13-11 13-11Z" fill="currentColor" fillOpacity="0.22" />
      <path d="M170 8l7 6-7 6-7-6 7-6Z" />
      {/* flanking paisley swirls */}
      <path d="M128 14c10 0 15-5 15-11M212 14c-10 0-15-5-15-11" opacity="0.55" />
      <path d="M128 14c10 0 15 5 15 11M212 14c-10 0-15 5-15 11" opacity="0.35" />
      <circle cx="143" cy="14" r="3" fill="currentColor" stroke="none" />
      <circle cx="197" cy="14" r="3" fill="currentColor" stroke="none" />
      <circle cx="24" cy="14" r="2" fill="currentColor" stroke="none" />
      <circle cx="316" cy="14" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Corner spray — sweeping scroll with beaded tips, used at the four corners. */
function CornerSpray({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M8 8c36 0 54 6 72 24s24 36 24 72" opacity="0.85" />
      <path d="M8 22c26 0 40 4 54 18s18 28 18 54" opacity="0.45" />
      <path d="M14 14c0 18 9 30 27 30" opacity="0.7" />
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
      <circle cx="84" cy="40" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="40" cy="84" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * WhatsApp wedding card — a TALL vertical phone-screen invitation (720 × 1280).
 * Deep maroon → plum gradient with gold filigree; ornate top medallion, script
 * couple name, a stylised day / month / year date block, time, venue and a
 * rounded RSVP pill. Designed to look premium when shared on WhatsApp.
 */
export default function WhatsappWedding({ values }) {
  const { t } = useI18n()
  const coupleName = values.coupleName?.trim() || 'Aarav & Sanika'
  const date = formatDate(values.weddingDate, 'December 15, 2025')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'The Grand Palace, Jaipur'
  const rsvpContact = values.rsvpContact?.trim() || '+91 98765 43210'

  // Split the formatted date into an elegant day / month / year block.
  const parts = date.split(/[\s,]+/).filter(Boolean)
  const monthName = parts.find((p) => /[A-Za-z]/.test(p)) || ''
  const dayNum = parts.find((p) => /^\d{1,2}$/.test(p)) || ''
  const yearNum = parts.find((p) => /^\d{4}$/.test(p)) || ''
  const hasBlock = dayNum && monthName && yearNum

  return (
    <div
      data-export-root
      className="relative h-[1280px] w-[720px] overflow-hidden bg-[#3a0d1a] font-serif text-gold-200"
    >
      {/* Deep maroon → plum gradient with warm gold vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4a0f20] via-[#3a0e2a] to-[#1f0820]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_22%,_rgba(212,164,55,0.22),_transparent_58%)]" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(ellipse_at_bottom,_rgba(120,30,70,0.4),_transparent_72%)]" />

      {/* Double gold keyline frame */}
      <div className="absolute inset-7 rounded-[28px] border-[2px] border-gold-500/60" />
      <div className="absolute inset-[38px] rounded-[22px] border border-gold-400/30" />

      {/* Corner sprays */}
      <CornerSpray className="absolute left-9 top-9 h-24 w-24 text-gold-400/80" />
      <CornerSpray className="absolute right-9 top-9 h-24 w-24 text-gold-400/80 [transform:scaleX(-1)]" />
      <CornerSpray className="absolute bottom-9 left-9 h-24 w-24 text-gold-400/80 [transform:scaleY(-1)]" />
      <CornerSpray className="absolute bottom-9 right-9 h-24 w-24 text-gold-400/80 [transform:scale(-1)]" />

      {/* Content — vertically stacked, generously spaced for a tall phone screen */}
      <div className="relative flex h-full flex-col items-center px-[72px] pb-[78px] pt-[96px] text-center">
        {/* Ornate monogram medallion */}
        <div className="relative flex items-center justify-center">
          <Medallion className="h-44 w-44 text-gold-400" />
          <span
            data-pdf-color="#f0d99b"
            className="absolute font-script text-[44px] leading-none text-gold-200"
          >
            {coupleName
              .split('&')
              .map((s) => s.trim()[0] || '')
              .join('·')}
          </span>
        </div>

        {/* Together with our families */}
        <p className="mt-10 font-sans text-[13px] font-semibold uppercase tracking-[0.5em] text-gold-400">
          {t('template.common.togetherWithFamilies', 'Together with our families')}
        </p>

        {/* The couple name in script */}
        <h1 className="mt-8 px-2 font-script text-[88px] font-medium leading-[0.94]">
          <span
            data-pdf-color="#e7c45c"
            className="bg-gradient-to-b from-gold-100 via-gold-300 to-gold-600 bg-clip-text text-transparent"
          >
            {coupleName}
          </span>
        </h1>

        {/* Gold filigree divider */}
        <Filigree className="mt-10 h-7 w-[16rem] text-gold-400" />

        {/* Stylised date block: day / month / year */}
        <div className="mt-12 flex flex-col items-center">
          {hasBlock ? (
            <div className="flex items-stretch justify-center gap-7">
              <div className="flex flex-col items-center justify-center">
                <span className="font-display text-[64px] font-semibold leading-none text-gold-100">{dayNum}</span>
              </div>
              <div className="flex flex-col items-center justify-center border-x border-gold-500/40 px-7">
                <span className="font-sans text-[15px] font-semibold uppercase tracking-[0.42em] text-gold-300">
                  {monthName}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="font-display text-[40px] leading-none tracking-wide text-gold-100">{yearNum}</span>
              </div>
            </div>
          ) : (
            <span className="font-display text-[40px] leading-none tracking-wide text-gold-100">{date}</span>
          )}
          {time && (
            <span className="mt-5 font-sans text-[15px] font-semibold uppercase tracking-[0.42em] text-gold-300">
              {time}
            </span>
          )}
        </div>

        {/* Venue */}
        <div className="mt-12 flex max-w-[24rem] flex-col items-center gap-2">
          <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.46em] text-gold-400">
            {t('template.wedding.venue', 'Venue')}
          </span>
          <span className="text-[22px] leading-snug tracking-wide text-gold-100">{venue}</span>
        </div>

        {/* Spacer pushes the RSVP pill to the bottom */}
        <div className="flex-1" />

        {/* RSVP pill */}
        <div className="flex items-center justify-center gap-3 rounded-full border border-gold-400/70 bg-gold-500/10 px-9 py-4">
          <span className="font-sans text-[13px] font-semibold uppercase tracking-[0.4em] text-gold-300">
            {t('template.common.rsvp', 'RSVP')}
          </span>
          <span className="text-gold-500/70">&middot;</span>
          <span className="font-display text-[20px] tracking-wide text-gold-100">{rsvpContact}</span>
        </div>
      </div>
    </div>
  )
}
