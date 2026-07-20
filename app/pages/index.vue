<script setup lang="ts">
const { t, locale } = useI18n()
const { public: { siteUrl } } = useRuntimeConfig()
const route = useRoute()

const ogImage = computed(() => `${siteUrl}/og/og-${locale.value}.jpg`)
const pageUrl = computed(() => `${siteUrl}${route.path === '/' ? '' : route.path}`)
const ogLocales: Record<string, string> = { fr: 'fr_FR', en: 'en_GB', de: 'de_DE' }

useSeoMeta({
  title: () => t('meta.title'),
  description: () => t('meta.description'),
  ogTitle: () => t('meta.title'),
  ogDescription: () => t('meta.description'),
  ogImage: () => ogImage.value,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: () => t('hero.portraitAlt'),
  ogUrl: () => pageUrl.value,
  ogType: 'website',
  ogSiteName: 'Alexandra Porhansl',
  ogLocale: () => ogLocales[locale.value],
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('meta.title'),
  twitterDescription: () => t('meta.description'),
  twitterImage: () => ogImage.value,
})

/* Données structurées — profil Person pour Google */
useHead(() => ({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': 'Alexandra Porhansl',
        'jobTitle': t('hero.role'),
        'description': t('meta.description'),
        'email': 'mailto:a.porhansl@icloud.com',
        'image': `${siteUrl}/og/og-fr.jpg`,
        'url': siteUrl,
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Mulhouse',
          'addressRegion': 'Grand Est',
          'addressCountry': 'FR',
        },
        'knowsLanguage': ['fr', 'en', 'de'],
        'knowsAbout': [
          'Vue.js', 'Nuxt', 'TypeScript', 'Symfony', 'PHP', 'Nest.js',
          'Swift', 'Ionic', 'MySQL', 'SQL', 'Docker', 'CI/CD', 'Claude Code',
        ],
      }),
    },
  ],
}))
</script>

<template>
  <main>
    <HeroSection />
    <ValueSection />
    <StackSection />
    <ExperienceTimeline />
    <MobilityMap />
    <LanguagesSection />
    <ContactCta />
  </main>
</template>
