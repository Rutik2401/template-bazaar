/**
 * Education category — template registry.
 *
 * Three premium, visually distinct school templates. They share three core
 * fields (schoolName, date, venue); the admission poster also collects a
 * contact number for the call-to-enroll.
 *
 * Config shape: { id, category, name, description, width, height, fields,
 *                 Preview, colors, fonts }
 * Field shape:  { name, label, type: 'text'|'date', placeholder?, defaultValue }
 */
import SchoolAdmissionPoster from './SchoolAdmissionPoster.jsx'
import AnnualFunctionInvite from './AnnualFunctionInvite.jsx'
import ParentMeetingNotice from './ParentMeetingNotice.jsx'

/** Shared core fields used by every education template. */
const schoolNameField = { name: 'schoolName', label: 'School Name', type: 'text', placeholder: 'Sunrise Public School', defaultValue: 'Sunrise Public School' }
const dateField = { name: 'date', label: 'Date', type: 'date', defaultValue: '2026-06-25' }
const venueField = { name: 'venue', label: 'Venue', type: 'text', placeholder: 'School Auditorium', defaultValue: 'School Auditorium' }

/** Bright "Admissions Open" poster with books/pencil/ABC motifs. */
const schoolAdmissionTemplate = {
  id: 'education-admission',
  category: 'education',
  name: 'School Admission Poster',
  description: 'Bright "Admissions Open" poster with books, pencil and A·B·C motifs plus a call-to-enroll badge.',
  width: 720,
  height: 960,
  fields: [
    schoolNameField,
    dateField,
    venueField,
    { name: 'contact', label: 'Contact', type: 'text', placeholder: '+91 98765 43210', defaultValue: '+91 98765 43210' },
  ],
  Preview: SchoolAdmissionPoster,
  colors: { primary: '#0ea5e9', secondary: '#14b8a6', accent: '#f59e0b', background: '#7dd3fc' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Elegant annual-day invite with stage curtains & spotlight. */
const annualFunctionTemplate = {
  id: 'education-annual',
  category: 'education',
  name: 'Annual Function Invite',
  description: 'Festive stage, draped curtain and spotlight theme — an elegant invitation to the school annual day.',
  width: 640,
  height: 900,
  fields: [schoolNameField, dateField, venueField],
  Preview: AnnualFunctionInvite,
  colors: { primary: '#fcd34d', secondary: '#0d9488', accent: '#9f1239', background: '#042f2e' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Clean, formal A4 parent-teacher meeting notice. */
const parentMeetingTemplate = {
  id: 'education-meeting',
  category: 'education',
  name: 'Parent Meeting Notice',
  description: 'Clean, formal A4 notice with a school header, meeting details, a short note and a principal sign-off.',
  width: 794,
  height: 1123,
  fields: [schoolNameField, dateField, venueField],
  Preview: ParentMeetingNotice,
  colors: { primary: '#0284c7', secondary: '#0d9488', accent: '#f59e0b', background: '#ffffff' },
  fonts: { heading: 'display', body: 'sans' },
}

export const educationTemplates = [
  schoolAdmissionTemplate,
  annualFunctionTemplate,
  parentMeetingTemplate,
]
