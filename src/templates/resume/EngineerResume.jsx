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
 * Software Engineer Resume — dark left sidebar (name, contact, skills as tags)
 * + white right column (experience, education) with a subtle monospace accent.
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function EngineerResume({ values }) {
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
      {/* Dark left sidebar */}
      <aside className="flex w-[290px] shrink-0 flex-col bg-slate-900 px-9 py-12 text-slate-300">
        <div className="font-mono text-[12px] tracking-[0.35em] text-emerald-400">{'<dev/>'}</div>
        <h1 className="mt-3 font-display text-[34px] font-bold leading-[1.1] tracking-tight text-white">
          {fullName}
        </h1>
        <div className="mt-1 h-[3px] w-12 bg-emerald-400" />

        <section className="mt-9">
          <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-400">
            {t('template.common.contact', 'Contact')}
          </h2>
          <div className="mt-3 space-y-2.5 text-[12.5px] leading-snug">
            <p className="break-all text-slate-300">{email}</p>
            <p className="text-slate-300">{phone}</p>
          </div>
        </section>

        <section className="mt-9">
          <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-400">
            {t('template.common.skills', 'Skills')}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="rounded border border-slate-700 bg-slate-800 px-2.5 py-1 font-mono text-[11.5px] text-emerald-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-auto pt-10 font-mono text-[10px] tracking-[0.3em] text-slate-600">
          {'// '}
          {t('template.common.name', 'Name')}
        </div>
      </aside>

      {/* White right column */}
      <main className="flex flex-1 flex-col px-11 py-12">
        <section>
          <h2 className="flex items-center gap-3 text-[15px] font-bold uppercase tracking-[0.18em] text-slate-900">
            <span className="font-mono text-emerald-500">#</span>
            {t('template.common.experience', 'Experience')}
          </h2>
          <div className="mt-5 space-y-5 border-l-2 border-slate-100 pl-6">
            {experience.map((job, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[29px] top-[6px] h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[16px] font-bold text-slate-900">{job.title}</h3>
                  {job.meta && (
                    <span className="shrink-0 font-mono text-[12px] text-slate-500">{job.meta}</span>
                  )}
                </div>
                {job.bullets.length > 0 && (
                  <ul className="mt-2 space-y-1.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-[13.5px] leading-relaxed text-slate-600">
                        <span className="mt-[2px] font-mono text-emerald-500">▹</span>
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
          <h2 className="flex items-center gap-3 text-[15px] font-bold uppercase tracking-[0.18em] text-slate-900">
            <span className="font-mono text-emerald-500">#</span>
            {t('template.common.education', 'Education')}
          </h2>
          <div className="mt-5 space-y-3">
            {education.map((line, i) => {
              const [main, meta = ''] = line.split('|')
              return (
                <div key={i} className="flex items-baseline justify-between gap-4">
                  <span className="text-[14.5px] font-semibold text-slate-800">{main.trim()}</span>
                  {meta && (
                    <span className="shrink-0 font-mono text-[12px] text-slate-500">{meta.trim()}</span>
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
