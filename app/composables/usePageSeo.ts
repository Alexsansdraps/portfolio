interface PageSeo {
  /** titre complet de l'onglet / du résultat Google (≈ 60 caractères max) */
  title: string
  /** ≈ 150–160 caractères */
  description: string
  /** chemin FRANÇAIS de la page, ex. « /services » : l'adresse anglaise (/en/…) s'en déduit */
  path: string
  /** image de partage : chemin ou URL absolue (défaut : /og/og.jpg, ou /og/og-en.jpg en anglais) */
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  noindex?: boolean
  type?: 'website' | 'article'
}

/**
 * Balises SEO d'une page : title, description, canonical, Open Graph, Twitter,
 * et les liens hreflang vers la même page dans l'autre langue (Google, et la détection de langue de app.vue).
 */
export function usePageSeo(o: PageSeo) {
  const { public: { siteUrl } } = useRuntimeConfig()
  const { langue, tr } = useLangue()
  const url = absoluteUrl(cheminEn(o.path, langue.value))
  const image = o.image ? absoluteUrl(o.image) : `${siteUrl}/og/${tr('og.jpg', 'og-en.jpg')}`
  const custom = !!o.image

  useSeoMeta({
    title: o.title,
    description: o.description,
    robots: o.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    ogTitle: o.title,
    ogDescription: o.description,
    ogUrl: url,
    ogType: o.type ?? 'website',
    ogSiteName: tr('Alexandra Porhansl, développeuse web freelance', 'Alexandra Porhansl, freelance web developer'),
    ogLocale: tr('fr_FR', 'en_GB'),
    ogLocaleAlternate: tr('en_GB', 'fr_FR'),
    ogImage: image,
    ogImageWidth: custom ? o.imageWidth : 1200,
    ogImageHeight: custom ? o.imageHeight : 630,
    ogImageAlt: o.imageAlt ?? tr('Alexandra Porhansl, développeuse web freelance à Mulhouse', 'Alexandra Porhansl, freelance web developer in Mulhouse'),
    twitterCard: 'summary_large_image',
    twitterTitle: o.title,
    twitterDescription: o.description,
    twitterImage: image,
  })

  useHead({
    link: [
      { rel: 'canonical', href: url },
      { rel: 'alternate', hreflang: 'fr', href: absoluteUrl(o.path) },
      { rel: 'alternate', hreflang: 'en', href: absoluteUrl(cheminEn(o.path, 'en')) },
      { rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(o.path) },
    ],
  })
}

/** Données structurées schema.org (JSON-LD). */
export function useJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  useHead({
    script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(data) }],
  })
}

/** « /services » ou une URL d'asset → URL absolue sur le domaine canonique. */
export function absoluteUrl(path: string) {
  const { public: { siteUrl } } = useRuntimeConfig()
  return /^https?:\/\//.test(path) ? path : `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

/** Fil d'Ariane schema.org à partir de [nom, chemin français] : les adresses suivent la langue de la page. */
export function breadcrumb(items: [string, string][]) {
  const { chemin } = useLangue()
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map(([name, path], i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': name,
      'item': absoluteUrl(chemin(path)),
    })),
  }
}
