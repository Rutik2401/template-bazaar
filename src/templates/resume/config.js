import AtsResumeTemplate from './AtsResumeTemplate.jsx'

export const resumeAtsTemplate = {
  id: 'resume-ats',
  category: 'resume',
  name: 'ATS Professional Resume',
  description: 'Clean, single-column resume that passes applicant tracking systems.',
  i18n: {
    mr: { name: 'ATS प्रोफेशनल रेझ्युमे', description: 'ATS प्रणाली पार करणारा स्वच्छ, एक-स्तंभी रेझ्युमे.' },
    hi: { name: 'ATS प्रोफेशनल रिज़्यूमे', description: 'ATS सिस्टम पास करने वाला साफ़, सिंगल-कॉलम रिज़्यूमे.' },
  },
  width: 794,
  height: 1123,
  Preview: AtsResumeTemplate,
  fields: [
    { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Rohan Mehta', defaultValue: 'Rohan Mehta' },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'rohan.mehta@email.com',
      defaultValue: 'rohan.mehta@email.com',
    },
    { name: 'phone', label: 'Phone', type: 'text', placeholder: '+91 98765 43210', defaultValue: '+91 98765 43210' },
    {
      name: 'skills',
      label: 'Skills',
      type: 'textarea',
      hint: 'Separate each skill with a comma.',
      placeholder: 'React, Node.js, SQL, AWS',
      defaultValue: 'React, JavaScript, Node.js, SQL, AWS, Git, REST APIs, Tailwind CSS',
    },
    {
      name: 'experience',
      label: 'Experience',
      type: 'textarea',
      hint: 'Use "Role | Company · Years" for a job, then plain lines for bullet points.',
      defaultValue:
        'Senior Software Engineer | Infosys · 2021–Present\nBuilt scalable microservices serving 2M+ users.\nLed a team of 4 engineers on the payments platform.\nFrontend Developer | TCS · 2018–2021\nDeveloped responsive React dashboards used company-wide.',
    },
    {
      name: 'education',
      label: 'Education',
      type: 'textarea',
      hint: 'One per line. Use "Degree, Institution | Year".',
      defaultValue:
        'B.E. Computer Science, Pune University | 2018\nHigher Secondary, Fergusson College | 2014',
    },
  ],
}
