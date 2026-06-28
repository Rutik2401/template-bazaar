/**
 * Engagement category — 5 premium, visually distinct invitation designs.
 *
 * Each config is config-driven (see src/templates/index.js for the shape):
 *   { id, category, name, description, i18n, width, height, fields, Preview,
 *     colors, fonts }
 *
 * All five share the same simple inputs (engagementFields); only the visual
 * design differs.
 */
import { engagementFields } from '@/templates/_shared/fields.js'

import RingEngagement from './RingEngagement.jsx'
import SakharpudaEngagement from './SakharpudaEngagement.jsx'
import FloralEngagement from './FloralEngagement.jsx'
import CoupleEngagement from './CoupleEngagement.jsx'
import ModernEngagement from './ModernEngagement.jsx'

// ── Premium Collection (new) ────────────────────────────────────────────────
import LuxuryGoldEngagement from './LuxuryGoldEngagement.jsx'
import RomanticEngagement from './RomanticEngagement.jsx'
import SaveTheDateEngagement from './SaveTheDateEngagement.jsx'
import FamilyEngagement from './FamilyEngagement.jsx'
import BlackGoldEngagement from './BlackGoldEngagement.jsx'
import PinkLuxuryEngagement from './PinkLuxuryEngagement.jsx'
import TempleEngagement from './TempleEngagement.jsx'
import InstagramEngagement from './InstagramEngagement.jsx'
import WhatsappEngagement from './WhatsappEngagement.jsx'
import RoyalCoupleEngagement from './RoyalCoupleEngagement.jsx'
import DiamondRingEngagement from './DiamondRingEngagement.jsx'
import PastelEngagement from './PastelEngagement.jsx'

