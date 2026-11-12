/**
 * Infos de l'agence et contenus partagés entre plusieurs pages.
 * Le site est en français uniquement : les textes vivent ici ou directement dans les pages.
 * Côté clients (accueil, services, réalisations) : vocabulaire simple, pas de jargon technique.
 * Ton : phrases simples, à la première personne, sans formules toutes faites ni deux-points à répétition.
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

/** Une ligne de tarif de la page Services. Grille validée par Alexandra (base 400 € HT / jour). */
export interface Price {
  label: string
  value: string
}

/** Sous chaque grille de prix. */
export const priceNote = 'Prix hors taxes. Le devis fixe le prix exact, selon votre projet.'

export interface Service {
  id: string
  title: string
  /** une phrase, sur les listes de services */
  short: string
  /** paragraphe de la page Services */
  long: string
  includes: string[]
  /** prix résumé, sur l'accueil */
  price: string
  /** prix plancher en € HT, pour les données structurées */
  minPrice?: number
  /** détail des prix, page Services */
  prices: Price[]
  /** réalisation qui l'illustre */
  project?: string
  /* ---- page dédiée /services/{id} (référencement : une page par recherche visée) ---- */
  /** titre H1 de la page dédiée, en deux morceaux (affichés à la suite) */
  h1: [string, string]
  /** balise title (≈ 60 caractères) */
  seoTitle: string
  /** meta description (≈ 155 caractères) */
  seoDescription: string
  /** texte des liens vers la page dédiée (ancre descriptive pour Google) */
  linkText: string
  /** « Pour qui ? » : des phrases qui commencent par « Vous » */
  forWho: string[]
  /** questions propres au service, différentes de la FAQ générale (aucune référence aux clients) */
  faq: Faq[]
}

