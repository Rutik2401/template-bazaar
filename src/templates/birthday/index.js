/**
 * Birthday category — template registry.
 *
 * The first entry is the existing "Modern Birthday Party" (imported from
 * ./config.js). The remaining four are premium, visually distinct designs that
 * share the same `birthdayFields` input set — only the visual treatment differs.
 *
 * Config shape: { id, category, name, description, i18n:{mr,hi},
 *                 width, height, fields, Preview, colors, fonts }
 */
import { birthdayPartyTemplate } from './config.js'
import { birthdayFields } from '@/templates/_shared/fields.js'

import KidsCartoonBirthday from './KidsCartoonBirthday.jsx'
import ElegantBirthday from './ElegantBirthday.jsx'
import SurpriseBirthday from './SurpriseBirthday.jsx'
import LuxuryBirthday from './LuxuryBirthday.jsx'

const kidsCartoonBirthdayTemplate = {
  id: 'birthday-kids',
  category: 'birthday',
  name: 'Kids Cartoon Party',
  description: 'Bright primary colours with balloons, stars & a giant age number.',
  i18n: {
    mr: { name: 'किड्स कार्टून पार्टी', description: 'फुगे, तारे आणि मोठ्या वयाच्या आकड्यासह चमकदार रंगीत डिझाइन.' },
    hi: { name: 'किड्स कार्टून पार्टी', description: 'गुब्बारे, सितारे और विशाल उम्र अंक के साथ चटक रंगीन डिज़ाइन.' },
  },
  width: 640,
  height: 900,
  fields: birthdayFields,
  Preview: KidsCartoonBirthday,
  colors: { primary: '#ff5d8f', secondary: '#4cc9f0', accent: '#ffb703', background: '#fff8e7' },
  fonts: { heading: 'party', body: 'party' },
}

const elegantBirthdayTemplate = {
  id: 'birthday-elegant',
  category: 'birthday',
  name: 'Elegant Birthday',
  description: 'Sophisticated black & gold invite with classic serif typography.',
  i18n: {
    mr: { name: 'एलिगंट वाढदिवस', description: 'अभिजात सेरिफ अक्षरांसह काळ्या आणि सोनेरी रंगाचे आमंत्रण.' },
    hi: { name: 'एलिगेंट जन्मदिन', description: 'क्लासिक सेरिफ़ टाइपोग्राफी के साथ काले और सुनहरे रंग का निमंत्रण.' },
  },
  width: 640,
  height: 900,
  fields: birthdayFields,
  Preview: ElegantBirthday,
  colors: { primary: '#d4a437', secondary: '#e2bd66', accent: '#7a5606', background: '#0c0c0e' },
  fonts: { heading: 'display', body: 'serif' },
}

const surpriseBirthdayTemplate = {
  id: 'birthday-surprise',
  category: 'birthday',
  name: 'Surprise Party',
  description: 'Dark neon design with confetti and a bold "Surprise!" headline.',
  i18n: {
    mr: { name: 'सरप्राइज पार्टी', description: 'कॉन्फेटी आणि ठळक "सरप्राइज!" शीर्षकासह गडद निऑन डिझाइन.' },
    hi: { name: 'सरप्राइज़ पार्टी', description: 'कॉन्फ़ेटी और दमदार "सरप्राइज़!" शीर्षक के साथ डार्क नियॉन डिज़ाइन.' },
  },
  width: 640,
  height: 900,
  fields: birthdayFields,
  Preview: SurpriseBirthday,
  colors: { primary: '#d946ef', secondary: '#22d3ee', accent: '#fde047', background: '#0a0118' },
  fonts: { heading: 'party', body: 'party' },
}

const luxuryBirthdayTemplate = {
  id: 'birthday-luxury',
  category: 'birthday',
  name: 'Luxury Birthday',
  description: 'Gold foil over marble & cream with laurel wreath and refined serif.',
  i18n: {
    mr: { name: 'लक्झरी वाढदिवस', description: 'संगमरवरी पार्श्वभूमीवर सोनेरी फॉइल आणि नक्षीदार सेरिफ अक्षरे.' },
    hi: { name: 'लक्ज़री जन्मदिन', description: 'मार्बल पृष्ठभूमि पर सुनहरी फ़ॉइल और परिष्कृत सेरिफ़ अक्षर.' },
  },
  width: 640,
  height: 900,
  fields: birthdayFields,
  Preview: LuxuryBirthday,
  colors: { primary: '#b8860b', secondary: '#c9a227', accent: '#7a5606', background: '#f6f1e7' },
  fonts: { heading: 'display', body: 'serif' },
}

/** All birthday templates — existing "Modern Birthday Party" first, then 4 premium designs. */
export const birthdayTemplates = [
  birthdayPartyTemplate,
  kidsCartoonBirthdayTemplate,
  elegantBirthdayTemplate,
  surpriseBirthdayTemplate,
  luxuryBirthdayTemplate,
]
