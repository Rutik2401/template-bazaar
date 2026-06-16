'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Tropical holiday invitation card — turquoise sea, soft sand, a leaning palm
 * tree and a calm sun. Relaxed, breezy "Let's Getaway" vibe with a script
 * headline. Natural design size: 640 × 900.
 */
export default function HolidayInvitation({ values }) {
  const { t } = useI18n()
  const packageName = values.packageName?.trim() || 'Magical Kerala 5N/6D'
  const price = values.price?.trim() || '₹ 18,999'
  const contact = values.contact?.trim() || '+91 98765 43210'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#063b45] font-sans text-[#063b45]"
    >
      {/* sky → sea gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7fe3e0] via-[#36b3c9] to-[#0b6e86]" />

      {/* warm sun glow top-right */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_82%_18%,rgba(255,236,179,0.85),transparent_34%)]" />

      <svg viewBox="0 0 640 900" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="holiSea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#11899f" />
            <stop offset="100%" stopColor="#0a5b6e" />
          </linearGradient>
          <linearGradient id="holiSand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fde7b8" />
            <stop offset="100%" stopColor="#f4cf8f" />
          </linearGradient>
        </defs>

        {/* sun */}
        <circle cx="525" cy="160" r="64" fill="#fff2c2" opacity="0.95" />

        {/* sea band */}
        <path d="M0 560 L640 560 L640 720 L0 720 Z" fill="url(#holiSea)" />
        {/* gentle waves */}
        <path d="M0 600 q40 -16 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0" fill="none" stroke="#bdf0ec" strokeWidth="3" opacity="0.6" />
        <path d="M0 648 q40 -16 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0" fill="none" stroke="#bdf0ec" strokeWidth="2.5" opacity="0.4" />

        {/* sand foreground */}
        <path d="M0 700 q160 -42 320 -8 t320 -10 L640 900 L0 900 Z" fill="url(#holiSand)" />
      </svg>

      {/* leaning palm tree (SVG) */}
      <svg viewBox="0 0 200 360" className="absolute bottom-[150px] left-6 h-[360px] w-[200px]" fill="none">
        {/* trunk */}
        <path d="M70 360 C66 270 80 200 120 140" stroke="#8a5a2b" strokeWidth="13" strokeLinecap="round" />
        <path d="M70 360 C66 270 80 200 120 140" stroke="#6e441f" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
        {/* fronds */}
        <g stroke="#1f7a4d" strokeWidth="10" strokeLinecap="round" fill="none">
          <path d="M120 140 C90 96 50 80 14 86" />
          <path d="M120 140 C92 78 96 36 116 6" />
          <path d="M120 140 C150 92 190 84 200 110" />
          <path d="M120 140 C146 84 188 62 200 28" />
          <path d="M120 140 C108 84 70 54 44 40" />
        </g>
        <g stroke="#2aa05f" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.7">
          <path d="M120 140 C90 96 50 80 14 86" />
          <path d="M120 140 C150 92 190 84 200 110" />
        </g>
        {/* coconuts */}
        <circle cx="120" cy="146" r="7" fill="#5a3a1a" />
        <circle cx="132" cy="150" r="6" fill="#6e441f" />
      </svg>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-12 pt-16 pb-12 text-center text-white">
        <p className="rounded-full bg-white/25 px-6 py-2 text-[12px] font-bold uppercase tracking-[0.45em] text-white backdrop-blur-sm">
          {t('template.common.youreInvited', "You're Invited")}
        </p>

        <h1 className="mt-7 font-script text-[78px] leading-[0.85] drop-shadow-md">
          <span
            data-pdf-color="#fff1c2"
            className="bg-gradient-to-b from-white via-amber-50 to-amber-200 bg-clip-text text-transparent"
          >
            {t('template.common.letsGetaway', "Let's Getaway")}
          </span>
        </h1>

        <p className="mt-6 max-w-[22rem] font-display text-[30px] font-bold leading-tight text-white drop-shadow">
          {packageName}
        </p>

        {/* dashed divider with sun motif */}
        <div className="mt-6 flex items-center gap-3 text-white/85">
          <span className="h-px w-14 bg-white/60" />
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <circle cx="12" cy="12" r="4" />
            <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
            </g>
          </svg>
          <span className="h-px w-14 bg-white/60" />
        </div>

        {/* price card on the sand */}
        <div className="mt-auto w-full">
          <div className="mx-auto inline-flex flex-col items-center rounded-2xl bg-white/90 px-10 py-5 shadow-2xl backdrop-blur">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-teal-700">
              {t('template.common.allInclusive', 'All-inclusive from')}
            </p>
            <p className="font-display text-[40px] font-black leading-none text-[#0b6e86]">{price}</p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2.5 text-[17px] font-semibold text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            <span>{contact}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
