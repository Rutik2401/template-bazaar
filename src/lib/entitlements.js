/**
 * Entitlement rules — the SINGLE source of truth for "may this request download
 * this template without a watermark?".
 *
 * This is server-only logic. The client may hide or relabel buttons for UX, but
 * the actual paywall is enforced where this is called (app/api/export). Never
 * trust an entitlement value sent by the browser.
 *
 * Phase A/B (current): free templates are always clean; premium templates are
 * clean once the user is signed in (login unlocks).
 * Phase C (payments): add the plan/purchase check at the marked line below — it
 * is the only place that needs to change.
 */

/** @param {string|undefined} tier @returns {boolean} */
export function isPremiumTier(tier) {
  return tier === 'premium'
}

/**
 * @param {object}  args
 * @param {string}  args.tier      The template's resolved tier ('free' | 'premium').
 * @param {object?} args.session   The NextAuth session (or null when signed out).
 * @returns {boolean} true → render clean; false → render watermarked.
 */
export function isEntitled({ tier, session }) {
  // Free designs are always clean — no login, no watermark, no friction.
  if (!isPremiumTier(tier)) return true

  // Premium designs require a signed-in user.
  // PHASE C: change this to `&& hasActivePlan(session)` once payments exist.
  return Boolean(session?.user)
}
