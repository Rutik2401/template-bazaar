/**
 * Certificate category — template registry.
 *
 * Three premium LANDSCAPE (1123 × 794) certificate designs. Each pairs a
 * Preview component with a config of the shared shape used across the platform
 * (see src/templates/index.js). All three share the same four fields so the
 * editor form stays identical across designs.
 */
import ParticipationCertificate from './ParticipationCertificate.jsx'
import AchievementCertificate from './AchievementCertificate.jsx'
import CourseCompletionCertificate from './CourseCompletionCertificate.jsx'

/** Fields shared by all certificate templates. */
const certificateFields = [
  { name: 'personName', label: 'Person Name', type: 'text', placeholder: 'Rohan Mehta', defaultValue: 'Rohan Mehta' },
  { name: 'courseName', label: 'Course Name', type: 'text', placeholder: 'Full-Stack Web Development', defaultValue: 'Full-Stack Web Development' },
  { name: 'date', label: 'Date', type: 'date', defaultValue: '2026-06-14' },
  { name: 'organizationName', label: 'Organization Name', type: 'text', placeholder: 'Template Bazaar Academy', defaultValue: 'Template Bazaar Academy' },
]

/** Classic navy & gold ornate double border with a rosette seal. */
const participation = {
  id: 'certificate-participation',
  category: 'certificate',
  name: 'Participation Certificate',
  description: 'Classic navy and gold certificate with an ornate double border and a pleated rosette seal.',
  width: 1123,
  height: 794,
  fields: certificateFields,
  Preview: ParticipationCertificate,
  colors: { primary: '#1e3a5f', secondary: '#caa24a', bg: '#fbf8f0', accent: '#a67c1d' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Prestigious gold & maroon with a laurel wreath and gold medal seal. */
const achievement = {
  id: 'certificate-achievement',
  category: 'certificate',
  name: 'Achievement Certificate',
  description: 'Prestigious gold and maroon certificate with a laurel wreath and gold medal seal.',
  width: 1123,
  height: 794,
  fields: certificateFields,
  Preview: AchievementCertificate,
  colors: { primary: '#7c1d1d', secondary: '#caa24a', bg: '#fdfaf2', accent: '#a67c1d' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Modern clean teal/indigo accent with a geometric border and check-badge. */
const completion = {
  id: 'certificate-completion',
  category: 'certificate',
  name: 'Course Completion Certificate',
  description: 'Modern clean certificate with teal and indigo accents, a geometric border and a check-badge.',
  width: 1123,
  height: 794,
  fields: certificateFields,
  Preview: CourseCompletionCertificate,
  colors: { primary: '#0d9488', secondary: '#4338ca', bg: '#ffffff', accent: '#4338ca' },
  fonts: { heading: 'display', body: 'sans' },
}

export const certificateTemplates = [participation, achievement, completion]
