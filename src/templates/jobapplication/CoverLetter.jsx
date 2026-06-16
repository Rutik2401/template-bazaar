'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Cover Letter — a formal, elegant business letter on A4 portrait.
 * Sender header, dated, salutation, body paragraphs woven from the
 * applicant's role / skills / experience, then a gracious closing and
 * a hand-signed name. Reads beautifully even with the defaults.
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function CoverLetter({ values }) {
  const { t } = useI18n()
  const name = values.name?.trim() || 'Rohan Mehta'
  const email = values.email?.trim() || 'rohan.mehta@email.com'
  const role = values.role?.trim() || 'Frontend Developer'
  const skills = toList(values.skills, { separator: /[,\n]/ })
  const experience = toList(values.experience, { separator: /\n/ })

  const today = formatDate(undefined, '') // empty → handled below
  const dateLine = today || '16 June 2026'

  const monogram = (name.charAt(0) || 'R').toUpperCase()
  const topSkills = skills.slice(0, 4)
  const skillSentence = topSkills.length
    ? topSkills.length === 1
      ? topSkills[0]
      : `${topSkills.slice(0, -1).join(', ')} and ${topSkills[topSkills.length - 1]}`
    : 'a modern, product-focused toolset'

  return (
    <div
      data-export-root
      className="relative flex h-[1123px] w-[794px] flex-col overflow-hidden bg-white font-serif text-slate-700"
    >
      {/* slim top accent rule */}
      <div className="h-1.5 w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600" />

      <div className="flex flex-1 flex-col px-[68px] pb-12 pt-12">
        {/* ── Sender header ─────────────────────────────────────────────── */}
        <header className="flex items-start justify-between border-b border-slate-200 pb-7">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-full border border-slate-300 font-display text-2xl font-bold text-slate-900">
              {monogram}
            </div>
            <div>
              <p className="font-display text-[28px] font-bold leading-tight tracking-tight text-slate-900">
                {name}
              </p>
              <p className="mt-0.5 text-[14px] italic text-slate-500">{role}</p>
            </div>
          </div>
          <div className="text-right text-[12.5px] leading-relaxed">
            <p className="font-sans uppercase tracking-[0.2em] text-[10px] font-semibold text-slate-400">
              {t('template.common.contactUs', 'Contact')}
            </p>
            <p className="mt-1 text-slate-600">{email}</p>
            <p className="mt-0.5 text-slate-400">{dateLine}</p>
          </div>
        </header>

        {/* ── Salutation ────────────────────────────────────────────────── */}
        <p className="mt-12 text-[16px] font-semibold text-slate-900">
          {t('template.jobapplication.salutation', 'Dear Hiring Manager,')}
        </p>

        {/* ── Body ──────────────────────────────────────────────────────── */}
        <div className="mt-6 space-y-[18px] text-[15px] leading-[1.9] text-slate-700">
          <p>
            <span className="float-left mr-2.5 mt-0.5 font-display text-[44px] font-bold leading-[0.78] text-indigo-600">
              I
            </span>
            am writing to express my sincere interest in the{' '}
            <span className="font-semibold text-slate-900">{role}</span> position. With a genuine
            passion for crafting thoughtful, dependable work, I believe I can bring real value to
            your team and contribute meaningfully from day one.
          </p>

          <p>
            Over the course of my career I have built strength in {skillSentence}. These skills have
            allowed me to approach each challenge with both creativity and a careful eye for quality.
          </p>

          {experience.length > 0 && (
            <div>
              <p>A few highlights I am particularly proud of:</p>
              <ul className="mt-3.5 space-y-2.5 pl-1">
                {experience.map((line, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rotate-45 bg-indigo-500" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p>
            I would welcome the opportunity to discuss how my experience aligns with your goals.
            Thank you for considering my application — I look forward to the possibility of
            contributing to your continued success.
          </p>
        </div>

        {/* ── Closing & signature ───────────────────────────────────────── */}
        <div className="mt-12">
          <p className="text-[15px] text-slate-700">
            {t('template.jobapplication.closing', 'Warm regards,')}
          </p>
          <p className="mt-5 font-display text-[34px] font-semibold italic leading-none text-slate-900">
            {name}
          </p>
          <div className="mt-3 h-px w-48 bg-slate-300" />
          <p className="mt-2 font-sans text-[12px] uppercase tracking-[0.2em] text-slate-400">
            {role}
          </p>
        </div>

        {/* footer rule + tagline */}
        <footer className="mt-auto border-t border-slate-100 pt-6 text-center font-sans text-[10px] uppercase tracking-[0.32em] text-slate-300">
          {t('template.common.madeWith', 'Made with Template Bazaar')}
        </footer>
      </div>

      {/* faint corner flourish */}
      <span className="pointer-events-none absolute -right-12 -top-8 h-44 w-44 rounded-full bg-indigo-500/[0.04]" />
    </div>
  )
}
