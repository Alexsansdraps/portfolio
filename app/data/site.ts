/**
 * Infos de l'activité et contenus partagés entre plusieurs pages.
 * Le site est en français uniquement : les textes vivent ici ou directement dans les pages.
 * Côté clients (accueil, services, réalisations) : vocabulaire simple, pas de jargon technique.
 */

export const business = {
  name: 'Alexandra Porhansl',
  tagline: 'Développeuse web freelance à Mulhouse',
  email: 'a.porhansl@icloud.com',
  city: 'Mulhouse',
  postalCode: '68100',
  department: 'Haut-Rhin',
  region: 'Alsace',
  github: 'https://github.com/Alexsansdraps',
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
  /** une phrase courte, sur les cartes de l’accueil */
  short: string
  /** icône de la carte (intérieur d’un SVG 24 × 24, trait) */
  icon: string
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
    short: 'Présentez votre activité et recevez les demandes de vos clients.',
    icon: '<rect x="3" y="4" width="18" height="13" rx="2" /><path d="M3 8h18M8 21h8M12 17v4" />',
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
    short: 'Vendez vos produits en ligne, paiement sécurisé compris.',
    icon: '<path d="M5 8h14l-1 12H6z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" />',
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
    short: 'Soyez trouvé sur Google par les clients de votre secteur.',
    icon: '<circle cx="11" cy="11" r="6" /><path d="M20 20l-4.5-4.5" />',
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
    seoTitle: 'Référencement naturel (SEO) à Mulhouse | Freelance web',
    seoDescription: 'Être trouvé sur Google par vos clients : titres et textes travaillés, site rapide, fiche Google et suivi des résultats. Premier rendez-vous gratuit, à Mulhouse.',
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
    short: 'Site, fiche Google et réseaux sociaux, à jour et cohérents.',
    icon: '<circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" />',
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
    seoDescription: 'Réseaux sociaux, fiche Google, site internet : je m’occupe de toute votre présence en ligne et je vous conseille. Freelance à Mulhouse, sur devis.',
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
        a: 'Cela dépend de ce que vous voulez me confier. On en parle au premier rendez-vous, gratuit et sans engagement, puis je vous envoie un devis.',
      },
    ],
  },
  {
    id: 'refonte',
    title: 'Refonte de site',
    short: 'Un site qui a vieilli ? Je le refais sans perdre votre place sur Google.',
    icon: '<path d="M20 11a8 8 0 0 0-14.5-4.5L4 8" /><path d="M4 4v4h4" /><path d="M4 13a8 8 0 0 0 14.5 4.5L20 16" /><path d="M20 20v-4h-4" />',
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
    short: 'Un logiciel ou un outil construit autour de votre façon de travailler.',
    icon: '<rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><path d="M16.5 13v7M13 16.5h7" />',
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
    seoTitle: 'Logiciel métier sur mesure à Mulhouse | Freelance web',
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
        a: 'Le prix dépend de ce que l’outil doit faire. On fait d’abord le point sur vos outils actuels au premier rendez-vous, gratuit et sans engagement, puis je vous envoie un devis détaillé.',
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
    t: 'Un site fait pour vous',
    d: 'Le design part de votre activité, jamais d’un thème acheté en ligne.',
  },
  {
    t: 'Tout vous appartient',
    d: 'Le site, le nom de domaine et les contenus.',
  },
]

/**
 * Témoignages clients : uniquement des phrases réellement données par les clients, avec leur accord.
 * Tant que la liste est vide, la section n'apparaît nulle part.
 */
export interface Temoignage { quote: string, name: string, role: string, project?: string }
export const testimonials: Temoignage[] = []

export const steps = [
  { t: 'Rencontre', d: 'Une heure, gratuite et sans engagement, pour faire le point sur votre situation et vos besoins, en visio ou en vrai.' },
  { t: 'Création', d: 'Je vous envoie une proposition claire, avec le contenu, le délai et le prix, puis je construis le projet en vous montrant l’avancement.' },
  { t: 'Lancement', d: 'Je mets en ligne, je vous montre comment tout fonctionne, et je reste disponible pour la suite.' },
]

export interface Faq { q: string, a: string }

export const faq: Faq[] = [
  {
    q: 'Combien coûte un site internet ?',
    a: 'Un site d’une page démarre à 690 € HT, un site vitrine de 5 à 7 pages à 1 390 € HT et une boutique en ligne sur mesure à 4 130 € HT. Chaque projet fait l’objet d’un devis détaillé, établi après notre premier rendez-vous, qui précise le contenu, le délai et le prix.',
  },
  {
    q: 'Le paiement peut-il être échelonné ?',
    a: 'Oui. Le règlement peut se faire en plusieurs fois, selon un échéancier défini ensemble et inscrit dans le devis.',
  },
  {
    q: 'Le premier rendez-vous est-il payant ?',
    a: 'Non. Le premier rendez-vous dure une heure, il est gratuit et sans engagement. Il permet de faire le point sur votre situation et vos besoins, en visio ou en personne.',
  },
  {
    q: 'Quel est le délai de réalisation ?',
    a: 'Il dépend de l’ampleur du projet et de la disponibilité de vos contenus (textes, photos). Le planning est fixé dans le devis, et vous suivez l’avancement à chaque étape.',
  },
  {
    q: 'Pourrai-je modifier mon site moi-même ?',
    a: 'Oui. Un espace d’administration simple peut être mis en place pour modifier vos textes, vos photos, vos prix ou vos horaires, sans compétence technique.',
  },
  {
    q: 'Le référencement est-il inclus ?',
    a: 'Oui. Chaque site est conçu pour Google dès le départ : rapidité, affichage sur téléphone, titres et textes travaillés, informations structurées. Lors d’une refonte, les anciennes adresses sont redirigées afin de préserver vos positions.',
  },
  {
    q: 'Que deviennent mes contenus lors d’une refonte ?',
    a: 'Ils sont récupérés et repris : textes, photos, produits. Les anciennes adresses sont redirigées vers les nouvelles pages, y compris si votre site actuel est sur Wix ou Shopify.',
  },
  {
    q: 'Vous déplacez-vous ?',
    a: 'Oui, dans un rayon de 100 km autour de Mulhouse. Au-delà, les rendez-vous se font en visio.',
  },
  {
    q: 'Que se passe-t-il après la mise en ligne ?',
    a: 'Je reste votre interlocutrice pour l’hébergement, les mises à jour et les évolutions, à partir de 27 € HT par mois.',
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
