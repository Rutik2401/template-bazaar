/**
 * Reusable field schemas, shared by every template inside a category.
 *
 * A template config references one of these arrays as its `fields`, so the 5
 * templates in a category all collect the same simple inputs — only the visual
 * design differs. Labels are English fallbacks; the live label is localised via
 * i18n key `fields.<name>.label` (and `fields.<name>.hint`).
 *
 * Field: { name, label, type: 'text'|'date'|'time'|'number'|'textarea',
 *          placeholder?, hint?, defaultValue }
 *
 * `name` keys are intentionally reused across categories (e.g. `venue`,
 * `familyName`, `date`) so their translations are written once.
 */

export const weddingFields = [
  { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
  { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
  { name: 'weddingDate', label: 'Wedding Date', type: 'date', defaultValue: '2025-12-15' },
  { name: 'time', label: 'Time', type: 'time', defaultValue: '11:00' },
  { name: 'venue', label: 'Venue', type: 'text', placeholder: 'The Grand Palace, Jaipur', defaultValue: 'The Grand Palace, Jaipur' },
  { name: 'familyName', label: 'Family Name', type: 'text', placeholder: 'The Sharma Family', defaultValue: 'The Sharma Family' },
]

export const engagementFields = [
  { name: 'coupleName', label: 'Couple Name', type: 'text', placeholder: 'Aarav & Sanika', defaultValue: 'Aarav & Sanika' },
  { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-11-20' },
  { name: 'time', label: 'Time', type: 'time', defaultValue: '18:00' },
  { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Hotel Grand, Pune', defaultValue: 'Hotel Grand, Pune' },
  { name: 'familyName', label: 'Family Name', type: 'text', placeholder: 'The Sharma Family', defaultValue: 'The Sharma Family' },
]

export const birthdayFields = [
  { name: 'personName', label: 'Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
  { name: 'age', label: 'Age', type: 'number', placeholder: '7', defaultValue: '7' },
  { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-08-23' },
  { name: 'time', label: 'Time', type: 'time', defaultValue: '16:00' },
  { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Funland Play Cafe, Pune', defaultValue: 'Funland Play Cafe, Pune' },
]

export const barasFields = [
  { name: 'babyName', label: 'Baby Name', type: 'text', placeholder: 'Baby Aadya', defaultValue: 'Baby Aadya' },
  { name: 'parentName', label: 'Parents', type: 'text', placeholder: 'Rahul & Sneha', defaultValue: 'Rahul & Sneha' },
  { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-09-10' },
  { name: 'time', label: 'Time', type: 'time', defaultValue: '10:30' },
  { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Our Residence, Nashik', defaultValue: 'Our Residence, Nashik' },
]

export const religiousFields = [
  { name: 'eventName', label: 'Event Name', type: 'text', placeholder: 'Satyanarayan Pooja', defaultValue: 'Shri Satyanarayan Pooja' },
  { name: 'familyName', label: 'Family Name', type: 'text', placeholder: 'The Joshi Family', defaultValue: 'The Joshi Family' },
  { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-10-05' },
  { name: 'time', label: 'Time', type: 'time', defaultValue: '09:00' },
  { name: 'venue', label: 'Venue', type: 'text', placeholder: '12, Shanti Nagar, Pune', defaultValue: '12, Shanti Nagar, Pune' },
]

export const funeralFields = [
  { name: 'personName', label: 'Name', type: 'text', placeholder: 'Shri Ramesh Kulkarni', defaultValue: 'Shri Ramesh Kulkarni' },
  { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-07-18' },
  { name: 'time', label: 'Time', type: 'time', defaultValue: '17:00' },
  { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Vaikunth Hall, Pune', defaultValue: 'Vaikunth Hall, Pune' },
  { name: 'familyName', label: 'Family Name', type: 'text', placeholder: 'The Kulkarni Family', defaultValue: 'The Kulkarni Family' },
]

export const resumeFields = [
  { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Rohan Mehta', defaultValue: 'Rohan Mehta' },
  { name: 'email', label: 'Email', type: 'text', placeholder: 'rohan.mehta@email.com', defaultValue: 'rohan.mehta@email.com' },
  { name: 'phone', label: 'Phone', type: 'text', placeholder: '+91 98765 43210', defaultValue: '+91 98765 43210' },
  { name: 'skills', label: 'Skills', type: 'textarea', hint: 'Separate each skill with a comma.', defaultValue: 'React, JavaScript, Node.js, SQL, AWS, Git, REST APIs, Tailwind CSS' },
  {
    name: 'experience',
    label: 'Experience',
    type: 'textarea',
    hint: 'Use "Role | Company · Years" for a job, then plain lines for bullet points.',
    defaultValue:
      'Senior Software Engineer | Infosys · 2021–Present\nBuilt scalable microservices serving 2M+ users.\nLed a team of 4 engineers on the payments platform.\nFrontend Developer | TCS · 2018–2021\nDeveloped responsive React dashboards used company-wide.',
  },
  { name: 'education', label: 'Education', type: 'textarea', hint: 'One per line. Use "Degree, Institution | Year".', defaultValue: 'B.E. Computer Science, Pune University | 2018\nHigher Secondary, Fergusson College | 2014' },
]

export const biodataFields = [
  { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Rohan Mehta', defaultValue: 'Rohan Mehta' },
  { name: 'age', label: 'Age', type: 'text', placeholder: '27 years', defaultValue: '27 years' },
  { name: 'height', label: 'Height', type: 'text', placeholder: `5' 10" (178 cm)`, defaultValue: `5' 10" (178 cm)` },
  { name: 'education', label: 'Education', type: 'text', placeholder: 'B.E. Computer Science', defaultValue: 'B.E. Computer Science' },
  { name: 'occupation', label: 'Occupation', type: 'text', placeholder: 'Software Engineer, Infosys', defaultValue: 'Software Engineer at Infosys' },
  { name: 'familyDetails', label: 'Family Details', type: 'textarea', hint: 'One per line.', defaultValue: 'Father: Suresh Mehta (Business)\nMother: Anita Mehta (Homemaker)\nSister: Riya Mehta (Student)' },
  { name: 'contact', label: 'Contact', type: 'text', placeholder: '+91 98765 43210', defaultValue: '+91 98765 43210' },
]

/**
 * Rich marriage-biodata fields — a complete Indian matrimonial profile used by
 * the premium biodata designs. Includes a `photo` upload (with cropper) plus the
 * astrological & family details families expect (DOB, rashi, nakshatra, gotra,
 * religion/caste, parents, …). Each design renders only the rows it needs and
 * hides any field left empty, so the same form drives every layout cleanly.
 */
export const biodataDetailedFields = [
  { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Rohan Mehta', defaultValue: 'Rohan Mehta' },
  { name: 'photo', label: 'Photo', type: 'image', aspect: 0.8, outputWidth: 1000, hint: 'Optional — upload a portrait photo; drag & zoom to crop.' },
  { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', defaultValue: '1997-08-15' },
  { name: 'timeOfBirth', label: 'Time of Birth', type: 'text', placeholder: '07:45 AM', defaultValue: '07:45 AM' },
  { name: 'birthPlace', label: 'Birth Place', type: 'text', placeholder: 'Pune, Maharashtra', defaultValue: 'Pune, Maharashtra' },
  { name: 'height', label: 'Height', type: 'text', placeholder: `5' 10" (178 cm)`, defaultValue: `5' 10" (178 cm)` },
  { name: 'complexion', label: 'Complexion', type: 'text', placeholder: 'Fair', defaultValue: 'Fair' },
  { name: 'bloodGroup', label: 'Blood Group', type: 'text', placeholder: 'B+', defaultValue: 'B+' },
  { name: 'rashi', label: 'Rashi (Moon Sign)', type: 'text', placeholder: 'Vrishabha (Taurus)', defaultValue: 'Vrishabha (Taurus)' },
  { name: 'nakshatra', label: 'Nakshatra', type: 'text', placeholder: 'Rohini', defaultValue: 'Rohini' },
  { name: 'gotra', label: 'Gotra', type: 'text', placeholder: 'Kashyap', defaultValue: 'Kashyap' },
  { name: 'religionCaste', label: 'Religion / Caste', type: 'text', placeholder: 'Hindu, Maratha', defaultValue: 'Hindu, Maratha' },
  { name: 'education', label: 'Education', type: 'text', placeholder: 'B.E. Computer Science', defaultValue: 'B.E. Computer Science' },
  { name: 'occupation', label: 'Occupation', type: 'text', placeholder: 'Software Engineer, Infosys', defaultValue: 'Software Engineer at Infosys' },
  { name: 'income', label: 'Annual Income', type: 'text', placeholder: '₹12 LPA', defaultValue: '₹12 LPA' },
  { name: 'fatherName', label: "Father's Name", type: 'text', placeholder: 'Mr. Suresh Mehta (Business)', defaultValue: 'Mr. Suresh Mehta (Business)' },
  { name: 'motherName', label: "Mother's Name", type: 'text', placeholder: 'Mrs. Anita Mehta (Homemaker)', defaultValue: 'Mrs. Anita Mehta (Homemaker)' },
  { name: 'siblings', label: 'Siblings', type: 'text', placeholder: '1 Younger Sister', defaultValue: '1 Younger Sister' },
  { name: 'contact', label: 'Contact Number', type: 'text', placeholder: '+91 98765 43210', defaultValue: '+91 98765 43210' },
  { name: 'address', label: 'Address', type: 'textarea', rows: 2, placeholder: '12, Shanti Nagar, Pune', defaultValue: '12, Shanti Nagar, Pune, Maharashtra 411001' },
]

export const festivalFields = [
  { name: 'personName', label: 'Name', type: 'text', placeholder: 'The Sharma Family', defaultValue: 'The Sharma Family' },
  { name: 'message', label: 'Message', type: 'textarea', hint: 'Your warm wishes.', defaultValue: 'Wishing you and your family health, happiness and prosperity on this auspicious occasion.' },
]
