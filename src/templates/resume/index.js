/**
 * Resume category registry.
 *
 * The first entry is the existing ATS Professional Resume (imported from
 * `./config.js`); the remaining four are premium, visually distinct designs.
 * Each config follows the platform template shape:
 *   { id, category, name, description, i18n, width, height, fields, Preview, colors, fonts }
 */
import { resumeAtsTemplate } from './config.js'
import { resumeFields } from '@/templates/_shared/fields.js'

import EngineerResume from './EngineerResume.jsx'
import FresherResume from './FresherResume.jsx'
import CorporateResume from './CorporateResume.jsx'
import TwoColumnResume from './TwoColumnResume.jsx'

export const resumeEngineerTemplate = {
  id: 'resume-engineer',
  category: 'resume',
  name: 'Software Engineer Resume',
  description: 'Dark sidebar with skills as tags beside a clean white column — modern and technical.',
  i18n: {
    mr: {
      name: 'सॉफ्टवेअर इंजिनिअर रेझ्युमे',
      description: 'गडद साइडबार आणि कौशल्यांचे टॅग्ज असलेला आधुनिक, तांत्रिक रेझ्युमे.',
    },
    hi: {
      name: 'सॉफ्टवेयर इंजीनियर रिज़्यूमे',
      description: 'डार्क साइडबार और स्किल टैग्स के साथ आधुनिक, तकनीकी रिज़्यूमे.',
    },
  },
  width: 794,
  height: 1123,
  fields: resumeFields,
  Preview: EngineerResume,
  colors: { primary: '#0f172a', accent: '#34d399', text: '#334155', background: '#ffffff' },
  fonts: { heading: 'Inter', body: 'Inter', mono: 'monospace' },
}

export const resumeFresherTemplate = {
  id: 'resume-fresher',
  category: 'resume',
  name: 'Fresher Resume',
  description: 'Friendly, education-forward single column with a fresh teal accent for early careers.',
  i18n: {
    mr: {
      name: 'फ्रेशर रेझ्युमे',
      description: 'शिक्षणाला प्राधान्य देणारा, टील रंगाचा मैत्रीपूर्ण एक-स्तंभी रेझ्युमे.',
    },
    hi: {
      name: 'फ्रेशर रिज़्यूमे',
      description: 'शिक्षा को प्राथमिकता देने वाला, टील रंग का दोस्ताना सिंगल-कॉलम रिज़्यूमे.',
    },
  },
  width: 794,
  height: 1123,
  fields: resumeFields,
  Preview: FresherResume,
  colors: { primary: '#0d9488', accent: '#5eead4', text: '#334155', background: '#ffffff' },
  fonts: { heading: 'Inter', body: 'Inter' },
}

export const resumeCorporateTemplate = {
  id: 'resume-corporate',
  category: 'resume',
  name: 'Corporate Resume',
  description: 'Formal navy header band with serif headings — classic, authoritative and refined.',
  i18n: {
    mr: {
      name: 'कॉर्पोरेट रेझ्युमे',
      description: 'नेव्ही हेडर आणि सेरिफ शीर्षकांसह औपचारिक, अधिकृत रेझ्युमे.',
    },
    hi: {
      name: 'कॉर्पोरेट रिज़्यूमे',
      description: 'नेवी हेडर और सेरिफ़ हेडिंग के साथ औपचारिक, आधिकारिक रिज़्यूमे.',
    },
  },
  width: 794,
  height: 1123,
  fields: resumeFields,
  Preview: CorporateResume,
  colors: { primary: '#1e2a4a', accent: '#f59e0b', text: '#334155', background: '#ffffff' },
  fonts: { heading: 'serif', body: 'Inter' },
}

export const resumeTwoColumnTemplate = {
  id: 'resume-twocolumn',
  category: 'resume',
  name: 'Modern Two Column',
  description: 'Coloured indigo sidebar for contact and skills beside a roomy main column.',
  i18n: {
    mr: {
      name: 'मॉडर्न टू-कॉलम रेझ्युमे',
      description: 'संपर्क व कौशल्यांसाठी रंगीत साइडबार असलेला समकालीन दोन-स्तंभी रेझ्युमे.',
    },
    hi: {
      name: 'मॉडर्न टू-कॉलम रिज़्यूमे',
      description: 'संपर्क और कौशल के लिए रंगीन साइडबार वाला समकालीन दो-कॉलम रिज़्यूमे.',
    },
  },
  width: 794,
  height: 1123,
  fields: resumeFields,
  Preview: TwoColumnResume,
  colors: { primary: '#4f46e5', accent: '#a5b4fc', text: '#334155', background: '#ffffff' },
  fonts: { heading: 'Inter', body: 'Inter' },
}

/** All resume templates — ATS (existing) first, then the four premium designs. */
export const resumeTemplates = [
  resumeAtsTemplate,
  resumeEngineerTemplate,
  resumeFresherTemplate,
  resumeCorporateTemplate,
  resumeTwoColumnTemplate,
]
