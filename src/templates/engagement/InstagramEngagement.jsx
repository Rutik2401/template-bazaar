'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Instagram engagement template — a scroll-stopping 1:1 square social post.
 * Bold sunset coral → plum gradient, contemporary blob shapes and film grain.
 * A loud "WE'RE ENGAGED!" headline, a giant couple name, a chic date chip,
 * the venue, and a social-style handle anchored at the bottom.
 * Natural design size: 1080 × 1080 (square, fills edge to edge).
 */
export default function InstagramEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const date = formatDate(values.date, 'November 20, 2025')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const handle = values.handle?.trim() || '@aarav.weds.sanika'

  return (
    <div
      data-export-root
      className="relative h-[1080px] w-[1080px] overflow-hidden bg-[#2a0e2e] font-sans text-white"
    >
      {/* sunset coral → plum gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff7a59] via-[#ff4d6d] to-[#5b1a6b]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#3a0f47]/70 via-transparent to-[#ffb27a]/30" />

      {/* contemporary blob shapes */}
      <div className="absolute -left-40 -top-32 h-[460px] w-[460px] rounded-full bg-gradient-to-br from-[#ffd29b]/50 to-[#ff7a59]/0 blur-[2px]" />
      <div className="absolute -bottom-44 -right-36 h-[520px] w-[520px] rounded-full bg-gradient-to-tl from-[#7a1f8c]/60 to-[#ff4d6d]/0 blur-[2px]" />
      <div className="absolute right-[-120px] top-[120px] h-72 w-72 rotate-45 rounded-[80px] bg-white/10 backdrop-blur-[1px]" />
      <div className="absolute left-[-90px] bottom-[200px] h-56 w-56 rotate-12 rounded-[64px] border-[3px] border-white/20" />

      {/* concentric ring motif */}
      <svg viewBox="0 0 200 200" className="absolute -right-16 top-1/2 h-80 w-80 -translate-y-1/2 opacity-30">
        <circle cx="100" cy="100" r="90" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="2 8" />
        <circle cx="100" cy="100" r="66" fill="none" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="42" fill="none" stroke="#ffd29b" strokeWidth="2" />
      </svg>

      {/* film grain texture */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.10] mix-blend-overlay">
        <filter id="igGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#igGrain)" />
      </svg>

      {/* corner frame ticks */}
      <div className="absolute left-12 top-12 h-12 w-12 border-l-[3px] border-t-[3px] border-white/40" />
      <div className="absolute right-12 top-12 h-12 w-12 border-r-[3px] border-t-[3px] border-white/40" />
      <div className="absolute left-12 bottom-12 h-12 w-12 border-b-[3px] border-l-[3px] border-white/40" />
      <div className="absolute right-12 bottom-12 h-12 w-12 border-b-[3px] border-r-[3px] border-white/40" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col justify-between px-24 py-28">
        {/* top: kicker pill */}
        <header className="flex items-center justify-between">
          <span className="rounded-full bg-white/15 px-6 py-2.5 text-[15px] font-extrabold uppercase tracking-[0.4em] text-white ring-1 ring-white/25 backdrop-blur-sm">
            {t('template.common.saveTheDate', 'Save the Date')}
          </span>
          <span className="flex items-center gap-2 text-[15px] font-bold uppercase tracking-[0.3em] text-white/80">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 21s-6.7-4.35-9.33-8.06C.9 10.27 1.4 6.9 4.06 5.5 6.1 4.43 8.4 5.1 9.7 6.9L12 10l2.3-3.1c1.3-1.8 3.6-2.47 5.64-1.4 2.66 1.4 3.16 4.77 1.39 7.44C18.7 16.65 12 21 12 21Z" />
            </svg>
            {t('template.common.engaged', 'Engaged')}
          </span>
        </header>

        {/* center: big headline + couple */}
        <main className="flex flex-col items-center text-center">
          <h2 className="font-display text-[64px] font-black uppercase leading-[0.9] tracking-tight drop-shadow-[0_3px_14px_rgba(0,0,0,0.3)]">
            {t('template.common.wereEngaged', "We're")}
            <br />
            <span
              data-pdf-color="#ffe1b8"
              className="bg-gradient-to-b from-[#fff4e3] via-[#ffd9a8] to-[#ff9d6e] bg-clip-text text-transparent"
            >
              {t('template.common.engagedExclaim', 'Engaged!')}
            </span>
          </h2>

          <div className="my-10 flex items-center gap-4">
            <div className="h-[2px] w-20 bg-white/40" />
            <div className="h-2.5 w-2.5 rotate-45 bg-[#ffd29b]" />
            <div className="h-[2px] w-20 bg-white/40" />
          </div>

          <h1 className="font-script text-[112px] font-bold leading-[0.95] tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]">
            {couple}
          </h1>
        </main>

        {/* bottom: date chip, venue, handle */}
        <footer className="flex flex-col items-center gap-7">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/95 px-9 py-3.5 text-[#5b1a6b] shadow-[0_8px_28px_rgba(0,0,0,0.28)]">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4.5" width="18" height="17" rx="2.5" />
              <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
            </svg>
            <span className="text-[26px] font-extrabold tracking-tight">{date}</span>
          </div>

          <p className="flex items-center gap-2.5 text-[22px] font-semibold text-white/95 drop-shadow-sm">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#ffd29b]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {venue}
          </p>

          <div className="mt-1 inline-flex items-center gap-3 rounded-2xl bg-black/25 px-7 py-3 ring-1 ring-white/20 backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.6" cy="6.4" r="1.3" fill="currentColor" stroke="none" />
            </svg>
            <span className="text-[24px] font-bold tracking-wide">{handle}</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
