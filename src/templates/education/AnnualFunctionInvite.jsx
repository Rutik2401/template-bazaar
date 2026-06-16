'use client'

import { formatDate, formatTime, toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Elegant Annual Day invitation — theatre stage with draped velvet curtains, a
 * warm spotlight cone, a gold proscenium frame and twinkling stars over a deep
 * teal/navy backdrop.
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
      {/* ambient glow blobs */}
      <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-rose-500/10 blur-3xl" />

      {/* twinkling stars in the backdrop */}
      {[
        { x: 18, y: 30, s: 5, o: 0.7 },
        { x: 80, y: 26, s: 4, o: 0.55 },
        { x: 70, y: 46, s: 3, o: 0.45 },
        { x: 26, y: 52, s: 3.5, o: 0.5 },
        { x: 86, y: 58, s: 4, o: 0.5 },
        { x: 14, y: 64, s: 3, o: 0.4 },
      ].map((p, i) => (
        <Star
          key={i}
          className="absolute text-amber-200"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s * 6, height: p.s * 6, opacity: p.o }}
        />
      ))}

      {/* spotlight cone */}
      <div
        className="absolute left-1/2 top-0 h-[660px] w-[540px] -translate-x-1/2 bg-gradient-to-b from-amber-200/45 via-amber-100/12 to-transparent"
        style={{ clipPath: 'polygon(43% 0, 57% 0, 100% 100%, 0 100%)' }}
      />
      <div className="absolute left-1/2 top-1 h-12 w-12 -translate-x-1/2 rounded-full bg-amber-200/90 blur-xl" />

      {/* draped velvet curtains (left & right) with soft highlights */}
      {[0, 1].map((side) => (
        <div key={side} className="absolute top-0 h-full w-32" style={{ [side ? 'right' : 'left']: 0 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 h-full w-9 bg-gradient-to-r from-rose-950 via-rose-700 to-rose-950 shadow-[inset_0_0_18px_rgba(0,0,0,0.5)]"
              style={{
                [side ? 'right' : 'left']: `${i * 22}px`,
                borderRadius: '0 0 60% 60%',
                opacity: 0.94,
              }}
            />
          ))}
          {/* gold tieback */}
          <div
            className="absolute top-[300px] h-3 w-28 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 shadow-md"
            style={{ [side ? 'right' : 'left']: '-6px', borderRadius: '999px' }}
          />
        </div>
      ))}

      {/* curtain valance across the top */}
      <div className="absolute left-0 top-0 flex w-full justify-between">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="h-16 flex-1 bg-gradient-to-b from-rose-700 to-rose-950 shadow-[inset_0_-6px_12px_rgba(0,0,0,0.4)]"
            style={{ borderRadius: '0 0 50% 50%' }}
          />
        ))}
      </div>
      {/* gold valance trim */}
      <div className="absolute left-0 top-[64px] h-1 w-full bg-gradient-to-r from-amber-400/0 via-amber-300/80 to-amber-400/0" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-16 pb-16 pt-28 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-amber-300/90">{schoolName}</p>

        <div className="mt-4 flex items-center gap-3 text-amber-300/70">
          <span className="h-px w-12 bg-current" />
          <Star className="h-4 w-4" />
          <span className="h-px w-12 bg-current" />
        </div>

        <p className="mt-9 text-lg italic text-amber-100/85">cordially invites you to its</p>

        <h1 className="mt-3 font-display text-[58px] font-black uppercase leading-[0.9] tracking-tight">
          <span
            data-pdf-color="#fcd34d"
            className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(252,211,77,0.25)]"
          >
            Annual
          </span>
          <br />
          Day
        </h1>

        {/* laurel framing the year */}
        <div className="mt-5 flex items-center gap-3 text-amber-200/70">
          <Laurel className="h-7 w-7 -scale-x-100" />
          <p className="text-base uppercase tracking-[0.4em] text-amber-200/80">Celebration 2026</p>
          <Laurel className="h-7 w-7" />
        </div>

        {/* curtain-call ribbon */}
        <div className="mt-11 w-full max-w-sm rounded-2xl border border-amber-300/40 bg-gradient-to-b from-black/30 to-black/15 px-8 py-7 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)] backdrop-blur-sm">
          <Detail label="On" value={date} />
          <span className="mx-auto my-4 flex items-center justify-center gap-2 text-amber-300/50">
            <span className="h-px w-16 bg-current" />
            <Star className="h-2.5 w-2.5" />
            <span className="h-px w-16 bg-current" />
          </span>
          <Detail label="At" value={venue} />
        </div>

        <p className="mt-auto text-sm italic text-amber-100/75">
          An evening of music, dance &amp; celebration awaits you.
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
      <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-amber-300/75">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold text-amber-50">{value}</p>
    </div>
  )
}

function Star({ className = '', style }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M12 2l2.6 6.3 6.8.5-5.2 4.4 1.7 6.6L12 16.9 6.1 20.3l1.7-6.6L2.6 9.3l6.8-.5L12 2z" />
    </svg>
  )
}

function Laurel({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M12 22C7 19 5 13 6 4" />
      <path d="M8 8c-1.6.2-2.8-.6-3.4-2M8 12c-1.7 0-2.9-.9-3.4-2.4M9 16c-1.7.2-3-.6-3.6-2.2" />
    </svg>
  )
}
