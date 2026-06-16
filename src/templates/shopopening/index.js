/**
 * Shop Opening category — template registry.
 *
 * Three celebratory shop-launch designs that all collect the same four
 * fields (shop name, date, address, owner). Each template defines its own
 * inline `fields` to keep the editor self-contained.
 *
 * Field shape: { name, label, type: 'text'|'date', placeholder?, defaultValue }
 */
import GrandOpeningPoster from './GrandOpeningPoster.jsx'
import NewBusinessLaunch from './NewBusinessLaunch.jsx'
import StoreInauguration from './StoreInauguration.jsx'

/** Shared field set for every shop-opening template. */
const SHOP_FIELDS = [
  { name: 'shopName', label: 'Shop Name', type: 'text', placeholder: 'Mehta Boutique', defaultValue: 'Mehta Boutique' },
  { name: 'date', label: 'Date', type: 'date', defaultValue: '2026-06-20' },
  { name: 'address', label: 'Address', type: 'text', placeholder: 'Shop 14, MG Road, Pune', defaultValue: 'Shop 14, MG Road, Pune' },
  { name: 'ownerName', label: 'Owner Name', type: 'text', placeholder: 'Rohan Mehta', defaultValue: 'Rohan Mehta' },
]

/** Festive red & gold poster — ribbon cut by scissors, confetti rain. */
const grandopening = {
  id: 'shop-grandopening',
  category: 'shopopening',
  name: 'Grand Opening Poster',
  description: 'Festive red & gold poster with a ribbon-cutting scissors motif, confetti and a towering "Grand Opening" headline.',
  width: 720,
  height: 960,
  fields: SHOP_FIELDS,
  Preview: GrandOpeningPoster,
  colors: { primary: '#7e0f1d', secondary: '#fcd34d', bg: '#480610', accent: '#fbbf24' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Modern vivid gradient — glowing "Now Open" badge, startup-launch energy. */
const launch = {
  id: 'shop-launch',
  category: 'shopopening',
  name: 'New Business Launch',
  description: 'Sleek startup-style launch poster with a vivid gradient, a glowing "Now Open" badge and a rising rocket motif.',
  width: 720,
  height: 960,
  fields: SHOP_FIELDS,
  Preview: NewBusinessLaunch,
  colors: { primary: '#6d28d9', secondary: '#22d3ee', bg: '#0a0a1f', accent: '#e879f9' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Elegant cream invitation — gold lamp/diya inauguration motif, refined. */
const inauguration = {
  id: 'shop-inauguration',
  category: 'shopopening',
  name: 'Store Inauguration Invite',
  description: 'Refined gold-on-cream invitation card with a lit diya inauguration motif and delicate flourishes.',
  width: 640,
  height: 900,
  fields: SHOP_FIELDS,
  Preview: StoreInauguration,
  colors: { primary: '#7a5a22', secondary: '#bfa05a', bg: '#f7f1e3', accent: '#f59e0b' },
  fonts: { heading: 'display', body: 'serif' },
}

export const shopOpeningTemplates = [grandopening, launch, inauguration]
