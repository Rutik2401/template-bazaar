/**
 * Event Poster category — template registry.
 *
 * Each event poster collects the same four core fields (event name, date,
 * venue, organizer) but renders them in a distinct visual style. Fields are
 * defined INLINE per template, matching the business category convention.
 *
 * Field shape: { name, label, type: 'text'|'textarea'|'date'|'time',
 *                placeholder?, defaultValue }
 */
import SeminarPoster from './SeminarPoster.jsx'
import WorkshopPoster from './WorkshopPoster.jsx'
import WebinarInvitation from './WebinarInvitation.jsx'

/** Shared core fields for every event poster. */
const eventFields = [
  { name: 'eventName', label: 'Event Name', type: 'text', placeholder: 'Future of AI Summit', defaultValue: 'Future of AI Summit' },
  { name: 'date', label: 'Date', type: 'date', defaultValue: '2026-09-10' },
  { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Pune Convention Centre', defaultValue: 'Pune Convention Centre' },
  { name: 'organizer', label: 'Organizer', type: 'text', placeholder: 'TechnoLogic India', defaultValue: 'TechnoLogic India' },
]

/** Seminar — corporate deep-blue & cyan, structured grid, speaker-podium. */
const seminarTemplate = {
  id: 'event-seminar',
  category: 'eventposter',
  name: 'Seminar Poster',
  description: 'Professional seminar poster with a deep-blue & cyan palette, structured info grid and a speaker-podium motif.',
  i18n: {
    mr: { name: 'सेमिनार पोस्टर', description: 'गडद निळ्या व सायन रंगसंगती, रचनात्मक माहिती ग्रिड आणि वक्ता-व्यासपीठ नक्षीसह व्यावसायिक सेमिनार पोस्टर.' },
    hi: { name: 'सेमिनार पोस्टर', description: 'गहरे नीले और सियान रंग, संरचित जानकारी ग्रिड और वक्ता-मंच रूपांकन वाला पेशेवर सेमिनार पोस्टर.' },
  },
  width: 720,
  height: 960,
  fields: eventFields,
  Preview: SeminarPoster,
  colors: { primary: '#06183b', secondary: '#22d3ee', bg: '#06183b', accent: '#67e8f9' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Workshop — energetic orange & teal, tools motif, bold blocky type. */
const workshopTemplate = {
  id: 'event-workshop',
  category: 'eventposter',
  name: 'Workshop Poster',
  description: 'Energetic hands-on workshop poster with bold orange & teal blocks, blocky type and a tools-and-gear motif.',
  i18n: {
    mr: { name: 'वर्कशॉप पोस्टर', description: 'ठळक केशरी व टील ब्लॉक्स, जाड अक्षरे आणि साधने-गिअर नक्षीसह ऊर्जावान प्रात्यक्षिक वर्कशॉप पोस्टर.' },
    hi: { name: 'वर्कशॉप पोस्टर', description: 'बोल्ड नारंगी और टील ब्लॉक, मोटे अक्षरों और औज़ार-गियर रूपांकन वाला ऊर्जावान हैंड्स-ऑन वर्कशॉप पोस्टर.' },
  },
  width: 720,
  height: 960,
  fields: eventFields,
  Preview: WorkshopPoster,
  colors: { primary: '#f97316', secondary: '#14b8a6', bg: '#0d3b3b', accent: '#5eead4' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Webinar — digital dark purple/indigo, neon, screen/play + wifi, Join Online. */
const webinarTemplate = {
  id: 'event-webinar',
  category: 'eventposter',
  name: 'Webinar Invitation',
  description: 'Modern webinar invitation with a dark purple/indigo backdrop, neon accents, a glowing screen, play button and wifi motif.',
  i18n: {
    mr: { name: 'वेबिनार निमंत्रण', description: 'गडद जांभळ्या/इंडिगो पार्श्वभूमी, नीऑन छटा, चमकणारा स्क्रीन, प्ले बटण आणि वायफाय नक्षीसह आधुनिक वेबिनार निमंत्रण.' },
    hi: { name: 'वेबिनार निमंत्रण', description: 'गहरे बैंगनी/इंडिगो पृष्ठभूमि, नीयन रंग, चमकती स्क्रीन, प्ले बटन और वाईफ़ाई रूपांकन वाला आधुनिक वेबिनार निमंत्रण.' },
  },
  width: 720,
  height: 960,
  fields: eventFields,
  Preview: WebinarInvitation,
  colors: { primary: '#a855f7', secondary: '#6366f1', bg: '#120726', accent: '#e879f9' },
  fonts: { heading: 'display', body: 'sans' },
}

export const eventPosterTemplates = [seminarTemplate, workshopTemplate, webinarTemplate]
