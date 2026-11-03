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
    long: 'Votre site est souvent le premier contact avec un client. Je le conçois pour qu’il donne confiance en quelques secondes, qu’il se lise parfaitement sur téléphone, et qu’il pousse à vous contacter.',
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
    long: 'Une boutique taillée pour vos produits plutôt qu’une plateforme qui vous impose ses limites. Personnalisation, paiement, livraisons, factures : tout est prévu pour vous faire gagner du temps au quotidien.',
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
    long: 'Un beau site que personne ne trouve ne sert à rien. Le référencement (SEO), c’est tout ce qui aide Google à comprendre ce que vous faites et pour qui, afin de vous montrer aux bonnes personnes. Je l’applique à chaque site que je crée, et je peux aussi améliorer un site existant, quel qu’il soit.',
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
    long: 'Un site daté fait fuir les clients, et un abonnement Wix ou Shopify coûte cher pour ce qu’il offre. Je reprends vos contenus, je modernise tout, et je m’occupe de la transition pour que Google suive.',
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
    long: 'Vous jonglez avec des fichiers Excel qui ne se parlent pas, ou vous ressaisissez les mêmes informations d’un outil à l’autre ? Je construis l’outil qui fait ce travail à votre place, et j’intègre l’intelligence artificielle là où elle vous fait vraiment gagner du temps.',
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
  text: 'Je reste votre interlocutrice : hébergement, mises à jour, petites évolutions, corrections. Vous n’êtes jamais seul face à votre site.',
}

export const reasons = [
  {
    t: 'Une seule interlocutrice',
    d: 'Vous parlez directement à la personne qui conçoit et construit votre site. Pas de chef de projet, pas d’intermédiaire, pas de message qui se perd.',
  },
  {
    t: 'Du sur mesure, pas un modèle',
    d: 'Votre site est dessiné pour votre activité et vos clients. Il ne ressemble pas à celui de votre concurrent.',
  },
  {
    t: 'Pensé pour Google dès le départ',
    d: 'Site rapide, adapté au téléphone, textes travaillés, informations claires pour les moteurs de recherche : le référencement fait partie du projet.',
  },
  {
    t: 'Vous gardez la main',
    d: 'Vous pouvez modifier vos textes, prix et photos vous-même. Votre site, votre nom de domaine et vos contenus vous appartiennent.',
  },
  {
    t: 'Ancrée en Alsace, ouverte au monde',
    d: 'Basée à Mulhouse, je me déplace chez vous partout en Alsace. Vous êtes ailleurs en France ou à l’étranger ? On travaille à distance, avec le même suivi.',
  },
  {
    t: `${new Date().getFullYear() - 2019} ans de métier`,
    d: 'Agence web, startup, éditeurs de logiciels : j’ai construit des sites, des boutiques et des applications mobiles avant de lancer mon agence.',
  },
]

export const steps = [
  { t: 'On échange', d: '30 minutes, gratuites et sans engagement, pour comprendre votre activité et votre besoin. Chez vous autour d’un café (ou d’un bretzel), ou en visio.' },
  { t: 'Je vous propose un devis clair', d: 'Ce qui sera fait, dans quel délai et pour quel prix. Pas de mauvaise surprise ensuite.' },
  { t: 'Je conçois et je construis', d: 'Je vous montre l’avancement régulièrement, vous donnez votre avis, j’ajuste.' },
  { t: 'Mise en ligne et suivi', d: 'Je mets votre site en ligne, je vous apprends à vous en servir, et je reste disponible ensuite.' },
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
 * (x = 40 + (lon − 6,85) × 240, y = 20 + (49,05 − lat) × 360), temps de route indicatifs depuis Mulhouse.
 * side → côté de l'étiquette.
 */
export const zone = {
  home: { name: 'Mulhouse', x: 157, y: 488 },
  cities: [
    { name: 'Thann', x: 101, y: 468, time: '25 min', side: 'left' },
    { name: 'Guebwiller', x: 126, y: 430, time: '25 min', side: 'left' },
    { name: 'Altkirch', x: 134, y: 533, time: '25 min', side: 'left' },
    { name: 'Saint-Louis', x: 210, y: 546, time: '30 min', side: 'right' },
    { name: 'Colmar', x: 162, y: 370, time: '35 min', side: 'right' },
    { name: 'Sélestat', x: 185, y: 305, time: '50 min', side: 'right' },
    { name: 'Strasbourg', x: 257, y: 192, time: '1 h', side: 'right' },
    { name: 'Haguenau', x: 265, y: 104, time: '1 h 20', side: 'right' },
  ],
} as const