export const services: Service[] = [
  {
    id: 'site-vitrine',
    title: 'Site vitrine',
    short: 'Un site pour présenter votre activité et recevoir par e-mail les demandes de vos clients.',
    long: 'C’est souvent par votre site que vos clients font connaissance avec vous. Je le construis autour de votre activité, je soigne la lecture sur téléphone et je fais en sorte qu’on ait envie de vous contacter.',
    includes: [
      'Un design créé pour vous, sans thème acheté en ligne',
      'Une lecture confortable sur téléphone, tablette et ordinateur',
      'Un formulaire dont les messages arrivent dans votre boîte mail',
      'Le référencement Google travaillé dès la conception',
      'La mise en ligne, le nom de domaine et une adresse e-mail professionnelle',
    ],
    price: 'À partir de 990 € HT',
    minPrice: 990,
    prices: [
      { label: 'Site d’une page', value: 'à partir de 990 €' },
      { label: 'Site de 5 à 7 pages', value: 'à partir de 1 990 €' },
      { label: 'En option, modifier vos textes et vos photos vous-même', value: '+ 490 €' },
    ],
    project: 'la-chance-animation',
    h1: ['Création de site vitrine', 'à Mulhouse'],
    seoTitle: 'Création de site vitrine à Mulhouse, dès 990 € HT',
    seoDescription: 'Un site vitrine sur mesure pour présenter votre activité et recevoir des demandes : design unique, adapté au téléphone, pensé pour Google. Dès 990 € HT.',
    linkText: 'Tout sur la création de site vitrine',
    forWho: [
      'Vous n’avez pas encore de site, ou seulement une page qui ne vous ressemble plus.',
      'Vous aimeriez qu’on vous trouve sur Google quand on cherche votre métier.',
      'Vous voulez recevoir les demandes de devis directement par e-mail.',
    ],
    faq: [
      {
        q: 'Quelle différence entre un site d’une page et un site de 5 à 7 pages ?',
        a: 'Un site d’une page rassemble l’essentiel au même endroit, avec vos services, vos coordonnées et un formulaire. Il convient bien pour démarrer et coûte à partir de 990 € HT. Avec 5 à 7 pages, à partir de 1 990 € HT, chaque service a sa propre page, et Google peut vous montrer sur davantage de recherches.',
      },
      {
        q: 'Vous occupez-vous du nom de domaine et de l’adresse e-mail ?',
        a: 'Oui. Je m’occupe de la mise en ligne, du nom de domaine et d’une adresse e-mail professionnelle. Le site, le nom de domaine et les contenus vous appartiennent.',
      },
      {
        q: 'Mon site s’affichera-t-il bien sur téléphone ?',
        a: 'Oui. Vos clients vous découvrent souvent sur leur téléphone, alors je conçois chaque page d’abord pour cet écran, puis pour la tablette et l’ordinateur.',
      },
    ],
  },
  {
    id: 'boutique-en-ligne',
    title: 'Boutique en ligne',
    short: 'Une boutique construite autour de vos produits, avec le paiement sécurisé directement sur votre site.',
    long: 'Plutôt que de faire entrer vos produits dans une plateforme toute faite, je construis la boutique autour d’eux. On prévoit ensemble ce dont vous avez besoin au quotidien, du paiement aux livraisons en passant par les factures.',
    includes: [
      'Le paiement par carte bancaire et PayPal sur votre site',
      'Des produits que vos clients personnalisent, avec un aperçu en direct',
      'Le suivi des commandes, des livraisons, des factures et des promotions',
      'La vente sur les salons et les marchés depuis une tablette',
      'Un espace d’administration simple pour tout gérer',
    ],
    price: 'À partir de 5 900 € HT',
    minPrice: 5900,
    prices: [
      { label: 'Boutique en ligne sur mesure', value: 'à partir de 5 900 €' },
    ],
    project: 'memoryline',
    h1: ['Création de boutique', 'en ligne sur mesure'],
    seoTitle: 'Création de boutique en ligne sur mesure | Mulhouse, Alsace',
    seoDescription: 'Une boutique en ligne pensée pour vos produits : paiement par carte et PayPal, livraisons, factures, produits personnalisables. Sur mesure, dès 5 900 € HT.',
    linkText: 'Tout sur la création de boutique en ligne',
    forWho: [
      'Vous vendez des produits et vous voulez une boutique qui vous ressemble.',
      'Vous êtes sur Shopify ou Wix et les abonnements ou les modules payants s’accumulent.',
      'Vos produits se personnalisent, ou vous vendez aussi sur des salons et des marchés.',
    ],
    faq: [
      {
        q: 'Pourquoi une boutique sur mesure plutôt qu’une plateforme toute faite ?',
        a: 'Une plateforme convient bien pour démarrer. Quand vos produits ont des particularités, comme la personnalisation, la vente sur les salons ou des livraisons spécifiques, on finit souvent par empiler des modules payants. Une boutique sur mesure fait ce dont vous avez besoin, et vous ne dépendez plus des tarifs d’une plateforme.',
      },
      {
        q: 'Quels moyens de paiement puis-je proposer ?',
        a: 'La carte bancaire et PayPal, directement sur votre site. Les paiements arrivent sur votre compte.',
      },
      {
        q: 'Vais-je pouvoir gérer la boutique moi-même ?',
        a: 'Oui. Depuis un espace d’administration simple, vous ajoutez vos produits, suivez les commandes et les livraisons, retrouvez vos factures et lancez vos promotions.',
      },
    ],
  },
  {
    id: 'referencement',
    title: 'Référencement naturel (SEO)',
    short: 'Être trouvé sur Google par les personnes qui cherchent vos services, près de chez vous.',
    long: 'Le référencement naturel (SEO) aide Google à comprendre ce que vous faites et à vous montrer aux personnes qui cherchent vos services. Je m’en occupe sur chaque site que je crée, et je peux aussi améliorer un site existant.',
    includes: [
      'Un audit de votre visibilité actuelle, offert',
      'Des titres et des textes écrits pour les recherches de vos clients',
      'Un site rapide et agréable sur téléphone',
      'Votre fiche Google, avec vos horaires, vos photos et vos avis',
      'Un suivi des positions et des visites, expliqué simplement',
    ],
    price: 'Audit offert, puis sur devis',
    prices: [
      { label: 'Audit de votre site et de votre visibilité', value: 'offert' },
      { label: 'Amélioration du référencement', value: 'sur devis' },
    ],
    project: 'la-chance-animation',
    h1: ['Référencement naturel', '(SEO) à Mulhouse'],
    seoTitle: 'Référencement naturel (SEO) à Mulhouse | Audit offert',
    seoDescription: 'Être trouvé sur Google par vos clients : audit offert, titres et textes travaillés, site rapide, fiche Google et suivi des résultats. Agence web à Mulhouse.',
    linkText: 'Tout sur le référencement naturel (SEO)',
    forWho: [
      'Vous avez un site, mais il n’apparaît pas quand on cherche votre métier et votre ville.',
      'Vous voulez apparaître sur Google Maps avec vos horaires, vos photos et vos avis.',
      'Vous ne savez pas d’où viennent vos visites, ni si votre site vous amène des clients.',
    ],
    faq: [
      {
        q: 'Combien de temps faut-il pour voir des résultats ?',
        a: 'Les premiers effets se voient en général après quelques semaines, et le référencement se construit sur plusieurs mois. Cela dépend de la concurrence dans votre secteur et de l’état de votre site au départ. L’audit gratuit sert justement à le savoir.',
      },
      {
        q: 'C’est quoi, une fiche Google ?',
        a: 'C’est la fiche qui apparaît sur Google et Google Maps quand on cherche votre entreprise, avec votre adresse, vos horaires, vos photos et vos avis. Elle est gratuite et compte beaucoup dans les recherches locales, comme « plombier Mulhouse ». Je peux la créer ou l’améliorer avec vous.',
      },
      {
        q: 'Pouvez-vous améliorer un site que vous n’avez pas créé ?',
        a: 'Oui. On commence par l’audit gratuit pour voir ce qui freine votre site, puis je vous propose des améliorations sur devis, qu’il s’agisse des textes, des titres, de la vitesse, d’erreurs techniques ou de votre fiche Google.',
      },
    ],
  },
  {
    id: 'refonte',
    title: 'Refonte de site',
    short: 'Votre site a vieilli, ou vous voulez quitter Wix ou Shopify ? Je le refais sans que vous perdiez votre place sur Google.',
    long: 'Si votre site a pris un coup de vieux, ou si votre abonnement Wix ou Shopify vous coûte cher, je peux le refaire. Je reprends vos contenus et je m’occupe de la transition pour que vous gardiez votre place sur Google.',
    includes: [
      'La reprise et la réécriture de vos contenus',
      'Vos anciennes adresses redirigées vers les nouvelles pages, pour garder votre référencement',
      'Le transfert du nom de domaine, sans coupure pour vos clients',
      'Un hébergement dont vous maîtrisez le coût',
    ],
    price: 'Autour de 3 500 € HT',
    prices: [
      { label: 'Refonte d’un site Wix, Shopify ou vieillissant', value: 'sur devis, autour de 3 500 €' },
    ],
    project: 'la-chance-animation',
    h1: ['Refonte de', 'site internet'],
    seoTitle: 'Refonte de site internet, quitter Wix ou Shopify | Alsace',
    seoDescription: 'Site vieillissant, abonnement Wix ou Shopify trop cher ? Je refais votre site sur mesure sans perdre votre place sur Google. Autour de 3 500 € HT.',
    linkText: 'Tout sur la refonte de site',
    forWho: [
      'Vous avez un site depuis quelques années et il ne donne plus une bonne image de votre activité.',
      'Vous payez chaque mois un abonnement Wix ou Shopify pour un site qui évolue peu.',
      'Votre site s’affiche mal sur téléphone ou met du temps à charger.',
    ],
    faq: [
      {
        q: 'Comment se passe le changement de site, sans coupure ?',
        a: 'Je prépare le nouveau site à côté de l’ancien, que vous continuez d’utiliser. Une fois tout validé, je bascule le nom de domaine et les redirections en une seule fois, et vos clients ne voient aucune coupure.',
      },
      {
        q: 'Puis-je garder mon nom de domaine ?',
        a: 'Oui. Je le transfère si besoin, et votre adresse reste la même pour vos clients comme pour Google.',
      },
      {
        q: 'Que deviennent mes abonnements Wix ou Shopify ?',
        a: 'Vous pouvez les résilier une fois le nouveau site en ligne et les anciennes adresses redirigées. Pour l’hébergement et les mises à jour du nouveau site, je propose un suivi à partir de 39 € HT par mois.',
      },
    ],
  },
  {
    id: 'outils-sur-mesure',
    title: 'Outils sur mesure',
    short: 'Un espace client, un outil de réservation ou un tableau de bord qui suit votre façon de travailler.',
    long: 'Vous jonglez entre plusieurs fichiers Excel, ou vous saisissez les mêmes informations à plusieurs endroits ? Je peux développer un outil qui s’en charge, et utiliser l’IA là où elle vous fait vraiment gagner du temps.',
    includes: [
      'Un espace d’administration pour modifier votre site vous-même',
      'La prise de rendez-vous, un espace client, des formulaires utiles',
      'Des tableaux de bord qui remplacent vos tableurs',
      'L’automatisation des tâches répétitives, avec l’IA quand elle a du sens',
    ],
    price: 'Sur devis',
    prices: [
      { label: 'Outil ou application sur mesure', value: 'sur devis' },
    ],
    project: 'memoryline',
    h1: ['Outils et applications', 'sur mesure'],
    seoTitle: 'Logiciel et outils sur mesure à Mulhouse | Agence web',
    seoDescription: 'Espace client, prise de rendez-vous, tableau de bord, automatisation : un outil sur mesure qui remplace vos tableurs et vos ressaisies. Sur devis, à Mulhouse.',
    linkText: 'Tout sur les outils sur mesure',
    forWho: [
      'Vous gérez votre activité avec plusieurs fichiers Excel qui ne se parlent pas.',
      'Vous ressaisissez les mêmes informations dans plusieurs logiciels.',
      'Vos clients aimeraient réserver, suivre une commande ou retrouver leurs documents en ligne.',
    ],
    faq: [
      {
        q: 'À quoi peut servir un outil sur mesure ?',
        a: 'À ce qui vous fait perdre du temps aujourd’hui. Par exemple un planning partagé, la prise de rendez-vous en ligne, un espace où vos clients retrouvent leurs documents, un tableau de bord à la place de vos tableurs, ou l’envoi automatique des devis et des relances.',
      },
      {
        q: 'Utilisez-vous l’intelligence artificielle ?',
        a: 'Oui, quand elle vous fait vraiment gagner du temps, pour trier des demandes, résumer des documents ou préremplir des fiches. Si une solution plus simple suffit, je vous la propose.',
      },
      {
        q: 'Combien coûte un outil sur mesure ?',
        a: 'Le prix dépend de ce que l’outil doit faire. On commence par l’audit gratuit de vos outils actuels, puis je vous envoie un devis détaillé.',
      },
    ],
  },
]

