/**
 * Infos de l'agence et contenus partagés entre plusieurs pages.
 * Le site est en français uniquement : les textes vivent ici ou directement dans les pages.
 * Côté clients (accueil, services, réalisations) : vocabulaire simple, pas de jargon technique.
 */

export const business = {
  name: 'Alexandra Porhansl',
  tagline: 'Agence web freelance en Alsace',
  email: 'a.porhansl@icloud.com',
  city: 'Mulhouse',
  postalCode: '68100',
  department: 'Haut-Rhin',
  region: 'Alsace',
  github: 'https://github.com/Alexsansdraps',
  spotify: 'https://open.spotify.com/user/6j2surqecwtez6nsx9etex4zd',
  since: 2019,
}

export interface Service {
  id: string
  title: string
  /** une phrase, sur les cartes */
  short: string
  /** paragraphe de la page Services */
  long: string
  includes: string[]
  /** réalisation qui l'illustre */
  project?: string
}

export const services: Service[] = [
  {
    id: 'site-vitrine',
    title: 'Site vitrine',
    short: 'Présentez votre activité, rassurez vos clients et recevez des demandes directement dans votre boîte mail.',
    long: 'Votre site est souvent la première chose que vos clients voient de vous. Je le conçois pour qu’il présente clairement votre activité, qu’il soit agréable à lire sur téléphone, et qu’on ait envie de vous contacter.',
    includes: [
      'Un design unique, à votre image (pas un modèle tout fait)',
      'Parfaitement lisible sur téléphone, tablette et ordinateur',
      'Formulaire de contact ou de devis qui arrive dans votre boîte mail',
      'Référencement naturel : être trouvé sur Google par les clients de votre secteur',
      'Mise en ligne, nom de domaine et adresse e-mail professionnelle',
    ],
    project: 'la-chance-animation',
  },
  {
    id: 'boutique-en-ligne',
    title: 'Boutique en ligne',
    short: 'Vendez vos produits en ligne avec une boutique pensée pour eux, paiement sécurisé compris.',
    long: 'Je crée des boutiques adaptées à vos produits, plutôt que de vous faire entrer dans une plateforme toute faite. Paiement, livraisons, factures, personnalisation : on prévoit ce dont vous avez besoin au quotidien.',
    includes: [
      'Paiement par carte bancaire et PayPal, directement sur votre site',
      'Produits personnalisables par vos clients, avec aperçu en direct',
      'Suivi des commandes, livraisons, factures et promotions',
      'Ventes sur les salons et marchés depuis une tablette',
      'Un espace d’administration simple pour tout gérer',
    ],
    project: 'memoryline',
  },
  {
    id: 'referencement',
    title: 'Référencement naturel (SEO)',
    short: 'Être trouvé sur Google par les bons clients : audit, optimisation de votre site, fiche Google et suivi des résultats.',
    long: 'Le référencement naturel (SEO), c’est ce qui aide Google à comprendre ce que vous faites et à vous montrer aux personnes qui cherchent vos services. Je m’en occupe sur chaque site que je crée, et je peux aussi améliorer un site existant.',
    includes: [
      'Audit de votre visibilité actuelle, offert',
      'Titres et textes pensés pour les recherches de vos clients',
      'Site rapide et parfaitement adapté au téléphone',
      'Fiche Google (Google Business Profile) : horaires, photos, avis',
      'Suivi des positions et des visites, expliqué simplement',
    ],
    project: 'la-chance-animation',
  },
  {
    id: 'refonte',
    title: 'Refonte de site',
    short: 'Votre site a vieilli, ou vous voulez quitter Wix ou Shopify ? Je le reconstruis sans perdre votre place sur Google.',
    long: 'Si votre site a pris un coup de vieux, ou si vous payez cher un abonnement Wix ou Shopify, je peux le refaire. Je reprends vos contenus et je m’occupe de la transition pour que vous ne perdiez pas votre place sur Google.',
    includes: [
      'Reprise et réécriture de vos contenus existants',
      'Anciennes adresses redirigées : vous gardez votre référencement',
      'Transfert du nom de domaine, sans coupure pour vos clients',
      'Fin des abonnements inutiles, hébergement à coût maîtrisé',
    ],
    project: 'la-chance-animation',
  },
  {
    id: 'outils-sur-mesure',
    title: 'Outils sur mesure',
    short: 'Espace client, réservation, tableau de bord : l’outil qui colle à votre façon de travailler.',
    long: 'Vous jonglez entre plusieurs fichiers Excel, ou vous saisissez les mêmes informations à plusieurs endroits ? Je peux développer un outil qui s’en charge, et utiliser l’IA quand elle vous fait vraiment gagner du temps.',
    includes: [
      'Espace d’administration pour modifier votre site vous-même',
      'Prise de rendez-vous, espace client, formulaires utiles',
      'Tableaux de bord qui remplacent vos tableurs',
      'Automatisation des tâches répétitives, IA quand elle a du sens',
    ],
    project: 'memoryline',
  },
]

