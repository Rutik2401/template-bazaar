'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Watercolour floral pieces ──────────────────────────────────────────── */
function Bloom({ className = '', petal = '#f6b3c7', center = '#f4d06f', id = 'b' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <defs>
        <radialGradient id={`petal-${id}`} cx="50%" cy="34%" r="62%">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="0.45" stopColor={petal} stopOpacity="0.9" />
          <stop offset="1" stopColor={petal} stopOpacity="0.55" />
        </radialGradient>
        <radialGradient id={`core-${id}`} cx="50%" cy="42%" r="60%">
          <stop offset="0" stopColor="#fff3cf" />
          <stop offset="1" stopColor={center} />
        </radialGradient>
      </defs>
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i / 6) * 360
        return (
          <ellipse
            key={i}
            cx="50"
            cy="27"
            rx="14"
            ry="23"
            fill={`url(#petal-${id})`}
            transform={`rotate(${a} 50 50)`}
          />
        )
      })}
      <circle cx="50" cy="50" r="11" fill={`url(#core-${id})`} />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * Math.PI * 2
        return <circle key={i} cx={50 + Math.cos(a) * 6} cy={50 + Math.sin(a) * 6} r="1.4" fill="#caa53b" fillOpacity="0.7" />
      })}
    </svg>
  )
}

function Leaf({ className = '', color = '#a8c79b' }) {
  return (
    <svg viewBox="0 0 60 100" className={className} fill="none">
      <path d="M30 4 C58 30 58 70 30 96 C2 70 2 30 30 4Z" fill={color} fillOpacity="0.72" />
      <path d="M30 8 V92" stroke="#6f9a63" strokeWidth="1.4" strokeOpacity="0.6" />
      <path d="M30 30 C40 30 46 26 52 20 M30 46 C40 46 46 42 52 36 M30 62 C40 62 46 58 52 52" stroke="#6f9a63" strokeWidth="1" strokeOpacity="0.4" />
    </svg>
  )
}

function Arch({ className = '' }) {
  return (
    <svg viewBox="0 0 360 200" className={className} fill="none" stroke="currentColor">
      <path d="M40 196 C40 90 100 26 180 26 C260 26 320 90 320 196" strokeWidth="1.3" opacity="0.55" />
    </svg>
  )
}

/**
 * Floral engagement — soft watercolour pastels, pretty & airy.
 * Natural design size: 640 × 900.
 */
export default function FloralEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-[#fffdff] via-[#fbf3f8] to-[#edf4f1] font-serif text-[#5a4a55]"
    >
      {/* watercolour wash blobs */}
      <div className="absolute -left-16 -top-10 h-64 w-64 rounded-full bg-[#f7c9d8]/50 blur-3xl" />
      <div className="absolute -right-12 top-24 h-56 w-56 rounded-full bg-[#cfe3d6]/55 blur-3xl" />
      <div className="absolute -bottom-16 left-10 h-64 w-64 rounded-full bg-[#dcd0ef]/50 blur-3xl" />
      <div className="absolute right-4 bottom-1/3 h-44 w-44 rounded-full bg-[#fbe0c4]/45 blur-3xl" />

      {/* delicate framing arch */}
      <Arch className="absolute left-1/2 top-[150px] h-[420px] w-[420px] -translate-x-1/2 text-[#d6aebf]" />

      {/* top-left floral cluster */}
      <div className="absolute -left-6 -top-6">
        <Leaf className="absolute left-16 top-6 h-24 w-14 rotate-[35deg]" />
        <Leaf className="absolute left-2 top-20 h-20 w-12 -rotate-[10deg]" color="#bcd6c8" />
        <Bloom className="absolute left-0 top-0 h-28 w-28" id="tl1" />
        <Bloom className="absolute left-20 top-16 h-20 w-20" petal="#d8c4ec" center="#f4d06f" id="tl2" />
        <Bloom className="absolute left-6 top-24 h-16 w-16" petal="#f9d6a8" center="#e8859b" id="tl3" />
      </div>

      {/* bottom-right floral cluster (mirrored) */}
      <div className="absolute -bottom-6 -right-6">
        <Leaf className="absolute bottom-16 right-16 h-24 w-14 rotate-[200deg]" />
        <Leaf className="absolute bottom-2 right-24 h-20 w-12 rotate-[160deg]" color="#bcd6c8" />
        <Bloom className="absolute bottom-0 right-0 h-28 w-28" id="br1" />
        <Bloom className="absolute bottom-16 right-20 h-20 w-20" petal="#d8c4ec" center="#f4d06f" id="br2" />
        <Bloom className="absolute bottom-24 right-6 h-16 w-16" petal="#f9d6a8" center="#e8859b" id="br3" />
      </div>

      <div className="relative flex h-full flex-col items-center justify-between px-16 py-24 text-center">
        <header className="flex flex-col items-center gap-4">
          <p className="text-[12px] font-semibold uppercase tracking-[0.58em] text-[#c08aa0]">
            {t('template.common.youAreInvited', "You're Invited")}
          </p>
          <div className="flex items-center gap-2.5 text-[#c8a2b4]">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#c8a2b4]" />
            <span className="text-sm">✿</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#c8a2b4]" />
          </div>
        </header>

        <main className="flex flex-col items-center gap-5">
          <p className="font-display text-[19px] italic text-[#9a7d8c]">
            {t('template.common.engagementOf', 'at the engagement of')}
          </p>
          <h1 className="font-display text-[60px] font-medium leading-[1.06] tracking-[-0.01em]">
            <span
              data-pdf-color="#c06388"
              className="bg-gradient-to-r from-[#e08aa6] via-[#c97aa8] to-[#9b8fcf] bg-clip-text text-transparent"
            >
              {couple}
            </span>
          </h1>
          <Bloom className="h-8 w-8" petal="#f7c9d8" center="#f4d06f" id="mid" />
        </main>

        <footer className="flex w-full flex-col items-center gap-5">
          <div className="rounded-[28px] border border-[#e6c9d6] bg-white/60 px-11 py-6 shadow-[0_10px_30px_-18px_rgba(160,110,135,0.5)] backdrop-blur-sm">
            <p className="font-display text-[25px] tracking-wide text-[#8a5d72]">
              {date}
              {time && <span className="text-[#a98fc0]"> · {time}</span>}
            </p>
            <div className="mx-auto my-2.5 flex items-center justify-center gap-2 text-[#cf9fb6]">
              <span className="h-px w-12 bg-[#e6c9d6]" />
              <span className="text-[10px]">✿</span>
              <span className="h-px w-12 bg-[#e6c9d6]" />
            </div>
            <p className="text-[16px] leading-snug text-[#6e5b66]">{venue}</p>
          </div>

          <p className="text-[14px] italic leading-relaxed text-[#b08ea0]">
            {t('template.common.withBestCompliments', 'With best compliments from')}
            <br />
            <span className="font-display text-[22px] not-italic tracking-wide text-[#8a5d72]">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
