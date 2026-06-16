'use client'

import { useI18n } from '@/i18n/I18nProvider'

/**
 * Boho Pampas wedding invitation — warm beige card, off-white arch panel, and
 * cream/white florals with golden dried palm fans, in the style of the
 * reference. Calligraphy names in Great Vibes (font-script), body in serif.
 * Natural design size: 640 × 900 (portrait card).
 *
 * Text colour throughout is rich golden brown (#8B5A2B).
 */

/* ── Locale-safe fancy formatters (kept local to this template) ──────────── */

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS_ABBR = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

function ordinal(n) {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}

/** "2024-02-25" → "Sun, Feb 25th, 2024" (returns fallback if empty/invalid). */
function fancyDate(value, fallback = '') {
  if (!value) return fallback
  const [y, m, d] = String(value).split('-').map(Number)
  if (!y || !m || !d) return value || fallback
  const wd = new Date(y, m - 1, d).getDay()
  return `${WEEKDAYS[wd] ?? ''}, ${MONTHS_ABBR[m - 1] ?? ''} ${ordinal(d)}, ${y}`
}

/** "09:00" → "At 9 am" · "11:30" → "At 11:30 am" (returns fallback if empty). */
function fancyTime(value, fallback = '') {
  if (!value) return fallback
  const [hRaw, minRaw] = String(value).split(':')
  let h = Number(hRaw)
  if (Number.isNaN(h)) return value || fallback
  const period = h >= 12 ? 'pm' : 'am'
  h = h % 12 || 12
  const min = Number(minRaw)
  const mins = min ? `:${String(min).padStart(2, '0')}` : ''
  return `At ${h}${mins} ${period}`
}

/* ── Botanical building blocks (hand-built vector art) ───────────────────── */

const GOLD = '#b88a3a'

/** A spiky dried-palm fan radiating from the origin (points "up"). */
function PalmFan({ x, y, rotate = 0, length = 130, blades = 11, spread = 116, fill, width = 5 }) {
  const arr = Array.from({ length: blades })
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      {arr.map((_, i) => {
        const t = blades > 1 ? i / (blades - 1) : 0.5
        const ang = ((-spread / 2 + spread * t) * Math.PI) / 180
        const len = length * (0.6 + 0.4 * Math.sin(Math.PI * t)) // longest in the middle
        const ex = Math.sin(ang) * len
        const ey = -Math.cos(ang) * len
        const px = Math.cos(ang) * width
        const py = Math.sin(ang) * width
        return (
          <path
            key={i}
            d={`M0 0 Q ${ex * 0.5 + px} ${ey * 0.5 + py} ${ex} ${ey} Q ${ex * 0.5 - px} ${ey * 0.5 - py} 0 0 Z`}
            fill={fill}
          />
        )
      })}
      {/* central rib */}
      <path d={`M0 0 L 0 ${-length * 0.96}`} stroke={fill} strokeWidth="1.4" opacity="0.5" />
    </g>
  )
}

/** A drooping eucalyptus sprig of paired oval leaves along a curved stem. */
function EucalyptusSprig({ x, y, rotate = 0, length = 120, leaves = 6, fill }) {
  const arr = Array.from({ length: leaves })
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <path d={`M0 0 C 8 ${-length * 0.4} 4 ${-length * 0.74} -6 ${-length}`} stroke={fill} strokeWidth="1.6" fill="none" />
      {arr.map((_, i) => {
        const t = (i + 0.6) / leaves
        const ly = -length * t
        const lx = 6 * (1 - t) + Math.sin(t * Math.PI) * 2
        const side = i % 2 === 0 ? 1 : -1
        return (
          <ellipse
            key={i}
            cx={lx + side * 9}
            cy={ly}
            rx="9"
            ry="5"
            fill={fill}
            opacity={0.92}
            transform={`rotate(${side * 38} ${lx + side * 9} ${ly})`}
          />
        )
      })}
    </g>
  )
}

