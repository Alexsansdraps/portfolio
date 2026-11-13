<script setup lang="ts">
import { business } from '~/data/site'
import portrait from '~/assets/img/portrait.webp'

const { tr, en } = useLangue()

usePageSeo({
  title: tr('Contact : votre projet de site internet à Mulhouse', 'Contact: your website project in Mulhouse, Alsace'),
  description: tr(
    'Un projet de site, de réseaux sociaux ou de logiciel ? Réservez un premier rendez-vous d’une heure, gratuit et sans engagement, ou écrivez-moi. Développeuse web freelance à Mulhouse.',
    'A website, social media or software project? Book a free one-hour first meeting with no obligation, or write to me. Freelance web developer in Mulhouse, France.',
  ),
  path: '/contact',
})

useJsonLd([
  breadcrumb([[tr('Accueil', 'Home'), '/'], ['Contact', '/contact']]),
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'url': absoluteUrl(en.value ? '/en/contact' : '/contact'),
    'about': { '@id': absoluteUrl('/#agence') },
  },
])

const ensuite = computed(() => tr(
  [
    'Je vous rappelle ou je vous réponds par e-mail.',
    'Un premier rendez-vous d’une heure, gratuit et sans engagement, pour parler de votre situation et de vos besoins.',
    'Je vous envoie une proposition détaillée.',
  ],
  [
    'I call you back or reply by email.',
    'A first one-hour meeting, free with no obligation, to talk about where you are and what you need.',
    'I send you a detailed proposal.',
  ],
))
</script>

<template>
  <main>
    <section class="c-hero wrap hero-split">
      <div>
      <h1 v-if="!en" class="c-h1 rise d1">Parlons de <em>votre projet.</em></h1>
      <h1 v-else class="c-h1 rise d1">Let’s talk about <em>your project.</em></h1>
      <p class="lead rise d2">
        {{ tr(
          'Dites-m’en un peu plus, même si votre idée tient encore sur un sous-bock. Je vous recontacte rapidement pour en parler.',
          'Tell me a little more, even if your idea still fits on a beer mat. I’ll get back to you quickly to talk it through.',
        ) }}
      </p>
      <div class="c-ctas rise d3">
        <a :href="business.booking" class="btn" target="_blank" rel="noopener">{{ tr('Réserver un créneau', 'Book a time slot') }} <span aria-hidden="true">↗</span></a>
      </div>
      </div>
      <HeroVisual class="rise d2">
        <figure class="c-pic">
          <img :src="portrait" width="720" height="900" alt="" fetchpriority="high">
        </figure>
        <p class="c-badge">{{ tr('Réponse sous 24 h', 'Reply within 24 hours') }}</p>
      </HeroVisual>
    </section>

    <section class="wrap c-grid">
      <div class="rise d2">
        <ContactForm />
      </div>

      <aside class="c-side rise d3" :aria-label="tr('Informations pratiques', 'Practical information')">
        <div class="c-card">
          <p class="c-k">{{ tr('Par e-mail', 'By email') }}</p>
          <p class="c-v"><a :href="`mailto:${business.email}`">{{ business.email }}</a></p>
        </div>
        <div class="c-card">
          <p class="c-k">{{ tr('Où ?', 'Where?') }}</p>
          <p class="c-v">{{ tr('En visio, ou chez vous', 'By video call, or at your place') }}</p>
          <p class="c-small">{{ tr('Je me déplace dans un rayon de 100 km autour de Mulhouse.', 'I travel within 100 km of Mulhouse.') }}</p>
        </div>
        <div class="c-card c-next">
          <p class="c-k">{{ tr('Et ensuite ?', 'What happens next?') }}</p>
          <ol>
            <li v-for="e in ensuite" :key="e">{{ e }}</li>
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
