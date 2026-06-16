'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Maharashtrian motifs ───────────────────────────────────────────────── */
function ToranLeaf({ className = '' }) {
  // mango-leaf toran swag
  return (
    <svg viewBox="0 0 320 64" className={className} fill="none">
      <path d="M0 6 H320" stroke="#7a1f12" strokeWidth="2" />
      {Array.from({ length: 13 }).map((_, i) => {
        const x = 14 + i * 24
        const long = i % 2 === 0
        const h = long ? 50 : 40
        return (
          <g key={i}>
            <path d={`M${x} 6 q9 ${h * 0.55} 0 ${h} q-9 -${h * 0.4} 0 -${h}Z`} fill={long ? '#1f7a3d' : '#2a9150'} fillOpacity={long ? 0.92 : 0.78} />
            <path d={`M${x} 8 V${6 + h - 4}`} stroke="#0f5c2a" strokeWidth="1" />
            <circle cx={x} cy={6 + h + 2} r="1.8" fill="#c5870b" />
          </g>
        )
      })}
    </svg>
  )
}

function Paisley({ className = '' }) {
  return (
    <svg viewBox="0 0 80 90" className={className} fill="none">
      <path
        d="M40 4c26 6 34 30 22 50-9 15-28 18-40 8-9-8-9-22 1-29 8-6 19-3 22 6 2 7-2 14-9 15"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M40 4c26 6 34 30 22 50-9 15-28 18-40 8"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.45"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <circle cx="36" cy="56" r="3.2" fill="currentColor" />
      <circle cx="48" cy="20" r="2" fill="currentColor" fillOpacity="0.7" />
    </svg>
  )
}

function SunMotif({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      <defs>
        <radialGradient id="sun-core" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#f4c33a" />
          <stop offset="1" stopColor="#c5870b" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="14" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="40" cy="40" r="9" fill="url(#sun-core)" fillOpacity="0.55" />
      <circle cx="40" cy="40" r="4" fill="currentColor" />
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i / 16) * Math.PI * 2
        const long = i % 2 === 0
        const r2 = long ? 28 : 24
        const x1 = 40 + Math.cos(a) * 18
        const y1 = 40 + Math.sin(a) * 18
        const x2 = 40 + Math.cos(a) * r2
        const y2 = 40 + Math.sin(a) * r2
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth={long ? 2.2 : 1.4} strokeLinecap="round" />
      })}
    </svg>
  )
}

/**
 * Sakharpuda (Marathi engagement) — turmeric-yellow + green + maroon.
 * Natural design size: 640 × 900.
 */
export default function SakharpudaEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#fceec0] font-serif text-[#5e1822]"
    >
      {/* layered warm background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdf2c6] via-[#fbe69a] to-[#f5d36e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(255,255,255,0.5),transparent_55%)]" />
      {/* maroon top & bottom bands with gold pin-line */}
      <div className="absolute inset-x-0 top-0 h-7 bg-[#7a1f12]" />
      <div className="absolute inset-x-0 top-7 h-[2px] bg-[#c5870b]" />
      <div className="absolute inset-x-0 bottom-0 h-7 bg-[#7a1f12]" />
      <div className="absolute inset-x-0 bottom-7 h-[2px] bg-[#c5870b]" />
      {/* green inner frame */}
      <div className="absolute inset-[24px] rounded-md border-[3px] border-[#1f7a3d]" />
      <div className="absolute inset-[33px] rounded-sm border border-[#7a1f12]/60" />

      {/* toran across the top */}
      <ToranLeaf className="absolute left-1/2 top-9 w-[300px] -translate-x-1/2" />

      {/* corner paisleys */}
      <Paisley className="absolute left-9 top-24 h-16 w-16 text-[#7a1f12]/70" />
      <Paisley className="absolute right-9 top-24 h-16 w-16 text-[#7a1f12]/70 [transform:scaleX(-1)]" />
      <Paisley className="absolute bottom-16 left-9 h-16 w-16 text-[#1f7a3d]/80 [transform:scaleY(-1)]" />
      <Paisley className="absolute bottom-16 right-9 h-16 w-16 text-[#1f7a3d]/80 [transform:scale(-1)]" />

      <div className="relative flex h-full flex-col items-center justify-between px-16 pb-20 pt-32 text-center">
        <header className="flex flex-col items-center gap-4">
          <SunMotif className="h-[68px] w-[68px] text-[#c5870b] drop-shadow-[0_2px_6px_rgba(197,135,11,0.4)]" />
          <p className="text-[14px] font-semibold tracking-[0.34em] text-[#7a1f12]">
            {t('template.common.om', 'Om')} · {t('template.common.ganpatiBappaMorya', 'Ganpati Bappa Morya')}
          </p>
          <h2 className="font-display text-[44px] leading-none text-[#1f7a3d] drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">
            {t('template.common.sakharpuda', 'Sakharpuda')}
          </h2>
        </header>

        <main className="flex flex-col items-center gap-5">
          <p className="text-[16px] italic text-[#7a1f12]/80">
            {t('template.common.engagementOf', 'at the engagement of')}
          </p>
          <div className="flex flex-col items-center gap-3">
            <h1 className="font-display text-[58px] font-medium leading-[1.06] tracking-[-0.01em]">
              <span
                data-pdf-color="#7a1f12"
                className="bg-gradient-to-r from-[#7a1f12] via-[#a83a18] to-[#c5870b] bg-clip-text text-transparent"
              >
                {couple}
              </span>
            </h1>
            <div className="flex items-center gap-2.5 text-[#c5870b]">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#c5870b]" />
              <span className="text-lg">❖</span>
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#c5870b]" />
            </div>
          </div>
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="rounded-xl border-2 border-[#1f7a3d]/60 bg-[#fff7df]/75 px-9 py-4 shadow-[0_8px_24px_-16px_rgba(122,31,18,0.6)]">
            <p className="font-display text-[25px] tracking-wide text-[#7a1f12]">
              {date}
              {time && <span className="text-[#1f7a3d]"> · {time}</span>}
            </p>
            <div className="mx-auto my-1.5 h-px w-16 bg-[#c5870b]/50" />
            <p className="text-[16px] leading-snug text-[#5e1822]">{venue}</p>
          </div>

          <p className="text-[14px] italic leading-relaxed text-[#7a1f12]/80">
            {t('template.common.withBestCompliments', 'With best compliments from')}
            <br />
            <span className="font-display text-[22px] not-italic tracking-wide text-[#1f7a3d]">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
