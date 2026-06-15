'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Maharashtrian motifs ───────────────────────────────────────────────── */
function ToranLeaf({ className = '' }) {
  // mango-leaf toran swag
  return (
    <svg viewBox="0 0 320 60" className={className} fill="none">
      <path d="M0 6 H320" stroke="#7a1f12" strokeWidth="2" />
      {Array.from({ length: 13 }).map((_, i) => {
        const x = 14 + i * 24
        return (
          <g key={i}>
            <path d={`M${x} 6 q8 26 0 46 q-8 -20 0 -46Z`} fill="#1f7a3d" fillOpacity={i % 2 ? 0.9 : 0.7} />
            <path d={`M${x} 8 V50`} stroke="#0f5c2a" strokeWidth="1" />
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
      <circle cx="36" cy="56" r="3.2" fill="currentColor" />
    </svg>
  )
}

function SunMotif({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      <circle cx="40" cy="40" r="14" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="40" cy="40" r="6" fill="currentColor" fillOpacity="0.4" />
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i / 16) * Math.PI * 2
        const x1 = 40 + Math.cos(a) * 18
        const y1 = 40 + Math.sin(a) * 18
        const x2 = 40 + Math.cos(a) * 26
        const y2 = 40 + Math.sin(a) * 26
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
  const couple = values.coupleName?.trim() || 'Lokesh & Sanika'
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdf0bf] via-[#fbe69a] to-[#f6d878]" />
      {/* maroon top & bottom bands */}
      <div className="absolute inset-x-0 top-0 h-7 bg-[#7a1f12]" />
      <div className="absolute inset-x-0 bottom-0 h-7 bg-[#7a1f12]" />
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
          <SunMotif className="h-16 w-16 text-[#c5870b]" />
          <p className="text-[14px] font-semibold tracking-[0.3em] text-[#7a1f12]">
            {t('template.common.om', 'Om')} · {t('template.common.ganpatiBappaMorya', 'Ganpati Bappa Morya')}
          </p>
          <h2 className="font-display text-[40px] leading-none text-[#1f7a3d]">
            {t('template.common.sakharpuda', 'Sakharpuda')}
          </h2>
        </header>

        <main className="flex flex-col items-center gap-4">
          <p className="text-[16px] italic text-[#7a1f12]/80">
            {t('template.common.engagementOf', 'at the engagement of')}
          </p>
          <div className="flex flex-col items-center">
            <h1 className="font-display text-[54px] leading-[1.1]">
              <span
                data-pdf-color="#7a1f12"
                className="bg-gradient-to-r from-[#7a1f12] via-[#a83a18] to-[#c5870b] bg-clip-text text-transparent"
              >
                {couple}
              </span>
            </h1>
            <div className="mt-3 flex items-center gap-2 text-[#c5870b]">
              <span className="h-px w-16 bg-[#c5870b]" />
              <span className="text-lg">❖</span>
              <span className="h-px w-16 bg-[#c5870b]" />
            </div>
          </div>
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="rounded-xl border-2 border-[#1f7a3d]/60 bg-[#fff7df]/70 px-8 py-4">
            <p className="font-display text-[24px] text-[#7a1f12]">
              {date}
              {time && <span className="text-[#1f7a3d]"> · {time}</span>}
            </p>
            <p className="mt-1 text-[16px] leading-snug text-[#5e1822]">{venue}</p>
          </div>

          <p className="text-[14px] italic text-[#7a1f12]/80">
            {t('template.common.withBestCompliments', 'With best compliments from')}
            <br />
            <span className="font-display text-xl not-italic text-[#1f7a3d]">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
