// "Right now" section on the home page. Update by hand whenever these change.
// `label` is a key in locales -> now.*; text fields can be a plain string or { en, es }.

const BASE = import.meta.env.BASE_URL

export const now = [
  {
    label: 'listening',
    title: 'mosca',
    subtitle: 'NSQK',
    image: `${BASE}images/mosca.jpg`,
  },
  {
    label: 'playing',
    title: 'League of Legends',
    subtitle: 'Riot Games',
    image: `${BASE}images/league.jpg`,
  },
  {
    label: 'learning',
    title: {
      en: 'Natural Language Processing',
      es: 'Procesamiento de Lenguaje Natural',
    },
    subtitle: 'Speech and Language Processing · Jurafsky & Martin',
    image: `${BASE}images/pln.png`,
  },
]
