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
    context: 'Jeune entreprise qui édite un logiciel de gestion de flotte automobile',
    bullets: [
      { k: 'Web et mobile', t: 'les écrans du logiciel, sur ordinateur comme sur téléphone.' },
      { k: 'Application iPhone', t: 'développée jusqu’à sa publication sur l’App Store.' },
      { k: 'Design', t: 'conception des écrans, pour qu’ils restent simples à utiliser.' },
      { k: 'Qualité', t: 'des règles communes et des tests pour fiabiliser le logiciel.' },
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
    company: 'Mon agence web',
    place: 'Mulhouse, Alsace',
    role: 'Fondatrice',
    context: 'Sites, boutiques en ligne, réseaux sociaux et logiciels sur mesure',
    bullets: [
      { k: 'La Chance Animation', t: 'refonte du site, avec un espace pour que le gérant modifie ses contenus seul et un formulaire de devis.' },
      { k: 'MemoryLine', t: 'boutique en ligne sur mesure, avec un configurateur d’affiches, le paiement en ligne et la vente sur les salons.' },
      { k: 'La Chance Production', t: 'refonte du site, avec un espace de gestion, des comptes clients et des galeries photos privées.' },
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
    context: 'En parallèle de mon agence',
    bullets: [],
    tags: [],
    now: true,
  },
]
