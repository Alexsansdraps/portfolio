<script setup lang="ts">
import { business, zone } from '~/data/site'
import portrait from '~/assets/img/portrait.webp'

usePageSeo({
  title: 'Contact : votre projet de site internet à Mulhouse',
  description: 'Un projet de site, de réseaux sociaux ou de logiciel ? Réservez un premier rendez-vous d’une heure, gratuit et sans engagement, ou écrivez-moi. Développeuse web freelance à Mulhouse.',
  path: '/contact',
})

useJsonLd([
  breadcrumb([['Accueil', '/'], ['Contact', '/contact']]),
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'url': absoluteUrl('/contact'),
    'about': { '@id': absoluteUrl('/#agence') },
  },
])

const cities = [zone.home.name, ...zone.cities.map(c => c.name)].join(', ')
</script>

<template>
  <main>
    <section class="c-hero wrap hero-split">
      <div>
      <h1 class="c-h1 rise d1">Parlons de <em>votre projet.</em></h1>
      <p class="lead rise d2">
        Dites-m’en un peu plus, même si votre idée tient encore sur un sous-bock. Je vous recontacte rapidement pour en parler.
      </p>
      <div class="c-ctas rise d3">
        <a :href="business.booking" class="btn" target="_blank" rel="noopener">Réserver un créneau <span aria-hidden="true">↗</span></a>
      </div>
      </div>
      <HeroVisual class="rise d2">
        <figure class="c-pic">
          <img :src="portrait" width="720" height="900" alt="" fetchpriority="high">
        </figure>
        <p class="c-badge">Réponse sous 24 h</p>
      </HeroVisual>
    </section>

    <section class="wrap c-grid">
      <div class="rise d2">
        <ContactForm />
      </div>

      <aside class="c-side rise d3" aria-label="Informations pratiques">
        <div class="c-card">
          <p class="c-k">Par e-mail</p>
          <p class="c-v"><a :href="`mailto:${business.email}`">{{ business.email }}</a></p>
        </div>
        <div class="c-card">
          <p class="c-k">Où ?</p>
          <p class="c-v">En visio, ou chez vous</p>
          <p class="c-small">Je me déplace dans un rayon de 100 km autour de Mulhouse.</p>
        </div>
        <div class="c-card c-next">
          <p class="c-k">Et ensuite ?</p>
          <ol>
            <li>Je vous rappelle ou je vous réponds par e-mail.</li>
            <li>Un premier rendez-vous d’une heure, gratuit et sans engagement, pour parler de votre situation et de vos besoins.</li>
            <li>Je vous envoie une proposition détaillée.</li>
          </ol>
        </div>
      </aside>
    </section>
  </main>
</template>

<style scoped>
.c-hero { padding-top: clamp(40px, 7vw, 96px); padding-bottom: clamp(32px, 5vw, 56px); }
.c-h1 { margin-top: 20px; font-weight: 800; font-stretch: 116%; font-size: clamp(42px, 6.4vw, 88px); line-height: .98; letter-spacing: -.03em; }
.c-h1 em { font-style: normal; color: var(--color-wine); }
.c-pic { position: absolute; left: 22%; top: 2%; width: 52%; margin: 0; transform: rotate(2deg); }
.c-pic img { display: block; width: 100%; aspect-ratio: 4 / 5; object-fit: cover; object-position: 50% 20%; border-radius: 24px; box-shadow: 0 28px 60px -30px rgb(29 22 26 / .5); }
.c-badge {
  position: absolute; left: 6%; bottom: 10%; padding: 14px 20px; border-radius: 16px; background: #fff;
  font-weight: 720; font-size: 17px; box-shadow: 0 18px 40px -24px rgb(29 22 26 / .45); transform: rotate(-3deg);
}
.c-ctas { margin-top: 28px; display: flex; flex-wrap: wrap; gap: 12px; }
.c-hero .lead { margin-top: 22px; }

.c-grid {
  display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr); gap: clamp(24px, 4vw, 48px); align-items: start;
  padding-bottom: clamp(64px, 9vw, 120px);
}
.c-side { display: flex; flex-direction: column; gap: 14px; }
.c-card { padding: 22px 24px; border-radius: 18px; background: var(--color-sand); }
.c-k { font-weight: 650; font-size: 14.5px; color: var(--color-wine); }
.c-v { margin-top: 6px; font-weight: 650; font-size: 17.5px; line-height: 1.4; overflow-wrap: anywhere; }
.c-v a { color: var(--color-ink); }
.c-v a:hover { color: var(--color-wine); }
.c-small { margin-top: 8px; font-size: 14px; color: var(--color-graphite); line-height: 1.5; }
.c-next ol { margin-top: 10px; padding-left: 20px; display: flex; flex-direction: column; gap: 6px; font-size: 15.5px; color: var(--color-graphite); }
.c-next li::marker { color: var(--color-wine); font-weight: 700; }

@media (max-width: 900px) { .c-grid { grid-template-columns: 1fr; } }
</style>
