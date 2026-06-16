'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Traditional ornaments ──────────────────────────────────────────────── */

/** Interlocking engagement-ring crest for the central emblem. */
function RingCrest({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="60" cy="60" r="50" opacity="0.3" />
      <circle cx="60" cy="60" r="42" strokeDasharray="2 6" opacity="0.55" />
      {/* two interlocking bands */}
      <circle cx="48" cy="66" r="22" />
      <circle cx="72" cy="66" r="22" />
      {/* solitaire on each band */}
      <path d="M48 44l5 7-5 7-5-7 5-7Z" fill="currentColor" stroke="none" />
      <path d="M72 44l5 7-5 7-5-7 5-7Z" fill="currentColor" fillOpacity="0.6" stroke="none" />
      <circle cx="60" cy="60" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Hanging lamp / diya finial used between the family columns. */
function Diya({ className = '' }) {
  return (
    <svg viewBox="0 0 60 90" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M30 4v18" strokeLinecap="round" />
      <path d="M12 40c0 14 8 22 18 22s18-8 18-22c-6 4-30 4-36 0Z" fill="currentColor" fillOpacity="0.14" />
      <path d="M30 22c-6 2-9 8-9 16M30 22c6 2 9 8 9 16" opacity="0.6" />
      {/* flame */}
      <path d="M30 18c4-4 4-9 0-14-4 5-4 10 0 14Z" fill="currentColor" stroke="none" />
      <circle cx="30" cy="70" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Lotus medallion crowning each family column. */
function LotusBadge({ className = '' }) {
  const petals = Array.from({ length: 8 })
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="40" cy="40" r="30" opacity="0.4" />
      {petals.map((_, i) => (
        <path
          key={i}
          d="M40 12c4 9 4 17 0 25-4-8-4-16 0-25Z"
          fill="currentColor"
          fillOpacity="0.16"
          stroke="none"
          transform={`rotate(${(i / petals.length) * 360} 40 40)`}
        />
      ))}
      <circle cx="40" cy="40" r="8" fill="currentColor" fillOpacity="0.25" stroke="none" />
      <circle cx="40" cy="40" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Scrolling vine band for the footer banner edges. */
function VineRule({ className = '' }) {
  return (
    <svg viewBox="0 0 200 18" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 9c14 0 18-7 32-7s18 14 32 14 18-14 32-14 18 14 32 14 18-7 32-7" strokeLinecap="round" />
      <circle cx="4" cy="9" r="2" fill="currentColor" stroke="none" />
      <circle cx="196" cy="9" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Family Engagement — a family-led, two-column traditional invite where both
 * houses are featured equally and joined by a central ring crest.
 * Deep maroon & gold with traditional ornaments.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function FamilyEngagement({ values }) {
  const { t } = useI18n()
  const brideName = values.brideName?.trim() || 'Sanika'
  const groomName = values.groomName?.trim() || 'Aarav'
  const brideFamily = values.brideFamily?.trim() || 'The Iyer Family'
  const groomFamily = values.groomFamily?.trim() || 'The Rao Family'
  const date = formatDate(values.date, 'November 20, 2025')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#4a0d18] font-serif text-[#f7e4b0]"
    >
      {/* deep maroon base with a warm radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5e1422] via-[#4a0d18] to-[#360810]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_36%,rgba(208,162,77,0.22),transparent_60%)]" />

      {/* gold frame layers */}
      <div className="absolute inset-[16px] rounded-[6px] border-[3px] border-[#cfa24d]/85" />
      <div className="absolute inset-[24px] rounded-[4px] border border-[#cfa24d]/45" />

      {/* corner lotus badges */}
      <LotusBadge className="absolute left-7 top-7 h-14 w-14 text-[#cfa24d]/70" />
      <LotusBadge className="absolute right-7 top-7 h-14 w-14 text-[#cfa24d]/70" />
      <LotusBadge className="absolute bottom-7 left-7 h-14 w-14 text-[#cfa24d]/70" />
      <LotusBadge className="absolute bottom-7 right-7 h-14 w-14 text-[#cfa24d]/70" />

      <div className="relative flex h-full flex-col items-center px-12 pb-12 pt-[68px]">
        {/* blessings header */}
        <header className="flex flex-col items-center text-center">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.42em] text-[#cfa24d]">
            {t('template.engagement.blessings', 'With the blessings of our families')}
          </p>
          <h2 className="mt-3 font-display text-[40px] leading-none">
            <span
              data-pdf-color="#e7c777"
              className="bg-gradient-to-r from-[#cfa24d] via-[#f3da8e] to-[#cfa24d] bg-clip-text text-transparent"
            >
              {t('template.engagement.title', 'Engagement Ceremony')}
            </span>
          </h2>
          <VineRule className="mt-4 h-4 w-52 text-[#cfa24d]/70" />
        </header>

        {/* two-column family structure joined by central crest */}
        <main className="relative flex w-full flex-1 items-center justify-center">
          {/* central spine: diya finial + ring crest + ampersand */}
          <div className="absolute left-1/2 top-0 flex h-full -translate-x-1/2 flex-col items-center justify-center">
            <Diya className="h-16 w-12 text-[#cfa24d]/80" />
            <div className="my-2 h-px w-px flex-1 bg-gradient-to-b from-[#cfa24d]/0 via-[#cfa24d]/50 to-[#cfa24d]/0" />
          </div>

          <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2">
            {/* Groom's house */}
            <section className="flex flex-col items-center gap-3 px-2 text-center">
              <LotusBadge className="h-12 w-12 text-[#cfa24d]" />
              <p className="font-sans text-[10px] uppercase tracking-[0.38em] text-[#cfa24d]/80">
                {t('template.engagement.son', 'Son of')}
              </p>
              <h1 className="font-display text-[40px] leading-[1.05]">
                <span
                  data-pdf-color="#e7c777"
                  className="bg-gradient-to-br from-[#f3da8e] via-[#cfa24d] to-[#a8782f] bg-clip-text text-transparent"
                >
                  {groomName}
                </span>
              </h1>
              <p className="text-[15px] italic leading-snug text-[#f0d8a0]/90">{groomFamily}</p>
            </section>

            {/* Central ornate emblem with ampersand */}
            <div className="relative flex flex-col items-center justify-center px-1">
              <RingCrest className="h-24 w-24 text-[#cfa24d]" />
              <span
                className="absolute font-display text-[34px] italic leading-none"
                data-pdf-color="#e7c777"
              >
                <span className="bg-gradient-to-b from-[#f3da8e] to-[#cfa24d] bg-clip-text text-transparent">
                  &amp;
                </span>
              </span>
            </div>

            {/* Bride's house */}
            <section className="flex flex-col items-center gap-3 px-2 text-center">
              <LotusBadge className="h-12 w-12 text-[#cfa24d]" />
              <p className="font-sans text-[10px] uppercase tracking-[0.38em] text-[#cfa24d]/80">
                {t('template.engagement.daughter', 'Daughter of')}
              </p>
              <h1 className="font-display text-[40px] leading-[1.05]">
                <span
                  data-pdf-color="#e7c777"
                  className="bg-gradient-to-bl from-[#f3da8e] via-[#cfa24d] to-[#a8782f] bg-clip-text text-transparent"
                >
                  {brideName}
                </span>
              </h1>
              <p className="text-[15px] italic leading-snug text-[#f0d8a0]/90">{brideFamily}</p>
            </section>
          </div>
        </main>

        {/* footer banner: date + venue across the width */}
        <footer className="w-full">
          <VineRule className="mx-auto mb-4 h-4 w-52 text-[#cfa24d]/70 [transform:scaleY(-1)]" />
          <div className="flex w-full items-stretch justify-center rounded-[6px] border border-[#cfa24d]/55 bg-[#360810]/50 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)]">
            <div className="flex flex-1 flex-col items-center gap-1 px-6 py-4 text-center">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-[#cfa24d]">
                {t('template.engagement.date', 'Date')}
              </span>
              <span className="font-display text-[22px] leading-none text-[#f7e4b0]">{date}</span>
            </div>
            <div className="my-3 w-px bg-[#cfa24d]/40" />
            <div className="flex flex-1 flex-col items-center gap-1 px-6 py-4 text-center">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-[#cfa24d]">
                {t('template.engagement.venue', 'Venue')}
              </span>
              <span className="text-[16px] leading-snug text-[#f7e4b0]">{venue}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
