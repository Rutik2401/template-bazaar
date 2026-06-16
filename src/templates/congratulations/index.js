/**
 * Congratulations category — template registry.
 *
 * Three premium congratulatory cards (Promotion, New Job, Achievement). Each
 * pairs a Preview component with a config of the shared shape. All use the same
 * two fields (personName + message) so the editor form stays identical across
 * designs — only the visual design and fixed context headline differ.
 */
import PromotionCongrats from './PromotionCongrats.jsx'
import NewJobCongrats from './NewJobCongrats.jsx'
import AchievementCongrats from './AchievementCongrats.jsx'

/** Shared fields for every congratulations card. */
const congratulationsFields = [
  {
    name: 'personName',
    label: 'Person Name',
    type: 'text',
    placeholder: 'Rohan Mehta',
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Wishing you continued success and happiness in this new chapter!',
  },
]

/** Promotion — prestigious navy & champagne gold with an upward arrow and rising stars. */
const congratsPromotionTemplate = {
  id: 'congrats-promotion',
  category: 'congratulations',
  name: 'Promotion Congratulations',
  description: 'Prestigious navy and gold card with an upward arrow of ascent and rising stars.',
  width: 640,
  height: 900,
  fields: congratulationsFields,
  Preview: PromotionCongrats,
  colors: { primary: '#0a1530', secondary: '#d4a437', bg: '#050b1c', accent: '#e2bd66' },
  fonts: { heading: 'display', body: 'serif' },
}

/** New Job — optimistic teal & green with a briefcase and sprouting new-beginning leaves. */
const congratsNewJobTemplate = {
  id: 'congrats-newjob',
  category: 'congratulations',
  name: 'New Job Congratulations',
  description: 'Fresh teal and green card with a briefcase badge and sprouting new-beginning motifs.',
  width: 640,
  height: 900,
  fields: congratulationsFields,
  Preview: NewJobCongrats,
  colors: { primary: '#053b3a', secondary: '#6ee7b7', bg: '#042e2d', accent: '#34d399' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Achievement — festive royal purple & gold with a trophy, laurels and confetti. */
const congratsAchievementTemplate = {
  id: 'congrats-achievement',
  category: 'congratulations',
  name: 'Achievement Celebration',
  description: 'Festive purple and gold card with a laurel-crowned trophy and scattered confetti.',
  width: 640,
  height: 900,
  fields: congratulationsFields,
  Preview: AchievementCongrats,
  colors: { primary: '#1d0b39', secondary: '#facc15', bg: '#0f0522', accent: '#d4a437' },
  fonts: { heading: 'display', body: 'serif' },
}

export const congratulationsTemplates = [
  congratsPromotionTemplate,
  congratsNewJobTemplate,
  congratsAchievementTemplate,
]
