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
  {
    id: 'anniversary',
    name: 'Anniversary Invitation',
    tagline: 'Celebrate years of togetherness',
    icon: '💞',
    accent: 'from-rose-500 to-pink-500',
    softBg: 'bg-[#fdf2f6]',
  },
  {
    id: 'babyshower',
    name: 'Baby Shower Invitation',
    tagline: 'Welcome the little blessing',
    icon: '🍼',
    accent: 'from-sky-400 to-pink-300',
    softBg: 'bg-[#f0f9ff]',
  },
  {
    id: 'housewarming',
    name: 'Housewarming / Grah Pravesh',
    tagline: 'Bless your new home',
    icon: '🏡',
    accent: 'from-amber-500 to-orange-600',
    softBg: 'bg-[#fff7ed]',
  },
  {
    id: 'farewell',
    name: 'Farewell Invitation',
    tagline: 'A heartfelt send-off',
    icon: '🎓',
    accent: 'from-indigo-500 to-violet-500',
    softBg: 'bg-[#eef2ff]',
  },
  {
    id: 'congratulations',
    name: 'Congratulations Cards',
    tagline: 'Cheer every win',
    icon: '🎊',
    accent: 'from-yellow-400 to-amber-500',
    softBg: 'bg-[#fffbeb]',
  },
  {
    id: 'political',
    name: 'Political Poster',
    tagline: 'Bold posters for leaders & rallies',
    icon: '🚩',
    accent: 'from-orange-500 to-green-600',
    softBg: 'bg-[#fff7ed]',
  },
  {
    id: 'shopopening',
    name: 'Shop Opening Invitation',
    tagline: 'Announce your grand opening',
    icon: '🎉',
    accent: 'from-red-500 to-amber-500',
    softBg: 'bg-[#fff1f2]',
  },
  {
    id: 'certificate',
    name: 'Certificate Templates',
    tagline: 'Award-ready certificates',
    icon: '📜',
    accent: 'from-blue-600 to-indigo-700',
    softBg: 'bg-[#eff6ff]',
  },
  {
    id: 'jobapplication',
    name: 'Job Application Templates',
    tagline: 'Land the job — letters & applications',
    icon: '📝',
    accent: 'from-slate-600 to-slate-800',
    softBg: 'bg-slate-50',
  },
  {
    id: 'eventposter',
    name: 'Event Posters',
    tagline: 'Seminars, workshops & webinars',
    icon: '📣',
    accent: 'from-fuchsia-500 to-purple-600',
    softBg: 'bg-[#fdf4ff]',
  },
  {
    id: 'restaurant',
    name: 'Restaurant Templates',
    tagline: 'Menus, flyers & offers for eateries',
    icon: '🍽️',
    accent: 'from-orange-500 to-red-600',
    softBg: 'bg-[#fff7ed]',
  },
  {
    id: 'travel',
    name: 'Travel Templates',
    tagline: 'Sell tours, holidays & deals',
    icon: '✈️',
    accent: 'from-cyan-500 to-blue-600',
    softBg: 'bg-[#ecfeff]',
  },
  {
    id: 'education',
    name: 'Education Templates',
    tagline: 'Posters & notices for schools',
    icon: '🏫',
    accent: 'from-teal-500 to-emerald-600',
    softBg: 'bg-[#f0fdfa]',
  },
  {
    id: 'socialmedia',
    name: 'Social Media Templates',
    tagline: 'Posts, status & banners that pop',
    icon: '📱',
    accent: 'from-pink-500 to-violet-600',
    softBg: 'bg-[#fdf4ff]',
  },
  {
    id: 'memorial',
    name: 'Memorial / Tribute Cards',
    tagline: 'Honour and remember with grace',
    icon: '🕊️',
    accent: 'from-slate-500 to-slate-700',
    softBg: 'bg-slate-50',
  },
]

/** @returns {object|undefined} */
export function getCategoryById(id) {
  return categories.find((c) => c.id === id)
}
