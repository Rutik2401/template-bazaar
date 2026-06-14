'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Watercolour floral pieces ──────────────────────────────────────────── */
function Bloom({ className = '', petal = '#f6b3c7', center = '#f4d06f' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i / 6) * 360
        return (
          <ellipse
            key={i}
            cx="50"
            cy="28"
            rx="14"
            ry="22"
            fill={petal}
            fillOpacity="0.78"
            transform={`rotate(${a} 50 50)`}
          />
        )
      })}
      <circle cx="50" cy="50" r="11" fill={center} fillOpacity="0.92" />
    </svg>
  )
}

function Leaf({ className = '', color = '#a8c79b' }) {
  return (
    <svg viewBox="0 0 60 100" className={className} fill="none">
      <path d="M30 4 C58 30 58 70 30 96 C2 70 2 30 30 4Z" fill={color} fillOpacity="0.7" />
      <path d="M30 8 V92" stroke="#6f9a63" strokeWidth="1.4" strokeOpacity="0.6" />
    </svg>
  )
}

/**
 * Floral engagement — soft watercolour pastels, pretty & airy.
 * Natural design size: 640 × 900.
 */
export default function FloralEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Laksh & Anushka'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-[#fdfbff] via-[#fbf4f8] to-[#eef4f2] font-serif text-[#5a4a55]"
    >
      {/* watercolour wash blobs */}
      <div className="absolute -left-16 -top-10 h-64 w-64 rounded-full bg-[#f7c9d8]/50 blur-3xl" />
      <div className="absolute -right-12 top-24 h-56 w-56 rounded-full bg-[#cfe3d6]/60 blur-3xl" />
      <div className="absolute -bottom-16 left-10 h-64 w-64 rounded-full bg-[#dcd0ef]/50 blur-3xl" />

      {/* top-left floral cluster */}
      <div className="absolute -left-6 -top-6">
        <Leaf className="absolute left-16 top-6 h-24 w-14 rotate-[35deg]" />
        <Leaf className="absolute left-2 top-20 h-20 w-12 -rotate-[10deg]" color="#bcd6c8" />
        <Bloom className="absolute left-0 top-0 h-28 w-28" />
        <Bloom className="absolute left-20 top-16 h-20 w-20" petal="#d8c4ec" center="#f4d06f" />
        <Bloom className="absolute left-6 top-24 h-16 w-16" petal="#f9d6a8" center="#e8859b" />
      </div>

      {/* bottom-right floral cluster (mirrored) */}
      <div className="absolute -bottom-6 -right-6">
        <Leaf className="absolute bottom-16 right-16 h-24 w-14 rotate-[200deg]" />
        <Leaf className="absolute bottom-2 right-24 h-20 w-12 rotate-[160deg]" color="#bcd6c8" />
        <Bloom className="absolute bottom-0 right-0 h-28 w-28" />
        <Bloom className="absolute bottom-16 right-20 h-20 w-20" petal="#d8c4ec" center="#f4d06f" />
        <Bloom className="absolute bottom-24 right-6 h-16 w-16" petal="#f9d6a8" center="#e8859b" />
      </div>

      <div className="relative flex h-full flex-col items-center justify-between px-16 py-24 text-center">
        <header className="flex flex-col items-center gap-3">
          <p className="text-[12px] font-semibold uppercase tracking-[0.5em] text-[#c08aa0]">
            {t('template.common.youAreInvited', "You're Invited")}
          </p>
          <div className="flex items-center gap-2 text-[#c8a2b4]">
            <span className="h-px w-10 bg-[#c8a2b4]" />
            <span className="text-sm">✿</span>
            <span className="h-px w-10 bg-[#c8a2b4]" />
          </div>
        </header>

        <main className="flex flex-col items-center gap-4">
          <p className="text-[16px] italic text-[#9a7d8c]">
            {t('template.common.engagementOf', 'at the engagement of')}
          </p>
          <h1 className="font-display text-[58px] leading-[1.08]">
            <span
              data-pdf-color="#c06388"
              className="bg-gradient-to-r from-[#e08aa6] via-[#c97aa8] to-[#9b8fcf] bg-clip-text text-transparent"
            >
              {couple}
            </span>
          </h1>
          <div className="mt-1 flex items-center gap-3 text-[#bda0b2]">
            <Bloom className="h-7 w-7" petal="#f7c9d8" center="#f4d06f" />
          </div>
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="rounded-3xl border border-[#e6c9d6] bg-white/55 px-10 py-5 backdrop-blur-sm">
            <p className="font-display text-[24px] text-[#8a5d72]">
              {date}
              {time && <span className="text-[#a98fc0]"> · {time}</span>}
            </p>
            <div className="mx-auto my-2 h-px w-20 bg-[#e6c9d6]" />
            <p className="text-[16px] leading-snug text-[#6e5b66]">{venue}</p>
          </div>

          <p className="text-[14px] italic text-[#b08ea0]">
            {t('template.common.withBestCompliments', 'With best compliments from')}
            <br />
            <span className="font-display text-xl not-italic text-[#8a5d72]">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