export const maintenance = {
  title: 'Après la mise en ligne',
  text: 'Je reste là ensuite pour l’hébergement, les mises à jour et les petites modifications. Si quelque chose ne va pas, vous savez qui appeler.',
  price: 'À partir de 39 € HT par mois.',
  minPrice: 39,
  prices: [
    { label: 'Hébergement et mises à jour', value: '39 € / mois' },
    { label: 'Avec 1 h de modifications chaque mois', value: '79 € / mois' },
    { label: 'Petites modifications ponctuelles', value: '50 € / heure' },
  ] as Price[],
}

export const steps = [
  { t: 'On se rencontre', d: 'Une demi-heure pour parler de votre activité et de ce que vous attendez, en rendez-vous ou en visio.' },
  { t: 'Je vous envoie une proposition', d: 'Elle détaille ce que je vais faire, le délai et le prix. Si quelque chose ne vous convient pas, on en parle.' },
  { t: 'Je construis le site', d: 'Je vous montre l’avancement au fur et à mesure. Vous me dites ce qui vous plaît ou non, et j’ajuste.' },
  { t: 'Mise en ligne', d: 'Je mets le site en ligne et je vous montre comment vous en servir. Ensuite, je reste joignable.' },
]

export interface Faq { q: string, a: string }

export const faq: Faq[] = [
  {
    q: 'Combien coûte un site internet ?',
    a: 'Un site d’une page coûte à partir de 990 € HT, un site vitrine de 5 à 7 pages à partir de 1 990 € HT et une boutique en ligne sur mesure à partir de 5 900 € HT. Le prix exact dépend de votre projet. Après un premier échange, je vous envoie une proposition détaillée pour que vous sachiez ce que vous payez, et pourquoi.',
  },
  {
    q: 'Votre audit est-il vraiment gratuit ?',
    a: 'Oui, et sans engagement. Que vous ayez un site, un logiciel ou pas encore de site, on fait le point et on vous remet un compte rendu clair avec les priorités.',
  },
  {
    q: 'Combien de temps faut-il pour créer mon site ?',
    a: 'Cela dépend de la taille du projet et du temps qu’il faut pour réunir vos textes et vos photos. On fixe le planning ensemble dans le devis, et vous suivez l’avancement à chaque étape.',
  },
  {
    q: 'Pourrai-je modifier mon site moi-même ?',
    a: 'Oui. Je peux ajouter un espace d’administration simple pour changer vos textes, vos photos, vos prix ou vos horaires sans connaissances techniques. C’est une option à 490 € HT.',
  },
  {
    q: 'Mon site sera-t-il bien référencé sur Google ?',
    a: 'Je m’en occupe dès la conception, avec un site rapide et adapté au téléphone, des textes et des titres travaillés et des informations structurées pour Google. Pour une refonte, je redirige les anciennes adresses pour que vous gardiez vos positions.',
  },
  {
    q: 'Si je refais mon site, est-ce que je vais perdre mes données ?',
    a: 'Non. Je récupère vos textes, vos photos et vos produits, et je redirige les adresses de votre site actuel vers les nouvelles pages pour que vous gardiez votre place sur Google. C’est aussi valable si vous êtes sur Wix ou Shopify.',
  },
  {
    q: 'Et une fois le site en ligne ?',
    a: 'Je reste votre interlocutrice pour l’hébergement, les mises à jour, les petites évolutions et les corrections, à partir de 39 € HT par mois. Si quelque chose ne va pas, vous avez quelqu’un à appeler.',
  },
]