export const engagementTemplates = [
  {
    id: 'engagement-ring',
    category: 'engagement',
    name: 'Ring Ceremony',
    description: 'Rose-gold & cream card with an elegant diamond-ring motif.',
    i18n: {
      mr: { name: 'अंगठी समारंभ', description: 'हिऱ्याच्या अंगठीच्या नक्षीसह रोझ-गोल्ड व क्रीम रंगाचे कार्ड.' },
      hi: { name: 'रिंग सेरेमनी', description: 'हीरे की अंगूठी की आकृति के साथ रोज़-गोल्ड व क्रीम कार्ड.' },
    },
    width: 640,
    height: 900,
    fields: engagementFields,
    Preview: RingEngagement,
    colors: { primary: '#b87a59', secondary: '#d4607c', bg: '#fff8f4', accent: '#d99a4e' },
    fonts: { heading: 'display', body: 'serif' },
  },
  {
    id: 'engagement-sakharpuda',
    category: 'engagement',
    name: 'Marathi Sakharpuda',
    description: 'Traditional turmeric-yellow, green & maroon with Maharashtrian motifs.',
    i18n: {
      mr: { name: 'मराठी साखरपुडा', description: 'पारंपरिक हळदी-पिवळा, हिरवा व मरून रंगांत महाराष्ट्रीय नक्षीकाम.' },
      hi: { name: 'मराठी साखरपुड़ा', description: 'पारंपरिक हल्दी-पीला, हरा व मैरून रंगों में महाराष्ट्रीय नक्काशी.' },
    },
    width: 640,
    height: 900,
    fields: engagementFields,
    Preview: SakharpudaEngagement,
    colors: { primary: '#7a1f12', secondary: '#1f7a3d', bg: '#fceec0', accent: '#c5870b' },
    fonts: { heading: 'display', body: 'serif' },
  },
  {
    id: 'engagement-floral',
    category: 'engagement',
    name: 'Floral Engagement',
    description: 'Soft watercolour pastel florals — pretty, airy & romantic.',
    i18n: {
      mr: { name: 'फुलांची साखरपुडा पत्रिका', description: 'मऊ वॉटरकलर पेस्टल फुलांची नाजूक व सुंदर रचना.' },
      hi: { name: 'फ्लोरल सगाई', description: 'कोमल वॉटरकलर पेस्टल फूलों वाला सुंदर व हल्का डिज़ाइन.' },
    },
    width: 640,
    height: 900,
    fields: engagementFields,
    Preview: FloralEngagement,
    colors: { primary: '#c06388', secondary: '#9b8fcf', bg: '#fdfbff', accent: '#a8c79b' },
    fonts: { heading: 'display', body: 'serif' },
  },
  {
    id: 'engagement-couple',
    category: 'engagement',
    name: 'Premium Couple Theme',
    description: 'Deep navy & gold luxury with a bold gradient couple name.',
    i18n: {
      mr: { name: 'प्रीमियम कपल थीम', description: 'गडद नेव्ही व सोनेरी रंगातील आलिशान, ठळक जोडप्याचे नाव.' },
      hi: { name: 'प्रीमियम कपल थीम', description: 'गहरे नेवी व सुनहरे रंग की शानदार, बोल्ड युगल नाम वाली थीम.' },
    },
    width: 640,
    height: 900,
    fields: engagementFields,
    Preview: CoupleEngagement,
    colors: { primary: '#d4a437', secondary: '#0a1834', bg: '#0a1834', accent: '#f4e2a8' },
    fonts: { heading: 'display', body: 'serif' },
  },
  {
    id: 'engagement-modern',
    category: 'engagement',
    name: 'Modern Engagement Card',
    description: 'Minimal, geometric accents with a bold contemporary sans & coral pop.',
    i18n: {
      mr: { name: 'मॉडर्न साखरपुडा कार्ड', description: 'किमान, भौमितिक आकार व ठळक आधुनिक फॉन्टसह कोरल रंग.' },
      hi: { name: 'मॉडर्न सगाई कार्ड', description: 'मिनिमल, ज्यामितीय आकृतियाँ व बोल्ड आधुनिक फ़ॉन्ट के साथ कोरल रंग.' },
    },
    width: 640,
    height: 900,
    fields: engagementFields,
    Preview: ModernEngagement,
    colors: { primary: '#e8623d', secondary: '#1c1b1a', bg: '#f4f1ec', accent: '#e8623d' },
    fonts: { heading: 'sans', body: 'party' },
  },

  // ───────────────────────────────────────────────────────────────────────────
  // Premium Collection — 15 new designs. Each has a UNIQUE layout AND its OWN
  // custom field set (dynamic fields differ per template).
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'engagement-gold',
    category: 'engagement',
    name: 'Luxury Gold Engagement',
    description: 'Opulent champagne-gold filigree with a monogram crest and grand gold script.',
    width: 640,
    height: 900,
    fields: [
      { name: 'coupleName', label: 'Couple Name', type: 'text', placeholder: 'Aarav & Sanika', defaultValue: 'Aarav & Sanika' },
      { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-11-20' },
      { name: 'time', label: 'Time', type: 'time', defaultValue: '18:00' },
      { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Hotel Grand, Pune', defaultValue: 'Hotel Grand, Pune' },
    ],
    Preview: LuxuryGoldEngagement,
    colors: { primary: '#8a6d1f', secondary: '#d4a437', bg: '#fbf6e9', accent: '#b8860b' },
    fonts: { heading: 'script', body: 'serif' },
  },
  {
    id: 'engagement-romantic',
    category: 'engagement',
    name: 'Romantic Engagement',
    description: 'Lush blush & burgundy roses with a flowing romantic quote as the hero.',
    width: 640,
    height: 900,
    fields: [
      { name: 'coupleName', label: 'Couple Name', type: 'text', placeholder: 'Aarav & Sanika', defaultValue: 'Aarav & Sanika' },
      { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-11-20' },
      { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Hotel Grand, Pune', defaultValue: 'Hotel Grand, Pune' },
      { name: 'quote', label: 'Quote', type: 'textarea', placeholder: 'A short romantic line', defaultValue: 'Two hearts that beat as one' },
    ],
    Preview: RomanticEngagement,
    colors: { primary: '#9f1239', secondary: '#be4a6f', bg: '#fff1f3', accent: '#e8a0b8' },
    fonts: { heading: 'script', body: 'serif' },
  },
  {
    id: 'engagement-save-the-date',
    category: 'engagement',
    name: 'Save the Date',
    description: 'Modern editorial card built around an oversized date with a photo placeholder.',
    width: 640,
    height: 900,
    fields: [
      { name: 'coupleName', label: 'Couple Name', type: 'text', placeholder: 'Aarav & Sanika', defaultValue: 'Aarav & Sanika' },
      { name: 'eventDate', label: 'Event Date', type: 'date', defaultValue: '2025-11-20' },
      { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Hotel Grand, Pune', defaultValue: 'Hotel Grand, Pune' },
      { name: 'photoCaption', label: 'Photo Caption', type: 'text', placeholder: 'Save our date', defaultValue: 'Save our date' },
    ],
    Preview: SaveTheDateEngagement,
    colors: { primary: '#1c1b1a', secondary: '#c2552f', bg: '#f4f1ec', accent: '#c2552f' },
    fonts: { heading: 'display', body: 'sans' },
  },
  {
    id: 'engagement-family',
    category: 'engagement',
    name: 'Family Engagement Invite',
    description: 'Symmetric two-column invite featuring both families equally with a central crest.',
    width: 640,
    height: 900,
    fields: [
      { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
      { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
      { name: 'brideFamily', label: "Bride's Family", type: 'text', placeholder: 'The Iyer Family', defaultValue: 'The Iyer Family' },
      { name: 'groomFamily', label: "Groom's Family", type: 'text', placeholder: 'The Rao Family', defaultValue: 'The Rao Family' },
      { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-11-20' },
      { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Hotel Grand, Pune', defaultValue: 'Hotel Grand, Pune' },
    ],
    Preview: FamilyEngagement,
    colors: { primary: '#7a1f12', secondary: '#c5870b', bg: '#fdf4e3', accent: '#1f7a3d' },
    fonts: { heading: 'display', body: 'serif' },
  },
  {
    id: 'engagement-blackgold',
    category: 'engagement',
    name: 'Elegant Black & Gold',
    description: 'Sleek matte-black card with a gold deco motif and refined minimal typography.',
    width: 640,
    height: 900,
    fields: [
      { name: 'coupleName', label: 'Couple Name', type: 'text', placeholder: 'Aarav & Sanika', defaultValue: 'Aarav & Sanika' },
      { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-11-20' },
      { name: 'time', label: 'Time', type: 'time', defaultValue: '18:00' },
      { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Hotel Grand, Pune', defaultValue: 'Hotel Grand, Pune' },
    ],
    Preview: BlackGoldEngagement,
    colors: { primary: '#0b0b0d', secondary: '#d4a437', bg: '#0b0b0d', accent: '#f4e2a8' },
    fonts: { heading: 'display', body: 'serif' },
  },
  {
    id: 'engagement-pink',
    category: 'engagement',
    name: 'Premium Pink Luxury',
    description: 'Blush & rose-gold glamour with a pearlescent sheen and dainty botanicals.',
    width: 640,
    height: 900,
    fields: [
      { name: 'coupleName', label: 'Couple Name', type: 'text', placeholder: 'Aarav & Sanika', defaultValue: 'Aarav & Sanika' },
      { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-11-20' },
      { name: 'time', label: 'Time', type: 'time', defaultValue: '18:00' },
      { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Hotel Grand, Pune', defaultValue: 'Hotel Grand, Pune' },
      { name: 'familyName', label: 'Family Name', type: 'text', placeholder: 'The Sharma Family', defaultValue: 'The Sharma Family' },
    ],
    Preview: PinkLuxuryEngagement,
    colors: { primary: '#be4a6f', secondary: '#d99a4e', bg: '#fff0f5', accent: '#e8a0b8' },
    fonts: { heading: 'script', body: 'serif' },
  },
  {
    id: 'engagement-temple',
    category: 'engagement',
    name: 'Temple Traditional',
    description: 'Devotional temple-arch card with bells, kalash and a beaded gold border.',
    width: 640,
    height: 900,
    fields: [
      { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
      { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
      { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-11-20' },
      { name: 'time', label: 'Time', type: 'time', defaultValue: '18:00' },
      { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Hotel Grand, Pune', defaultValue: 'Hotel Grand, Pune' },
      { name: 'familyName', label: 'Family Name', type: 'text', placeholder: 'The Sharma Family', defaultValue: 'The Sharma Family' },
    ],
    Preview: TempleEngagement,
    colors: { primary: '#7a1f12', secondary: '#c5870b', bg: '#4a0d0a', accent: '#d4a437' },
    fonts: { heading: 'display', body: 'serif' },
  },
  {
    id: 'engagement-instagram',
    category: 'engagement',
    name: 'Instagram Announcement',
    description: 'Bold square social post — "We\'re Engaged!" with a trendy sunset gradient.',
    width: 1080,
    height: 1080,
    fields: [
      { name: 'coupleName', label: 'Couple Name', type: 'text', placeholder: 'Aarav & Sanika', defaultValue: 'Aarav & Sanika' },
      { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-11-20' },
      { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Hotel Grand, Pune', defaultValue: 'Hotel Grand, Pune' },
      { name: 'handle', label: 'Handle', type: 'text', placeholder: '@aarav.weds.sanika', defaultValue: '@aarav.weds.sanika' },
    ],
    Preview: InstagramEngagement,
    colors: { primary: '#e8623d', secondary: '#7e3aa8', bg: '#2a1030', accent: '#f3b760' },
    fonts: { heading: 'display', body: 'sans' },
  },
  {
    id: 'engagement-whatsapp',
    category: 'engagement',
    name: 'WhatsApp Engagement Card',
    description: 'Vertical mobile-first invite in rose-gold, made to be shared on WhatsApp.',
    width: 720,
    height: 1280,
    fields: [
      { name: 'coupleName', label: 'Couple Name', type: 'text', placeholder: 'Aarav & Sanika', defaultValue: 'Aarav & Sanika' },
      { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-11-20' },
      { name: 'time', label: 'Time', type: 'time', defaultValue: '18:00' },
      { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Hotel Grand, Pune', defaultValue: 'Hotel Grand, Pune' },
      { name: 'rsvpContact', label: 'RSVP Contact', type: 'text', placeholder: '+91 98765 43210', defaultValue: '+91 98765 43210' },
    ],
    Preview: WhatsappEngagement,
    colors: { primary: '#9f1239', secondary: '#d99a4e', bg: '#5e1822', accent: '#e8a0b8' },
    fonts: { heading: 'script', body: 'serif' },
  },
  {
    id: 'engagement-royal',
    category: 'engagement',
    name: 'Royal Couple Theme',
    description: 'Palatial royal-red & emerald with a crown crest, baroque filigree and a wax seal.',
    width: 640,
    height: 900,
    fields: [
      { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
      { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
      { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-11-20' },
      { name: 'time', label: 'Time', type: 'time', defaultValue: '18:00' },
      { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Hotel Grand, Pune', defaultValue: 'Hotel Grand, Pune' },
      { name: 'hostFamily', label: 'Hosted By', type: 'text', placeholder: 'The Rathore Family', defaultValue: 'The Rathore Family' },
    ],
    Preview: RoyalCoupleEngagement,
    colors: { primary: '#6b1020', secondary: '#0f3d2e', bg: '#4a0a16', accent: '#d4a437' },
    fonts: { heading: 'display', body: 'serif' },
  },
  {
    id: 'engagement-diamond',
    category: 'engagement',
    name: 'Diamond Ring Theme',
    description: 'A faceted diamond solitaire hero on a cool platinum & ice-blue jewel-store palette.',
    width: 640,
    height: 900,
    fields: [
      { name: 'coupleName', label: 'Couple Name', type: 'text', placeholder: 'Aarav & Sanika', defaultValue: 'Aarav & Sanika' },
      { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-11-20' },
      { name: 'time', label: 'Time', type: 'time', defaultValue: '18:00' },
      { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Hotel Grand, Pune', defaultValue: 'Hotel Grand, Pune' },
    ],
    Preview: DiamondRingEngagement,
    colors: { primary: '#1e3a5f', secondary: '#94a3b8', bg: '#eef4fb', accent: '#7dd3fc' },
    fonts: { heading: 'display', body: 'serif' },
  },
  {
    id: 'engagement-pastel',
    category: 'engagement',
    name: 'Soft Pastel Premium',
    description: 'Calm multi-pastel organic shapes with airy space and clean modern type.',
    width: 640,
    height: 900,
    fields: [
      { name: 'coupleName', label: 'Couple Name', type: 'text', placeholder: 'Aarav & Sanika', defaultValue: 'Aarav & Sanika' },
      { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-11-20' },
      { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Hotel Grand, Pune', defaultValue: 'Hotel Grand, Pune' },
    ],
    Preview: PastelEngagement,
    colors: { primary: '#8b7fc7', secondary: '#7e9069', bg: '#fbf7ff', accent: '#e2a78d' },
    fonts: { heading: 'display', body: 'sans' },
  },
]
