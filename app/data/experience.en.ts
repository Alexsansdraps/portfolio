/**
 * Version anglaise de la frise Mon parcours (experience.ts) : seuls les textes sont ici.
 */
import { steps as stepsFr, type Step } from './experience'

type TextesEtape = Pick<Step, 'dates' | 'company' | 'place' | 'role' | 'context' | 'bullets'>

const textes: Record<string, Partial<TextesEtape>> = {
  olihost: {
    role: 'Web developer',
    context: 'Web agency: websites and software for its business clients',
    bullets: [
      { k: 'Custom software', t: 'management tools developed for the agency’s clients.' },
      { k: 'Websites', t: 'building and maintaining many business websites.' },
      { k: 'Hosting', t: 'putting websites live and looking after the servers that host them.' },
    ],
  },
  vivocaz: {
    role: 'Web and mobile developer',
    context: 'Start-up publishing several digital tools for businesses (Vivocaz, Vivofleet, Vivodrive)',
    bullets: [
      { k: 'Web and mobile', t: 'the software’s screens, on computers as well as phones.' },
      { k: 'iPhone app', t: 'developing new features for the Vivocaz app.' },
      { k: 'Design', t: 'designing the screens so they stay easy to use.' },
      { k: 'Quality', t: 'shared rules and tests to make the software more reliable.' },
    ],
  },
  visiofactory: {
    role: 'E-commerce developer',
    context: 'Online shops, for the Nageleisen Group',
    bullets: [
      { k: 'Major upgrade', t: 'helping move the shop to a recent version of its platform.' },
      { k: 'Maintenance', t: 'solving complex problems, for a stable and fast shop.' },
    ],
  },
  spv: {
    role: 'Web and mobile developer',
    context: 'Software for payroll managers and their clients',
    bullets: [
      { k: 'Modernisation', t: 'redesigning dated software to make it nicer and faster.' },
      { k: 'Mobile apps', t: 'major updates and releases on Google Play and the App Store.' },
      { k: 'Website', t: 'building and launching a complete website.' },
    ],
  },
  agence: {
    dates: '2026 – today',
    company: 'Self-employed',
    role: 'Freelance web developer',
    context: 'Independent, for businesses that want to be visible online',
    bullets: [
      { k: 'Websites and shops', t: 'I design business websites, online shops and custom software.' },
      { k: 'Visibility', t: 'Google search, Google Business Profile and social media, so my clients get found.' },
      { k: 'Support', t: 'advice and follow-up, from A to Z or just on the part that’s missing.' },
    ],
  },
  infosat: {
    dates: '09/2026 – today',
    role: 'Web developer',
    context: 'Alongside my freelance work',
  },
}

export const steps: Step[] = stepsFr.map(s => ({ ...s, ...textes[s.id] }))
