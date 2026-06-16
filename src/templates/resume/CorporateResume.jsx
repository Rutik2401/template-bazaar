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

function Heading({ children }) {
  return (
    <h2 className="flex items-center gap-3 font-serif text-[16px] font-bold uppercase tracking-[0.16em] text-slate-900">
      <span>{children}</span>
      <span className="h-px flex-1 bg-slate-200" />
    </h2>
  )
}

/**
 * Corporate Resume — formal navy header band with name + contact, serif
 * headings, classic & authoritative single column.
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function CorporateResume({ values }) {
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
      className="flex h-[1123px] w-[794px] flex-col overflow-hidden bg-white font-sans text-slate-700"
    >
      {/* Formal navy header band */}
      <header className="bg-[#1e2a4a] px-16 py-11 text-white">
        <h1 className="font-serif text-[42px] font-bold leading-[1.08] tracking-wide">{fullName}</h1>
        <div className="mt-3 h-[2px] w-20 bg-amber-400" />
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] tracking-wide text-slate-300">
          <span>{email}</span>
          <span className="text-slate-500">|</span>
          <span>{phone}</span>
        </div>
      </header>

      <div className="flex flex-1 flex-col px-16 py-12">
        {/* Experience */}
        <section>
          <Heading>{t('template.common.experience', 'Experience')}</Heading>
          <div className="mt-5 space-y-6">
            {experience.length ? (
              experience.map((job, i) => (
                <div key={i}>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-[16.5px] font-bold text-slate-900">{job.title}</h3>
                    {job.meta && (
                      <span className="shrink-0 text-[12.5px] font-medium italic text-slate-500">
                        {job.meta}
                      </span>
                    )}
                  </div>
                  {job.bullets.length > 0 && (
                    <ul className="mt-2.5 space-y-1.5">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-[14px] leading-relaxed text-slate-600">
                          <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-[#1e2a4a]" />
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

        {/* Education */}
        <section className="mt-10">
          <Heading>{t('template.common.education', 'Education')}</Heading>
          <div className="mt-5 space-y-3">
            {education.length ? (
              education.map((line, i) => {
                const [main, meta = ''] = line.split('|')
                return (
                  <div key={i} className="flex items-baseline justify-between gap-4">
                    <span className="text-[15px] font-semibold text-slate-800">{main.trim()}</span>
                    {meta && (
                      <span className="shrink-0 text-[12.5px] italic text-slate-500">{meta.trim()}</span>
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
        <section className="mt-10">
          <Heading>{t('template.common.skills', 'Skills')}</Heading>
          {skills.length ? (
            <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-2.5">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3 text-[14px] text-slate-700">
                  <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-amber-500" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-5 text-[13.5px] text-slate-400">
              {t('template.resume.addSkills', 'Add your key skills…')}
            </p>
          )}
        </section>

        <div className="mt-auto border-t border-slate-200 pt-6 text-center font-serif text-[10.5px] uppercase tracking-[0.34em] text-slate-400">
          {t('template.common.contact', 'Contact')}: {email}
        </div>
      </div>
    </div>
  )
}
