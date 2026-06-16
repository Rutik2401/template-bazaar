'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Internship Application — friendly-yet-professional one-pager with a
 * fresh student vibe. Rounded header with name + desired role, a short
 * Objective, Skills as soft chips, an Experience / Projects list and a
 * tidy contact footer. Generous white space, gentle indigo accents.
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function InternshipApplication({ values }) {
  const { t } = useI18n()
  const name = values.name?.trim() || 'Rohan Mehta'
  const email = values.email?.trim() || 'rohan.mehta@email.com'
  const role = values.role?.trim() || 'Frontend Developer'
  const skills = toList(values.skills, { separator: /[,\n]/ })
  const experience = toList(values.experience, { separator: /\n/ })

  const monogram = (name.charAt(0) || 'R').toUpperCase()

  return (
    <div
      data-export-root
      className="relative flex h-[1123px] w-[794px] flex-col overflow-hidden bg-slate-50 font-sans text-slate-700"
    >
      {/* ── Friendly header card ──────────────────────────────────────── */}
      <header className="m-10 mb-0 flex items-center gap-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 font-display text-4xl font-bold text-white shadow-lg shadow-indigo-200">
          {monogram}
        </div>
        <div className="min-w-0">
          <p className="font-display text-[34px] font-extrabold leading-tight tracking-tight text-slate-900">
            {name}
          </p>
          <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3.5 py-1.5 text-[13px] font-semibold text-indigo-600">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            {t('template.jobapplication.applyingFor', 'Applying for')}: {role}
          </p>
        </div>
      </header>

      <div className="flex-1 px-10 pt-9">
        {/* ── Objective ───────────────────────────────────────────────── */}
        <section>
          <h2 className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.22em] text-indigo-500">
            <span className="h-px w-5 bg-indigo-300" />
            {t('template.jobapplication.objective', 'Objective')}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.75] text-slate-600">
            An enthusiastic and quick-learning candidate seeking a{' '}
            <span className="font-semibold text-slate-900">{role}</span> opportunity to apply my
            skills, grow with a supportive team and contribute fresh energy to real projects.
          </p>
        </section>

        {/* ── Skills chips ────────────────────────────────────────────── */}
        <section className="mt-9">
          <h2 className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.22em] text-indigo-500">
            <span className="h-px w-5 bg-indigo-300" />
            {t('template.jobapplication.skills', 'Skills')}
          </h2>
          {skills.length ? (
            <div className="mt-4 flex flex-wrap gap-2.5">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="rounded-full border border-indigo-100 bg-white px-4 py-1.5 text-[13px] font-medium text-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-[14px] text-slate-400">Add your key skills…</p>
          )}
        </section>

        {/* ── Experience / Projects ───────────────────────────────────── */}
        <section className="mt-9">
          <h2 className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.22em] text-indigo-500">
            <span className="h-px w-5 bg-indigo-300" />
            {t('template.jobapplication.experienceProjects', 'Experience / Projects')}
          </h2>
          {experience.length ? (
            <div className="mt-4 space-y-3">
              {experience.map((line, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 rounded-2xl bg-white p-4 ring-1 ring-slate-100 shadow-sm"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 text-[12px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-[14px] leading-[1.65] text-slate-700">{line}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-[14px] text-slate-400">Add your experience or projects…</p>
          )}
        </section>
      </div>

      {/* ── Contact footer ────────────────────────────────────────────── */}
      <footer className="mt-9 flex items-center justify-between bg-slate-900 px-10 py-7 text-white">
        <span className="inline-flex items-center gap-2.5 text-[14px]">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          {email}
        </span>
        <span className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
          {t('template.common.madeWith', 'Made with Template Bazaar')}
        </span>
      </footer>
    </div>
  )
}
