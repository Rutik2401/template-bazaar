'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Vastu-purush 9-square mandala ─────────────────────────────────────── */

function VastuMandala({ className = '' }) {
  const cells = Array.from({ length: 9 })
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      {/* outer rotated square (the diagonal directions) */}
      <rect x="6" y="6" width="108" height="108" rx="2" opacity="0.5" />
      {/* 3×3 grid */}
      <rect x="22" y="22" width="76" height="76" rx="1.5" />
      <path d="M22 47.3h76M22 72.6h76M47.3 22v76M72.6 22v76" opacity="0.7" />
      {/* central Brahmasthan */}
      <circle cx="60" cy="60" r="9" fill="currentColor" fillOpacity="0.18" />
      <circle cx="60" cy="60" r="3" fill="currentColor" stroke="none" />
      {/* corner dots */}
      {cells.map((_, i) => {
        const cx = 34.6 + (i % 3) * 25.3
        const cy = 34.6 + Math.floor(i / 3) * 25.3
        if (i === 4) return null
        return <circle key={i} cx={cx} cy={cy} r="1.6" fill="currentColor" stroke="none" opacity="0.6" />
      })}
    </svg>
  )
}

function Diya({ className = '' }) {
  return (
    <svg viewBox="0 0 60 50" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* flame */}
      <path d="M30 4c4 6 4 11 0 16-4-5-4-10 0-16Z" fill="currentColor" fillOpacity="0.4" stroke="none" />
      {/* lamp bowl */}
      <path d="M8 30c0 8 10 14 22 14s22-6 22-14c0-2-2-3-5-3H13c-3 0-5 1-5 3Z" fill="currentColor" fillOpacity="0.16" />
      <path d="M30 20v7" />
    </svg>
  )
}

/**
 * Vastu Shanti invite — earthy terracotta & green with a vastu-purush
 * mandala motif. Calm, sacred feel. Natural size 640 × 900 (portrait).
 */
export default function VastuShantiInvite({ values }) {
  useI18n()
  const family = values.familyName?.trim() || 'The Sharma Family'
  const date = formatDate(values.date, '12 July 2026')
  const time = formatTime(values.time, '')
  const address = values.address?.trim() || 'B-204, Green Acres, Pune'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#e8ddc7] font-serif text-[#3d2b1f]"
    >
      {/* warm sand ground */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#efe6d2] via-[#e6d8bd] to-[#d8c39e]" />

      {/* terracotta header & footer panels */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#a8472a] to-[#8f3a23]" />
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#3c5a3a] to-[#4e7049]" />

      {/* large faint mandala watermark */}
      <VastuMandala className="absolute left-1/2 top-[300px] h-[420px] w-[420px] -translate-x-1/2 text-[#8f3a23]/10" />

      {/* inset border */}
      <div className="absolute inset-x-8 top-[140px] bottom-[64px] rounded-md border border-[#8f3a23]/40" />

      {/* content */}
      <div className="relative flex h-full flex-col items-center justify-between px-14 pb-20 pt-9 text-center">
        <header className="flex flex-col items-center text-[#f3e7cf]">
          <Diya className="h-12 w-16 text-amber-200" />
          <p className="mt-2 text-[12px] uppercase tracking-[0.5em] text-amber-100/90">Vastu Shanti</p>
          <h1 className="mt-1 font-display text-[34px] font-semibold leading-none">Griha Pravesh Puja</h1>
        </header>

        <main className="flex flex-col items-center">
          <div className="grid h-32 w-32 place-items-center rounded-full border border-[#8f3a23]/40 bg-[#efe6d2]/70">
            <VastuMandala className="h-24 w-24 text-[#8f3a23]" />
          </div>
          <p className="mt-7 text-[12px] uppercase tracking-[0.4em] text-[#8f3a23]">In harmony with the five elements</p>
          <p className="mt-3 max-w-[23rem] text-[15px] leading-relaxed text-[#4a3422]">
            We seek your presence and blessings as we consecrate our new home with a Vastu Shanti puja.
          </p>
          <h2 className="mt-6 font-display text-[36px] font-semibold leading-tight">
            <span
              data-pdf-color="#8f3a23"
              className="bg-gradient-to-br from-[#a8472a] via-[#8f3a23] to-[#5e2615] bg-clip-text text-transparent"
            >
              {family}
            </span>
          </h2>
        </main>

        <footer className="flex w-full flex-col items-center gap-3">
          <div className="flex w-full items-stretch justify-center gap-4 text-[#3d2b1f]">
            <div className="flex-1 rounded-md border border-[#8f3a23]/30 bg-[#efe6d2]/60 px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8f3a23]">Date</p>
              <p className="mt-1 font-display text-[19px] font-semibold">{date}</p>
            </div>
            {time && (
              <div className="flex-1 rounded-md border border-[#8f3a23]/30 bg-[#efe6d2]/60 px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#8f3a23]">Time</p>
                <p className="mt-1 font-display text-[19px] font-semibold">{time}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center gap-1 text-[#f3e7cf]">
            <p className="text-[10px] uppercase tracking-[0.34em] text-amber-100/85">Venue</p>
            <p className="max-w-[24rem] text-[15px] leading-snug">{address}</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