/** A soft cream garden rose — layered petals around a coiled centre. */
function Rose({ x, y, r = 26, light, mid, dark }) {
  const outer = Array.from({ length: 7 })
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill={light} />
      {outer.map((_, i) => {
        const a = (i / outer.length) * Math.PI * 2
        return (
          <ellipse
            key={i}
            cx={Math.cos(a) * r * 0.6}
            cy={Math.sin(a) * r * 0.6}
            rx={r * 0.46}
            ry={r * 0.34}
            fill={mid}
            opacity="0.55"
            transform={`rotate(${(a * 180) / Math.PI} ${Math.cos(a) * r * 0.6} ${Math.sin(a) * r * 0.6})`}
          />
        )
      })}
      <circle r={r * 0.5} fill={light} />
      <path
        d={`M ${-r * 0.28} 0 A ${r * 0.28} ${r * 0.28} 0 1 1 ${r * 0.2} ${r * 0.18}`}
        fill="none"
        stroke={dark}
        strokeWidth="2"
        opacity="0.5"
      />
      <circle r={r * 0.12} fill={dark} opacity="0.4" />
    </g>
  )
}

/** A small five-petal blossom with a golden centre. */
function Blossom({ x, y, r = 12, petal = '#fffdf8', center = GOLD }) {
  const arr = Array.from({ length: 5 })
  return (
    <g transform={`translate(${x} ${y})`}>
      {arr.map((_, i) => {
        const a = (i / 5) * Math.PI * 2
        return (
          <ellipse
            key={i}
            cx={Math.cos(a) * r * 0.62}
            cy={Math.sin(a) * r * 0.62}
            rx={r * 0.5}
            ry={r * 0.34}
            fill={petal}
            transform={`rotate(${(a * 180) / Math.PI} ${Math.cos(a) * r * 0.62} ${Math.sin(a) * r * 0.62})`}
          />
        )
      })}
      <circle r={r * 0.28} fill={center} opacity="0.85" />
    </g>
  )
}

/**
 * Full boho bouquet, fanning up and to the right from a lower-left anchor.
 * Reused twice (top-right as-is; bottom-left mirrored) so it carries no
 * gradient ids that could collide — all fills are solid.
 */
function BohoBouquet({ className = '' }) {
  return (
    <svg viewBox="0 0 300 300" className={className} fill="none">
      {/* dried palm fans */}
      <PalmFan x={150} y={168} rotate={20} length={150} blades={12} spread={120} fill="#cba45a" width={5.5} />
      <PalmFan x={120} y={182} rotate={-26} length={120} blades={10} spread={104} fill="#b8902f" width={5} />
      <PalmFan x={178} y={176} rotate={52} length={104} blades={9} spread={84} fill="#d8b766" width={4} />

      {/* eucalyptus + dried fern accents */}
      <g stroke="#9aab84">
        <EucalyptusSprig x={108} y={196} rotate={-54} length={120} leaves={6} fill="#9aab84" />
        <EucalyptusSprig x={172} y={170} rotate={40} length={104} leaves={6} fill="#aebf97" />
      </g>

      {/* cream roses */}
      <Rose x={120} y={186} r={32} light="#f6efe0" mid="#e3d2b3" dark="#b79b6f" />
      <Rose x={170} y={208} r={22} light="#f8f2e6" mid="#e7d8bd" dark="#bda474" />

      {/* white blossoms + buds */}
      <Blossom x={94} y={210} r={14} />
      <Blossom x={188} y={178} r={11} />
      <Blossom x={150} y={232} r={10} />
      <g fill="#e9dcc2">
        <circle cx="206" cy="200" r="5" />
        <circle cx="88" cy="186" r="4.5" />
        <circle cx="150" cy="196" r="4" />
      </g>
    </svg>
  )
}

