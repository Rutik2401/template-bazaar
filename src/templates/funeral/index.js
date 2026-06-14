/**
 * Shradhanjali / Funeral / Tribute templates.
 *
 * Five dignified, restrained condolence cards — black / white / grey / muted
 * gold only, generous white space, thin rules and an elegant serif. Each is
 * visually distinct but all share a somber, respectful tone.
 *
 * Every config shares the same simple inputs (`funeralFields`): personName,
 * date, time, venue, familyName. Only the design differs.
 *
 * @see src/templates/index.js for how categories are registered.
 */
import { funeralFields } from '@/templates/_shared/fields.js'

import TributeCard from './TributeCard.jsx'
import PrayerMeeting from './PrayerMeeting.jsx'
import TenthDayCeremony from './TenthDayCeremony.jsx'
import ThirteenthDayCeremony from './ThirteenthDayCeremony.jsx'
import MemorialInvitation from './MemorialInvitation.jsx'

export const funeralTemplates = [
  {
    id: 'funeral-tribute',
    category: 'funeral',
    name: 'Tribute Card',
    description: 'In-loving-memory tribute card with a portrait frame and candle motif. Black on cream.',
    i18n: {
      mr: { name: 'श्रद्धांजली पत्रिका', description: 'छायाचित्र चौकट व दीप नक्षीसह भावपूर्ण श्रद्धांजली पत्रिका. काळ्या रंगात क्रीम पार्श्वभूमीवर.' },
      hi: { name: 'श्रद्धांजलि कार्ड', description: 'चित्र फ्रेम और दीप अलंकरण के साथ भावपूर्ण श्रद्धांजलि कार्ड. क्रीम पृष्ठभूमि पर काला.' },
    },
    width: 640,
    height: 900,
    fields: funeralFields,
    Preview: TributeCard,
    colors: {
      background: '#f6f3ec',
      text: '#2c281f',
      muted: '#7c7565',
      accent: '#b59b5e',
      rule: '#cfc7b5',
    },
    fonts: { display: 'serif', body: 'serif' },
  },
  {
    id: 'funeral-prayer',
    category: 'funeral',
    name: 'Prayer Meeting',
    description: 'Serene grey prayer-meeting card with a simple diya and lotus line drawing.',
    i18n: {
      mr: { name: 'प्रार्थना सभा', description: 'साध्या दीप व कमळ रेखाटनासह शांत राखाडी रंगातील प्रार्थना सभा पत्रिका.' },
      hi: { name: 'प्रार्थना सभा', description: 'सरल दीप और कमल रेखांकन के साथ शांत धूसर रंग की प्रार्थना सभा पत्रिका.' },
    },
    width: 640,
    height: 900,
    fields: funeralFields,
    Preview: PrayerMeeting,
    colors: {
      background: '#f1f1f0',
      text: '#2f2f31',
      muted: '#7a7a7d',
      accent: '#b59b5e',
      rule: '#d6d6d4',
    },
    fonts: { display: 'serif', body: 'serif' },
  },
  {
    id: 'funeral-tenth',
    category: 'funeral',
    name: 'Tenth Day Ceremony',
    description: 'Minimal, restrained Dashkriya Vidhi (tenth day) invitation in white and grey.',
    i18n: {
      mr: { name: 'दशक्रिया विधी', description: 'पांढऱ्या व राखाडी रंगातील साधी, संयमित दशक्रिया विधी निमंत्रण पत्रिका.' },
      hi: { name: 'दशगात्र / दसवां दिन', description: 'श्वेत व धूसर रंग में सरल, संयमित दशगात्र (दसवें दिन) निमंत्रण पत्रिका.' },
    },
    width: 640,
    height: 900,
    fields: funeralFields,
    Preview: TenthDayCeremony,
    colors: {
      background: '#fafafa',
      text: '#2b2b2b',
      muted: '#7e7e7e',
      accent: '#cdb98a',
      rule: '#e4e4e4',
    },
    fonts: { display: 'serif', body: 'serif' },
  },
  {
    id: 'funeral-thirteenth',
    category: 'funeral',
    name: 'Thirteenth Day Ceremony',
    description: 'Minimal, dignified Terahvin / Shraddh invitation with a muted-gold corner accent.',
    i18n: {
      mr: { name: 'तेरावे / श्राद्ध', description: 'मंद सोनेरी कोपरा नक्षीसह साधी, सन्माननीय तेरावे / श्राद्ध निमंत्रण पत्रिका.' },
      hi: { name: 'तेरहवीं / श्राद्ध', description: 'मंद स्वर्ण कोने की सजावट के साथ सरल, गरिमामय तेरहवीं / श्राद्ध निमंत्रण पत्रिका.' },
    },
    width: 640,
    height: 900,
    fields: funeralFields,
    Preview: ThirteenthDayCeremony,
    colors: {
      background: '#fbfaf8',
      text: '#2c2a25',
      muted: '#7d7667',
      accent: '#b59b5e',
      rule: '#d8d2c6',
    },
    fonts: { display: 'serif', body: 'serif' },
  },
  {
    id: 'funeral-memorial',
    category: 'funeral',
    name: 'Memorial Invitation',
    description: 'Elegant memorial card on white with a thin gold rule and an Om motif.',
    i18n: {
      mr: { name: 'स्मृती निमंत्रण', description: 'पांढऱ्या पार्श्वभूमीवर बारीक सोनेरी रेषा व ॐ चिन्हासह सुबक स्मृती निमंत्रण पत्रिका.' },
      hi: { name: 'स्मृति निमंत्रण', description: 'श्वेत पृष्ठभूमि पर पतली स्वर्ण रेखा और ॐ चिन्ह के साथ सुरुचिपूर्ण स्मृति निमंत्रण पत्रिका.' },
    },
    width: 640,
    height: 900,
    fields: funeralFields,
    Preview: MemorialInvitation,
    colors: {
      background: '#ffffff',
      text: '#262626',
      muted: '#7c7c7c',
      accent: '#c4a86a',
      rule: '#e3e3e3',
    },
    fonts: { display: 'serif', body: 'serif' },
  },
]
