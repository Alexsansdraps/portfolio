/**
 * Site bilingue : le français reste la langue par défaut, sans préfixe (/services, /realisations…),
 * l'anglais vit sous /en avec ses propres adresses (/en/services, /en/projects…).
 * Les routes anglaises sont ajoutées dans nuxt.config.ts (hook pages:extend) et pointent vers les mêmes pages :
 * chaque page lit la langue dans l'adresse et affiche ses textes avec tr('français', 'English').
 * Dans le code, les liens s'écrivent avec l'adresse française : chemin('/realisations') donne la bonne adresse.
 */
export type Langue = 'fr' | 'en'

/** Adresse française → adresse anglaise, pour les pages fixes. */
const PAGES_EN: Record<string, string> = {
  '/': '/en',
  '/services': '/en/services',
  '/realisations': '/en/projects',
  '/parcours': '/en/about',
  '/contact': '/en/contact',
  '/contact/merci': '/en/contact/thank-you',
  '/mentions-legales': '/en/legal-notice',
}

/** id (français) d'un service → son adresse anglaise /en/services/{…}. */
export const SERVICES_EN: Record<string, string> = {
  'site-vitrine': 'website',
  'boutique-en-ligne': 'online-shop',
  'referencement': 'seo',
  'presence-en-ligne': 'online-presence',
  'refonte': 'redesign',
  'outils-sur-mesure': 'custom-software',
}

const inverse = (o: Record<string, string>) => Object.fromEntries(Object.entries(o).map(([k, v]) => [v, k]))
const PAGES_FR = inverse(PAGES_EN)
const SERVICES_FR = inverse(SERVICES_EN)

/** Adresse anglaise d'un service → son id français (undefined si inconnue). */
export const idServiceDepuisEn = (slug: string) => SERVICES_FR[slug]

export const langueDuChemin = (path: string): Langue => (path === '/en' || path.startsWith('/en/') ? 'en' : 'fr')

/** Adresse française (éventuellement avec #ancre) → adresse dans la langue demandée. */
export function cheminEn(cheminFr: string, langue: Langue): string {
  if (langue === 'fr') return cheminFr
  const [base = '/', ancre] = cheminFr.split('#')
  let out = PAGES_EN[base]
  if (!out) {
    const m = base.match(/^\/(services|realisations)\/([^/]+)$/)
    if (m?.[1] === 'services') out = `/en/services/${SERVICES_EN[m[2]!] ?? m[2]}`
    else if (m) out = `/en/projects/${m[2]}`
    else out = `/en${base}`
  }
  return ancre ? `${out}#${ancre}` : out
}

/** Adresse dans n'importe quelle langue → adresse française équivalente. */
export function cheminFr(path: string): string {
  const base = path.replace(/\/$/, '') || '/'
  if (langueDuChemin(base) === 'fr') return base
  if (PAGES_FR[base]) return PAGES_FR[base]
  const m = base.match(/^\/en\/(services|projects)\/([^/]+)$/)
  if (m?.[1] === 'services') return `/services/${SERVICES_FR[m[2]!] ?? m[2]}`
  if (m) return `/realisations/${m[2]}`
  return base.replace(/^\/en/, '') || '/'
}

/** La langue de la page en cours, et de quoi écrire ses textes et ses liens. */
export function useLangue() {
  const route = useRoute()
  const langue = computed<Langue>(() => langueDuChemin(route.path))
  const en = computed(() => langue.value === 'en')
  /** texte selon la langue : tr('Bonjour', 'Hello') */
  const tr = <T = string>(fr: T, anglais: T): T => (langue.value === 'en' ? anglais : fr)
  /** lien interne : on donne l'adresse française, on obtient celle de la langue de la page */
  const chemin = (p: string) => cheminEn(p, langue.value)
  /** la même page dans l'autre langue (sélecteur FR / EN) */
  const cheminAutreLangue = computed(() => {
    const fr = cheminFr(route.path)
    return langue.value === 'en' ? fr : cheminEn(fr, 'en')
  })
  return { langue, en, tr, chemin, cheminAutreLangue }
}
