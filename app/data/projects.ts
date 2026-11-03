import lachanceDesktop from '~/assets/img/realisations/lachance-desktop.webp'
import lachanceMobile from '~/assets/img/realisations/lachance-mobile.webp'
import lachanceFormules from '~/assets/img/realisations/lachance-formules.webp'
import memorylineDesktop from '~/assets/img/realisations/memoryline-desktop.webp'
import memorylineMobile from '~/assets/img/realisations/memoryline-mobile.webp'
import memorylineCatalogue from '~/assets/img/realisations/memoryline-catalogue.webp'

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
    year: 2026,
    status: 'En ligne',
    live: true,
    domain: 'lachanceanimation.com',
    url: 'https://www.lachanceanimation.com',
    hook: 'Un site qui donne envie de réserver, et que le gérant met à jour lui-même.',
    summary: 'Refonte complète du site Wix d’une entreprise d’animation casino : nouveau design, pages par type d’événement, formulaire de devis et espace d’administration.',
    context: 'La Chance Animation fait venir le casino dans les mariages, les soirées d’entreprise et les anniversaires partout en Alsace : roulette, blackjack, poker, croupiers en tenue. Leur ancien site Wix ne rendait justice ni à l’ambiance de leurs soirées, ni au sérieux de leur travail, et il coûtait un abonnement chaque mois.',
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
      'Un site très rapide, avec des photos optimisées automatiquement, et plus aucun abonnement Wix à payer pour l’hébergement.',
    ],
    figures: [
      { v: '0 €', k: 'd’abonnement Wix' },
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
      { v: '202', k: 'affiches personnalisables' },
      { v: '5', k: 'langues' },
      { v: '2', k: 'canaux de vente : site et salons' },
    ],
    cover: { src: memorylineDesktop, alt: 'Configurateur d’affiche MemoryLine : aperçu de l’affiche « Mulhouse, Tour du Bollwerk » et choix des textes', w: 1440, h: 900 },
    mobile: { src: memorylineMobile, alt: 'Le configurateur MemoryLine sur téléphone', w: 600, h: 1200, theme: 'light' },
    extra: { src: memorylineCatalogue, alt: 'Catalogue MemoryLine : affiches illustrées de Riquewihr', w: 1440, h: 900 },
    tint: '#1d3a8a',
  },
]

export const findProject = (slug: string) => projects.find(p => p.slug === slug)
