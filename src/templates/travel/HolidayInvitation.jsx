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
      <div className="absolute inset-0 bg-gradient-to-b from-[#9af1ec] via-[#36b3c9] to-[#0b6e86]" />

      {/* warm sun glow top-right */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_82%_17%,rgba(255,239,186,0.95),transparent_36%)]" />

      <svg viewBox="0 0 640 900" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <radialGradient id="holiSun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff6da" />
            <stop offset="60%" stopColor="#ffe29a" />
            <stop offset="100%" stopColor="#ffcf7a" />
          </radialGradient>
          <linearGradient id="holiSea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1aa0b6" />
            <stop offset="100%" stopColor="#0a5b6e" />
          </linearGradient>
          <linearGradient id="holiSand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fdedc4" />
            <stop offset="100%" stopColor="#f2c97f" />
          </linearGradient>
        </defs>

        {/* sun rays + disc */}
        <g opacity="0.4">
          {Array.from({ length: 14 }).map((_, i) => {
            const a = (i * 360) / 14
            return <path key={i} d="M525 160 L520 38 L530 38 Z" fill="#fff4cf" transform={`rotate(${a} 525 160)`} />
          })}
        </g>
        <circle cx="525" cy="160" r="66" fill="url(#holiSun)" />

        {/* distant clouds */}
        <g fill="#ffffff" opacity="0.55">
          <ellipse cx="150" cy="150" rx="64" ry="19" />
          <ellipse cx="206" cy="160" rx="44" ry="15" />
          <ellipse cx="98" cy="160" rx="38" ry="13" />
        </g>
        <g fill="#ffffff" opacity="0.4">
          <ellipse cx="330" cy="250" rx="52" ry="15" />
          <ellipse cx="378" cy="258" rx="36" ry="12" />
        </g>

        {/* sea band */}
        <path d="M0 560 L640 560 L640 720 L0 720 Z" fill="url(#holiSea)" />
        {/* sun glitter on the water */}
        <path d="M470 575 h110 M486 595 h78 M500 615 h50" stroke="#fff0c4" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        {/* gentle waves */}
        <path d="M0 600 q40 -16 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0" fill="none" stroke="#cdf4f0" strokeWidth="3" opacity="0.7" />
        <path d="M0 648 q40 -16 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0" fill="none" stroke="#cdf4f0" strokeWidth="2.5" opacity="0.45" />

        {/* sand foreground */}
        <path d="M0 700 q160 -42 320 -8 t320 -10 L640 900 L0 900 Z" fill="url(#holiSand)" />
        {/* soft shoreline foam line */}
        <path d="M0 700 q160 -42 320 -8 t320 -10" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.55" />
      </svg>

      {/* sailboat drifting on the horizon */}
      <svg viewBox="0 0 80 70" className="absolute left-[120px] top-[505px] h-[60px] w-[68px] text-white/90" fill="none">
        <path d="M40 8 L40 50 L12 50 Z" fill="currentColor" opacity="0.92" />
        <path d="M44 18 L44 50 L66 50 Z" fill="currentColor" opacity="0.72" />
        <path d="M8 52 L72 52 L62 64 L18 64 Z" fill="currentColor" opacity="0.85" />
        <path d="M40 4 L40 52" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* a tiny seagull pair */}
      <svg viewBox="0 0 70 22" className="absolute right-[110px] top-[120px] h-5 w-16 text-white/80" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M6 12c5-7 9-7 14 0c5-7 9-7 14 0" />
        <path d="M42 16c4-5 7-5 11 0" opacity="0.7" />
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

      {/* smaller palm leaning the other way (right side) */}
      <svg viewBox="0 0 150 280" className="absolute bottom-[140px] right-4 h-[280px] w-[150px]" fill="none">
        <path d="M96 280 C100 210 86 156 50 110" stroke="#8a5a2b" strokeWidth="10" strokeLinecap="round" />
        <g stroke="#1f7a4d" strokeWidth="8" strokeLinecap="round" fill="none">
          <path d="M50 110 C78 72 116 58 148 64" />
          <path d="M50 110 C74 56 70 20 52 0" />
          <path d="M50 110 C20 70 2 64 0 88" />
          <path d="M50 110 C62 60 100 34 124 22" />
        </g>
        <g stroke="#2aa05f" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7">
          <path d="M50 110 C78 72 116 58 148 64" />
          <path d="M50 110 C20 70 2 64 0 88" />
        </g>
        <circle cx="50" cy="116" r="5" fill="#5a3a1a" />
        <circle cx="60" cy="120" r="4.5" fill="#6e441f" />
      </svg>

      {/* beach starfish on the sand */}
      <svg viewBox="0 0 60 60" className="absolute bottom-[64px] right-[120px] h-9 w-9 text-[#e8956b]/80" fill="currentColor">
        <path d="M30 4 L37 24 L58 24 L41 37 L48 57 L30 44 L12 57 L19 37 L2 24 L23 24 Z" />
      </svg>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-12 pt-16 pb-12 text-center text-white">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/25 px-6 py-2 text-[12px] font-bold uppercase tracking-[0.45em] text-white ring-1 ring-white/30 backdrop-blur-sm">
          {t('template.common.youreInvited', "You're Invited")}
        </p>

        <h1 className="mt-8 font-script text-[80px] leading-[0.82] drop-shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
          <span
            data-pdf-color="#fff1c2"
            className="bg-gradient-to-b from-white via-amber-50 to-amber-200 bg-clip-text text-transparent"
          >
            {t('template.common.letsGetaway', "Let's Getaway")}
          </span>
        </h1>

        {/* dashed divider with sun motif */}
        <div className="mt-7 flex items-center gap-3 text-amber-100">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-white/70" />
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <circle cx="12" cy="12" r="4" />
            <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
            </g>
          </svg>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-white/70" />
        </div>

        <p className="mt-6 max-w-[22rem] font-display text-[31px] font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
          {packageName}
        </p>

        {/* price card on the sand */}
        <div className="mt-auto w-full">
          <div className="mx-auto inline-flex flex-col items-center rounded-2xl bg-white/92 px-11 py-5 shadow-[0_18px_44px_rgba(0,0,0,0.28)] ring-1 ring-white/60 backdrop-blur">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-teal-700">
              {t('template.common.allInclusive', 'All-inclusive from')}
            </p>
            <p className="font-display text-[42px] font-black leading-none tracking-tight text-[#0b6e86]">{price}</p>
          </div>

          <div className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-full bg-black/20 px-5 py-2.5 text-[16px] font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            <span>{contact}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