/** Faint gold-dust swirl + speckles for the card corners. */
function GoldDust({ className = '' }) {
  const dots = [
    [18, 30], [34, 22], [52, 40], [70, 18], [26, 58], [60, 70], [88, 46], [44, 84],
    [104, 28], [12, 96], [78, 96], [110, 72],
  ]
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none">
      <path d="M6 60 C 40 20, 90 22, 128 8" stroke="#c8a24a" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      <path d="M10 86 C 46 54, 96 52, 132 34" stroke="#d8b766" strokeWidth="1.4" opacity="0.45" strokeLinecap="round" />
      <g fill="#c8a24a">
        {dots.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 1.8 : 1.1} opacity={0.55} />
        ))}
      </g>
    </svg>
  )
}

/* ── Inline line icons (golden brown) ───────────────────────────────────── */

function CalendarIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" />
      <path d="M7 13h3v3H7z" />
    </svg>
  )
}

function PinIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

/* ── Template ────────────────────────────────────────────────────────────── */

export default function BohoPampasWedding({ values }) {
  const { t } = useI18n()
  const bride = values.brideName?.trim() || 'Sanika'
  const groom = values.groomName?.trim() || 'Aarav'
  const date = fancyDate(values.weddingDate, 'Date to be announced')
  const time = fancyTime(values.time, '')
  const venue = values.venue?.trim() || '123 Anywhere St., Any City, ST 12345'

  return (
    <div
      data-export-root
      className="flex h-[900px] w-[640px] items-stretch bg-[#ece8e0] p-3.5 font-serif text-[#8B5A2B]"
    >
      {/* Beige card */}
      <div className="relative flex-1 overflow-hidden rounded-[30px] bg-[#dcc9a4]">
        {/* gold-dust corners */}
        <GoldDust className="pointer-events-none absolute -left-2 -top-2 h-44 w-44" />
        <GoldDust className="pointer-events-none absolute -bottom-2 -right-2 h-44 w-44 [transform:rotate(180deg)]" />

        {/* Off-white arch panel */}
        <div className="absolute inset-x-[44px] inset-y-[42px] rounded-t-[210px] rounded-b-[20px] bg-[#f5efe1] shadow-[0_2px_18px_rgba(120,90,40,0.10)]" />

        {/* Florals over the arch (top-right + mirrored bottom-left) */}
        <BohoBouquet className="pointer-events-none absolute right-[6px] top-[44px] h-[280px] w-[280px]" />
        <BohoBouquet className="pointer-events-none absolute bottom-[40px] left-[2px] h-[280px] w-[280px] [transform:scale(-1)]" />

        {/* Content */}
        <div className="absolute inset-x-[64px] inset-y-[42px] z-10 flex flex-col items-center justify-center text-center">
          <p className="max-w-[15rem] text-[13px] font-medium uppercase leading-relaxed tracking-[0.22em]">
            {t('template.common.togetherWithFamilies', 'Together with their families')}
          </p>

          <div className="mt-6 leading-none">
            <h1 className="font-script text-[68px] leading-[0.9]">{bride}</h1>
            <p className="font-script text-[40px] leading-[0.7] text-[#a9824c]">&amp;</p>
            <h1 className="font-script text-[68px] leading-[0.9]">{groom}</h1>
          </div>

          <p className="mt-7 max-w-[16rem] text-[19px] leading-snug">
            {t('template.common.inviteToCelebration', 'Invite you to their wedding celebration')}
          </p>

          {/* Two info columns split by a vertical gold line */}
          <div className="mt-8 flex items-stretch justify-center gap-6 text-[13px] leading-snug">
            <div className="flex w-[8.5rem] flex-col items-center gap-2">
              <CalendarIcon className="h-6 w-6" />
              <div>
                <p className="font-semibold tracking-wide">{date}</p>
                {time && <p className="mt-0.5">{time}</p>}
              </div>
            </div>

            <span aria-hidden className="w-px self-stretch bg-[#b89a6a]" />

            <div className="flex w-[8.5rem] flex-col items-center gap-2">
              <PinIcon className="h-6 w-6" />
              <p className="font-medium">{venue}</p>
            </div>
          </div>

          <p className="mt-7 font-script text-[32px] leading-none text-[#a9824c]">
            {t('template.common.receptionToFollow', 'Reception to follow')}
          </p>
        </div>
      </div>
    </div>
  )
}
