<script setup lang="ts">
import { business } from '~/data/site'

usePageSeo({
  title: 'Contact : votre projet de site internet à Mulhouse',
  description: 'Un projet de site vitrine, de boutique en ligne ou de refonte ? Écrivez-moi : audit gratuit, réponse sous 24 h. Agence web basée à Mulhouse.',
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
</script>

<template>
  <main>
    <section class="head wrap">
      <h1 class="t-h1">Parlons de votre projet</h1>
      <p class="lead head-lead">
        Dites-m’en un peu plus, même si votre idée est encore floue. Je vous réponds sous 24 heures pour en parler.
      </p>
    </section>

    <section class="sec">
      <div class="wrap cols">
        <dl class="infos">
          <div>
            <dt>Réponse</dt>
            <dd>Sous 24 heures</dd>
          </div>
          <div>
            <dt>Par e-mail</dt>
            <dd><a :href="`mailto:${business.email}`">{{ business.email }}</a></dd>
          </div>
          <div>
            <dt>Où</dt>
            <dd>À Mulhouse, en rendez-vous ou en visio, comme vous préférez.</dd>
          </div>
          <div>
            <dt>Ensuite</dt>
            <dd>On échange une demi-heure sur votre besoin, puis je vous envoie une proposition détaillée.</dd>
          </div>
        </dl>
        <ContactForm />
      </div>
    </section>
  </main>
</template>

<style scoped>
.head { padding-top: clamp(40px, 7vw, 96px); padding-bottom: clamp(32px, 5vw, 64px); }
.head-lead { margin-top: 22px; }
.infos { font-size: 17px; }
.infos > div { padding: 12px 0; border-bottom: 1px solid var(--color-hair); }
.infos > div:first-child { padding-top: 0; }
.infos dt { font-weight: 500; }
.infos dd { margin-top: 2px; color: var(--color-gray); overflow-wrap: anywhere; }
</style>
