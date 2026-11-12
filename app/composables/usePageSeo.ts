interface PageSeo {
  /** titre complet de l'onglet / du résultat Google (≈ 60 caractères max) */
  title: string
  /** ≈ 150–160 caractères */
  description: string
  /** chemin de la page, ex. « /services » */
  path: string
  /** image de partage : chemin ou URL absolue (défaut : /og/og.jpg) */
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  noindex?: boolean
  type?: 'website' | 'article'
}

/** Balises SEO d'une page : title, description, canonical, Open Graph, Twitter. */
export function usePageSeo(o: PageSeo) {
  const { public: { siteUrl } } = useRuntimeConfig()
  const url = absoluteUrl(o.path)
  const image = o.image ? absoluteUrl(o.image) : `${siteUrl}/og/og.jpg`
  const custom = !!o.image

  useSeoMeta({
    title: o.title,
    description: o.description,
    robots: o.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    ogTitle: o.title,
    ogDescription: o.description,
    ogUrl: url,
    ogType: o.type ?? 'website',
    ogSiteName: 'Alexandra Porhansl — Agence web en Alsace',
    ogLocale: 'fr_FR',
    ogImage: image,
    ogImageWidth: custom ? o.imageWidth : 1200,
    ogImageHeight: custom ? o.imageHeight : 630,
    ogImageAlt: o.imageAlt ?? 'Alexandra Porhansl, agence web freelance en Alsace',
    twitterCard: 'summary_large_image',
    twitterTitle: o.title,
    twitterDescription: o.description,
    twitterImage: image,
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
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

/** Fil d'Ariane schema.org à partir de [nom, chemin]. */
export function breadcrumb(items: [string, string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map(([name, path], i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': name,
      'item': absoluteUrl(path),
    })),
  }
}
