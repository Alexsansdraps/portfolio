import lachanceDesktop from '~/assets/img/realisations/lachance-desktop.webp'
import lachanceMobile from '~/assets/img/realisations/lachance-mobile.webp'
import lachanceFormules from '~/assets/img/realisations/lachance-formules.webp'
import memorylineDesktop from '~/assets/img/realisations/memoryline-desktop.webp'
import memorylineMobile from '~/assets/img/realisations/memoryline-mobile.webp'
import memorylineCatalogue from '~/assets/img/realisations/memoryline-catalogue.webp'
import lachanceproductionDesktop from '~/assets/img/realisations/lachanceproduction-desktop.webp'
import lachanceproductionMobile from '~/assets/img/realisations/lachanceproduction-mobile.webp'
import lachanceproductionIris from '~/assets/img/realisations/lachanceproduction-iris.webp'

/** theme : couleur de la barre d'état du téléphone (captures mobiles), selon le haut du site */
export interface Shot { src: string, alt: string, w: number, h: number, theme?: 'light' | 'dark' }

export interface Project {
  slug: string
  name: string
  /** ville + département */
  place: string
  sector: string
  /** type de prestation, lien avec les services */
  kind: string
  /** id du service correspondant (lien vers /services/{id}) */
  service: string
  year: number
  /** « En ligne », ou état de la mise en ligne */
  status: string
  live: boolean
  /** domaine du client, affiché dans la barre d'adresse des captures */
  domain: string
  /** null tant que le nouveau site n'est pas sur le domaine du client */
  url: string | null
  hook: string
  summary: string
  context: string
  goals: string[]
  done: string[]
  /** chiffres clés : v = valeur, k = libellé */
  figures: { v: string, k: string }[]
  cover: Shot
  mobile: Shot
  extra: Shot
  /** couleur dominante du site client, pour l'habillage de la carte */
  tint: string
}

