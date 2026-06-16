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

function SectionTitle({ children }) {
  return (
    <h2 className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.22em] text-teal-700">
      <span className="h-4 w-1 rounded-full bg-teal-500" />
      {children}
    </h2>
  )
}

/**
 * Fresher Resume — friendly single column, education-forward, teal accent.
 * Approachable layout that leads with education for early-career candidates.
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function FresherResume({ values }) {
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
      className="flex h-[1123px] w-[794px] flex-col overflow-hidden bg-white px-16 py-14 font-sans text-slate-700"
    >
      {/* Header */}
      <header className="flex items-center gap-6 rounded-2xl bg-teal-50 px-8 py-7 ring-1 ring-teal-100">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-teal-600 font-display text-[26px] font-bold text-white">
          {fullName.charAt(0).toUpperCase()}
        </div>
        <div>
          <h1 className="font-display text-[36px] font-bold leading-[1.08] text-slate-900">
            {fullName}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-teal-800">
            <span>{email}</span>
            <span className="text-teal-400">•</span>
            <span>{phone}</span>
          </div>
        </div>
      </header>

      {/* Education — front and centre for freshers */}
      <section className="mt-9">
        <SectionTitle>{t('template.common.education', 'Education')}</SectionTitle>
        <div className="mt-4 space-y-3">
          {education.length ? (
            education.map((line, i) => {
              const [main, meta = ''] = line.split('|')
              return (
                <div
                  key={i}
                  className="flex items-baseline justify-between gap-4 rounded-lg border border-teal-100 bg-teal-50/40 px-4 py-3"
                >
                  <span className="text-[15px] font-semibold text-slate-800">{main.trim()}</span>
                  {meta && (
                    <span className="shrink-0 rounded-full bg-teal-600 px-2.5 py-0.5 text-[12px] font-medium text-white">
                      {meta.trim()}
                    </span>
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

      {/* Skills */}
      <section className="mt-9">
        <SectionTitle>{t('template.common.skills', 'Skills')}</SectionTitle>
        {skills.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="rounded-full bg-teal-100 px-3.5 py-1.5 text-[13px] font-medium text-teal-800"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-[13.5px] text-slate-400">
            {t('template.resume.addSkills', 'Add your key skills…')}
          </p>
        )}
      </section>

      {/* Experience / Internships */}
      <section className="mt-9">
        <SectionTitle>{t('template.common.experience', 'Experience')}</SectionTitle>
        <div className="mt-4 space-y-5">
          {experience.length ? (
            experience.map((job, i) => (
              <div key={i} className="border-l-[3px] border-teal-300 pl-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[16px] font-semibold leading-snug text-slate-900">{job.title}</h3>
                  {job.meta && (
                    <span className="shrink-0 text-[12px] font-medium text-teal-700">{job.meta}</span>
                  )}
                </div>
                {job.bullets.length > 0 && (
                  <ul className="mt-2 space-y-1.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-[13.5px] leading-relaxed text-slate-600">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
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

      <div className="mt-auto pt-8 text-center text-[11px] uppercase tracking-[0.32em] text-teal-300">
        {t('template.resume.madeWith', 'Made with Template Bazaar')}
      </div>
    </div>
  )
}