export const maintenance = {
  title: 'Et après la mise en ligne ?',
  text: 'Je reste là après la mise en ligne : hébergement, mises à jour, petites modifications. Si quelque chose ne va pas, vous savez qui appeler.',
}

export const reasons = [
  {
    t: 'Vous me parlez directement',
    d: 'C’est moi qui conçois et développe votre site, donc c’est avec moi que vous échangez du début à la fin. Il n’y a personne entre nous.',
  },
  {
    t: 'Un site fait pour vous',
    d: 'Je ne pars pas d’un thème acheté en ligne. Le design est pensé pour votre activité et pour vos clients.',
  },
  {
    t: 'Le référencement dès le départ',
    d: 'Un site rapide, agréable sur téléphone, avec des textes qui parlent de ce que vous faites vraiment : c’est la base pour que Google vous montre.',
  },
  {
    t: 'Tout vous appartient',
    d: 'Le site, le nom de domaine et les contenus sont à vous. Et si vous voulez changer vos textes ou vos photos vous-même, je vous prévois un espace pour ça.',
  },
  {
    t: 'Basée à Mulhouse',
    d: 'Je me déplace en Alsace pour rencontrer mes clients. Pour ceux qui sont plus loin, en France ou ailleurs, on travaille en visio.',
  },
  {
    t: 'Je réponds vite',
    d: 'Une question, un souci sur votre site ? Je vous réponds sous 24 h.',
  },
]

export const steps = [
  { t: 'On se rencontre', d: 'On prend une demi-heure pour parler de votre activité et de ce que vous attendez. Chez vous si vous êtes en Alsace, sinon en visio. C’est gratuit.' },
  { t: 'Je vous envoie une proposition', d: 'Avec le détail de ce que je vais faire, le délai et le prix. Si quelque chose ne vous convient pas, on en discute.' },
  { t: 'Je construis le site', d: 'Je vous montre l’avancement au fur et à mesure. Vous me dites ce qui vous plaît ou non, et j’ajuste.' },
  { t: 'Mise en ligne', d: 'Je mets le site en ligne et je vous montre comment vous en servir. Ensuite, je reste joignable.' },
]

export interface Faq { q: string, a: string }

