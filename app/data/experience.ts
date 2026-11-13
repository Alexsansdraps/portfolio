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
  /** étape « maison » (son activité freelance) plutôt qu'un employeur */
  own?: boolean
}

/**
 * Frise de la page Mon parcours, dans l'ordre chronologique.
 * Écrite pour tout le monde (13/11/2026) : pas de jargon technique ni de liste d'outils.
 */
export const steps: Step[] = [
  {
    id: 'olihost',
    year: '2019',
    dates: '06/2019 – 12/2021',
    company: 'Olihost',
    place: 'Soissons',
    role: 'Développeuse web',
    context: 'Agence web : sites et logiciels pour les entreprises clientes',
    bullets: [
      { k: 'Logiciels sur mesure', t: 'des outils de gestion développés pour les clients de l’agence.' },
      { k: 'Sites internet', t: 'création et suivi de nombreux sites vitrines.' },
      { k: 'Hébergement', t: 'mise en ligne et entretien des serveurs qui hébergent les sites.' },
    ],
    tags: [],
  },
  {
    id: 'vivocaz',
    year: '2022',
    dates: '05/2022 – 10/2024',
    company: 'Vivocaz',
    place: 'Soissons',
    role: 'Développeuse web et mobile',
    context: 'Startup qui édite plusieurs logiciels de digitalisation (Vivocaz, Vivofleet, Vivodrive)',
    bullets: [
      { k: 'Web et mobile', t: 'les écrans des logiciels, sur ordinateur comme sur téléphone.' },
      { k: 'Application iPhone', t: 'développement de nouvelles fonctionnalités de l’application Vivocaz.' },
      { k: 'Design', t: 'conception des écrans, pour qu’ils restent simples à utiliser.' },
      { k: 'Qualité', t: 'des règles communes et des tests pour fiabiliser les logiciels.' },
    ],
    tags: [],
  },
  {
    id: 'visiofactory',
    year: '2025',
    dates: '01/2025 – 10/2025',
    company: 'Visiofactory',
    place: 'Mulhouse',
    role: 'Développeuse e-commerce',
    context: 'Boutiques en ligne, pour le Groupe Nageleisen',
    bullets: [
      { k: 'Grande mise à jour', t: 'participation au passage de la boutique sur une version récente de sa plateforme.' },
      { k: 'Entretien', t: 'résolution de problèmes complexes, pour une boutique stable et rapide.' },
    ],
    tags: [],
  },
  {
    id: 'spv',
    year: '2025',
    dates: '10/2025 – 05/2026',
    company: 'SPV Informatique',
    place: 'Mulhouse',
    role: 'Développeuse web et mobile',
    context: 'Logiciels pour les gestionnaires de paie et leurs clients',
    bullets: [
      { k: 'Modernisation', t: 'refonte d’un logiciel vieillissant, plus agréable et plus rapide.' },
      { k: 'Applications mobiles', t: 'grosses évolutions et publications sur Google Play et l’App Store.' },
      { k: 'Site internet', t: 'création et mise en ligne complète d’un site.' },
    ],
    tags: [],
  },
  {
    id: 'agence',
    year: '2026',
    dates: '2026 – aujourd’hui',
    company: 'À mon compte',
    place: 'Mulhouse',
    role: 'Développeuse web freelance',
    context: 'Indépendante, pour les entreprises qui veulent être visibles en ligne',
    bullets: [
      { k: 'Sites et boutiques', t: 'je conçois des sites vitrines, des boutiques en ligne et des logiciels sur mesure.' },
      { k: 'Visibilité', t: 'référencement Google, fiche Google et réseaux sociaux, pour que mes clients soient trouvés.' },
      { k: 'Accompagnement', t: 'conseil et suivi, de A à Z ou seulement sur la partie qui manque.' },
    ],
    tags: [],
    now: true,
    own: true,
  },
  {
    id: 'infosat',
    year: '2026',
    dates: '09/2026 – aujourd’hui',
    company: 'Infosat',
    place: '',
    role: 'Développeuse web',
    context: 'En parallèle de mon activité freelance',
    bullets: [],
    tags: [],
    now: true,
  },
]
