/**
 * Memorial / Tribute templates.
 *
 * Three dignified, serene remembrance cards — ivory & gold, soft grey-blue and
 * deep slate on ivory. Restrained palettes, fine rules and elegant serifs;
 * respectful and calm, never flashy. Every config shares the same three simple
 * inputs (personName, date, familyName); only the design differs.
 *
 * @see src/templates/index.js for how categories are registered.
 */
import RespectfulTribute from './RespectfulTribute.jsx'
import RemembranceCard from './RemembranceCard.jsx'
import MemorialInvitationCard from './MemorialInvitationCard.jsx'

const memorialFields = [
  { name: 'personName', label: 'Person Name', type: 'text', placeholder: 'Late Shri Madhav Rao', defaultValue: 'Late Shri Madhav Rao' },
  { name: 'date', label: 'Date', type: 'date', defaultValue: '2026-06-10' },
  { name: 'familyName', label: 'Family Name', type: 'text', placeholder: 'The Rao Family', defaultValue: 'The Rao Family' },
]

const tribute = {
  id: 'memorial-tribute',
  category: 'memorial',
  name: 'Respectful Tribute Card',
  description: 'Serene ivory & gold "In Loving Memory" tribute with an ॐ crest, lotus motif and oval photo frame.',
  width: 640,
  height: 900,
  fields: memorialFields,
  Preview: RespectfulTribute,
  colors: {
    background: '#fbf8f0',
    text: '#332e22',
    muted: '#86795c',
    accent: '#b89642',
    rule: '#c9ad6a',
  },
  fonts: { display: 'serif', body: 'serif' },
}

const remembrance = {
  id: 'memorial-remembrance',
  category: 'memorial',
  name: 'Remembrance Card',
  description: 'Calm soft grey-blue remembrance card with a single lit candle, a dove and "Forever in our hearts".',
  width: 640,
  height: 900,
  fields: memorialFields,
  Preview: RemembranceCard,
  colors: {
    background: '#eef2f6',
    text: '#2f3741',
    muted: '#8694a4',
    accent: '#8aa0b8',
    rule: '#bcc8d6',
  },
  fonts: { display: 'serif', body: 'script' },
}

const invitation = {
  id: 'memorial-invitation',
  category: 'memorial',
  name: 'Memorial Invitation',
  description: 'Dignified prayer-meeting invitation in deep slate on ivory with an ॐ शान्ति crest, photo frame and a date · venue line.',
  width: 640,
  height: 900,
  fields: memorialFields,
  Preview: MemorialInvitationCard,
  colors: {
    background: '#faf7f1',
    text: '#2a313b',
    muted: '#7a8392',
    accent: '#a98f4f',
    rule: '#b9a978',
  },
  fonts: { display: 'serif', body: 'serif' },
}

export const memorialTemplates = [tribute, remembrance, invitation]
