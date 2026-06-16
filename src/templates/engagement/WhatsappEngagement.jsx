'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Interlocking ring + diamond monogram (rose-gold) ───────────────────── */
function RingMonogram({ className = '' }) {
  return (
    <svg viewBox="0 0 120 84" className={className} fill="none">
      <defs>
        <linearGradient id="wa-ring" x1="20" y1="20" x2="100" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffe9d6" />
          <stop offset="0.5" stopColor="#f3c69f" />
          <stop offset="1" stopColor="#d98f63" />
        </linearGradient>
      </defs>
      <circle cx="46" cy="48" r="24" stroke="url(#wa-ring)" strokeWidth="3.4" />
      <circle cx="46" cy="48" r="24" stroke="#fff" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="74" cy="48" r="24" stroke="url(#wa-ring)" strokeWidth="3.4" />
      <circle cx="74" cy="48" r="24" stroke="#fff" strokeOpacity="0.35" strokeWidth="1" />
      {/* crowning diamond */}
      <path d="M60 4 L72 18 L60 36 L48 18 Z" fill="url(#wa-ring)" stroke="#fff" strokeOpacity="0.5" strokeWidth="1" strokeLinejoin="round" />
      <path d="M48 18 H72 M60 4 V36 M54 11 L66 11" stroke="#b9764f" strokeWidth="0.9" strokeOpacity="0.7" />
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

function Filigree({ className = '' }) {
  // symmetrical filigree divider with a centre gem
  return (
    <svg viewBox="0 0 280 40" className={className} fill="none" stroke="currentColor">
      <path d="M10 20 C70 20 96 8 120 8 C108 14 112 22 124 20" strokeWidth="1.3" strokeLinecap="round" opacity="0.9" />
      <path d="M270 20 C210 20 184 8 160 8 C172 14 168 22 156 20" strokeWidth="1.3" strokeLinecap="round" opacity="0.9" />
      <path d="M40 20 c-4 -9 -13 -12 -20 -10 c2 8 10 13 20 10Z" fill="currentColor" fillOpacity="0.18" strokeWidth="1" />
      <path d="M240 20 c4 -9 13 -12 20 -10 c-2 8 -10 13 -20 10Z" fill="currentColor" fillOpacity="0.18" strokeWidth="1" />
      <path d="M140 10 l8 10 -8 10 -8 -10 Z" fill="currentColor" fillOpacity="0.9" strokeWidth="0" />
      <circle cx="140" cy="20" r="13" strokeWidth="1.1" opacity="0.55" />
    </svg>
  )
}

/**
 * WhatsApp engagement invite — tall vertical phone format (720 × 1280).
 * Full-bleed rose-gold → deep rose gradient, ring/diamond motif, premium share card.
 */
export default function WhatsappEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const date = formatDate(values.date, 'November 20, 2025')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const rsvp = values.rsvpContact?.trim() || '+91 98765 43210'

  return (
    <div
      data-export-root
      className="relative h-[1280px] w-[720px] overflow-hidden bg-gradient-to-b from-[#f7d9c4] via-[#d77b7e] to-[#7e2b46] font-serif text-[#fdeee6]"
    >
      {/* soft glows for depth */}
      <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#ffe4d2]/35 blur-3xl" />
      <div className="absolute -right-40 top-1/3 h-[460px] w-[460px] rounded-full bg-[#b85a6e]/45 blur-3xl" />
      <div className="absolute -bottom-44 left-1/4 h-[480px] w-[480px] rounded-full bg-[#5e1f37]/55 blur-3xl" />

      {/* rose-gold triple frame */}
      <div className="absolute inset-[22px] rounded-[40px] border-2 border-[#f4d3b8]/55" />
      <div className="absolute inset-[32px] rounded-[34px] border border-[#f4d3b8]/40" />
      <div className="absolute inset-[38px] rounded-[28px] border border-[#f4d3b8]/25" />

      {/* scattered sparkles */}
      <Sparkle className="absolute left-24 top-44 h-5 w-5 text-[#ffe7d3]/70" />
      <Sparkle className="absolute right-28 top-60 h-4 w-4 text-[#ffe7d3]/55" />
      <Sparkle className="absolute right-24 bottom-72 h-5 w-5 text-[#ffe7d3]/55" />
      <Sparkle className="absolute left-28 bottom-96 h-4 w-4 text-[#ffe7d3]/45" />
      <Sparkle className="absolute left-1/2 top-32 h-3.5 w-3.5 -translate-x-1/2 text-[#ffe7d3]/50" />

      <div className="relative flex h-full flex-col items-center justify-between px-20 py-[110px] text-center">
        {/* ── Top monogram ── */}
        <header className="flex flex-col items-center gap-7">
          <RingMonogram className="h-[100px] w-[140px] drop-shadow-[0_4px_14px_rgba(94,31,55,0.4)]" />
          <p className="text-[14px] font-semibold uppercase tracking-[0.58em] text-[#ffe7d3]">
            {t('template.common.engagementInvite', "You're invited to our Engagement")}
          </p>
        </header>

        {/* ── Couple name ── */}
        <main className="flex flex-col items-center gap-9">
          <p className="text-[19px] italic tracking-wide text-[#fbe0d4]/85">
            {t('template.common.engagementOf', 'at the engagement of')}
          </p>
          <h1 className="font-script text-[92px] font-medium leading-[1.05] tracking-[-0.005em]">
            <span
              data-pdf-color="#fff1e6"
              className="bg-gradient-to-b from-[#fff6ec] via-[#ffe1cf] to-[#f6c2a8] bg-clip-text text-transparent"
            >
              {couple}
            </span>
          </h1>
          <Filigree className="h-10 w-72 text-[#f4d3b8]" />
        </main>

        {/* ── Date / Time / Venue ── */}
        <section className="flex w-full flex-col items-center gap-9">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[13px] font-semibold uppercase tracking-[0.5em] text-[#ffd9c4]">
              {t('template.common.saveTheDate', 'Save the Date')}
            </span>
            <p className="font-display text-[44px] leading-tight text-[#fff4ec]">{date}</p>
            {time && (
              <p className="text-[20px] tracking-[0.2em] text-[#fbe0d4]/90">{time}</p>
            )}
          </div>

          <div className="flex items-center gap-3 text-[#f4d3b8]/80">
            <span className="h-px w-14 bg-[#f4d3b8]/60" />
            <span className="h-2 w-2 rotate-45 bg-[#f4d3b8]/80" />
            <span className="h-px w-14 bg-[#f4d3b8]/60" />
          </div>

          <div className="flex max-w-[26rem] flex-col items-center gap-2">
            <span className="text-[13px] font-semibold uppercase tracking-[0.5em] text-[#ffd9c4]">
              {t('template.common.venue', 'Venue')}
            </span>
            <p className="text-[22px] leading-snug text-[#fff4ec]">{venue}</p>
          </div>
        </section>

        {/* ── RSVP pill ── */}
        <footer className="flex flex-col items-center gap-4">
          <Sparkle className="h-4 w-4 text-[#ffe7d3]/70" />
          <div className="flex items-center gap-3 rounded-full border border-[#f4d3b8]/60 bg-[#5e1f37]/40 px-10 py-4 backdrop-blur-sm">
            <span className="text-[13px] font-semibold uppercase tracking-[0.42em] text-[#ffd9c4]">
              {t('template.common.rsvp', 'RSVP')}
            </span>
            <span className="h-4 w-px bg-[#f4d3b8]/50" />
            <span className="text-[20px] tracking-wide text-[#fff4ec]">{rsvp}</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
