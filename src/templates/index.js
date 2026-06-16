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
 *     tier,                     // 'free' | 'premium' (optional; defaults to 'free')
 *     i18n: { mr: { name, description }, hi: { name, description } }  // optional
 *   }
 *
 * Premium vs free: `tier` is the single gate for paid designs. A config may set
 * `tier: 'premium'` directly, OR be listed in `PREMIUM_IDS` below (a convenience
 * seed so the premium catalog lives in one place without editing every config).
 * Free is the default. The paywall itself is enforced server-side in
 * `app/api/export/route.js` — the client never decides entitlement.
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
import { anniversaryTemplates } from './anniversary/index.js'
import { babyShowerTemplates } from './babyshower/index.js'
import { housewarmingTemplates } from './housewarming/index.js'
import { farewellTemplates } from './farewell/index.js'
import { congratulationsTemplates } from './congratulations/index.js'
import { politicalTemplates } from './political/index.js'
import { shopOpeningTemplates } from './shopopening/index.js'
import { certificateTemplates } from './certificate/index.js'
import { jobApplicationTemplates } from './jobapplication/index.js'
import { eventPosterTemplates } from './eventposter/index.js'
import { restaurantTemplates } from './restaurant/index.js'
import { travelTemplates } from './travel/index.js'
import { educationTemplates } from './education/index.js'
import { socialMediaTemplates } from './socialmedia/index.js'
import { memorialTemplates } from './memorial/index.js'

/**
 * Premium (paid) template ids — the initial premium catalog, kept in one place.
 * Editing this set is all it takes to mark a design premium; a config can also
 * declare `tier: 'premium'` itself (that wins). Everything else is free, so the
 * free funnel stays broad (e.g. Shradhanjali / funeral cards are intentionally
 * all free). Pricing & unlock flow live in app/api/export + src/lib/entitlements.
 */
export const PREMIUM_IDS = new Set([
  'wedding-royal',
  'wedding-luxury',
  'engagement-couple',
  'birthday-luxury',
  'baras-premium',
  'religious-jagran',
  'biodata-premium',
  'resume-corporate',
  'festival-newyear',
  'business-invoice',
])

/**
 * Resolve a template's tier: an explicit config `tier` wins, otherwise the
 * PREMIUM_IDS seed decides, otherwise 'free'. Guarantees every template object
 * in `templateList` carries a concrete `tier`.
 * @param {object} t
 * @returns {'free'|'premium'}
 */
function resolveTier(t) {
  if (t.tier === 'premium' || t.tier === 'free') return t.tier
  return PREMIUM_IDS.has(t.id) ? 'premium' : 'free'
}

/** Flat list of every template config in the platform (each with a resolved `tier`). */
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
  ...anniversaryTemplates,
  ...babyShowerTemplates,
  ...housewarmingTemplates,
  ...farewellTemplates,
  ...congratulationsTemplates,
  ...politicalTemplates,
  ...shopOpeningTemplates,
  ...certificateTemplates,
  ...jobApplicationTemplates,
  ...eventPosterTemplates,
  ...restaurantTemplates,
  ...travelTemplates,
  ...educationTemplates,
  ...socialMediaTemplates,
  ...memorialTemplates,
].map((t) => ({ ...t, tier: resolveTier(t) }))

/** @param {object} template @returns {boolean} True for paid (premium) designs. */
export function isPremium(template) {
  return template?.tier === 'premium'
}

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
