'use client'

import { toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Parse the Experience textarea into structured entries.
 *   - A line containing "|" starts a new role:  "Role | Company · 2021–Present"
 *   - Following non-"|" lines are bullet points for that role.
 */
function parseExperience(raw) {
  const out = []
  toList(raw, { separator: /\n/ }).forEach((line) => {
    if (line.includes('|')) {
      const [title, meta = ''] = line.split('|')
      out.push({ title: title.trim(), meta: meta.trim(), bullets: [] })
    } else if (out.length) {
      out[out.length - 1].bullets.push(line.replace(/^[-•]\s*/, ''))
    } else {
      out.push({ title: line, meta: '', bullets: [] })
    }
  })
  return out
}

/**
 * Modern Two Column — coloured (indigo) left sidebar with contact + skills,
 * main right column with experience + education. Contemporary accent design.
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function TwoColumnResume({ values }) {
  const { t } = useI18n()
  const fullName = values.fullName?.trim() || 'Rohan Mehta'
  const email = values.email?.trim() || 'rohan.mehta@email.com'
  const phone = values.phone?.trim() || '+91 98765 43210'
  const skills = toList(values.skills)
  const experience = parseExperience(values.experience)
  const education = toList(values.education, { separator: /\n/ })

  return (
    <div
      data-export-root
      className="flex h-[1123px] w-[794px] overflow-hidden bg-white font-sans text-slate-700"
    >
      {/* Coloured left sidebar */}
      <aside className="flex w-[280px] shrink-0 flex-col bg-indigo-600 px-9 py-12 text-indigo-50">
        <h1 className="font-display text-[30px] font-bold leading-[1.15] tracking-tight text-white">
          {fullName}
        </h1>
        <div className="mt-2 h-1 w-14 rounded bg-indigo-300" />

        <section className="mt-10">
          <h2 className="text-[12px] font-bold uppercase tracking-[0.22em] text-indigo-200">
            {t('template.common.contact', 'Contact')}
          </h2>
          <div className="mt-3 space-y-3 text-[12.5px] leading-snug">
            <div>
              <p className="font-semibold text-indigo-200">@</p>
              <p className="break-all text-white">{email}</p>
            </div>
            <div>
              <p className="font-semibold text-indigo-200">☎</p>
              <p className="text-white">{phone}</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-[12px] font-bold uppercase tracking-[0.22em] text-indigo-200">
            {t('template.common.skills', 'Skills')}
          </h2>
          <div className="mt-3 flex flex-col gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="rounded-md bg-indigo-500/60 px-3 py-1.5 text-[12.5px] font-medium text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-auto pt-10 text-[10px] uppercase tracking-[0.3em] text-indigo-300">
          {t('template.common.name', 'Name')}
        </div>
      </aside>

      {/* Main right column */}
      <main className="flex flex-1 flex-col px-11 py-12">
        <section>
          <h2 className="flex items-center gap-3 text-[15px] font-bold uppercase tracking-[0.18em] text-indigo-700">
            <span className="h-5 w-1 rounded bg-indigo-600" />
            {t('template.common.experience', 'Experience')}
          </h2>
          <div className="mt-5 space-y-5">
            {experience.map((job, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[16px] font-bold text-slate-900">{job.title}</h3>
                  {job.meta && (
                    <span className="shrink-0 text-[12.5px] font-medium text-indigo-600">
                      {job.meta}
                    </span>
                  )}
                </div>
                {job.bullets.length > 0 && (
                  <ul className="mt-2 space-y-1.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-[13.5px] leading-relaxed text-slate-600">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="flex items-center gap-3 text-[15px] font-bold uppercase tracking-[0.18em] text-indigo-700">
            <span className="h-5 w-1 rounded bg-indigo-600" />
            {t('template.common.education', 'Education')}
          </h2>
          <div className="mt-5 space-y-3">
            {education.map((line, i) => {
              const [main, meta = ''] = line.split('|')
              return (
                <div
                  key={i}
                  className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-2.5"
                >
                  <span className="text-[14.5px] font-semibold text-slate-800">{main.trim()}</span>
                  {meta && (
                    <span className="shrink-0 text-[12.5px] text-indigo-600">{meta.trim()}</span>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
