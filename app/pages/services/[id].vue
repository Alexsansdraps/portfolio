<script setup lang="ts">
import { services, priceNote } from '~/data/site'
import { findProject } from '~/data/projects'

/* Une page par service : Google peut positionner chacune sur sa propre recherche
   (« création site vitrine Mulhouse », « refonte site Wix »…), ce que des ancres #… ne permettent pas. */
const route = useRoute()
const service = services.find(s => s.id === String(route.params.id))
if (!service) throw createError({ statusCode: 404, statusMessage: 'Service introuvable', fatal: true })
const s = service

const example = s.project ? findProject(s.project) : undefined
const others = services.filter(o => o.id !== s.id)
const path = `/services/${s.id}`

usePageSeo({
  title: s.seoTitle,
  description: s.seoDescription,
  path,
})

useJsonLd([
  breadcrumb([['Accueil', '/'], ['Services', '/services'], [s.title, path]]),
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': absoluteUrl(`${path}#service`),
    'name': s.title,
    'serviceType': s.title,
    'description': s.long,
    'url': absoluteUrl(path),
    'provider': { '@id': absoluteUrl('/#agence') },
    'areaServed': [
      { '@type': 'City', 'name': 'Mulhouse' },
      { '@type': 'AdministrativeArea', 'name': 'Alsace' },
    ],
    ...(s.minPrice === undefined
      ? {}
      : {
          offers: {
            '@type': 'Offer',
            'url': absoluteUrl(path),
            'priceSpecification': {
              '@type': 'PriceSpecification',
              'minPrice': s.minPrice,
              'priceCurrency': 'EUR',
              'valueAddedTaxIncluded': false,
            },
          },
        }),
  },
])
</script>

<template>
  <main>
    <section class="head wrap">
      <nav class="crumbs" aria-label="Fil d’Ariane">
        <NuxtLink to="/">Accueil</NuxtLink><span aria-hidden="true">/</span>
        <NuxtLink to="/services">Services</NuxtLink><span aria-hidden="true">/</span>
        <span aria-current="page">{{ s.title }}</span>
      </nav>
      <h1 class="t-h1 sv-h1">{{ s.h1[0] }} {{ s.h1[1] }}</h1>
      <p class="lead sv-lead">{{ s.long }}</p>
      <p class="go-list sv-links">
        <NuxtLink to="/contact" class="go">Parlons de votre projet</NuxtLink>
        <NuxtLink to="/audit-gratuit" class="go">Audit gratuit</NuxtLink>
      </p>
    </section>

    <section class="sec" aria-labelledby="sv-offer-t">
      <div class="wrap cols">
        <h2 id="sv-offer-t" class="t-sec">L’offre</h2>
        <div class="sv-grid" data-reveal>
          <div>
            <h3 class="sv-k">Ce qui est compris</h3>
            <ul class="lines">
              <li v-for="it in s.includes" :key="it">{{ it }}</li>
            </ul>
          </div>
          <div>
            <h3 class="sv-k">Tarifs</h3>
            <PriceList :prices="s.prices" :note="priceNote" />
          </div>
        </div>
      </div>
    </section>

    <section class="sec" aria-labelledby="sv-who-t">
      <div class="wrap cols">
        <h2 id="sv-who-t" class="t-sec">Pour qui</h2>
        <ul class="sv-who">
          <li v-for="w in s.forWho" :key="w" class="t-h3" data-reveal>{{ w }}</li>
        </ul>
      </div>
    </section>

    <section v-if="example" class="sec" aria-labelledby="sv-ex-t">
      <div class="wrap">
        <div class="cols sv-ex-head">
          <h2 id="sv-ex-t" class="t-sec">Un projet que j’ai réalisé</h2>
        </div>
        <ProjectCard :project="example" data-reveal />
      </div>
    </section>

    <section class="sec" aria-labelledby="sv-how-t">
      <div class="wrap cols">
        <h2 id="sv-how-t" class="t-sec">Comment on travaille ensemble</h2>
        <MethodSteps />
      </div>
    </section>

    <section class="sec" aria-labelledby="sv-faq-t">
      <div class="wrap cols">
        <h2 id="sv-faq-t" class="t-sec">Vos questions</h2>
        <FaqList :items="s.faq" />
      </div>
    </section>

    <nav class="sec" aria-labelledby="sv-others-t">
      <div class="wrap cols">
        <h2 id="sv-others-t" class="t-sec">Les autres services</h2>
        <ul class="lines sv-others">
          <li v-for="o in others" :key="o.id">
            <NuxtLink :to="`/services/${o.id}`">{{ o.title }}</NuxtLink>
            <span class="muted">{{ o.short }}</span>
          </li>
        </ul>
      </div>
    </nav>

    <CtaBand />
  </main>
</template>

<style scoped>
.head { padding-top: clamp(28px, 4vw, 48px); padding-bottom: clamp(40px, 6vw, 80px); }
.sv-h1 { margin-top: clamp(28px, 4vw, 56px); max-width: 13em; }
.sv-lead { margin-top: 24px; }
.sv-links { margin-top: 28px; }

.sv-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 32px clamp(32px, 4vw, 64px); align-items: start; }
.sv-k { font-weight: 500; font-size: 18px; margin-bottom: 10px; }

.sv-who { list-style: none; border-top: 1px solid var(--color-hair); }
.sv-who li { padding: 18px 0; border-bottom: 1px solid var(--color-hair); font-weight: 400; max-width: 32em; }

.sv-ex-head { margin-bottom: clamp(28px, 4vw, 48px); }

.sv-others li { display: grid; grid-template-columns: minmax(0, 4fr) minmax(0, 8fr); gap: 4px 32px; align-items: baseline; }
.sv-others a { font-size: 21px; }
@media (max-width: 860px) {
  .sv-grid, .sv-others li { grid-template-columns: 1fr; }
}
</style>
