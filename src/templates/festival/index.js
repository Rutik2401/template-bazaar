/**
 * Festival category — template registry.
 *
 * Five premium festival greeting cards (Diwali, Ganesh Chaturthi, Eid,
 * Christmas, New Year). Each pairs a Preview component with a config of the
 * shared shape, all using `festivalFields` (personName + message) so the editor
 * form stays identical across designs — only the visual design differs.
 */
import { festivalFields } from '@/templates/_shared/fields.js'

import DiwaliGreeting from './DiwaliGreeting.jsx'
import GaneshGreeting from './GaneshGreeting.jsx'
import EidGreeting from './EidGreeting.jsx'
import ChristmasGreeting from './ChristmasGreeting.jsx'
import NewYearGreeting from './NewYearGreeting.jsx'

/** Diwali — deep maroon/purple & glowing gold, diyas, rangoli and fireworks. */
const festivalDiwaliTemplate = {
  id: 'festival-diwali',
  category: 'festival',
  name: 'Diwali Greeting',
  description: 'Glowing maroon and gold Diwali card with diyas, a rangoli rosette and bursting fireworks.',
  i18n: {
    mr: { name: 'दिवाळी शुभेच्छा', description: 'दिवे, रांगोळी आणि फटाक्यांसह मरून-सोनेरी दिवाळी शुभेच्छापत्र.' },
    hi: { name: 'दीवाली शुभकामनाएं', description: 'दीयों, रंगोली और आतिशबाजी के साथ मैरून-सुनहरा दीवाली शुभकामना कार्ड.' },
  },
  width: 720,
  height: 900,
  fields: festivalFields,
  Preview: DiwaliGreeting,
  colors: { primary: '#4a1042', secondary: '#fbbf24', bg: '#1a0626', accent: '#d4a437' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Ganesh Chaturthi — saffron & vermilion silk with Ganesha, modak and lotus. */
const festivalGaneshTemplate = {
  id: 'festival-ganesh',
  category: 'festival',
  name: 'Ganesh Chaturthi Greeting',
  description: 'Warm saffron and red Ganesh Chaturthi card with Ganesha, modak and lotus motifs.',
  i18n: {
    mr: { name: 'गणेश चतुर्थी शुभेच्छा', description: 'गणेश, मोदक आणि कमळासह केशरी-लाल गणेश चतुर्थी शुभेच्छापत्र.' },
    hi: { name: 'गणेश चतुर्थी शुभकामनाएं', description: 'गणेश, मोदक और कमल के साथ केसरिया-लाल गणेश चतुर्थी कार्ड.' },
  },
  width: 720,
  height: 900,
  fields: festivalFields,
  Preview: GaneshGreeting,
  colors: { primary: '#d2401a', secondary: '#fde68a', bg: '#7a1f10', accent: '#f6ead0' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Eid Mubarak — emerald green & gold with crescent, mosque skyline and lanterns. */
const festivalEidTemplate = {
  id: 'festival-eid',
  category: 'festival',
  name: 'Eid Mubarak Greeting',
  description: 'Emerald and gold Eid card with a crescent moon, mosque skyline and hanging lanterns.',
  i18n: {
    mr: { name: 'ईद मुबारक शुभेच्छा', description: 'चंद्रकोर, मशीद आणि कंदिलांसह पाचू-सोनेरी ईद मुबारक शुभेच्छापत्र.' },
    hi: { name: 'ईद मुबारक शुभकामनाएं', description: 'अर्धचंद्र, मस्जिद और लालटेन के साथ हरा-सुनहरा ईद मुबारक कार्ड.' },
  },
  width: 720,
  height: 900,
  fields: festivalFields,
  Preview: EidGreeting,
  colors: { primary: '#064e3b', secondary: '#fcd34d', bg: '#022c20', accent: '#d4a437' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Christmas — deep green/red & gold with tree, snow and ornaments. */
const festivalChristmasTemplate = {
  id: 'festival-christmas',
  category: 'festival',
  name: 'Christmas Greeting',
  description: 'Forest-green and gold Christmas card with a decorated tree, falling snow and ornaments.',
  i18n: {
    mr: { name: 'नाताळ शुभेच्छा', description: 'ख्रिसमस ट्री, बर्फ आणि सजावटीसह हिरवा-सोनेरी नाताळ शुभेच्छापत्र.' },
    hi: { name: 'क्रिसमस शुभकामनाएं', description: 'क्रिसमस ट्री, बर्फ और सजावट के साथ हरा-सुनहरा क्रिसमस कार्ड.' },
  },
  width: 720,
  height: 900,
  fields: festivalFields,
  Preview: ChristmasGreeting,
  colors: { primary: '#0f3d2e', secondary: '#dc2626', bg: '#071f18', accent: '#fcd34d' },
  fonts: { heading: 'display', body: 'serif' },
}

/** New Year — midnight navy/black & champagne gold with fireworks and a toast. */
const festivalNewYearTemplate = {
  id: 'festival-newyear',
  category: 'festival',
  name: 'New Year Greeting',
  description: 'Midnight navy and champagne-gold New Year card with bursting fireworks and a toast of flutes.',
  i18n: {
    mr: { name: 'नववर्ष शुभेच्छा', description: 'फटाके आणि शॅम्पेनसह मध्यरात्रीचा निळा-सोनेरी नववर्ष शुभेच्छापत्र.' },
    hi: { name: 'नववर्ष शुभकामनाएं', description: 'आतिशबाजी और शैम्पेन के साथ गहरा नीला-सुनहरा नववर्ष कार्ड.' },
  },
  width: 720,
  height: 900,
  fields: festivalFields,
  Preview: NewYearGreeting,
  colors: { primary: '#0b1430', secondary: '#d4a437', bg: '#02040b', accent: '#e2bd66' },
  fonts: { heading: 'display', body: 'serif' },
}

export const festivalTemplates = [
  festivalDiwaliTemplate,
  festivalGaneshTemplate,
  festivalEidTemplate,
  festivalChristmasTemplate,
  festivalNewYearTemplate,
]
