<script setup lang="ts">
import { business } from '~/data/site'

/* Une page par service : Google peut positionner chacune sur sa propre recherche
   (« création site vitrine Mulhouse », « refonte site Wix »…), ce que des ancres #… ne permettent pas.
   En anglais, l'adresse est traduite (/en/services/website) : on retrouve l'id français pour charger le service. */
const route = useRoute()
const { tr, chemin, en } = useLangue()
const c = useContenu()
const param = String(route.params.id)
const id = en.value ? idServiceDepuisEn(param) : param
const service = c.value.services.find(s => s.id === id)
if (!service) throw createError({ statusCode: 404, statusMessage: tr('Service introuvable', 'Service not found'), fatal: true })
const s = service

const example = s.project ? c.value.projects.find(p => p.slug === s.project) : undefined
const others = c.value.services.filter(o => o.id !== s.id)
const path = `/services/${s.id}`

usePageSeo({
  title: s.seoTitle,
  description: s.seoDescription,
  path,
})

useJsonLd([
  breadcrumb([[tr('Accueil', 'Home'), '/'], ['Services', '/services'], [s.title, path]]),
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': absoluteUrl(`${chemin(path)}#service`),
    'name': s.title,
    'serviceType': s.title,
    'description': s.long,
    'url': absoluteUrl(chemin(path)),
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
            'url': absoluteUrl(chemin(path)),
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

const canaux = tr(
  ['Site internet', 'Fiche Google', 'Instagram', 'Facebook', 'LinkedIn'],
  ['Website', 'Google profile', 'Instagram', 'Facebook', 'LinkedIn'],
)
</script>

<template>
  <main>
    <section class="sv-hero wrap">
      <nav class="crumbs rise" :aria-label="tr('Fil d’Ariane', 'Breadcrumb')">
        <NuxtLink :to="chemin('/')">{{ tr('Accueil', 'Home') }}</NuxtLink><span aria-hidden="true">/</span>
        <NuxtLink :to="chemin('/services')">Services</NuxtLink><span aria-hidden="true">/</span>
        <span aria-current="page">{{ s.title }}</span>
      </nav>
      <div class="sv-hero-grid hero-split">
        <div>
          <h1 class="sv-h1 rise d1">{{ s.h1[0] }} <em>{{ s.h1[1] }}</em></h1>
          <p class="lead sv-lead rise d2">{{ s.long }}</p>
          <p class="sv-price rise d2"><strong>{{ s.price }}</strong>{{ tr(', paiement possible en plusieurs fois.', ', payment in instalments possible.') }}</p>
          <div class="sv-ctas rise d3">
            <a :href="business.booking" class="btn" target="_blank" rel="noopener">{{ tr('Parlons de votre projet', 'Let’s talk about your project') }} <span class="arr" aria-hidden="true">↗</span></a>
          </div>
        </div>

        <!-- à droite : la réalisation qui illustre le service, sur un fond travaillé -->
        <NuxtLink v-if="example" :to="chemin(`/realisations/${example.slug}`)" class="sv-ex rise d2" :aria-label="tr(`Voir la réalisation ${example.name}`, `See the ${example.name} project`)">
          <HeroVisual :cover="example.cover" :url="example.domain" :mobile="example.mobile" />
        </NuxtLink>
        <HeroVisual v-else class="rise d2">
          <div class="pres">
            <p class="pres-t">{{ tr('Votre présence en ligne', 'Your online presence') }}</p>
            <ul class="pres-l">
              <li v-for="canal in canaux" :key="canal">{{ canal }}<span>{{ tr('à jour', 'up to date') }}</span></li>
            </ul>
          </div>
        </HeroVisual>
      </div>
    </section>

    <section class="sv-offer" :aria-label="tr('Ce qui est compris et tarifs', 'What’s included and prices')">
      <div class="wrap sv-grid">
        <div data-reveal>
          <h2 class="sv-k">{{ tr('Ce qui est compris', 'What’s included') }}</h2>
          <ul class="sv-list">
            <li v-for="it in s.includes" :key="it">{{ it }}</li>
          </ul>
        </div>
        <div data-reveal>
          <h2 class="sv-k">{{ tr('Tarifs', 'Prices') }}</h2>
          <PriceList :prices="s.prices" :note="c.priceNote" />
        </div>
      </div>
    </section>

    <section class="section wrap" aria-labelledby="sv-who-t">
      <div class="sec-head" data-reveal>
        <h2 v-if="!en" id="sv-who-t" class="h2">C’est pour vous <em>si…</em></h2>
        <h2 v-else id="sv-who-t" class="h2">It’s for you <em>if…</em></h2>
      </div>
      <ul class="sv-who">
        <li v-for="w in s.forWho" :key="w" data-reveal>{{ w }}</li>
      </ul>
    </section>

    <Temoignages />

    <section class="section wrap" aria-labelledby="sv-how-t">
      <div class="sec-head" data-reveal>
        <h2 id="sv-how-t" class="h2">{{ tr('Comment on travaille ensemble', 'How we work together') }}</h2>
      </div>
      <MethodSteps />
    </section>

    <section class="section wrap faq-sec" aria-labelledby="sv-faq-t">
      <div class="sec-head" data-reveal>
        <h2 id="sv-faq-t" class="h2">{{ tr('Vos questions', 'Your questions') }}</h2>
      </div>
      <FaqList :items="s.faq" />
    </section>

    <nav class="wrap sv-others" aria-labelledby="sv-others-t">
      <h2 id="sv-others-t" class="sv-k">{{ tr('Les autres services', 'Other services') }}</h2>
      <div class="sv-toc">
        <NuxtLink v-for="o in others" :key="o.id" :to="chemin(`/services/${o.id}`)">
          {{ o.title }} <span class="arr" aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </nav>

    <CtaBand />
  </main>
</template>

<style scoped>
.sv-hero { padding-top: clamp(32px, 5vw, 64px); padding-bottom: clamp(48px, 6vw, 80px); }
.crumbs { display: flex; flex-wrap: wrap; gap: 8px; font-size: 14px; color: var(--color-mute); }
.crumbs a { color: var(--color-graphite); text-decoration: none; }
.crumbs a:hover { color: var(--color-wine); text-decoration: underline; }

.sv-hero-grid { margin-top: clamp(28px, 4vw, 48px); }
.sv-h1 {
  font-weight: 800; font-stretch: 116%;
  font-size: clamp(40px, 5vw, 72px); line-height: .98; letter-spacing: -.03em; max-width: 14ch;
}
.sv-h1 em { font-style: normal; color: var(--color-wine); }
.sv-lead { margin-top: 24px; max-width: 54ch; }
.sv-ex { display: block; width: 100%; }
.sv-ex:hover :deep(.hv-shot) { transform: rotate(-2deg) translateY(-6px); transition: transform .4s; }
.pres {
  position: absolute; left: 4%; top: 12%; width: 78%;
  padding: clamp(20px, 2.6vw, 32px); border-radius: 20px; background: #fff;
  box-shadow: 0 1px 2px rgb(29 22 26 / .06), 0 28px 60px -30px rgb(29 22 26 / .45);
  transform: rotate(-2deg);
}
.pres-t { font-weight: 780; font-stretch: 112%; font-size: clamp(18px, 1.7vw, 22px); white-space: nowrap; letter-spacing: -.01em; }
.pres-l { list-style: none; margin-top: 14px; }
.pres-l li { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 11px 0; border-top: 1px solid var(--color-line); font-weight: 600; font-size: clamp(15px, 1.4vw, 17px); }
.pres-l span { padding: 4px 10px; border-radius: 999px; background: var(--color-blush); color: var(--color-wine); font-size: 13px; font-weight: 650; }
.sv-price { margin-top: 20px; font-size: 18px; color: var(--color-graphite); }
.sv-price strong { color: var(--color-ink); font-weight: 720; }
.sv-ctas { margin-top: 28px; display: flex; flex-wrap: wrap; gap: 12px; }


.sv-offer { padding-block: clamp(56px, 8vw, 104px); background: var(--color-sand); border-top: 1px solid var(--color-line); }
.sv-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(32px, 6vw, 96px); align-items: start; }
.sv-k { font-size: 14.5px; font-weight: 650; color: var(--color-mute); }
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

/* téléphone et tablette : la carte suit le flux de la page au lieu d'être posée par-dessus */
@media (max-width: 960px) {
  .hv:has(.pres) { aspect-ratio: auto; padding: 28px 0 36px; }
  .pres { position: relative; left: auto; top: auto; width: auto; margin: 0 6% 0 2%; }
}
@media (max-width: 900px) {
  .sv-grid { grid-template-columns: 1fr; }
  .sv-who { grid-template-columns: 1fr; }
}
</style>
