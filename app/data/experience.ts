export interface Step {
  id: string
  /** année affichée en grand dans la frise */
  year: string
  dates: string
  company: string
  place: string
  role: string
  context: string
  bullets: { k: string, t: string }[]
  tags: string[]
  /** étape en cours → point qui pulse */
  now?: boolean
  /** étape « maison » (l'agence) plutôt qu'un employeur */
  own?: boolean
}

/**
 * Frise de la page Mon parcours, dans l'ordre chronologique.
 * C'est la seule page où le vocabulaire technique a sa place.
 */
export const steps: Step[] = [
  {
    id: 'olihost',
    year: '2019',
    dates: '06/2019 — 12/2021',
    company: 'Olihost',
    place: 'Soissons',
    role: 'Développeuse full-stack',
    context: 'Agence web — développement pour les clients, agile avec daily chaque matin',
    bullets: [
      { k: 'Logiciels métiers', t: 'solutions sur mesure sous Symfony 3/4/5 et PHP.' },
      { k: 'CMS', t: 'création et gestion de parcs de sites WordPress.' },
      { k: 'Systèmes', t: 'administration et maintenance de serveurs Windows Server et Linux.' },
    ],
    tags: ['SYMFONY', 'PHP', 'WORDPRESS', 'LINUX', 'WINDOWS SERVER'],
  },
  {
    id: 'vivocaz',
    year: '2022',
    dates: '05/2022 — 10/2024',
    company: 'Vivocaz',
    place: 'Soissons',
    role: 'Développeuse front-end web & mobile',
    context: 'Startup SaaS de gestion de flotte automobile — sprints de 2 semaines, code review, daily',
    bullets: [
      { k: 'Web & mobile', t: 'pilotage du front-end Vue.js / TypeScript.' },
      { k: 'iOS natif', t: 'développement Swift sur une grande partie de la mission, jusqu’à la publication de l’app.' },
      { k: 'UI/UX', t: 'conception des interfaces du logiciel SaaS.' },
      { k: 'Qualité', t: 'mise en place de Prettier et de conventions partagées, tests d’acceptation avec Codeception.' },
      { k: 'Ops', t: 'Docker, intégration continue via Git (CI/CD).' },
    ],
    tags: ['VUE.JS', 'TYPESCRIPT', 'SWIFT', 'DOCKER', 'CI/CD'],
  },
  {
    id: 'visiofactory',
    year: '2025',
    dates: '01/2025 — 10/2025',
    company: 'Visiofactory',
    place: 'Mulhouse',
    role: 'Développeuse PHP / PrestaShop',
    context: 'E-commerce — Groupe Nageleisen',
    bullets: [
      { k: 'Migration majeure', t: 'participation au passage de PrestaShop 1.6 vers 8.2.' },
      { k: 'Maintenance', t: 'résolution de bugs complexes, stabilité et performances de la plateforme.' },
    ],
    tags: ['PHP', 'PRESTASHOP', 'MYSQL'],
  },
  {
    id: 'spv',
    year: '2025',
    dates: '10/2025 — 05/2026',
    company: 'SPV Informatique',
    place: 'Mulhouse',
    role: 'Développeuse front-end web & mobile',
    context: 'Développement interne — pour les clients et gestionnaires de paie',
    bullets: [
      { k: 'Migration technique', t: 'passage d’un environnement CSHTML / jQuery vers Vue.js.' },
      { k: 'Apps mobiles', t: 'évolutions majeures sous Ionic et Angular, publications sur Google Play et l’App Store.' },
      { k: 'Projet Nuxt', t: 'création et déploiement complet d’un site sous Nuxt.' },
    ],
    tags: ['VUE.JS', 'NUXT', 'IONIC', 'ANGULAR'],
  },
  {
    id: 'agence',
    year: '2026',
    dates: '2026 — aujourd’hui',
    company: 'Mon agence web',
    place: 'Mulhouse · Alsace',
    role: 'Fondatrice, conception et développement',
    context: 'Sites, boutiques et outils sur mesure pour les entreprises d’Alsace',
    bullets: [
      { k: 'La Chance Animation', t: 'refonte Wix → Astro statique sur Cloudflare, back-office Pages CMS, formulaire de devis via Email Routing, redirections 301.' },
      { k: 'MemoryLine', t: 'sortie de Shopify : monorepo Astro + SolidJS, API Node / Hono, PostgreSQL, paiement Stripe et PayPal, configurateur d’affiches, mode stand, back-office complet, 5 langues, VPS Docker.' },
    ],
    tags: ['ASTRO', 'SOLIDJS', 'NODE', 'POSTGRESQL', 'STRIPE', 'CLOUDFLARE', 'DOCKER'],
    now: true,
    own: true,
  },
  {
    id: 'infosat',
    year: '2026',
    dates: '09/2026 — aujourd’hui',
    company: 'Infosat',
    place: '',
    role: 'Développeuse full-stack',
    context: 'En parallèle de mon agence',
    bullets: [],
    tags: [],
    now: true,
  },
]

export const stack = [
  { label: 'Front', items: ['VUE.JS', 'NUXT', 'TYPESCRIPT', 'ASTRO', 'SOLIDJS', 'IONIC', 'SWIFT'] },
  { label: 'Back', items: ['NODE', 'SYMFONY', 'PHP', 'NEST.JS', 'HONO'] },
  { label: 'Data', items: ['POSTGRESQL', 'MYSQL', 'MODÉLISATION'] },
  { label: 'E-commerce', items: ['STRIPE', 'PAYPAL', 'PRESTASHOP', 'SHOPIFY (MIGRATION)'] },
  { label: 'Ops', items: ['CLOUDFLARE', 'DOCKER', 'CI/CD', 'LINUX', 'VPS'] },
  { label: 'Méthode', items: ['CLAUDE CODE', 'PLAN DE DEV', 'FIGMA', 'UI/UX', 'TESTS', 'SEO'] },
]
