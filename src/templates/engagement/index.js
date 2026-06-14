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
]
