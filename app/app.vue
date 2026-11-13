<script setup lang="ts">
import { business, zone } from '~/data/site'
import portrait from '~/assets/img/portrait.webp'

const { public: { siteUrl } } = useRuntimeConfig()
const { langue, tr, chemin } = useLangue()
const c = useContenu()

useHead({
  htmlAttrs: { lang: langue },
  titleTemplate: t => t || tr('Alexandra Porhansl, développeuse web freelance à Mulhouse', 'Alexandra Porhansl, freelance web developer in Mulhouse'),
  script: [
    {
      /*
       * Détection de la langue, à l'arrivée sur une page française (13/11/2026) : si le navigateur ne préfère pas
       * le français (anglais, allemand…), on passe sur la même page en anglais, avant l'affichage.
       * - jamais si le visiteur a déjà choisi FR ou EN dans l'en-tête (choix retenu dans le navigateur) ;
       * - jamais pour les robots (Google doit pouvoir lire les deux versions) ;
       * - l'adresse anglaise est lue dans le <link rel="alternate" hreflang="en"> de la page (usePageSeo).
       */
      key: 'langue-auto',
      tagPosition: 'bodyOpen',
      innerHTML: `(function(){try{
if(/^\\/en(\\/|$)/.test(location.pathname))return;
try{if(localStorage.getItem('langue'))return}catch(e){}
if(/bot|crawl|spider|slurp|lighthouse|headless|preview|facebookexternalhit|whatsapp|telegram|embedly/i.test(navigator.userAgent||''))return;
var l=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||''];
if(!l[0])return;
for(var i=0;i<l.length;i++){var x=String(l[i]).toLowerCase();if(x.indexOf('fr')===0)return;if(x.indexOf('en')===0)break}
var a=document.querySelector('link[rel="alternate"][hreflang="en"]');
if(!a)return;
var u=new URL(a.getAttribute('href'),location.href);
if(u.pathname!==location.pathname)location.replace(u.pathname+location.search+location.hash);
}catch(e){}})()`,
    },
  ],
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

/* Données structurées globales : l'activité freelance (entreprise locale), Alexandra, le site — dans la langue de la page. */
useJsonLd({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#agence`,
      'name': tr('Alexandra Porhansl, développeuse web freelance', 'Alexandra Porhansl, freelance web developer'),
      'alternateName': 'Alexandra Porhansl',
      'description': tr(
        'Développeuse web freelance basée à Mulhouse, en Alsace : création de sites internet, sites vitrines, boutiques en ligne, référencement (SEO), réseaux sociaux, refontes et logiciels métier sur mesure. Premier rendez-vous gratuit et sans engagement.',
        'Freelance web developer based in Mulhouse, Alsace, France: websites, business websites, online shops, search engine optimisation (SEO), social media, redesigns and custom business software. Free first meeting with no obligation.',
      ),
      'slogan': tr('Création de sites internet à Mulhouse', 'Website design in Mulhouse'),
      'priceRange': '€€',
      'currenciesAccepted': 'EUR',
      'knowsAbout': tr(
        ['Création de site internet', 'Site vitrine', 'Boutique en ligne', 'Référencement naturel (SEO)', 'Refonte de site internet', 'Développement web sur mesure', 'Google Business Profile', 'Réseaux sociaux', 'Présence en ligne'],
        ['Website design', 'Business website', 'Online shop', 'Search engine optimisation (SEO)', 'Website redesign', 'Custom web development', 'Google Business Profile', 'Social media', 'Online presence'],
      ),
      'url': absoluteUrl(chemin('/')),
      'email': business.email,
      'image': `${siteUrl}/og/${tr('og.jpg', 'og-en.jpg')}`,
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
        ...zone.cities.map(v => ({ '@type': 'City', 'name': v.name })),
      ],
      'founder': { '@id': `${siteUrl}/#alexandra` },
      'knowsLanguage': ['fr', 'en'],
      'legalName': 'Alexandra Porhansl',
      'foundingDate': business.legal.founded,
      'vatID': business.legal.vat,
      'identifier': { '@type': 'PropertyValue', 'propertyID': 'SIRET', 'value': business.legal.siret.replaceAll(' ', '') },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': tr('Création de sites internet', 'Website design and development'),
        'itemListElement': [
          {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'EUR',
            'itemOffered': {
              '@type': 'Service',
              'name': tr('Premier rendez-vous d’une heure, gratuit et sans engagement', 'Free one-hour first meeting, with no obligation'),
              'url': absoluteUrl(chemin('/contact')),
            },
          },
          ...c.value.services.map(s => ({
            '@type': 'Offer',
            ...fromPrice(s.minPrice),
            'itemOffered': {
              '@type': 'Service',
              'name': s.title,
              'description': s.short,
              'url': absoluteUrl(chemin(`/services/${s.id}`)),
            },
          })),
          {
            '@type': 'Offer',
            ...fromPrice(c.value.maintenance.minPrice, tr('mois', 'month')),
            'itemOffered': {
              '@type': 'Service',
              'name': tr('Suivi et maintenance de site', 'Website care and maintenance'),
              'description': c.value.maintenance.text,
              'url': absoluteUrl(chemin('/services#maintenance')),
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
      'jobTitle': tr('Développeuse web freelance', 'Freelance web developer'),
      'description': tr(
        'Développeuse web depuis 2019, freelance à Mulhouse : sites internet, boutiques en ligne et référencement.',
        'Web developer since 2019, freelancing in Mulhouse, France: websites, online shops and search engine optimisation.',
      ),
      'knowsAbout': [tr('Développement web', 'Web development'), tr('Référencement naturel (SEO)', 'Search engine optimisation (SEO)'), 'E-commerce', 'UI/UX', 'Vue.js', 'Nuxt', 'TypeScript', 'Symfony', 'PostgreSQL'],
      'image': `${siteUrl}${portrait}`,
      'url': absoluteUrl(chemin('/parcours')),
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
      'alternateName': [tr('Alexandra Porhansl, développeuse web freelance', 'Alexandra Porhansl, freelance web developer'), 'alexandraporhansl.com'],
      'inLanguage': ['fr-FR', 'en'],
      'publisher': { '@id': `${siteUrl}/#agence` },
    },
  ],
})
</script>

<template>
  <div id="haut">
    <a class="skip" href="#contenu">{{ tr('Aller au contenu', 'Skip to content') }}</a>
    <NuxtRouteAnnouncer />
    <SiteHeader />
    <div id="contenu">
      <NuxtPage />
    </div>
    <SiteFooter />
    <RetourHaut />
  </div>
</template>
