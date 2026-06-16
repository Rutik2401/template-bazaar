'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Diamond solitaire ring (inline SVG, platinum band + faceted brilliant) ── */
function DiamondSolitaire({ className = '' }) {
  return (
    <svg viewBox="0 0 160 180" className={className} fill="none">
      <defs>
        <linearGradient id="ds-band" x1="40" y1="92" x2="120" y2="172" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f4f7fb" />
          <stop offset="0.45" stopColor="#bcc7d6" />
          <stop offset="1" stopColor="#8a98ac" />
        </linearGradient>
        <linearGradient id="ds-crown" x1="46" y1="36" x2="114" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#dbeafe" />
          <stop offset="1" stopColor="#a7c4e6" />
        </linearGradient>
        <linearGradient id="ds-pavilion" x1="48" y1="62" x2="80" y2="116" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#cfe3f7" />
          <stop offset="0.6" stopColor="#9bbbe0" />
          <stop offset="1" stopColor="#6f93bd" />
        </linearGradient>
      </defs>

      {/* sparkle rays behind the stone */}
      <g stroke="#dbeafe" strokeWidth="1.6" strokeLinecap="round" opacity="0.85">
        <path d="M80 2 V22" />
        <path d="M80 2 V22" transform="rotate(45 80 50)" />
        <path d="M80 2 V22" transform="rotate(90 80 50)" />
        <path d="M80 2 V22" transform="rotate(135 80 50)" />
        <path d="M80 2 V22" transform="rotate(-45 80 50)" />
        <path d="M80 2 V22" transform="rotate(-90 80 50)" />
      </g>

      {/* platinum band */}
      <ellipse cx="80" cy="128" rx="40" ry="42" stroke="url(#ds-band)" strokeWidth="7" />
      <ellipse cx="80" cy="128" rx="40" ry="42" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1.4" />

      {/* prongs cradling the stone */}
      <path d="M58 82 L80 96 L102 82" stroke="url(#ds-band)" strokeWidth="4.6" strokeLinecap="round" />
      <path d="M64 78 L80 92 L96 78" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1.4" strokeLinecap="round" />

      {/* brilliant-cut diamond — crown */}
      <path
        d="M48 56 L112 56 L96 76 L64 76 Z"
        fill="url(#ds-crown)"
        stroke="#7da3cf"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* table */}
      <path d="M64 56 L96 56 L88 66 L72 66 Z" fill="#ffffff" fillOpacity="0.92" stroke="#9bbbe0" strokeWidth="1.3" />
      {/* girdle line */}
      <path d="M48 56 L112 56" stroke="#6f93bd" strokeWidth="1.6" />

      {/* pavilion */}
      <path
        d="M48 56 L80 116 L112 56"
        fill="url(#ds-pavilion)"
        stroke="#6f93bd"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* pavilion facets */}
      <path
        d="M64 76 L80 116 M96 76 L80 116 M72 66 L64 76 M88 66 L96 76 M48 56 L64 76 M112 56 L96 76"
        stroke="#7da3cf"
        strokeWidth="1.3"
        strokeOpacity="0.7"
      />

      {/* sharp highlight glints */}
      <path d="M70 60 L75 60" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M68 70 L73 86" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.85" />
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

