'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Mandala & sacred geometry ─────────────────────────────────────────── */

function Mandala({ className = '' }) {
  const petals = Array.from({ length: 16 })
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="100" cy="100" r="92" opacity="0.35" />
      <circle cx="100" cy="100" r="74" opacity="0.5" />
      <circle cx="100" cy="100" r="40" opacity="0.6" />
      {petals.map((_, i) => (
        <g key={i} transform={`rotate(${(360 / petals.length) * i} 100 100)`}>
          <path d="M100 8c-7 12-7 26 0 38 7-12 7-26 0-38Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M100 26c-5 10-5 20 0 28 5-8 5-18 0-28Z" fill="currentColor" fillOpacity="0.18" />
        </g>
      ))}
      {petals.slice(0, 8).map((_, i) => (
        <g key={`in${i}`} transform={`rotate(${(360 / 8) * i + 22.5} 100 100)`}>
          <path d="M100 60c-4 8-4 16 0 24 4-8 4-16 0-24Z" fill="currentColor" fillOpacity="0.22" />
        </g>
      ))}
      <circle cx="100" cy="100" r="12" fill="currentColor" fillOpacity="0.4" stroke="none" />
      <circle cx="100" cy="100" r="4" fill="currentColor" stroke="none" />
    </svg>
  )
}

function CornerLeaf({ className = '' }) {
  return (
    <svg viewBox="0 0 90 90" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M6 6c30 2 52 8 70 26 18 18 6 40 6 52" opacity="0.5" />
      <path d="M6 6c20 0 36 6 48 18 12 12 18 28 18 48" opacity="0.7" />
      <path d="M6 6c8 8 14 18 16 30M22 36c-6-2-12-2-16 2M40 12c-2-4-6-6-10-6" opacity="0.6" />
    </svg>
  )
}

/**
 * Vastu Shanti — serene, earthy terracotta & sage with a sacred mandala.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function VastuShanti({ values }) {
  const { t } = useI18n()
  const event = values.eventName?.trim() || 'Vastu Shanti Pooja'
  const family = values.familyName?.trim() || 'The Iyer Family'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Plot 21, Green Meadows, Pune'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#f5ede0] px-16 py-20 text-center font-serif text-[#5a3a1f]"
    >
      {/* layered earthy wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7f0e3] via-[#efe3cf] to-[#e3cfae]" />

      {/* large faint mandala centred behind content */}
      <Mandala className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 text-[#9a6b3f]/35" />

      {/* thin sacred frame */}
      <div className="pointer-events-none absolute inset-7 rounded-sm border border-[#9a6b3f]/45" />
      <div className="pointer-events-none absolute inset-[34px] rounded-sm border border-[#8a9a5b]/35" />

      {/* corner foliage */}
      <CornerLeaf className="absolute left-6 top-6 h-16 w-16 text-[#8a9a5b]/70" />
      <CornerLeaf className="absolute right-6 top-6 h-16 w-16 -scale-x-100 text-[#8a9a5b]/70" />
      <CornerLeaf className="absolute bottom-6 left-6 h-16 w-16 -scale-y-100 text-[#8a9a5b]/70" />
      <CornerLeaf className="absolute bottom-6 right-6 h-16 w-16 -scale-100 text-[#8a9a5b]/70" />

      <header className="relative flex flex-col items-center">
        <span className="font-display text-4xl leading-none text-[#9a6b3f]">{t('template.common.om', 'ॐ')}</span>
        <div className="mt-4 h-px w-20 bg-[#9a6b3f]/50" />
        <p className="mt-4 text-[12px] uppercase tracking-[0.36em] text-[#7a5a3a]">
          {t('template.common.withDivineBlessings', 'With the divine blessings of the Almighty')}
        </p>
      </header>

      <main className="relative flex flex-col items-center gap-4">
        <p className="text-[13px] uppercase tracking-[0.42em] text-[#8a9a5b]">{t('template.common.youAreInvited', 'You are invited')}</p>
        <h1 className="font-display text-[48px] font-medium leading-[1.06]">
          <span
            data-pdf-color="#8a5a2b"
            className="bg-gradient-to-b from-[#b07c45] via-[#8a5a2b] to-[#6b4423] bg-clip-text text-transparent"
          >
            {event}
          </span>
        </h1>
        <p className="text-[15px] italic text-[#7a5a3a]/90">{t('template.common.cordiallyInvite', 'cordially invite you with family to')}</p>
        <p className="font-display text-2xl text-[#6b4423]">{family}</p>
      </main>

      <footer className="relative flex w-full flex-col items-center gap-3">
        <div className="flex items-center gap-3 text-[#8a9a5b]">
          <span className="h-px w-10 bg-[#8a9a5b]/60" />
          <span className="text-lg">❖</span>
          <span className="h-px w-10 bg-[#8a9a5b]/60" />
        </div>
        <p className="font-display text-2xl text-[#5a3a1f]">{date}{time && ` · ${time}`}</p>
        <p className="max-w-[22rem] text-[16px] leading-snug">{venue}</p>
        <p className="mt-2 text-[12px] uppercase tracking-[0.32em] text-[#9a6b3f]">
          {t('template.common.mahaprasad', 'Mahaprasad & Bhojan to follow')}
        </p>
      </footer>
    </div>
  )
}
