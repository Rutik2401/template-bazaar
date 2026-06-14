/**
 * Template registry — the scalability core.
 *
 * Each category owns a folder `src/templates/<category>/` exporting an array of
 * template configs from its `index.js`. This file simply concatenates them, so
 * the platform scales to thousands of templates: add a folder, export its array,
 * import it here.
 *
 * Template config shape (config-driven — no behaviour is hardcoded in the UI):
 *   {
 *     id, category, name, description,
 *     width, height,            // natural design size (live preview + PDF)
 *     fields,                   // from src/templates/_shared/fields.js
 *     Preview,                  // React component ({ values }) => JSX
 *     colors, fonts,            // theme metadata (for future theming)
 *     i18n: { mr: { name, description }, hi: { name, description } }  // optional
 *   }
 */
import { weddingTemplates } from './wedding/index.js'
import { engagementTemplates } from './engagement/index.js'
import { birthdayTemplates } from './birthday/index.js'
import { barasTemplates } from './baras/index.js'
import { religiousTemplates } from './religious/index.js'
import { funeralTemplates } from './funeral/index.js'
import { resumeTemplates } from './resume/index.js'
import { biodataTemplates } from './biodata/index.js'
import { festivalTemplates } from './festival/index.js'
import { businessTemplates } from './business/index.js'

/** Flat list of every template config in the platform. */
export const templateList = [
  ...weddingTemplates,
  ...engagementTemplates,
  ...birthdayTemplates,
  ...barasTemplates,
  ...religiousTemplates,
  ...funeralTemplates,
  ...resumeTemplates,
  ...biodataTemplates,
  ...festivalTemplates,
  ...businessTemplates,
]

/** Fast id → template lookup. */
const templateById = Object.fromEntries(templateList.map((t) => [t.id, t]))

/** @param {string} id */
export function getTemplateById(id) {
  return templateById[id]
}

/** @param {string} categoryId */
export function getTemplatesByCategory(categoryId) {
  return templateList.filter((t) => t.category === categoryId)
}

/**
 * Build the initial form values for a template from its field defaults.
 * @param {object} template
 * @returns {Record<string, string>}
 */
export function getDefaultValues(template) {
  if (!template) return {}
  return template.fields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue ?? ''
    return acc
  }, {})
}

/**
 * Resolve a localised template string (name/description) from the config.
 * Template-specific strings are co-located in each config (`i18n.<locale>`),
 * which keeps the central dictionary small as templates scale.
 * @param {object} template
 * @param {'name'|'description'} key
 * @param {string} [locale='en']
 */
export function localizedTemplate(template, key, locale = 'en') {
  if (!template) return ''
  if (locale === 'en') return template[key] ?? ''
  return template.i18n?.[locale]?.[key] ?? template[key] ?? ''
}
