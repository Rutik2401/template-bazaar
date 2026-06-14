'use client'

import { toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Parse the Experience textarea into structured entries.
 * Convention (kept deliberately simple & teachable):
 *   - A line containing "|" starts a new role:  "Role | Company · 2021–Present"
 *   - Following lines without "|" are bullet points for that role.
 */
function parseExperience(raw) {
  const entries = []
  toList(raw, { separator: /\n/ }).forEach((line) => {
    if (line.includes('|')) {
      const [title, meta = ''] = line.split('|')
      entries.push({ title: title.trim(), meta: meta.trim(), bullets: [] })
    } else if (entries.length) {
      entries[entries.length - 1].bullets.push(line.replace(/^[-•]\s*/, ''))
    } else {
      entries.push({ title: line, meta: '', bullets: [] })
    }
  })
  return entries
}

function Section({ title, children }) {
  return (
    <section className="mt-6">
      <h2 className="border-b-2 border-slate-800 pb-1 text-[13px] font-bold uppercase tracking-[0.18em] text-slate-800">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  )
}

/**
 * Clean, ATS-friendly professional resume.
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function AtsResumeTemplate({ values }) {
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
      className="flex h-[1123px] w-[794px] flex-col bg-white px-16 py-14 font-sans text-slate-700"
    >
      {/* Header */}
      <header className="border-b border-slate-200 pb-5">
        <h1 className="text-[40px] font-extrabold leading-tight tracking-tight text-slate-900">
          {fullName}
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-slate-500">
          <span className="inline-flex items-center gap-1.5">✉️ {email}</span>
          <span className="text-slate-300">•</span>
          <span className="inline-flex items-center gap-1.5">📞 {phone}</span>
        </div>
      </header>

      {/* Skills */}
      <Section title={t('template.resume.skills')}>
        {skills.length ? (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-[13px] font-medium text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-[14px] text-slate-400">{t('template.resume.addSkills')}</p>
        )}
      </Section>

      {/* Experience */}
      <Section title={t('template.resume.experience')}>
        <div className="space-y-4">
          {experience.length ? (
            experience.map((job, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[16px] font-bold text-slate-900">{job.title}</h3>
                  {job.meta && (
                    <span className="shrink-0 text-[13px] font-medium text-slate-500">{job.meta}</span>
                  )}
                </div>
                {job.bullets.length > 0 && (
                  <ul className="mt-1.5 space-y-1">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-[14px] leading-relaxed text-slate-600">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <p className="text-[14px] text-slate-400">{t('template.resume.addExperience')}</p>
          )}
        </div>
      </Section>

      {/* Education */}
      <Section title={t('template.resume.education')}>
        <div className="space-y-2.5">
          {education.length ? (
            education.map((line, i) => {
              const [main, meta = ''] = line.split('|')
              return (
                <div key={i} className="flex items-baseline justify-between gap-4">
                  <span className="text-[15px] font-semibold text-slate-800">{main.trim()}</span>
                  {meta && <span className="shrink-0 text-[13px] text-slate-500">{meta.trim()}</span>}
                </div>
              )
            })
          ) : (
            <p className="text-[14px] text-slate-400">{t('template.resume.addEducation')}</p>
          )}
        </div>
      </Section>

      <div className="mt-auto pt-8 text-center text-[11px] uppercase tracking-[0.3em] text-slate-300">
        {t('template.resume.madeWith')}
      </div>
    </div>
  )
}
