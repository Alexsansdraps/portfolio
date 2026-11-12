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
    <section class="sv-hero wrap">
      <nav class="crumbs rise" aria-label="Fil d’Ariane">
        <NuxtLink to="/">Accueil</NuxtLink><span aria-hidden="true">/</span>
        <NuxtLink to="/services">Services</NuxtLink><span aria-hidden="true">/</span>
        <span aria-current="page">{{ s.title }}</span>
      </nav>
      <p class="eyebrow sv-eyebrow rise d1">{{ s.title }}</p>
      <h1 class="sv-h1 rise d1">{{ s.h1[0] }} <em>{{ s.h1[1] }}</em></h1>
      <p class="lead sv-lead rise d2">{{ s.long }}</p>
      <div class="sv-ctas rise d3">
        <NuxtLink to="/contact" class="btn">Parlons de votre projet <span class="arr" aria-hidden="true">→</span></NuxtLink>
        <NuxtLink to="/audit-gratuit" class="btn btn-ghost">Audit gratuit</NuxtLink>
      </div>
    </section>

    <section class="sv-offer" aria-label="Ce qui est compris et tarifs">
      <div class="wrap sv-grid">
        <div data-reveal>
          <h2 class="sv-k">Ce qui est compris</h2>
          <ul class="sv-list">
            <li v-for="it in s.includes" :key="it">{{ it }}</li>
          </ul>
        </div>
        <div data-reveal>
          <h2 class="sv-k">Tarifs</h2>
          <PriceList :prices="s.prices" :note="priceNote" />
        </div>
      </div>
    </section>

    <section class="section wrap" aria-labelledby="sv-who-t">
      <div class="sec-head" data-reveal>
        <p class="eyebrow">Pour qui</p>
        <h2 id="sv-who-t" class="h2">C’est pour vous <em>si…</em></h2>
      </div>
      <ul class="sv-who">
        <li v-for="w in s.forWho" :key="w" data-reveal>{{ w }}</li>
      </ul>
    </section>

    <section v-if="example" class="section on-dark" aria-labelledby="sv-ex-t">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <p class="eyebrow">Un exemple</p>
          <h2 id="sv-ex-t" class="h2">Un projet que j’ai réalisé</h2>
        </div>
        <ProjectCard :project="example" />
      </div>
    </section>

    <section class="section wrap" aria-labelledby="sv-how-t">
      <div class="sec-head" data-reveal>
        <p class="eyebrow">Comment ça se passe</p>
        <h2 id="sv-how-t" class="h2">Comment on travaille ensemble</h2>
      </div>
      <MethodSteps />
    </section>

    <section class="section wrap faq-sec" aria-labelledby="sv-faq-t">
      <div class="sec-head" data-reveal>
        <p class="eyebrow">Questions fréquentes</p>
        <h2 id="sv-faq-t" class="h2">Vos questions</h2>
      </div>
      <FaqList :items="s.faq" />
    </section>

    <nav class="wrap sv-others" aria-labelledby="sv-others-t">
      <h2 id="sv-others-t" class="sv-k">Les autres services</h2>
      <div class="sv-toc">
        <NuxtLink v-for="o in others" :key="o.id" :to="`/services/${o.id}`">
          {{ o.title }} <span class="arr" aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </nav>

    <CtaBand />
  </main>
</template>

<style scoped>
.sv-hero { padding-top: clamp(32px, 5vw, 64px); padding-bottom: clamp(48px, 6vw, 80px); }
.crumbs { display: flex; flex-wrap: wrap; gap: 8px; font-family: var(--font-mono); font-size: 12.5px; color: var(--color-mute); }
.crumbs a { color: var(--color-graphite); text-decoration: none; }
.crumbs a:hover { color: var(--color-wine); text-decoration: underline; }
.sv-eyebrow { margin-top: clamp(28px, 4vw, 48px); }
.sv-h1 {
  margin-top: 20px; font-weight: 800; font-stretch: 116%;
  font-size: clamp(40px, 6.2vw, 84px); line-height: .98; letter-spacing: -.03em; max-width: 16ch;
}
.sv-h1 em { font-style: normal; color: var(--color-wine); }
.sv-lead { margin-top: 24px; max-width: 62ch; }
.sv-ctas { margin-top: 32px; display: flex; flex-wrap: wrap; gap: 12px; }

.sv-offer { padding-block: clamp(56px, 8vw, 104px); background: var(--color-sand); border-top: 1px solid var(--color-line); }
.sv-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(32px, 6vw, 96px); align-items: start; }
.sv-k { font-family: var(--font-mono); font-size: 12px; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; color: var(--color-mute); }
.sv-list { list-style: none; margin-top: 16px; display: flex; flex-direction: column; }
.sv-list li {
  position: relative; padding: 13px 0 13px 32px; border-bottom: 1px solid var(--color-line);
  font-size: 16.5px; line-height: 1.5;
}
.sv-list li::before {
  content: "✓"; position: absolute; left: 0; top: 14px;
  display: grid; place-items: center; width: 20px; height: 20px; border-radius: 50%;
  background: var(--color-wine); color: #fff; font-size: 11px; font-weight: 700;
}
.sv-offer .pl { margin-top: 16px; }

.sv-who { list-style: none; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(16px, 2vw, 24px); }
.sv-who li {
  padding: clamp(22px, 2.6vw, 30px); border-radius: 22px; background: #fff; border: 1px solid var(--color-line);
  font-weight: 600; font-size: 18px; line-height: 1.45;
}
.sv-who li::before {
  content: "→"; display: block; margin-bottom: 12px; color: var(--color-wine); font-weight: 700;
}

.faq-sec { padding-bottom: clamp(24px, 4vw, 48px); }

.sv-others { padding-bottom: clamp(48px, 6vw, 80px); }
.sv-toc { margin-top: 16px; display: flex; flex-wrap: wrap; gap: 10px; }
.sv-toc a {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 10px 16px; border-radius: 999px; border: 1px solid var(--color-line);
  color: var(--color-ink); text-decoration: none; font-weight: 560; font-size: 15px;
  transition: border-color .2s, background .2s;
}
.sv-toc a .arr { color: var(--color-wine); }
.sv-toc a:hover { border-color: var(--color-wine); background: #fff; }

@media (max-width: 900px) {
  .sv-grid { grid-template-columns: 1fr; }
  .sv-who { grid-template-columns: 1fr; }
}
</style>