export const faq: Faq[] = [
  {
    q: 'Combien coûte un site internet ?',
    a: 'Tout dépend du projet : un site vitrine de quelques pages n’a rien à voir avec une boutique en ligne. Après un premier échange gratuit, je vous envoie un devis détaillé : vous savez exactement ce que vous payez, et pourquoi.',
  },
  {
    q: 'Votre audit est-il vraiment gratuit ?',
    a: 'Oui, et sans engagement. Que vous ayez un site, un logiciel ou pas encore de site, je fais le point et je vous remets un compte rendu clair avec les priorités. Vous en faites ce que vous voulez, avec moi ou sans moi.',
  },
  {
    q: 'Combien de temps faut-il pour créer mon site ?',
    a: 'Cela dépend de la taille du projet et du temps nécessaire pour réunir vos contenus (textes, photos). Le planning est fixé ensemble dans le devis, et vous suivez l’avancement à chaque étape.',
  },
  {
    q: 'Pourrai-je modifier mon site moi-même ?',
    a: 'Oui. Je peux ajouter un espace d’administration simple pour changer vos textes, photos, prix ou horaires sans connaissances techniques.',
  },
  {
    q: 'Mon site sera-t-il bien référencé sur Google ?',
    a: 'Le référencement est pensé dès la conception : site rapide, adapté au téléphone, textes et titres travaillés, informations structurées pour Google. Pour une refonte, les anciennes adresses sont redirigées pour ne pas perdre vos positions.',
  },
  {
    q: 'Je suis sur Wix ou Shopify, est-ce que je peux changer ?',
    a: 'Oui. Je reprends vos contenus, je m’occupe du nom de domaine et des redirections pour garder votre référencement, et vous ne payez plus d’abonnement inutile.',
  },
  {
    q: 'Vous travaillez avec qui, et où ?',
    a: 'Avec des entreprises de partout : en Alsace, ailleurs en France et à l’étranger. Je suis basée à Mulhouse et, en Alsace, je me déplace volontiers pour parler de votre projet (Mulhouse, Colmar, Strasbourg, Guebwiller, Saint-Louis, Thann, Altkirch, Sélestat…). Partout ailleurs, tout se fait très bien à distance, en visio.',
  },
  {
    q: 'Et une fois le site en ligne ?',
    a: 'Je reste votre interlocutrice : hébergement, mises à jour, petites évolutions et corrections. Vous avez quelqu’un à appeler si quelque chose ne va pas.',
  },
]

/** Audit gratuit : page /audit-gratuit et encart de l'accueil. */
export const audit = {
  cases: [
    { t: 'Vous avez un site', d: 'J’analyse sa vitesse, son affichage sur téléphone, son référencement Google et tout ce qui freine vos clients avant qu’ils vous contactent.' },
    { t: 'Vous utilisez un logiciel ou des outils', d: 'Logiciel métier, fichiers Excel, boutique en ligne : je regarde comment vous travaillez et où vous perdez du temps (ressaisies, tâches répétitives, outils qui ne se parlent pas).' },
    { t: 'Vous n’avez pas encore de site', d: 'On fait le point sur votre situation : comment vos clients vous trouvent aujourd’hui, ce que font vos concurrents, et ce dont vous avez vraiment besoin pour démarrer.' },
  ],
  checks: [
    'Votre visibilité sur Google : sur quelles recherches vous apparaissez, et à quelle place',
    'La vitesse de chargement et l’affichage sur téléphone',
    'Les titres et les textes : Google comprend-il ce que vous faites, et pour qui ?',
    'Votre fiche Google : horaires, photos, avis',
    'Les erreurs techniques qui freinent votre référencement',
    'Le parcours de vos clients : est-ce simple de vous contacter, de commander, de demander un devis ?',
  ],
  gets: [
    'Un compte rendu clair, sans jargon',
    'Les 3 à 5 priorités, classées par impact',
    'Ce que vous pouvez faire vous-même, tout de suite',
    'Aucun engagement : vous en faites ce que vous voulez',
  ],
}

/**
 * Zone d'intervention — positions calculées depuis les coordonnées GPS
 * (x = 40 + (lon − 6,85) × 240, y = 20 + (49,05 − lat) × 360).
 * side → côté de l'étiquette.
 */
export const zone = {
  home: { name: 'Mulhouse', x: 157, y: 488 },
  cities: [
    { name: 'Thann', x: 101, y: 468, side: 'left' },
    { name: 'Guebwiller', x: 126, y: 430, side: 'left' },
    { name: 'Altkirch', x: 134, y: 533, side: 'left' },
    { name: 'Saint-Louis', x: 210, y: 546, side: 'right' },
    { name: 'Colmar', x: 162, y: 370, side: 'right' },
    { name: 'Sélestat', x: 185, y: 305, side: 'right' },
    { name: 'Strasbourg', x: 257, y: 192, side: 'right' },
    { name: 'Haguenau', x: 265, y: 104, side: 'right' },
  ],
} as const