/** Audit gratuit : page /audit-gratuit et encart de l'accueil (textes à la 1re personne du pluriel, « on »). */
export const audit = {
  cases: [
    { t: 'Vous avez un site', d: 'On regarde sa vitesse, son affichage sur téléphone, son référencement et tout ce qui peut freiner vos clients avant qu’ils vous contactent.' },
    { t: 'Vous utilisez un logiciel ou des outils', d: 'Logiciel métier, fichiers Excel ou boutique en ligne, on regarde comment vous travaillez et où vous perdez du temps.' },
    { t: 'Vous n’avez pas encore de site', d: 'On fait le point sur la façon dont vos clients vous trouvent aujourd’hui, sur ce que font vos concurrents et sur ce dont vous avez besoin pour démarrer.' },
  ],
  checks: [
    'Votre visibilité sur Google, les recherches où vous apparaissez et à quelle place',
    'La vitesse de chargement et l’affichage sur téléphone',
    'Les titres et les textes, et si Google comprend ce que vous faites',
    'Votre fiche Google, avec vos horaires, vos photos et vos avis',
    'Les erreurs techniques qui freinent votre référencement',
    'La facilité, pour vos clients, de vous contacter, de commander ou de demander un devis',
  ],
  gets: [
    'Un compte rendu clair, sans termes techniques',
    'Vos priorités, de la plus importante à la moins urgente',
    'Ce que vous pouvez faire vous-même tout de suite',
    'Aucun engagement de votre part',
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
