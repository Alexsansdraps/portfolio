<script setup lang="ts">
import { business, services, zone } from '~/data/site'
import portrait from '~/assets/img/portrait.webp'

const { public: { siteUrl } } = useRuntimeConfig()

useHead({
  titleTemplate: t => t || 'Alexandra Porhansl — Agence web freelance en Alsace',
})

/* Données structurées globales : l'agence (entreprise locale), sa fondatrice, le site. */
useJsonLd({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#agence`,
      'name': 'Alexandra Porhansl — Agence web',
      'alternateName': 'Alexandra Porhansl',
      'description': 'Agence web freelance à Mulhouse : création de sites vitrines, boutiques en ligne, refontes et outils sur mesure pour les entreprises d’Alsace.',
      'url': `${siteUrl}/`,
      'email': business.email,
      'image': `${siteUrl}/og/og.jpg`,
      'logo': `${siteUrl}/icon-512.png`,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': business.city,
        'postalCode': business.postalCode,
        'addressRegion': 'Grand Est',
        'addressCountry': 'FR',
      },
      'geo': { '@type': 'GeoCoordinates', 'latitude': 47.7508, 'longitude': 7.3359 },
      'areaServed': [
        { '@type': 'AdministrativeArea', 'name': 'Alsace' },
        { '@type': 'AdministrativeArea', 'name': 'Haut-Rhin' },
        { '@type': 'AdministrativeArea', 'name': 'Bas-Rhin' },
        { '@type': 'City', 'name': zone.home.name },
        ...zone.cities.map(c => ({ '@type': 'City', 'name': c.name })),
      ],
      'founder': { '@id': `${siteUrl}/#alexandra` },
      'knowsLanguage': 'fr',
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Création de sites internet',
        'itemListElement': services.map(s => ({
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': s.title,
            'description': s.short,
            'url': `${siteUrl}/services#${s.id}`,
          },
        })),
      },
      'sameAs': [business.github],
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#alexandra`,
      'name': 'Alexandra Porhansl',
      'jobTitle': 'Développeuse web, fondatrice de l’agence',
      'image': `${siteUrl}${portrait}`,
      'url': `${siteUrl}/parcours`,
      'worksFor': { '@id': `${siteUrl}/#agence` },
      'homeLocation': { '@type': 'City', 'name': business.city },
      'knowsLanguage': ['fr', 'en', 'de'],
      'sameAs': [business.github],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#site`,
      'url': `${siteUrl}/`,
      'name': 'Alexandra Porhansl — Agence web en Alsace',
      'inLanguage': 'fr-FR',
      'publisher': { '@id': `${siteUrl}/#agence` },
    },
  ],
})
</script>

<template>
  <div>
    <a class="skip" href="#contenu">Aller au contenu</a>
    <NuxtRouteAnnouncer />
    <SiteHeader />
    <div id="contenu">
      <NuxtPage />
    </div>
    <SiteFooter />
    <MusicLink />
  </div>
</template>