export const projects: Project[] = [
  {
    slug: 'la-chance-animation',
    name: 'La Chance Animation',
    place: 'Guebwiller, au pied des Vosges',
    sector: 'Animation casino en Alsace',
    kind: 'Refonte de site vitrine',
    service: 'refonte',
    year: 2026,
    status: 'En ligne',
    live: true,
    domain: 'lachanceanimation.com',
    url: 'https://www.lachanceanimation.com',
    hook: 'Un site qui donne envie de réserver, et que le gérant met à jour lui-même.',
    summary: 'Refonte complète du site d’une entreprise d’animation casino : nouveau design, pages par type d’événement, formulaire de devis et espace d’administration.',
    context: 'La Chance Animation fait venir le casino dans les mariages, les soirées d’entreprise et les anniversaires partout en Alsace : roulette, blackjack, poker, croupiers en tenue. Leur ancien site ne rendait justice ni à l’ambiance de leurs soirées, ni au sérieux de leur travail : je l’ai entièrement refait, en reprenant leurs contenus.',
    goals: [
      'Donner envie de réserver dès la première photo',
      'Recevoir des demandes de devis plus complètes',
      'Permettre au gérant de modifier son site sans passer par moi',
      'Ne rien perdre du référencement de l’ancien site',
    ],
    done: [
      'Un nouveau design sombre et doré, fidèle à l’ambiance casino, construit autour de leurs propres photos de soirées.',
      'Des pages dédiées aux mariages, aux soirées d’entreprise et aux anniversaires, pour parler à chaque client de son événement.',
      'Un formulaire de devis (type d’événement, formule envisagée, coordonnées) qui arrive directement dans la boîte mail du gérant, protégé contre les robots.',
      'Un espace d’administration simple : le gérant modifie lui-même ses formules et ses prix, ses avis clients, sa FAQ, son équipe, ses photos et ses horaires.',
      'Toutes les anciennes adresses du site redirigées vers les nouvelles pages, pour garder les positions acquises sur Google.',
      'Un site très rapide, avec des photos optimisées automatiquement pour s’afficher vite, même sur téléphone.',
    ],
    figures: [
      { v: '100 %', k: 'des anciennes adresses reprises' },
      { v: '3', k: 'pages par type d’événement' },
      { v: '6', k: 'types de contenus que le gérant modifie seul' },
    ],
    cover: { src: lachanceDesktop, alt: 'Page d’accueil du site La Chance Animation : « Le casino s’invite à votre soirée », photo d’une table de blackjack', w: 1440, h: 900 },
    mobile: { src: lachanceMobile, alt: 'Le site La Chance Animation sur téléphone', w: 600, h: 1200, theme: 'dark' },
    extra: { src: lachanceFormules, alt: 'Page Formules et tarifs du site La Chance Animation', w: 1440, h: 900 },
    tint: '#1a1210',
  },
  {
    slug: 'memoryline',
    name: 'MemoryLine',
    place: '',
    sector: 'Affiches personnalisées de villes et de paysages',
    kind: 'Boutique en ligne sur mesure',
    service: 'boutique-en-ligne',
    year: 2026,
    status: 'En cours de développement',
    live: false,
    domain: 'memoryline.fr',
    url: null,
    hook: 'Une boutique sur mesure où chaque client compose son affiche, sur le site comme au stand des salons.',
    summary: 'Remplacement d’une boutique Shopify par une boutique sur mesure : configurateur d’affiche, paiement intégré, ventes sur les salons et espace d’administration complet.',
    context: 'MemoryLine crée des affiches illustrées de villes et de paysages, que chaque client personnalise avec ses textes et ses personnages. La boutique tournait sur Shopify avec un module de personnalisation ajouté à part : difficile à faire évoluer, et les ventes des salons se mélangeaient à celles du site.',
    goals: [
      'Un configurateur simple, sur ordinateur comme sur téléphone',
      'Vendre aussi sur les salons, depuis une tablette',
      'Séparer les ventes du site et celles des salons',
      'Tout gérer depuis un seul espace d’administration',
    ],
    done: [
      'Un configurateur d’affiche en trois étapes : fond et textes, personnages (vêtements, coiffures, accessoires, couleurs), puis format. L’aperçu se met à jour en direct.',
      'Le fichier d’impression haute définition est préparé automatiquement à chaque commande, au nom du client.',
      'Le paiement par carte bancaire et PayPal directement sur le site, avec le panier, les promotions (3 affiches achetées, 1 offerte) et le choix de la livraison.',
      'Un mode « stand » sur tablette pour les salons : le visiteur compose son affiche sur place, et la vente est comptée à part.',
      'Un espace d’administration complet : catalogue, personnages, commandes, livraisons, factures et promotions.',
      'Un site en cinq langues, et toutes les anciennes adresses Shopify reprises pour ne pas perdre le référencement.',
    ],
    figures: [
      { v: '200+', k: 'affiches personnalisables' },
      { v: '5', k: 'langues' },
      { v: '2', k: 'canaux de vente : site et salons' },
    ],
    cover: { src: memorylineDesktop, alt: 'Configurateur d’affiche MemoryLine : aperçu de l’affiche « Mulhouse, Tour du Bollwerk » et choix des textes', w: 1440, h: 900 },
    mobile: { src: memorylineMobile, alt: 'Le configurateur MemoryLine sur téléphone', w: 600, h: 1200, theme: 'light' },
    extra: { src: memorylineCatalogue, alt: 'Catalogue MemoryLine : affiches illustrées de Riquewihr', w: 1440, h: 900 },
    tint: '#1d3a8a',
  },
  {
    slug: 'la-chance-production',
    name: 'La Chance Production',
    place: 'Guebwiller, Haut-Rhin',
    sector: 'Photographe et vidéaste en Alsace',
    kind: 'Refonte de site avec espace client',
    service: 'refonte',
    year: 2026,
    status: 'En cours de développement',
    live: false,
    domain: 'lachanceproduction.com',
    url: null,
    hook: 'Un site qui met le grand jour en avant, avec un espace où chaque client retrouve ses photos.',
    summary: 'Refonte du site d’un photographe et vidéaste de Guebwiller : nouveau design, une page par prestation, espace de gestion et espace client avec galeries privées.',
    context: 'La Chance Production, c’est un studio photo et vidéo à Guebwiller : le reportage de mariage avant tout, mais aussi les séances en studio, les photos d’iris, la location de photobooth et la numérisation de vieux films et cassettes. Le site devait mettre le mariage au premier plan, laisser le photographe gérer ses contenus seul et offrir à ses clients un endroit où retrouver leurs photos. Je le refais entièrement, en reprenant ses contenus et ses photos.',
    goals: [
      'Mettre le reportage de mariage au premier plan, sans oublier les autres prestations',
      'Permettre au photographe de modifier ses textes, ses tarifs et ses photos sans passer par moi',
      'Remettre les photos aux clients dans un espace privé',
      'Bientôt : réserver le photobooth ou une séance photo d’iris en ligne, avec un acompte payé par carte',
    ],
    done: [
      'Un nouveau design lumineux aux couleurs du logo, construit autour de ses propres photos et vidéos.',
      'Une page par prestation (mariage, photo d’iris, studio, photobooth, numérisation), pour que chacun trouve vite ce qu’il cherche, sur Google comme sur le site.',
      'Un formulaire de réservation adapté à chaque prestation : devis, rendez-vous ou location. Les demandes arrivent dans l’espace de gestion, où le photographe les suit.',
      'Un espace de gestion simple : le photographe modifie lui-même tous les textes, les tarifs, les photos, les avis clients et les vidéos.',
      'Un espace client : chacun a son compte et y retrouve ses galeries privées, avec ou sans téléchargement des photos.',
    ],
    // pas de chiffres clés pour ce projet (à sa demande, 12/11/2026 : ça faisait « cahier des charges »)
    figures: [],
    cover: { src: lachanceproductionDesktop, alt: 'Page d’accueil du site La Chance Production : « Votre grand jour en photos & vidéos », sur une photo de mariage en plein air', w: 1440, h: 900 },
    mobile: { src: lachanceproductionMobile, alt: 'Le site La Chance Production sur téléphone', w: 600, h: 1200, theme: 'light' },
    extra: { src: lachanceproductionIris, alt: 'Page Photo d’iris du site La Chance Production : « Transformez une partie de vous en œuvre d’art »', w: 1440, h: 900 },
    tint: '#278274',
  },
]

export const findProject = (slug: string) => projects.find(p => p.slug === slug)
