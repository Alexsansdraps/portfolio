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
  /** page de réservation Google Agenda (premier rendez-vous, en visio ou en vrai) */
  booking: 'https://calendar.app.google/j8M5FrwVp79yotrp7',
  since: 2019,
  /** immatriculation (Insee / RNE) */
  legal: {
    form: 'Entrepreneur individuel (EI)',
    siren: '107 939 654',
    siret: '107 939 654 00011',
    vat: 'FR91107939654',
    naf: 'Programmation informatique (NAF 6201Z)',
    founded: '2026-07-27',
  },
}

/** Une ligne de tarif de la page Services. Grille validée par Alexandra (base 280 € HT / jour, après la baisse de 30 % du 12/11/2026). */
export interface Price {
  label: string
  value: string
}

/** Sous chaque grille de prix. */
export const priceNote = 'Prix hors taxes. Le devis fixe le prix exact, selon votre projet. Paiement possible en plusieurs fois.'

export interface Service {
  id: string
  title: string
  /** une phrase, sur les cartes */
  short: string
  /** paragraphe de la page Services */
  long: string
  includes: string[]
  /** prix résumé, sur les cartes de l'accueil */
  price: string
  /** prix plancher en € HT, pour les données structurées */
  minPrice?: number
  /** détail des prix, page Services */
  prices: Price[]
  /** réalisation qui l'illustre */
  project?: string
  /* ---- page dédiée /services/{id} (référencement : une page par recherche visée) ---- */
  /** titre H1 de la page du service : [début, fin en couleur]. Une phrase normale, pas une requête Google. */
  h1: [string, string]
  /** balise title (≈ 60 caractères) */
  seoTitle: string
  /** meta description (≈ 155 caractères) */
  seoDescription: string
  /** texte des liens vers la page du service */
  linkText: string
  /** « C’est pour vous si… » : des situations concrètes, tournées différemment */
  forWho: string[]
  /** questions propres au service, différentes de la FAQ générale (aucune référence aux clients) */
  faq: Faq[]
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
    price: 'À partir de 690 € HT',
    minPrice: 690,
    prices: [
      { label: 'Site d’une page', value: 'à partir de 690 €' },
      { label: 'Site de 5 à 7 pages', value: 'à partir de 1 390 €' },
    ],
    project: 'la-chance-animation',
    h1: ['Je crée', 'votre site vitrine.'],
    seoTitle: 'Création de site vitrine à Mulhouse, dès 690 € HT',
    seoDescription: 'Un site vitrine sur mesure pour présenter votre activité et recevoir des demandes : design unique, adapté au téléphone, pensé pour Google. Dès 690 € HT.',
    linkText: 'Le site vitrine en détail',
    forWho: [
      'Vous n’avez pas encore de site, ou seulement une page Facebook.',
      'Quand on cherche votre métier sur Google, ce sont vos concurrents qui sortent.',
      'Vous aimeriez recevoir les demandes de devis directement dans votre boîte mail.',
    ],
    faq: [
      {
        q: 'Quelle différence entre un site d’une page et un site de 5 à 7 pages ?',
        a: 'Le site d’une page met l’essentiel au même endroit, avec votre activité, vos services, vos coordonnées et un formulaire. Pour démarrer, c’est souvent suffisant, et ça commence à 690 € HT. Avec 5 à 7 pages (à partir de 1 390 € HT), chaque service a sa propre page, et vous avez plus de chances d’apparaître sur Google pour chacun.',
      },
      {
        q: 'Vous occupez-vous du nom de domaine et de l’adresse e-mail ?',
        a: 'Oui. Je m’occupe de la mise en ligne, du nom de domaine et d’une adresse e-mail professionnelle. Le site, le nom de domaine et les contenus restent à vous.',
      },
      {
        q: 'Mon site s’affichera-t-il bien sur téléphone ?',
        a: 'Oui. Vos clients vous découvrent souvent sur leur téléphone, alors c’est par là que je commence, avant la tablette et l’ordinateur.',
      },
    ],
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
      'Un espace d’administration simple pour tout gérer',
    ],
    price: 'À partir de 4 130 € HT',
    minPrice: 4130,
    prices: [
      { label: 'Boutique en ligne sur mesure', value: 'à partir de 4 130 €' },
    ],
    project: 'memoryline',
    h1: ['Je crée', 'votre boutique en ligne.'],
    seoTitle: 'Création de boutique en ligne sur mesure | Mulhouse, Alsace',
    seoDescription: 'Une boutique en ligne pensée pour vos produits : paiement par carte et PayPal, livraisons, factures, produits personnalisables. Sur mesure, dès 4 130 € HT.',
    linkText: 'La boutique en ligne en détail',
    forWho: [
      'Vous vendez des produits et la plateforme que vous utilisez vous limite.',
      'Wix ou Shopify ne sont pas assez spécialisés pour votre métier.',
      'Vos clients personnalisent leurs commandes.',
    ],
    faq: [
      {
        q: 'Pourquoi une boutique sur mesure plutôt qu’une plateforme toute faite ?',
        a: 'Une plateforme convient bien pour démarrer. Quand vos produits ont des particularités (personnalisation, livraisons spécifiques, règles propres à votre métier), on finit souvent par empiler des modules payants. Une boutique sur mesure fait ce qu’il faut pour vos produits, sans module en plus, et vous ne dépendez plus des tarifs d’une plateforme.',
      },
      {
        q: 'Quels moyens de paiement puis-je proposer ?',
        a: 'La carte bancaire et PayPal, directement sur votre site. Les paiements arrivent sur votre compte.',
      },
      {
        q: 'Vais-je pouvoir gérer la boutique moi-même ?',
        a: 'Oui. Vous avez un espace d’administration simple pour ajouter vos produits, suivre les commandes et les livraisons, retrouver vos factures et lancer vos promotions.',
      },
    ],
  },
  {
    id: 'referencement',
    title: 'Référencement naturel (SEO)',
    short: 'Être trouvé sur Google par les bons clients : état des lieux, optimisation de votre site, fiche Google et suivi des résultats.',
    long: 'Le référencement naturel (SEO), c’est ce qui aide Google à comprendre ce que vous faites et à vous montrer aux personnes qui cherchent vos services. Je m’en occupe sur chaque site que je crée, et je peux aussi améliorer un site existant.',
    includes: [
      'Un état des lieux de votre visibilité actuelle',
      'Titres et textes pensés pour les recherches de vos clients',
      'Site rapide et parfaitement adapté au téléphone',
      'Fiche Google (Google Business Profile) : horaires, photos, avis',
      'Suivi des positions et des visites, expliqué simplement',
    ],
    price: 'Sur devis',
    prices: [
      { label: 'Amélioration du référencement', value: 'sur devis' },
    ],
    project: 'la-chance-animation',
    h1: ['Être trouvé', 'sur Google.'],
    seoTitle: 'Référencement naturel (SEO) à Mulhouse | Agence web',
    seoDescription: 'Être trouvé sur Google par vos clients : titres et textes travaillés, site rapide, fiche Google et suivi des résultats. Premier rendez-vous offert, à Mulhouse.',
    linkText: 'Le référencement en détail',
    forWho: [
      'Votre site existe, mais personne ne le trouve quand on cherche votre métier et votre ville.',
      'Vous n’apparaissez pas sur Google Maps, ou votre fiche est presque vide.',
      'Vous ne savez pas si votre site vous amène vraiment des clients.',
    ],
    faq: [
      {
        q: 'Combien de temps faut-il pour voir des résultats ?',
        a: 'Les premiers effets se voient en général après quelques semaines, et le référencement se construit sur plusieurs mois. Tout dépend de la concurrence dans votre secteur et de l’état de votre site au départ. On le voit ensemble dès le premier rendez-vous.',
      },
      {
        q: 'C’est quoi, une fiche Google ?',
        a: 'C’est la fiche qui s’affiche sur Google et Google Maps quand on cherche votre entreprise : adresse, horaires, photos, avis. Elle est gratuite et compte beaucoup pour les recherches locales, du type « plombier Mulhouse ». Je peux la créer ou l’améliorer avec vous.',
      },
      {
        q: 'Pouvez-vous améliorer un site que vous n’avez pas créé ?',
        a: 'Oui. On commence par regarder ensemble ce qui freine votre site, puis je vous propose les améliorations sur devis : textes, titres, vitesse, erreurs techniques, fiche Google.',
      },
    ],
  },
  {
    id: 'presence-en-ligne',
    title: 'Réseaux sociaux et présence en ligne',
    short: 'Votre site, votre fiche Google, vos réseaux sociaux : je m’occupe de tout, et je vous conseille pour que ça vous amène des clients.',
    long: 'Un client peut vous découvrir sur Google, sur Instagram, sur Facebook ou par votre site. Je m’occupe de l’ensemble pour que tout soit à jour, cohérent et à votre image, et je vous conseille sur ce qui vaut vraiment le coup pour votre activité.',
    includes: [
      'Création ou reprise de vos pages Facebook, Instagram et LinkedIn',
      'Votre fiche Google, avec vos horaires, vos photos et vos avis',
      'Les mêmes informations partout, et toujours à jour',
      'La gestion de vos publications, si vous le souhaitez',
      'Des conseils concrets, adaptés à votre activité',
    ],
    price: 'Sur devis',
    prices: [
      { label: 'Présence en ligne et réseaux sociaux', value: 'sur devis' },
    ],
    h1: ['Je m’occupe de', 'toute votre présence en ligne.'],
    seoTitle: 'Gestion des réseaux sociaux et présence en ligne | Mulhouse',
    seoDescription: 'Réseaux sociaux, fiche Google, site internet : je m’occupe de toute votre présence en ligne et je vous conseille. Agence web à Mulhouse, sur devis.',
    linkText: 'La présence en ligne en détail',
    forWho: [
      'Vous n’avez pas le temps de vous occuper de vos réseaux sociaux.',
      'Vos informations ne sont pas les mêmes sur Google, sur Facebook et sur votre site.',
      'Vous ne savez pas par où commencer pour être visible en ligne.',
    ],
    faq: [
      {
        q: 'Vous occupez-vous aussi de mes publications ?',
        a: 'Oui, si vous le souhaitez. On choisit ensemble le rythme et le ton, et je m’en charge. Vous pouvez aussi garder la main, et je vous conseille.',
      },
      {
        q: 'Sur quels réseaux sociaux faut-il être ?',
        a: 'Là où se trouvent vos clients, souvent Facebook et Instagram, parfois LinkedIn. Pas besoin d’être partout : je vous dis lesquels valent le coup pour votre activité.',
      },
      {
        q: 'Combien coûte la gestion de ma présence en ligne ?',
        a: 'Cela dépend de ce que vous voulez me confier. On en parle au premier rendez-vous, offert, puis je vous envoie un devis.',
      },
    ],
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
    price: 'Autour de 2 450 € HT',
    prices: [
      { label: 'Refonte d’un site Wix, Shopify ou vieillissant', value: 'sur devis, autour de 2 450 €' },
    ],
    project: 'la-chance-animation',
    h1: ['Je refais', 'votre site.'],
    seoTitle: 'Refonte de site internet, quitter Wix ou Shopify | Alsace',
    seoDescription: 'Site vieillissant, abonnement Wix ou Shopify trop cher ? Je refais votre site sur mesure sans perdre votre place sur Google. Autour de 2 450 € HT.',
    linkText: 'La refonte en détail',
    forWho: [
      'Votre site a quelques années et ne donne plus une bonne image de votre activité.',
      'Vous payez un abonnement Wix ou Shopify tous les mois pour un site qui ne bouge plus.',
      'Il s’affiche mal sur téléphone, ou il met du temps à charger.',
    ],
    faq: [
      {
        q: 'Comment se passe le changement de site, sans coupure ?',
        a: 'Je prépare le nouveau site à côté de l’ancien, que vous continuez d’utiliser. Quand tout est validé, je bascule le nom de domaine et les redirections en une fois : vos clients ne voient pas de coupure.',
      },
      {
        q: 'Puis-je garder mon nom de domaine ?',
        a: 'Oui. Je le transfère si besoin, et votre adresse reste la même pour vos clients comme pour Google.',
      },
      {
        q: 'Que deviennent mes abonnements Wix ou Shopify ?',
        a: 'Une fois le nouveau site en ligne et les anciennes adresses redirigées, vous pouvez les résilier. Pour l’hébergement et les mises à jour du nouveau site, je propose un suivi à partir de 27 € HT par mois.',
      },
    ],
  },
  {
    id: 'outils-sur-mesure',
    title: 'Logiciel métier sur mesure',
    short: 'Un logiciel métier, un espace client ou un outil de réservation, construit autour de votre façon de travailler.',
    long: 'Vous jonglez entre plusieurs fichiers Excel, ou les logiciels du marché ne collent pas à votre métier ? Je développe des logiciels métier sur mesure, et des outils plus simples quand c’est suffisant, avec l’IA là où elle vous fait vraiment gagner du temps.',
    includes: [
      'Un logiciel métier qui suit votre façon de travailler',
      'Prise de rendez-vous, espace client, formulaires utiles',
      'Tableaux de bord qui remplacent vos tableurs',
      'Automatisation des tâches répétitives, IA quand elle a du sens',
    ],
    price: 'Sur devis',
    prices: [
      { label: 'Logiciel métier ou outil sur mesure', value: 'sur devis' },
    ],
    project: 'memoryline',
    h1: ['Je développe', 'votre logiciel métier.'],
    seoTitle: 'Logiciel métier sur mesure à Mulhouse | Agence web',
    seoDescription: 'Logiciel métier, espace client, prise de rendez-vous, tableau de bord : un outil sur mesure qui remplace vos tableurs et vos ressaisies. Sur devis, à Mulhouse.',
    linkText: 'Le logiciel métier en détail',
    forWho: [
      'Vous jonglez avec plusieurs fichiers Excel qui ne se parlent pas.',
      'Les logiciels du marché ne correspondent pas à votre métier.',
      'Vos clients aimeraient réserver ou retrouver leurs documents en ligne.',
    ],
    faq: [
      {
        q: 'À quoi peut servir un logiciel métier sur mesure ?',
        a: 'À ce qui vous fait perdre du temps aujourd’hui : le suivi de vos chantiers ou de vos commandes, un planning partagé, la prise de rendez-vous en ligne, un espace où vos clients retrouvent leurs documents, un tableau de bord qui remplace vos tableurs, l’envoi automatique de devis et de relances.',
      },
      {
        q: 'Utilisez-vous l’intelligence artificielle ?',
        a: 'Quand elle vous fait vraiment gagner du temps : trier des demandes, résumer des documents, préremplir des fiches. Si une solution plus simple fait l’affaire, je vous la propose.',
      },
      {
        q: 'Combien coûte un logiciel sur mesure ?',
        a: 'Le prix dépend de ce que l’outil doit faire. On fait d’abord le point sur vos outils actuels au premier rendez-vous, offert, puis je vous envoie un devis détaillé.',
      },
    ],
  },
]