/* slim platinum rule with a faceted diamond centre */
function DiamondRule({ className = '' }) {
  return (
    <svg viewBox="0 0 280 22" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M8 11h108M164 11h108" strokeLinecap="round" />
      <path d="M140 2l12 9-12 9-12-9 12-9Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M140 6l6 5-6 5-6-5 6-5Z" />
      <circle cx="120" cy="11" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="160" cy="11" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Diamond-Ring engagement card — luxury jewel-store theme on a cool platinum /
 * ice-blue & silver palette, built around a faceted diamond solitaire ring.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function DiamondRingEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const date = formatDate(values.date, 'November 20, 2025')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-[#f7fbff] via-[#eaf2fb] to-[#d7e6f5] font-serif text-slate-700"
    >
      {/* cool ice-blue radial glows */}
      <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-[#cfe2f7]/55 blur-3xl" />
      <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-[#bcd4ef]/55 blur-3xl" />
      <div className="absolute left-1/2 top-[26%] h-72 w-72 -translate-x-1/2 rounded-full bg-[#e6f0fb]/60 blur-3xl" />

      {/* platinum triple frame */}
      <div className="absolute inset-[18px] rounded-[30px] border-2 border-[#9fb4cf]/60" />
      <div className="absolute inset-[26px] rounded-[24px] border border-[#b5c7de]/55" />
      <div className="absolute inset-[31px] rounded-[20px] border border-[#d2e0f0]/50" />

      {/* scattered sparkle dots */}
      <Sparkle className="absolute left-16 top-32 h-4 w-4 text-[#8fb0d6]/70" />
      <Sparkle className="absolute right-[72px] top-48 h-3 w-3 text-[#8fb0d6]/55" />
      <Sparkle className="absolute right-20 bottom-44 h-4 w-4 text-[#8fb0d6]/55" />
      <Sparkle className="absolute left-20 bottom-56 h-3 w-3 text-[#8fb0d6]/45" />
      <Sparkle className="absolute left-1/2 top-[18px] h-2.5 w-2.5 -translate-x-1/2 text-[#8fb0d6]/50" />
      <span className="absolute left-28 top-60 h-1 w-1 rounded-full bg-[#7ea6d2]/60" />
      <span className="absolute right-28 top-72 h-1 w-1 rounded-full bg-[#7ea6d2]/60" />
      <span className="absolute right-24 bottom-64 h-1 w-1 rounded-full bg-[#7ea6d2]/50" />

      <div className="relative flex h-full flex-col items-center justify-between px-16 py-[68px] text-center">
        <header className="flex flex-col items-center gap-5">
          <DiamondSolitaire className="h-[150px] w-[134px] drop-shadow-[0_6px_14px_rgba(111,147,189,0.35)]" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.62em] text-[#5f7ba3]">
            {t('template.common.engagement', 'Engagement')}
          </p>
          <DiamondRule className="h-5 w-56 text-[#8fb0d6]" />
        </header>

        <main className="flex flex-col items-center gap-6">
          <p className="font-script text-[30px] leading-none text-[#6f8db5]">
            {t('template.common.weSaidYes', 'we said yes!')}
          </p>
          <h1 className="font-display text-[62px] font-medium leading-[1.04] tracking-[-0.01em]">
            <span
              data-pdf-color="#5b7290"
              className="bg-gradient-to-r from-[#9fb2c9] via-[#6f8db5] to-[#aebfd4] bg-clip-text text-transparent"
            >
              {couple}
            </span>
          </h1>
          <div className="flex items-center gap-3 text-[#8fb0d6]">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#8fb0d6]" />
            <Sparkle className="h-3.5 w-3.5" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#8fb0d6]" />
          </div>
        </main>

        <footer className="flex w-full flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.48em] text-[#5f7ba3]">
              {t('template.common.saveTheDate', 'Save the Date')}
            </span>
            <p className="font-display text-[28px] leading-tight text-slate-700">
              {date}
              {time && <span className="text-[#6f8db5]"> · {time}</span>}
            </p>
          </div>

          <div className="flex items-center gap-2.5 text-[#8fb0d6]/80">
            <span className="h-px w-10 bg-[#8fb0d6]/70" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#8fb0d6]/80" />
            <span className="h-px w-10 bg-[#8fb0d6]/70" />
          </div>

          <div className="flex max-w-[22rem] flex-col items-center gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.48em] text-[#5f7ba3]">
              {t('template.common.venue', 'Venue')}
            </span>
            <p className="text-[17px] leading-snug text-slate-700">{venue}</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
