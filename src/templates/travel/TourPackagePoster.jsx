'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Scenic tour-package poster — a glowing sunset sky, layered SVG mountain
 * ranges, a rising sun, a checklist of trip highlights and a bold price badge.
 * Natural design size: 720 × 960.
 */
export default function TourPackagePoster({ values }) {
  const { t } = useI18n()
  const packageName = values.packageName?.trim() || 'Magical Kerala 5N/6D'
  const price = values.price?.trim() || '₹ 18,999'
  const contact = values.contact?.trim() || '+91 98765 43210'
  const highlights = toList(values.highlights, { separator: /\n/ })
  const list = highlights.length
    ? highlights
    : ['Alleppey houseboat stay', 'Munnar tea gardens', 'Kochi heritage walk', 'All meals & transfers']

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-[#0b1f3a] font-sans text-white"
    >
      {/* sunset sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#231155] via-[#7b2d8e] to-[#ff8a4c]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b3e] via-transparent to-transparent opacity-70" />

      {/* rising sun glow */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_63%,rgba(255,224,150,0.7),transparent_44%)]" />

      {/* sky scenery: sun disc, rays, clouds */}
      <svg viewBox="0 0 720 960" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <radialGradient id="tourSun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff6d6" />
            <stop offset="48%" stopColor="#ffd166" />
            <stop offset="100%" stopColor="#ff9a3c" />
          </radialGradient>
          <radialGradient id="tourSunHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffe9b0" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffe9b0" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="tourMtnFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6b3a7e" />
            <stop offset="100%" stopColor="#3a1c52" />
          </linearGradient>
          <linearGradient id="tourMtnMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3f1e58" />
            <stop offset="100%" stopColor="#241038" />
          </linearGradient>
          <linearGradient id="tourMtnNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c0d2e" />
            <stop offset="100%" stopColor="#090313" />
          </linearGradient>
        </defs>

        {/* sun halo + disc */}
        <circle cx="360" cy="610" r="260" fill="url(#tourSunHalo)" />
        <circle cx="360" cy="610" r="148" fill="url(#tourSun)" />

        {/* radiant rays behind the sun */}
        <g opacity="0.16">
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i * 360) / 16
            return (
              <path key={i} d="M360 610 L348 250 L372 250 Z" fill="#fff2c6" transform={`rotate(${a} 360 610)`} />
            )
          })}
        </g>

        {/* drifting clouds */}
        <g fill="#fff3da">
          <g opacity="0.32">
            <ellipse cx="150" cy="250" rx="74" ry="22" />
            <ellipse cx="210" cy="262" rx="52" ry="18" />
            <ellipse cx="96" cy="262" rx="44" ry="16" />
          </g>
          <g opacity="0.22">
            <ellipse cx="560" cy="160" rx="64" ry="19" />
            <ellipse cx="612" cy="170" rx="44" ry="15" />
          </g>
          <g opacity="0.18">
            <ellipse cx="470" cy="330" rx="56" ry="16" />
            <ellipse cx="520" cy="340" rx="38" ry="13" />
          </g>
        </g>
      </svg>

      {/* layered mountains */}
      <svg viewBox="0 0 720 960" className="absolute inset-x-0 bottom-0 h-[470px] w-full" preserveAspectRatio="none">
        <path d="M0 760 L120 600 L250 720 L380 540 L520 700 L640 590 L720 660 L720 960 L0 960 Z" fill="url(#tourMtnFar)" opacity="0.92" />
        <path d="M0 830 L150 690 L300 800 L430 660 L560 790 L720 700 L720 960 L0 960 Z" fill="url(#tourMtnMid)" />
        <path d="M0 900 L130 800 L280 880 L420 790 L580 880 L720 810 L720 960 L0 960 Z" fill="url(#tourMtnNear)" />
        {/* reflective shimmer on the near ridge */}
        <path d="M0 900 L130 800 L280 880 L420 790 L580 880 L720 810" fill="none" stroke="#ff9a3c" strokeWidth="2.5" opacity="0.35" />
        {/* snow caps */}
        <path d="M380 540 L406 578 L354 578 Z" fill="#ffffff" opacity="0.9" />
        <path d="M120 600 L141 631 L99 631 Z" fill="#ffffff" opacity="0.72" />
        <path d="M640 590 L660 618 L620 618 Z" fill="#ffffff" opacity="0.6" />
      </svg>

      {/* pine silhouettes on the foreground ridge */}
      <svg viewBox="0 0 720 200" className="absolute inset-x-0 bottom-0 h-[200px] w-full" preserveAspectRatio="none" fill="#070210">
        <path d="M70 200 L70 150 L52 162 L62 160 L48 174 L60 172 L44 188 L96 188 L80 172 L92 174 L78 160 L88 162 L70 150 Z" />
        <path d="M642 200 L642 158 L628 168 L636 166 L624 180 L634 178 L620 192 L664 192 L650 178 L660 180 L648 166 L656 168 L642 158 Z" opacity="0.85" />
      </svg>

      {/* drifting birds */}
      <svg viewBox="0 0 80 24" className="absolute right-14 top-[88px] h-6 w-20 text-white/75" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 12c6-8 12-8 18 0c6-8 12-8 18 0" />
        <path d="M44 18c5-6 10-6 15 0" opacity="0.7" />
      </svg>
      <svg viewBox="0 0 60 18" className="absolute left-16 top-[140px] h-4 w-14 text-white/55" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 10c5-6 9-6 13 0c5-6 9-6 13 0" />
      </svg>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col px-14 pt-16 pb-14">
        {/* header */}
        <header className="text-center">
          <p className="inline-flex items-center gap-2.5 rounded-full bg-white/15 px-6 py-2 text-[13px] font-bold uppercase tracking-[0.42em] text-amber-100 ring-1 ring-white/25 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
            {t('template.common.tourPackage', 'Tour Package')}
            <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
          </p>
          <h1 className="mx-auto mt-7 max-w-[16rem] font-display text-[54px] font-extrabold leading-[1.0] tracking-tight drop-shadow-[0_3px_14px_rgba(0,0,0,0.4)]">
            <span
              data-pdf-color="#ffe39a"
              className="bg-gradient-to-b from-amber-50 via-amber-200 to-orange-400 bg-clip-text text-transparent"
            >
              {packageName}
            </span>
          </h1>
          <div className="mx-auto mt-5 flex items-center justify-center gap-2.5 text-amber-100/80">
            <span className="h-px w-12 bg-amber-100/50" />
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><circle cx="12" cy="12" r="3.4" /><g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2 2M16.5 16.5l2 2M18.5 5.5l-2 2M7.5 16.5l-2 2" /></g></svg>
            <span className="h-px w-12 bg-amber-100/50" />
          </div>
        </header>

        {/* highlights checklist */}
        <div className="mt-auto rounded-[26px] bg-white/[0.14] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.35)] ring-1 ring-white/30 backdrop-blur-md">
          <p className="mb-5 flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.32em] text-amber-100">
            <span className="h-2 w-2 rotate-45 bg-amber-300" />
            {t('template.common.tripHighlights', 'Trip Highlights')}
          </p>
          <ul className="space-y-4">
            {list.map((item, i) => (
              <li key={i} className="flex items-center gap-3.5 text-[19px] font-medium leading-snug">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 text-[#0b1f3a] shadow-sm">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-white/95">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* price + contact */}
        <div className="mt-7 flex items-end justify-between gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-amber-200 via-amber-300 to-orange-500 px-7 py-4 shadow-[0_14px_36px_rgba(255,138,76,0.4)] ring-1 ring-amber-100/40">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#7a2e0a]">
              {t('template.common.startingFrom', 'Starting from')}
            </p>
            <p className="font-display text-[44px] font-black leading-none tracking-tight text-[#3a1404]">{price}</p>
          </div>
          <div className="flex items-center gap-2.5 rounded-full bg-black/25 px-5 py-2.5 pb-2.5 text-[17px] font-bold ring-1 ring-white/15 backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-200" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            <span className="text-white/95">{contact}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