export const maintenance = {
  title: 'Et après la mise en ligne ?',
  text: 'Je reste là après la mise en ligne : hébergement, mises à jour, petites modifications. Si quelque chose ne va pas, vous savez qui appeler.',
  price: 'À partir de 27 € HT par mois.',
  minPrice: 27,
  prices: [
    { label: 'Hébergement et mises à jour', value: '27 € / mois' },
    { label: 'Avec 1 h de modifications chaque mois', value: '55 € / mois' },
    { label: 'Petites modifications ponctuelles', value: '35 € / heure' },
  ] as Price[],
}

/** Les arguments de la présentation (accueil, sous « Bonjour, moi c’est Alexandra »). */
export const reasons = [
  {
    t: 'Vous me parlez directement',
    d: 'C’est moi qui conçois et développe votre site, du premier rendez-vous à la mise en ligne. Il n’y a personne entre nous.',
  },
  {
    t: 'Un site fait pour vous',
    d: 'Je ne pars pas d’un thème acheté en ligne. Le design est pensé pour votre activité et pour vos clients.',
  },
  {
    t: 'Tout vous appartient',
    d: 'Le site, le nom de domaine et les contenus sont à vous.',
  },
]

/**
 * Témoignages clients : uniquement des phrases réellement données par les clients, avec leur accord.
 * Tant que la liste est vide, la section n'apparaît nulle part.
 */
