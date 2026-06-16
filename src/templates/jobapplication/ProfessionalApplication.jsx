'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Professional Job Application — a polished, corporate application sheet.
 * Strong navy header band with a gradient name, an "Applying for" plate,
 * skills laid out in two clean columns and experience as crisp bullets.
 * Authoritative and recruiter-ready; looks great with the defaults.
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function ProfessionalApplication({ values }) {
  const { t } = useI18n()
  const name = values.name?.trim() || 'Rohan Mehta'
  const email = values.email?.trim() || 'rohan.mehta@email.com'
  const role = values.role?.trim() || 'Frontend Developer'
  const skills = toList(values.skills, { separator: /[,\n]/ })
  const experience = toList(values.experience, { separator: /\n/ })

  // Balance skills across two columns.
  const mid = Math.ceil(skills.length / 2)
  const skillColA = skills.slice(0, mid)
  const skillColB = skills.slice(mid)

  return (
    <div
      data-export-root
      className="relative flex h-[1123px] w-[794px] flex-col overflow-hidden bg-white font-sans text-slate-700"
    >
      {/* ── Header band ───────────────────────────────────────────────── */}
      <header className="relative overflow-hidden bg-slate-900 px-14 pb-14 pt-14 text-white">
        <p className="inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.32em] text-indigo-300">
          <span className="h-px w-7 bg-indigo-400/70" />
          {t('template.jobapplication.application', 'Job Application')}
        </p>
        <h1
          data-pdf-color="#a5b4fc"
          className="mt-4 bg-gradient-to-r from-white via-indigo-200 to-sky-200 bg-clip-text font-display text-[46px] font-extrabold leading-[1.05] tracking-tight text-transparent"
        >
          {name}
        </h1>
        <p className="mt-3 inline-flex items-center gap-2 text-[14px] text-slate-300">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          {email}
        </p>

        {/* decorative corner */}
        <span className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-indigo-500/20" />
        <span className="pointer-events-none absolute bottom-0 right-24 h-24 w-24 rounded-full bg-sky-400/10" />
      </header>

      {/* ── Applying for plate ────────────────────────────────────────── */}
      <section className="px-14">
        <div className="-mt-8 flex items-center gap-4 rounded-2xl bg-white px-7 py-5 shadow-xl shadow-slate-200 ring-1 ring-slate-100">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-lg shadow-indigo-200">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
              {t('template.jobapplication.applyingFor', 'Applying for')}
            </p>
            <p className="font-display text-[22px] font-bold leading-tight text-slate-900">{role}</p>
          </div>
        </div>
      </section>

      <div className="flex-1 px-14 pt-11">
        {/* ── Skills (two columns) ────────────────────────────────────── */}
        <section>
          <h2 className="flex items-baseline justify-between border-b-2 border-slate-900 pb-2 text-[13px] font-bold uppercase tracking-[0.2em] text-slate-900">
            {t('template.jobapplication.skills', 'Skills')}
            <span className="h-2 w-2 translate-y-[-2px] rotate-45 bg-indigo-500" />
          </h2>
          {skills.length ? (
            <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3">
              {[skillColA, skillColB].map((col, c) => (
                <ul key={c} className="space-y-3">
                  {col.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14px] text-slate-700">
                      <span className="h-2 w-2 shrink-0 rotate-45 bg-indigo-500" />
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-[14px] text-slate-400">Add your key skills…</p>
          )}
        </section>

        {/* ── Experience ──────────────────────────────────────────────── */}
        <section className="mt-11">
          <h2 className="flex items-baseline justify-between border-b-2 border-slate-900 pb-2 text-[13px] font-bold uppercase tracking-[0.2em] text-slate-900">
            {t('template.jobapplication.experience', 'Experience')}
            <span className="h-2 w-2 translate-y-[-2px] rotate-45 bg-indigo-500" />
          </h2>
          {experience.length ? (
            <ul className="mt-5 space-y-4">
              {experience.map((line, i) => (
                <li key={i} className="flex gap-3.5 border-l-2 border-slate-100 pl-4">
                  <span className="mt-[9px] -ml-[21px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 ring-4 ring-white" />
                  <span className="text-[15px] leading-[1.65] text-slate-700">{line}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-[14px] text-slate-400">Add your work experience…</p>
          )}
        </section>
      </div>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="mt-auto flex items-center justify-between border-t border-slate-100 px-14 py-7">
        <p className="font-display text-[16px] font-semibold text-slate-800">{name}</p>
        <p className="text-[11px] uppercase tracking-[0.3em] text-slate-300">
          {t('template.common.madeWith', 'Made with Template Bazaar')}
        </p>
      </footer>
    </div>
  )
}
