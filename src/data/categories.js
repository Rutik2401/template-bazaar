/**
 * Category metadata.
 *
 * Categories are decoupled from templates: a category is a grouping with
 * presentation metadata. Templates reference a category by `id`
 * (see `src/templates`). Adding a category is a one-line change here + a
 * folder under `src/templates/<id>/` registered in `src/templates/index.js`.
 *
 * Display names/taglines are localised via i18n key `categories.<id>.*`
 * (English fallback lives here in `name`/`tagline`).
 */
export const categories = [
  {
    id: 'wedding',
    name: 'Wedding Invitation',
    tagline: 'Royal invites for your big day',
    icon: '💍',
    accent: 'from-rose-600 to-amber-500',
    softBg: 'bg-[#fdf6ee]',
  },
  {
    id: 'engagement',
    name: 'Engagement Invitation',
    tagline: 'Celebrate the ring ceremony',
    icon: '💑',
    accent: 'from-rose-500 to-pink-500',
    softBg: 'bg-[#fdf2f6]',
  },
  {
    id: 'birthday',
    name: 'Birthday Invitation',
    tagline: 'Fun, colourful party cards',
    icon: '🎉',
    accent: 'from-indigo-500 to-fuchsia-500',
    softBg: 'bg-[#f3f1ff]',
  },
  {
    id: 'baras',
    name: 'Baby Naming Ceremony',
    tagline: 'Bless the little one (Baras)',
    icon: '👶',
    accent: 'from-amber-300 to-pink-400',
    softBg: 'bg-[#fff6f3]',
  },
  {
    id: 'religious',
    name: 'Religious Invitation',
    tagline: 'Pooja, Grah Pravesh & more',
    icon: '🛕',
    accent: 'from-orange-500 to-amber-500',
    softBg: 'bg-[#fff7ed]',
  },
  {
    id: 'funeral',
    name: 'Shradhanjali',
    tagline: 'Respectful tribute & prayer meets',
    icon: '🕯️',
    accent: 'from-slate-600 to-slate-800',
    softBg: 'bg-slate-50',
  },
  {
    id: 'resume',
    name: 'Resume',
    tagline: 'Clean, ATS-ready CV in minutes',
    icon: '📄',
    accent: 'from-slate-700 to-slate-900',
    softBg: 'bg-slate-50',
  },
  {
    id: 'biodata',
    name: 'Marriage Biodata',
    tagline: 'Elegant matrimonial profiles',
    icon: '📋',
    accent: 'from-emerald-600 to-teal-600',
    softBg: 'bg-[#f0fdf9]',
  },
  {
    id: 'festival',
    name: 'Festival Greetings',
    tagline: 'Wishes for every occasion',
    icon: '🪔',
    accent: 'from-orange-500 to-rose-500',
    softBg: 'bg-[#fff4ed]',
  },
  {
    id: 'business',
    name: 'Business Templates',
    tagline: 'Cards, invoices, flyers & offers',
    icon: '💼',
    accent: 'from-sky-600 to-indigo-600',
    softBg: 'bg-[#eff6ff]',
  },
]

/** @returns {object|undefined} */
export function getCategoryById(id) {
  return categories.find((c) => c.id === id)
}
