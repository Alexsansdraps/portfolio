export interface Job {
  /** clé i18n sous xp.jobs.* */
  id: string
  dates: string
  company: string
  place: string
  tags: string[]
  /** poste en cours → point qui pulse */
  now?: boolean
}

/**
 * Données non traduites de la timeline (dates, boîtes, stack).
 * Les rôles et bullets vivent dans i18n/locales/*.json sous xp.jobs.<id>.
 */
export const jobs: Job[] = [
  {
    id: 'spv',
    dates: '10/2025 — 05/2026',
    company: 'SPV Informatique',
    place: 'Mulhouse',
    tags: ['VUE.JS', 'NUXT', 'IONIC', 'ANGULAR'],
    now: true,
  },
  {
    id: 'visiofactory',
    dates: '01/2025 — 10/2025',
    company: 'Visiofactory',
    place: 'Mulhouse',
    tags: ['PHP', 'PRESTASHOP', 'MYSQL'],
  },
  {
    id: 'vivocaz',
    dates: '05/2022 — 10/2024',
    company: 'Vivocaz',
    place: 'Soissons',
    tags: ['VUE.JS', 'TYPESCRIPT', 'SWIFT', 'DOCKER', 'CI/CD'],
  },
  {
    id: 'olihost',
    dates: '06/2019 — 12/2021',
    company: 'Olihost',
    place: 'Soissons',
    tags: ['SYMFONY', 'PHP', 'WORDPRESS', 'LINUX', 'WINDOWS SERVER'],
  },
]
