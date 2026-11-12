<script setup lang="ts">
import { services, maintenance, priceNote } from '~/data/site'
import { findProject } from '~/data/projects'

usePageSeo({
  title: 'Services et tarifs : création de site et SEO à Mulhouse',
  description: 'Site vitrine dès 990 € HT, boutique en ligne, référencement (SEO), refonte Wix ou Shopify, outils sur mesure : services et tarifs de mon agence web à Mulhouse.',
  path: '/services',
})

/* Le détail de chaque service (données structurées Service comprises) est sur sa propre page. */
useJsonLd([
  breadcrumb([['Accueil', '/'], ['Services', '/services']]),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': services.map((s, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'url': absoluteUrl(`/services/${s.id}`),
      'name': s.title,
    })),
  },
])

const list = services.map(s => ({ ...s, ref: s.project ? findProject(s.project) : undefined }))
</script>

<template>
  <main>
    <section class="head wrap">
      <h1 class="t-h1">Création de sites internet et référencement</h1>
      <div class="head-foot">
        <p class="lead">
          Voici ce que je fais, combien cela coûte et comment ça se passe. Tous les prix sont hors taxes, et l’audit
          de votre site est offert.
        </p>
        <nav aria-label="Services">
          <ul class="lines">
            <li v-for="s in services" :key="s.id"><a :href="`#${s.id}`">{{ s.title }}</a></li>
            <li><a href="#maintenance">{{ maintenance.title }}</a></li>
          </ul>
        </nav>
      </div>
    </section>

    <section v-for="s in list" :id="s.id" :key="s.id" class="sec" :aria-labelledby="`${s.id}-t`">
      <div class="wrap cols">
        <div>
          <h2 :id="`${s.id}-t`" class="t-h2"><NuxtLink :to="`/services/${s.id}`" class="h-link">{{ s.title }}</NuxtLink></h2>
          <p class="small num s-price">{{ s.price }}</p>
        </div>
        <div class="s-body" data-reveal>
          <div>
            <p class="lead">{{ s.long }}</p>
            <h3 class="s-k">Ce qui est compris</h3>
            <ul class="lines">
              <li v-for="it in s.includes" :key="it">{{ it }}</li>
            </ul>
          </div>
          <div>
            <h3 class="s-k s-k-first">Tarifs</h3>
            <PriceList :prices="s.prices" :note="priceNote" />
            <p class="go-list s-links">
              <NuxtLink :to="`/services/${s.id}`" class="go">{{ s.linkText }}</NuxtLink>
              <NuxtLink v-if="s.ref" :to="`/realisations/${s.ref.slug}`">Exemple : {{ s.ref.name }}</NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="maintenance" class="sec" aria-labelledby="maint-t">
      <div class="wrap cols">
        <h2 id="maint-t" class="t-h2">{{ maintenance.title }}</h2>
        <div class="s-body" data-reveal>
          <p class="lead">{{ maintenance.text }}</p>
          <PriceList :prices="maintenance.prices" :note="priceNote" />
        </div>
      </div>
    </section>

    <section class="sec" aria-labelledby="audit-t">
      <div class="wrap cols">
        <h2 id="audit-t" class="t-sec">Pour commencer</h2>
        <div data-reveal>
          <p class="t-h2">Un audit gratuit de votre site, de vos outils ou de votre situation.</p>
          <p class="lead muted audit-p">On fait le point et on vous donne les priorités, sans engagement.</p>
          <p class="go-list audit-links"><NuxtLink to="/audit-gratuit" class="go">Demander l’audit gratuit</NuxtLink></p>
        </div>
      </div>
    </section>

    <section class="sec" aria-labelledby="m-title">
      <div class="wrap cols">
        <h2 id="m-title" class="t-sec">Comment on travaille ensemble</h2>
        <MethodSteps />
      </div>
    </section>

    <section class="sec" aria-labelledby="f-title">
      <div class="wrap cols">
        <h2 id="f-title" class="t-sec">Questions fréquentes</h2>
        <FaqList :schema="false" />
      </div>
    </section>

    <CtaBand />
  </main>
</template>

<style scoped>
.head { padding-top: clamp(40px, 7vw, 96px); padding-bottom: clamp(40px, 6vw, 80px); }
.head .t-h1 { max-width: 14em; }
.head-foot {
  margin-top: clamp(28px, 4vw, 56px);
  display: grid; grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); gap: 28px clamp(32px, 6vw, 96px); align-items: start;
}
.head-foot .lines li { padding: 10px 0; }
.head-foot a { text-decoration: none; }
.head-foot a:hover { text-decoration: underline; }

.h-link { text-decoration: none; }
.h-link:hover { text-decoration: underline; text-decoration-thickness: 1.5px; }
.s-price { margin-top: 10px; }
.s-body { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 32px clamp(32px, 4vw, 64px); align-items: start; }
.s-k { margin: 28px 0 10px; font-weight: 500; font-size: 18px; }
.s-k-first { margin-top: 0; }
.s-links { margin-top: 24px; }
.audit-p { margin-top: 14px; }
.audit-links { margin-top: 24px; }

@media (max-width: 960px) {
  .head-foot, .s-body { grid-template-columns: 1fr; }
}
</style>