export interface Temoignage { quote: string, name: string, role: string, project?: string }
export const testimonials: Temoignage[] = []

export const steps = [
  { t: 'On fait le point', d: 'Une heure, offerte, pour parler de votre situation et de vos besoins, en visio ou en vrai : je me déplace dans un rayon de 100 km autour de Mulhouse.' },
  { t: 'Je vous envoie une proposition', d: 'Avec le détail de ce que je vais faire, le délai et le prix. Si quelque chose ne vous convient pas, on en discute.' },
  { t: 'Je construis le site', d: 'Je vous montre l’avancement au fur et à mesure. Vous me dites ce qui vous plaît ou non, et j’ajuste.' },
  { t: 'Mise en ligne', d: 'Je mets le site en ligne et je vous montre comment vous en servir. Ensuite, je reste joignable.' },
]

export interface Faq { q: string, a: string }

export const faq: Faq[] = [
  {
    q: 'Combien coûte un site internet ?',
    a: 'Un site d’une page démarre à 690 €, un site vitrine de 5 à 7 pages à 1 390 € et une boutique en ligne sur mesure à 4 130 € (prix hors taxes). Le prix exact dépend de votre projet : après un premier échange, je vous envoie une proposition détaillée, pour que vous sachiez exactement ce que vous payez, et pourquoi.',
  },
  {
    q: 'Puis-je payer en plusieurs fois ?',
    a: 'Oui. Le paiement peut se faire en plusieurs fois, on fixe l’échéancier ensemble dans le devis.',
  },
  {
    q: 'Le premier rendez-vous est-il vraiment gratuit ?',
    a: 'Oui, et sans engagement. Pendant une heure, on discute ensemble de votre situation et de vos besoins, en visio ou en vrai. Ensuite, si on travaille ensemble, je vous envoie un devis.',
  },
  {
    q: 'Combien de temps faut-il pour créer mon site ?',
    a: 'Cela dépend de la taille du projet et du temps nécessaire pour réunir vos contenus (textes, photos). Le planning est fixé ensemble dans le devis, et vous suivez l’avancement à chaque étape.',
  },
  {
    q: 'Pourrai-je modifier mon site moi-même ?',
    a: 'Oui. Je peux ajouter un espace d’administration simple pour changer vos textes, photos, prix ou horaires sans connaissances techniques. On en parle au moment du devis.',
  },
  {
    q: 'Mon site sera-t-il bien référencé sur Google ?',
    a: 'Le référencement est pensé dès la conception : site rapide, adapté au téléphone, textes et titres travaillés, informations structurées pour Google. Pour une refonte, les anciennes adresses sont redirigées pour ne pas perdre vos positions.',
  },
  {
    q: 'Si je refais mon site, est-ce que je vais perdre mes données ?',
    a: 'Non. Je récupère vos contenus (textes, photos, produits…) et je redirige les adresses de votre site actuel vers les nouvelles pages, pour que vous gardiez aussi votre place sur Google. Ça vaut aussi si vous êtes sur Wix ou Shopify.',
  },
  {
    q: 'Vous déplacez-vous ?',
    a: 'Oui, dans un rayon de 100 km autour de Mulhouse. Si vous êtes plus loin, on se voit en visio.',
  },
  {
    q: 'Et une fois le site en ligne ?',
    a: 'Je reste votre interlocutrice : hébergement, mises à jour, petites évolutions et corrections, à partir de 27 € HT par mois. Vous avez quelqu’un à appeler si quelque chose ne va pas.',
  },
]


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
