<script setup lang="ts">
import { business, maintenance, services, zone } from '~/data/site'
import portrait from '~/assets/img/portrait.webp'

const { public: { siteUrl } } = useRuntimeConfig()

useHead({
  titleTemplate: t => t || 'Alexandra Porhansl — Agence web freelance en Alsace',
})

/* Prix plancher HT d'une offre (grille de site.ts). */
const fromPrice = (min?: number, unitText?: string) => min === undefined
  ? {}
  : {
      priceSpecification: {
        '@type': unitText ? 'UnitPriceSpecification' : 'PriceSpecification',
        'minPrice': min,
        'priceCurrency': 'EUR',
        'valueAddedTaxIncluded': false,
        ...(unitText ? { unitText } : {}),
      },
    }

/* Données structurées globales : l'agence (entreprise locale), sa fondatrice, le site. */
useJsonLd({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#agence`,
      'name': 'Alexandra Porhansl — Agence web',
      'alternateName': 'Alexandra Porhansl',
      'description': 'Agence web freelance basée à Mulhouse, en Alsace : création de sites internet, sites vitrines, boutiques en ligne, référencement (SEO), refontes et logiciels métier sur mesure. Audit gratuit.',
      'slogan': 'Création de sites internet à Mulhouse',
      'priceRange': '€€',
      'currenciesAccepted': 'EUR',
      'knowsAbout': ['Création de site internet', 'Site vitrine', 'Boutique en ligne', 'Référencement naturel (SEO)', 'Refonte de site internet', 'Développement web sur mesure', 'Google Business Profile'],
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
        { '@type': 'Country', 'name': 'France' },
        { '@type': 'City', 'name': zone.home.name },
        ...zone.cities.map(c => ({ '@type': 'City', 'name': c.name })),
      ],
      'founder': { '@id': `${siteUrl}/#alexandra` },
      'knowsLanguage': 'fr',
      'legalName': 'Alexandra Porhansl',
      'foundingDate': business.legal.founded,
      'vatID': business.legal.vat,
      'identifier': { '@type': 'PropertyValue', 'propertyID': 'SIRET', 'value': business.legal.siret.replaceAll(' ', '') },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Création de sites internet',
        'itemListElement': [
          {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'EUR',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Audit gratuit de site web et de référencement',
              'url': `${siteUrl}/audit-gratuit`,
            },
          },
          ...services.map(s => ({
            '@type': 'Offer',
            ...fromPrice(s.minPrice),
            'itemOffered': {
              '@type': 'Service',
              'name': s.title,
              'description': s.short,
              'url': `${siteUrl}/services/${s.id}`,
            },
          })),
          {
            '@type': 'Offer',
            ...fromPrice(maintenance.minPrice, 'mois'),
            'itemOffered': {
              '@type': 'Service',
              'name': 'Suivi et maintenance de site',
              'description': maintenance.text,
              'url': `${siteUrl}/services#maintenance`,
            },
          },
        ],
      },
      'sameAs': [business.github],
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#alexandra`,
      'name': 'Alexandra Porhansl',
      'jobTitle': 'Développeuse web, fondatrice de l’agence',
      'description': 'Développeuse web depuis 2019, fondatrice d’une agence web freelance à Mulhouse : sites internet, boutiques en ligne et référencement.',
      'knowsAbout': ['Développement web', 'Référencement naturel (SEO)', 'E-commerce', 'UI/UX', 'Vue.js', 'Nuxt', 'TypeScript', 'Symfony', 'PostgreSQL'],
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
      // nom court : c'est celui que Google affiche au-dessus du résultat
      'name': 'Alexandra Porhansl',
      'alternateName': ['Alexandra Porhansl, agence web', 'alexandraporhansl.com'],
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
