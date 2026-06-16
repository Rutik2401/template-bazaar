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
      <rect x="6" y="6" width="108" height="108" rx="2" transform="rotate(45 60 60)" opacity="0.28" />
      {/* 3×3 grid */}
      <rect x="22" y="22" width="76" height="76" rx="1.5" />
      <path d="M22 47.3h76M22 72.6h76M47.3 22v76M72.6 22v76" opacity="0.7" />
      {/* lotus petals around the Brahmasthan */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4
        const cx = 60 + Math.cos(a) * 16
        const cy = 60 + Math.sin(a) * 16
        return <circle key={i} cx={cx} cy={cy} r="3.2" fill="currentColor" fillOpacity="0.14" stroke="none" />
      })}
      {/* central Brahmasthan */}
      <circle cx="60" cy="60" r="9" fill="currentColor" fillOpacity="0.2" />
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
    <svg viewBox="0 0 60 54" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* flame halo */}
      <ellipse cx="30" cy="11" rx="7" ry="11" fill="currentColor" fillOpacity="0.14" stroke="none" />
      {/* flame */}
      <path d="M30 2c5 7 5 13 0 19-5-6-5-12 0-19Z" fill="currentColor" fillOpacity="0.55" stroke="none" />
      {/* lamp bowl */}
      <path d="M8 32c0 9 10 16 22 16s22-7 22-16c0-2-2-3-5-3H13c-3 0-5 1-5 3Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M30 21v8" />
      <path d="M13 35h34" opacity="0.6" />
    </svg>
  )
}

function LotusDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 120 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M2 18h36M82 18h36" opacity="0.6" />
      <path d="M60 22c-7-4-11-9-11-14 5 0 9 3 11 7 2-4 6-7 11-7 0 5-4 10-11 14Z" fill="currentColor" fillOpacity="0.22" />
      <path d="M60 22c-3-4-4-8-4-12M60 22c3-4 4-8 4-12" opacity="0.7" />
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#f3ecda] via-[#e7d9bf] to-[#d6bf99]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,_rgba(255,250,235,0.5),_transparent_60%)]" />

      {/* terracotta header & footer panels with gold piping */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#b04d2d] via-[#9c4127] to-[#8a3621]" />
      <div className="absolute inset-x-0 top-28 h-[3px] bg-gradient-to-r from-transparent via-[#e7c98b] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#36502f] to-[#4e7049]" />
      <div className="absolute inset-x-0 bottom-14 h-[3px] bg-gradient-to-r from-transparent via-[#e7c98b] to-transparent" />

      {/* large faint mandala watermark */}
      <VastuMandala className="absolute left-1/2 top-[300px] h-[440px] w-[440px] -translate-x-1/2 text-[#8f3a23]/[0.09]" />

      {/* inset border with corner ticks */}
      <div className="absolute inset-x-8 top-[142px] bottom-[72px] rounded-md border border-[#8f3a23]/40" />
      <div className="absolute inset-x-[42px] top-[152px] bottom-[82px] rounded-sm border border-[#8f3a23]/20" />

      {/* content */}
      <div className="relative flex h-full flex-col items-center justify-between px-14 pb-[72px] pt-9 text-center">
        <header className="flex flex-col items-center text-[#f5ead2]">
          <Diya className="h-14 w-16 text-amber-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]" />
          <p className="mt-2 text-[12px] uppercase tracking-[0.55em] text-amber-100">Vastu Shanti</p>
          <h1 className="mt-1.5 font-display text-[34px] font-semibold leading-none">Griha Pravesh Puja</h1>
        </header>

        <main className="flex flex-col items-center">
          <div className="grid h-36 w-36 place-items-center rounded-full border-2 border-[#8f3a23]/35 bg-gradient-to-br from-[#f5edda]/90 to-[#e8d8b8]/70 shadow-[0_8px_28px_rgba(143,58,35,0.18)]">
            <div className="grid h-28 w-28 place-items-center rounded-full border border-[#8f3a23]/25">
              <VastuMandala className="h-24 w-24 text-[#8f3a23]" />
            </div>
          </div>
          <p className="mt-7 text-[12px] uppercase tracking-[0.42em] text-[#8f3a23]">In harmony with the five elements</p>
          <p className="mt-3.5 max-w-[23rem] text-[15px] leading-relaxed text-[#4a3422]">
            We seek your presence and blessings as we consecrate our new home with a Vastu Shanti puja.
          </p>
          <LotusDivider className="mt-6 h-6 w-40 text-[#8f3a23]/70" />
          <h2 className="mt-5 font-display text-[38px] font-semibold leading-tight">
            <span
              data-pdf-color="#8f3a23"
              className="bg-gradient-to-br from-[#b04d2d] via-[#8f3a23] to-[#5e2615] bg-clip-text text-transparent"
            >
              {family}
            </span>
          </h2>
        </main>

        <footer className="flex w-full flex-col items-center gap-3.5">
          <div className="flex w-full items-stretch justify-center gap-4 text-[#3d2b1f]">
            <div className="flex-1 rounded-lg border border-[#8f3a23]/30 bg-gradient-to-b from-[#f5edda]/80 to-[#ecdcbd]/60 px-4 py-3.5 shadow-[0_3px_12px_rgba(143,58,35,0.1)]">
              <p className="text-[10px] uppercase tracking-[0.34em] text-[#8f3a23]">Date</p>
              <p className="mt-1 font-display text-[19px] font-semibold">{date}</p>
            </div>
            {time && (
              <div className="flex-1 rounded-lg border border-[#8f3a23]/30 bg-gradient-to-b from-[#f5edda]/80 to-[#ecdcbd]/60 px-4 py-3.5 shadow-[0_3px_12px_rgba(143,58,35,0.1)]">
                <p className="text-[10px] uppercase tracking-[0.34em] text-[#8f3a23]">Time</p>
                <p className="mt-1 font-display text-[19px] font-semibold">{time}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center gap-1 text-[#f5ead2]">
            <p className="text-[10px] uppercase tracking-[0.38em] text-amber-100/90">Venue</p>
            <p className="max-w-[24rem] text-[15px] leading-snug">{address}</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
