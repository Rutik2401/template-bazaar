/**
 * Job Application category — template registry.
 *
 * A set of A4 portrait (794 × 1123) document templates for applying to jobs
 * and internships. All three share the same five fields so a candidate can
 * fill once and switch styles freely.
 *
 * Field shape: { name, label, type: 'text'|'textarea', placeholder?, defaultValue }
 */
import CoverLetter from './CoverLetter.jsx'
import InternshipApplication from './InternshipApplication.jsx'
import ProfessionalApplication from './ProfessionalApplication.jsx'

/** The five fields shared by every job-application template. */
const jobApplicationFields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Rohan Mehta', defaultValue: 'Rohan Mehta' },
  { name: 'email', label: 'Email', type: 'text', placeholder: 'rohan.mehta@email.com', defaultValue: 'rohan.mehta@email.com' },
  { name: 'role', label: 'Position Applied For', type: 'text', placeholder: 'Frontend Developer', defaultValue: 'Frontend Developer' },
  {
    name: 'skills',
    label: 'Skills',
    type: 'textarea',
    placeholder: 'React, Next.js, Tailwind CSS, JavaScript, Node.js',
    defaultValue: 'React, Next.js, Tailwind CSS, JavaScript, Node.js',
  },
  {
    name: 'experience',
    label: 'Experience',
    type: 'textarea',
    placeholder: 'One achievement per line',
    defaultValue:
      'Built and shipped 10+ responsive web apps over 3 years.\nLed a small frontend team and improved load times by 40%.',
  },
]

/** Formal cover letter — sender header, date, salutation, body, signature. */
const coverletter = {
  id: 'jobapp-coverletter',
  category: 'jobapplication',
  name: 'Cover Letter',
  description: 'An elegant, formal cover letter with a sender header, dated salutation, body paragraphs and a signed closing.',
  i18n: {
    mr: { name: 'कव्हर लेटर', description: 'प्रेषक हेडर, दिनांक, अभिवादन, मजकूर परिच्छेद आणि स्वाक्षरीसह औपचारिक कव्हर लेटर.' },
    hi: { name: 'कवर लेटर', description: 'प्रेषक हेडर, दिनांक, अभिवादन, मुख्य अनुच्छेद और हस्ताक्षर के साथ औपचारिक कवर लेटर.' },
  },
  width: 794,
  height: 1123,
  fields: jobApplicationFields,
  Preview: CoverLetter,
  colors: { primary: '#1e293b', secondary: '#4f46e5', bg: '#ffffff', accent: '#6366f1' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Internship application — friendly header, objective, skill chips, projects. */
const internship = {
  id: 'jobapp-internship',
  category: 'jobapplication',
  name: 'Internship Application',
  description: 'A fresh, friendly-yet-professional internship sheet with an objective, skill chips, a projects list and a contact footer.',
  i18n: {
    mr: { name: 'इंटर्नशिप अर्ज', description: 'उद्दिष्ट, कौशल्य चिप्स, प्रोजेक्ट यादी आणि संपर्क तळटीपसह ताजा, मैत्रीपूर्ण इंटर्नशिप अर्ज.' },
    hi: { name: 'इंटर्नशिप आवेदन', description: 'उद्देश्य, स्किल चिप्स, प्रोजेक्ट सूची और संपर्क फ़ुटर के साथ ताज़ा, दोस्ताना इंटर्नशिप आवेदन.' },
  },
  width: 794,
  height: 1123,
  fields: jobApplicationFields,
  Preview: InternshipApplication,
  colors: { primary: '#4f46e5', secondary: '#0ea5e9', bg: '#f8fafc', accent: '#6366f1' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Professional application — navy header band, role plate, two-column skills. */
const professional = {
  id: 'jobapp-professional',
  category: 'jobapplication',
  name: 'Professional Job Application',
  description: 'A polished corporate application sheet with a strong header band, an "applying for" plate, two-column skills and crisp experience bullets.',
  i18n: {
    mr: { name: 'व्यावसायिक नोकरी अर्ज', description: 'ठळक हेडर बँड, भूमिका प्लेट, दोन-स्तंभी कौशल्ये आणि अनुभव बुलेटसह पॉलिश केलेला कॉर्पोरेट अर्ज.' },
    hi: { name: 'पेशेवर नौकरी आवेदन', description: 'मज़बूत हेडर बैंड, पद प्लेट, दो-कॉलम स्किल्स और स्पष्ट अनुभव बुलेट के साथ परिष्कृत कॉर्पोरेट आवेदन.' },
  },
  width: 794,
  height: 1123,
  fields: jobApplicationFields,
  Preview: ProfessionalApplication,
  colors: { primary: '#0f172a', secondary: '#4f46e5', bg: '#ffffff', accent: '#818cf8' },
  fonts: { heading: 'display', body: 'sans' },
}

export const jobApplicationTemplates = [coverletter, internship, professional]
