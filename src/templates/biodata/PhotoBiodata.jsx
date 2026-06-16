'use client'

import { toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Pieces ────────────────────────────────────────────────────────────── */

function PhotoFrame({ className = '' }) {
  // Decorative rounded-rect photo placeholder with a simple portrait silhouette.
  return (
    <svg viewBox="0 0 180 220" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="172" height="212" rx="14" fill="currentColor" fillOpacity="0.07" />
      <rect x="12" y="12" width="156" height="196" rx="9" strokeDasharray="5 6" opacity="0.55" />
      {/* portrait silhouette */}
      <circle cx="90" cy="90" r="33" fill="currentColor" fillOpacity="0.18" stroke="none" />
      <path d="M42 190c0-30 22-50 48-50s48 20 48 50" fill="currentColor" fillOpacity="0.18" stroke="none" />
      {/* corner ticks */}
      <path d="M24 24h14M24 24v14" opacity="0.7" />
      <path d="M156 24h-14M156 24v14" opacity="0.7" />
      <path d="M24 196h14M24 196v-14" opacity="0.7" />
      <path d="M156 196h-14M156 196v-14" opacity="0.7" />
    </svg>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex gap-4 py-[7px]">
      <span className="w-36 shrink-0 text-[12px] font-semibold uppercase tracking-[0.08em] text-rose-700">{label}</span>
      <span className="text-[15.5px] font-medium leading-snug text-slate-700">{value}</span>
    </div>
  )
}

/**
 * Photo Marriage Biodata — clean layout with a top photo frame placeholder.
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function PhotoBiodata({ values }) {
  const { t } = useI18n()
  const name = values.fullName?.trim() || 'Rohan Mehta'
  const age = values.age?.trim() || '27 years'
  const height = values.height?.trim() || `5' 10" (178 cm)`
  const education = values.education?.trim() || 'B.E. Computer Science'
  const occupation = values.occupation?.trim() || 'Software Engineer at Infosys'
  const family = toList(values.familyDetails, { separator: /\n/ })
  const contact = values.contact?.trim() || '+91 98765 43210'

  return (
    <div
      data-export-root
      className="relative flex h-[1123px] w-[794px] flex-col overflow-hidden bg-white font-sans text-slate-700"
    >
      {/* soft rose header band */}
      <div className="relative h-[300px] bg-gradient-to-br from-rose-100 via-[#fdf2f5] to-amber-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(244,114,182,0.2),_transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rose-300/70 to-transparent" />
        <p className="absolute left-12 top-12 text-[15px] tracking-wide text-rose-500">॥ श्री गणेशाय नमः ॥</p>

        {/* photo frame, top-right */}
        <div className="absolute right-12 top-12 rounded-2xl bg-white p-2 shadow-[0_18px_50px_-22px_rgba(190,24,93,0.45)] ring-1 ring-rose-200/70">
          <PhotoFrame className="h-52 w-44 text-rose-400" />
        </div>

        {/* name + title, bottom-left of band */}
        <div className="absolute bottom-12 left-12 max-w-[58%]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-rose-500">
            {t('template.common.biodataTitle', 'Marriage Biodata')}
          </p>
          <h1 className="mt-2 font-display text-[44px] font-semibold leading-[1.05] text-slate-800">{name}</h1>
          <span className="mt-3 block h-1 w-14 rounded-full bg-gradient-to-r from-rose-500 to-rose-300" />
          <p className="mt-2.5 text-[15px] text-slate-500">{occupation}</p>
        </div>
      </div>

      {/* details */}
      <div className="flex flex-1 flex-col px-12 pb-12 pt-9">
        <section>
          <h2 className="mb-2.5 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] text-rose-700">
            <span className="h-4 w-1 rounded-full bg-rose-500" />
            {t('template.common.personalDetails', 'Personal Details')}
          </h2>
          <div className="grid grid-cols-2 gap-x-8 rounded-xl border border-rose-100 bg-rose-50/60 px-6 py-3">
            <Row label={t('template.common.name', 'Name')} value={name} />
            <Row label={t('template.common.age', 'Age')} value={age} />
            <Row label={t('template.common.height', 'Height')} value={height} />
            <Row label={t('template.common.education', 'Education')} value={education} />
            <Row label={t('template.common.occupation', 'Occupation')} value={occupation} />
          </div>
        </section>

        <section className="mt-7">
          <h2 className="mb-2.5 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] text-rose-700">
            <span className="h-4 w-1 rounded-full bg-rose-500" />
            {t('template.common.familyDetails', 'Family Details')}
          </h2>
          <div className="space-y-2 px-2">
            {family.map((f, i) => (
              <p key={i} className="flex gap-2.5 text-[15.5px] leading-relaxed text-slate-700">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                <span>{f}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="mt-auto overflow-hidden rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 px-6 py-4 text-white shadow-[0_16px_40px_-20px_rgba(190,24,93,0.6)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-100">
            {t('template.common.contact', 'Contact')}
          </p>
          <p className="mt-1 text-[20px] font-semibold tracking-wide">{contact}</p>
        </section>
      </div>
    </div>
  )
}
