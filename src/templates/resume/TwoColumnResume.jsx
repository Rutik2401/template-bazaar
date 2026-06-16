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
      <aside className="flex w-[280px] shrink-0 flex-col bg-indigo-600 px-10 py-14 text-indigo-50">
        <h1 className="font-display text-[30px] font-bold leading-[1.12] tracking-tight text-white">
          {fullName}
        </h1>
        <div className="mt-3 h-1 w-14 rounded-full bg-indigo-300" />

        <section className="mt-12">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.26em] text-indigo-200">
            {t('template.common.contact', 'Contact')}
          </h2>
          <div className="mt-4 space-y-3.5 text-[12.5px] leading-snug">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-300">@</p>
              <p className="mt-0.5 break-all text-white">{email}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-300">☎</p>
              <p className="mt-0.5 text-white">{phone}</p>
            </div>
          </div>
        </section>

        <section className="mt-11">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.26em] text-indigo-200">
            {t('template.common.skills', 'Skills')}
          </h2>
          {skills.length ? (
            <div className="mt-4 flex flex-col gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="rounded-md bg-indigo-500/60 px-3 py-1.5 text-[12.5px] font-medium text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-[12px] text-indigo-200/80">
              {t('template.resume.addSkills', 'Add your key skills…')}
            </p>
          )}
        </section>

        <div className="mt-auto pt-10 text-[10px] uppercase tracking-[0.34em] text-indigo-300">
          {t('template.common.name', 'Name')}
        </div>
      </aside>

      {/* Main right column */}
      <main className="flex flex-1 flex-col px-12 py-14">
        <section>
          <h2 className="flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.22em] text-indigo-700">
            <span className="h-5 w-1 rounded-full bg-indigo-600" />
            {t('template.common.experience', 'Experience')}
          </h2>
          <div className="mt-6 space-y-6">
            {experience.length ? (
              experience.map((job, i) => (
                <div key={i}>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[16px] font-bold leading-snug text-slate-900">{job.title}</h3>
                    {job.meta && (
                      <span className="shrink-0 text-[12px] font-medium text-indigo-600">
                        {job.meta}
                      </span>
                    )}
                  </div>
                  {job.bullets.length > 0 && (
                    <ul className="mt-2.5 space-y-1.5">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-[13.5px] leading-relaxed text-slate-600">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <p className="text-[13.5px] text-slate-400">
                {t('template.resume.addExperience', 'Add your work experience…')}
              </p>
            )}
          </div>
        </section>

        <section className="mt-11">
          <h2 className="flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.22em] text-indigo-700">
            <span className="h-5 w-1 rounded-full bg-indigo-600" />
            {t('template.common.education', 'Education')}
          </h2>
          <div className="mt-6 space-y-3">
            {education.length ? (
              education.map((line, i) => {
                const [main, meta = ''] = line.split('|')
                return (
                  <div
                    key={i}
                    className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-3"
                  >
                    <span className="text-[14.5px] font-semibold text-slate-800">{main.trim()}</span>
                    {meta && (
                      <span className="shrink-0 text-[12px] text-indigo-600">{meta.trim()}</span>
                    )}
                  </div>
                )
              })
            ) : (
              <p className="text-[13.5px] text-slate-400">
                {t('template.resume.addEducation', 'Add your education…')}
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
