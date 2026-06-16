'use client'

import { toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Pieces ────────────────────────────────────────────────────────────── */

function SidebarItem({ label, value }) {
  return (
    <div className="border-l-2 border-indigo-300/30 pl-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-indigo-200/70">{label}</p>
      <p className="mt-0.5 text-[15px] font-medium leading-snug text-white">{value}</p>
    </div>
  )
}

/**
 * Modern Matrimonial Profile — two-column, coloured indigo sidebar, sans-serif.
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function ModernBiodata({ values }) {
  const { t } = useI18n()
  const name = values.fullName?.trim() || 'Rohan Mehta'
  const age = values.age?.trim() || '27 years'
  const height = values.height?.trim() || `5' 10" (178 cm)`
  const education = values.education?.trim() || 'B.E. Computer Science'
  const occupation = values.occupation?.trim() || 'Software Engineer at Infosys'
  const family = toList(values.familyDetails, { separator: /\n/ })
  const contact = values.contact?.trim() || '+91 98765 43210'
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('')

  return (
    <div
      data-export-root
      className="relative flex h-[1123px] w-[794px] overflow-hidden bg-white font-sans text-slate-700"
    >
      {/* ── Coloured sidebar ── */}
      <aside className="relative flex w-[300px] shrink-0 flex-col bg-gradient-to-b from-indigo-600 via-indigo-700 to-indigo-900 px-9 pb-12 pt-14 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(129,140,248,0.25),_transparent_50%)]" />
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-indigo-300/30 to-transparent" />

        <div className="relative flex flex-col items-center text-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-indigo-300/50 bg-indigo-500/30 font-display text-[40px] font-semibold text-white shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)] ring-4 ring-white/10">
            {initials || 'RM'}
          </div>
          <h1 className="mt-5 font-display text-[28px] font-semibold leading-tight text-white">{name}</h1>
          <p className="mt-1.5 text-[13px] text-indigo-200/80">{occupation}</p>
          <span className="mt-4 h-px w-16 bg-indigo-300/50" />
        </div>

        <div className="relative mt-10 space-y-6">
          <SidebarItem label={t('template.common.age', 'Age')} value={age} />
          <SidebarItem label={t('template.common.height', 'Height')} value={height} />
          <SidebarItem label={t('template.common.education', 'Education')} value={education} />
        </div>

        <div className="relative mt-auto rounded-xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-indigo-200/70">
            {t('template.common.contact', 'Contact')}
          </p>
          <p className="mt-1 text-[16px] font-semibold text-white">{contact}</p>
        </div>
      </aside>

      {/* ── Main column ── */}
      <main className="flex flex-1 flex-col px-12 pb-14 pt-14">
        <header>
          <p className="text-[12px] font-bold uppercase tracking-[0.4em] text-indigo-600">
            {t('template.common.biodataTitle', 'Marriage Biodata')}
          </p>
          <h2 className="mt-3 font-display text-[40px] font-bold leading-tight text-slate-900">
            {t('template.common.profile', 'Profile')}
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-indigo-500" />
        </header>

        <section className="mt-10">
          <h3 className="flex items-center gap-2.5 text-[14px] font-bold uppercase tracking-[0.2em] text-indigo-600">
            <span className="h-4 w-1 rounded-full bg-indigo-500" />
            {t('template.common.personalDetails', 'Personal Details')}
          </h3>
          <div className="mt-4 space-y-3">
            {[
              [t('template.common.name', 'Name'), name],
              [t('template.common.age', 'Age'), age],
              [t('template.common.height', 'Height'), height],
              [t('template.common.education', 'Education'), education],
              [t('template.common.occupation', 'Occupation'), occupation],
            ].map(([label, value], i) => (
              <div key={i} className="flex items-baseline gap-4 border-b border-slate-100 pb-2.5">
                <span className="w-36 shrink-0 text-[12.5px] font-semibold uppercase tracking-[0.08em] text-slate-400">{label}</span>
                <span className="text-[16px] font-medium text-slate-800">{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h3 className="flex items-center gap-2.5 text-[14px] font-bold uppercase tracking-[0.2em] text-indigo-600">
            <span className="h-4 w-1 rounded-full bg-indigo-500" />
            {t('template.common.familyDetails', 'Family Details')}
          </h3>
          <div className="mt-4 space-y-2.5">
            {family.map((f, i) => (
              <p key={i} className="flex gap-3 text-[15px] leading-relaxed text-slate-700">
                <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>{f}</span>
              </p>
            ))}
          </div>
        </section>

        <footer className="mt-auto pt-8 text-[11px] uppercase tracking-[0.3em] text-slate-300">
          {t('common.appName', 'Template Bazaar')}
        </footer>
      </main>
    </div>
  )
}
