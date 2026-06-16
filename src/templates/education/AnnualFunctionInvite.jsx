'use client'

import { formatDate, formatTime, toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Elegant Annual Day invitation — theatre stage with draped curtains, a warm
 * spotlight cone and gold accents over a deep teal/navy backdrop.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function AnnualFunctionInvite({ values }) {
  const { t } = useI18n()
  const schoolName = values.schoolName?.trim() || 'Sunrise Public School'
  const date = formatDate(values.date, '25 June 2026')
  const venue = values.venue?.trim() || 'School Auditorium'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-teal-950 via-teal-900 to-slate-950 font-serif text-amber-50"
    >
      {/* spotlight cone */}
      <div
        className="absolute left-1/2 top-0 h-[640px] w-[520px] -translate-x-1/2 bg-gradient-to-b from-amber-200/40 via-amber-100/10 to-transparent"
        style={{ clipPath: 'polygon(42% 0, 58% 0, 100% 100%, 0 100%)' }}
      />
      <div className="absolute left-1/2 top-2 h-10 w-10 -translate-x-1/2 rounded-full bg-amber-200/80 blur-xl" />

      {/* draped curtains (left & right) */}
      {[0, 1].map((side) => (
        <div
          key={side}
          className="absolute top-0 h-full w-32"
          style={{ [side ? 'right' : 'left']: 0 }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 h-full w-9 bg-gradient-to-r from-rose-950 via-rose-800 to-rose-950"
              style={{
                [side ? 'right' : 'left']: `${i * 22}px`,
                borderRadius: '0 0 60% 60%',
                opacity: 0.92,
              }}
            />
          ))}
        </div>
      ))}
      {/* curtain valance across the top */}
      <div className="absolute left-0 top-0 flex w-full justify-between">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="h-16 flex-1 bg-gradient-to-b from-rose-800 to-rose-950"
            style={{ borderRadius: '0 0 50% 50%' }}
          />
        ))}
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-16 pb-16 pt-28 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-amber-300/90">{schoolName}</p>

        <div className="mt-4 flex items-center gap-3 text-amber-300/70">
          <span className="h-px w-12 bg-current" />
          <Star className="h-4 w-4" />
          <span className="h-px w-12 bg-current" />
        </div>

        <p className="mt-10 text-lg italic text-amber-100/80">cordially invites you to its</p>

        <h1 className="mt-3 font-display text-[58px] font-black uppercase leading-[0.9] tracking-tight">
          <span
            data-pdf-color="#fcd34d"
            className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent"
          >
            Annual
          </span>
          <br />
          Day
        </h1>

        <p className="mt-4 text-base uppercase tracking-[0.35em] text-amber-200/70">Celebration 2026</p>

        {/* curtain-call ribbon */}
        <div className="mt-12 w-full max-w-sm rounded-2xl border border-amber-300/40 bg-black/25 px-8 py-7 backdrop-blur-sm">
          <Detail label="On" value={date} />
          <span className="mx-auto my-4 block h-px w-24 bg-amber-300/40" />
          <Detail label="At" value={venue} />
        </div>

        <p className="mt-auto text-sm italic text-amber-100/70">
          An evening of music, dance & celebration awaits you.
        </p>

        <div className="mt-6 flex items-center gap-3 text-amber-300/70">
          <Star className="h-3.5 w-3.5" />
          <Star className="h-3 w-3" />
          <Star className="h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  )
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-amber-300/70">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold text-amber-50">{value}</p>
    </div>
  )
}

function Star({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2l2.6 6.3 6.8.5-5.2 4.4 1.7 6.6L12 16.9 6.1 20.3l1.7-6.6L2.6 9.3l6.8-.5L12 2z" />
    </svg>
  )
}
