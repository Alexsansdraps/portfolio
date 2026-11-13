<script setup lang="ts">
import { business } from '~/data/site'

usePageSeo({
  title: 'Mentions légales | Alexandra Porhansl',
  description: 'Mentions légales, hébergement et données personnelles du site alexandraporhansl.com.',
  path: '/mentions-legales',
  noindex: true,
})

const sections = [
  {
    h: 'Éditeur du site',
    p: [
      `Alexandra Porhansl, ${business.legal.form} — création de sites internet.`,
      'Mulhouse (Haut-Rhin), France.',
      `SIREN : ${business.legal.siren} — SIRET : ${business.legal.siret}`,
      `N° de TVA intracommunautaire : ${business.legal.vat}`,
      `Activité : ${business.legal.naf}`,
      `Contact : ${business.email}`,
    ],
  },
  {
    h: 'Directrice de la publication',
    p: ['Alexandra Porhansl.'],
  },
  {
    h: 'Hébergement',
    p: ['Ce site est hébergé par Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis — www.cloudflare.com.'],
  },
  {
    h: 'Propriété intellectuelle',
    p: [
      'L’ensemble des contenus de ce site (textes, visuels, photographies, code) est la propriété d’Alexandra Porhansl, sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, sans autorisation préalable est interdite.',
      'Les noms, logos et captures d’écran des sites clients présentés dans les réalisations appartiennent à leurs propriétaires respectifs.',
    ],
  },
  {
    h: 'Formulaire de contact',
    p: [
      'Les informations envoyées par le formulaire de contact (nom, e-mail, téléphone facultatif et message) sont transmises par e-mail à Alexandra Porhansl, uniquement pour répondre à votre demande et, le cas échéant, établir un devis.',
      'Elles ne sont pas enregistrées sur ce site, ne sont transmises à aucun tiers et ne servent à aucune prospection. Les échanges sont conservés le temps nécessaire au suivi de votre demande, puis au plus trois ans après le dernier contact.',
      `Vous pouvez à tout moment demander l’accès à vos données, leur rectification ou leur suppression en écrivant à ${business.email}. Vous pouvez aussi adresser une réclamation à la CNIL (www.cnil.fr).`,
    ],
  },
  {
    h: 'Cookies et mesure d’audience',
    p: [
      'Ce site ne dépose aucun cookie et n’utilise aucun outil de mesure d’audience ni aucun traceur publicitaire.',
      'Le bouton « Réserver un créneau » mène vers la page de réservation Google Agenda, dans un nouvel onglet : rien n’est chargé depuis Google tant que vous ne cliquez pas. La réservation est ensuite soumise aux règles de confidentialité de Google.',
    ],
  },
  {
    h: 'Crédits',
    p: ['Design et développement : Alexandra Porhansl.'],
  },
]
</script>

<template>
  <main class="legal wrap">
    <NuxtLink class="back" to="/">← Retour à l’accueil</NuxtLink>

    <h1 class="l-h1">Mentions légales</h1>
    <p class="l-up">Dernière mise à jour : novembre 2026</p>

    <section v-for="s in sections" :key="s.h" class="l-sec">
      <h2>{{ s.h }}</h2>
      <p v-for="(par, i) in s.p" :key="i">{{ par }}</p>
    </section>
  </main>
</template>

<style scoped>
.legal { padding-top: clamp(40px, 7vw, 80px); padding-bottom: clamp(56px, 8vw, 104px); }
.back { font-size: 14px; color: var(--color-graphite); text-decoration: none; }
.back:hover { color: var(--color-wine); }
.l-h1 { margin-top: 28px; font-weight: 800; font-stretch: 116%; font-size: clamp(36px, 5vw, 64px); line-height: 1; letter-spacing: -.03em; }
.l-up { margin-top: 12px; font-size: 14px; color: var(--color-mute); }
.l-sec { margin-top: clamp(32px, 4vw, 44px); max-width: 72ch; }
.l-sec h2 { font-weight: 740; font-stretch: 110%; font-size: 21px; letter-spacing: -.01em; margin-bottom: 10px; }
.l-sec p { font-size: 16px; line-height: 1.7; color: var(--color-graphite); margin-bottom: 8px; }
</style>
