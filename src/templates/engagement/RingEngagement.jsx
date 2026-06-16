'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Diamond ring motif (inline SVG, rose-gold with facets) ─────────────── */
function DiamondRing({ className = '' }) {
  return (
    <svg viewBox="0 0 120 130" className={className} fill="none">
      <defs>
        <linearGradient id="ring-band" x1="30" y1="60" x2="90" y2="124" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#e9bfa6" />
          <stop offset="0.5" stopColor="#b87a59" />
          <stop offset="1" stopColor="#8f5638" />
        </linearGradient>
        <linearGradient id="ring-stone" x1="36" y1="8" x2="84" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fbe5dc" />
          <stop offset="0.55" stopColor="#e7b9a4" />
          <stop offset="1" stopColor="#c98a6b" />
        </linearGradient>
      </defs>
      {/* band */}
      <ellipse cx="60" cy="92" rx="30" ry="32" stroke="url(#ring-band)" strokeWidth="5" />
      <ellipse cx="60" cy="92" rx="30" ry="32" stroke="#fff" strokeOpacity="0.4" strokeWidth="1.1" />
      {/* prongs */}
      <path d="M47 60 L60 71 L73 60" stroke="url(#ring-band)" strokeWidth="3.4" strokeLinecap="round" />
      {/* diamond */}
      <path
        d="M60 8 L84 34 L60 70 L36 34 Z"
        fill="url(#ring-stone)"
        fillOpacity="0.55"
        stroke="#b87a59"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M36 34 H84 M60 8 V70 M48 21 L72 21 M48 21 L36 34 M72 21 L84 34" stroke="#a86b4b" strokeWidth="1.5" strokeOpacity="0.65" />
      <path d="M51 16 L56 11" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M64 14 L67 11" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.8" />
    </svg>
  )
}

function Sparkle({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c1.2 6 4.8 9.6 12 12-7.2 2.4-10.8 6-12 12-1.2-6-4.8-9.6-12-12C7.2 9.6 10.8 6 12 0Z" />
    </svg>
  )
}

function FloralSpray({ className = '' }) {
  // delicate rose-gold botanical spray
  return (
    <svg viewBox="0 0 200 70" className={className} fill="none" stroke="currentColor">
      <path d="M14 35 C60 35 78 22 100 22 C122 22 140 35 186 35" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
      <path d="M58 30 c-4 -10 -14 -14 -22 -12 c2 9 11 15 22 12Z" fill="currentColor" fillOpacity="0.16" strokeWidth="1.1" />
      <path d="M142 30 c4 -10 14 -14 22 -12 c-2 9 -11 15 -22 12Z" fill="currentColor" fillOpacity="0.16" strokeWidth="1.1" />
      <path d="M82 27 c-3 -8 -11 -11 -17 -9 c1 7 8 12 17 9Z" fill="currentColor" fillOpacity="0.12" strokeWidth="1" />
      <path d="M118 27 c3 -8 11 -11 17 -9 c-1 7 -8 12 -17 9Z" fill="currentColor" fillOpacity="0.12" strokeWidth="1" />
      <circle cx="100" cy="20" r="5" fill="currentColor" fillOpacity="0.85" stroke="none" />
      <circle cx="100" cy="20" r="9" strokeWidth="1.1" opacity="0.7" />
      <circle cx="73" cy="32" r="2.6" fill="currentColor" stroke="none" opacity="0.8" />
      <circle cx="127" cy="32" r="2.6" fill="currentColor" stroke="none" opacity="0.8" />
    </svg>
  )
}

/**
 * Ring Ceremony engagement card — rose-gold + blush + ivory, romantic & elegant.
 * Natural design size: 640 × 900.
 */
export default function RingEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-[#fffaf6] via-[#fdeee7] to-[#f6dccf] font-serif text-rose-900"
    >
      {/* soft radial glows — blush & rose-gold */}
      <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-[#f8cdba]/45 blur-3xl" />
      <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-[#ecb892]/45 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#fbe3d6]/40 blur-3xl" />

      {/* rose-gold triple frame */}
      <div className="absolute inset-[18px] rounded-[30px] border-2 border-[#c98a6b]/55" />
      <div className="absolute inset-[26px] rounded-[24px] border border-[#d9a98c]/50" />
      <div className="absolute inset-[31px] rounded-[20px] border border-[#e7c4ad]/40" />

      {/* scattered sparkles */}
      <Sparkle className="absolute left-16 top-32 h-4 w-4 text-[#caa07f]/70" />
      <Sparkle className="absolute right-[72px] top-48 h-3 w-3 text-[#caa07f]/55" />
      <Sparkle className="absolute right-20 bottom-44 h-4 w-4 text-[#caa07f]/55" />
      <Sparkle className="absolute left-20 bottom-56 h-3 w-3 text-[#caa07f]/45" />
      <Sparkle className="absolute left-1/2 top-24 h-2.5 w-2.5 -translate-x-1/2 text-[#caa07f]/50" />

      <div className="relative flex h-full flex-col items-center justify-between px-16 py-[72px] text-center">
        <header className="flex flex-col items-center gap-5">
          <DiamondRing className="h-[108px] w-[108px] drop-shadow-[0_4px_10px_rgba(184,122,89,0.25)]" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.62em] text-[#b07a5b]">
            {t('template.common.ringCeremony', 'Ring Ceremony')}
          </p>
          <FloralSpray className="h-9 w-52 text-[#c79170]" />
        </header>

        <main className="flex flex-col items-center gap-6">
          <p className="text-[16px] italic tracking-wide text-rose-500/80">
            {t('template.common.engagementOf', 'at the engagement of')}
          </p>
          <h1 className="font-display text-[62px] font-medium leading-[1.04] tracking-[-0.01em]">
            <span
              data-pdf-color="#b03a5b"
              className="bg-gradient-to-r from-[#d4607c] via-[#c97a52] to-[#d99a4e] bg-clip-text text-transparent"
            >
              {couple}
            </span>
          </h1>
          <div className="flex items-center gap-3 text-[#caa07f]">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#caa07f]" />
            <Sparkle className="h-3.5 w-3.5" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#caa07f]" />
          </div>
        </main>

        <footer className="flex w-full flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.48em] text-[#b07a5b]">
              {t('template.common.saveTheDate', 'Save the Date')}
            </span>
            <p className="font-display text-[28px] leading-tight text-rose-800">
              {date}
              {time && <span className="text-rose-500/80"> · {time}</span>}
            </p>
          </div>

          <div className="flex items-center gap-2.5 text-[#caa07f]/70">
            <span className="h-px w-10 bg-[#caa07f]/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#caa07f]/70" />
            <span className="h-px w-10 bg-[#caa07f]/60" />
          </div>

          <div className="flex max-w-[22rem] flex-col items-center gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.48em] text-[#b07a5b]">
              {t('template.common.venue', 'Venue')}
            </span>
            <p className="text-[17px] leading-snug text-rose-800">{venue}</p>
          </div>

          <p className="mt-1 text-[14px] italic leading-relaxed text-rose-400">
            {t('template.common.withBestCompliments', 'With best compliments from')}
            <br />
            <span className="font-display text-[22px] not-italic tracking-wide text-rose-800">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
