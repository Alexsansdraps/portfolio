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
      `Alexandra Porhansl, ${business.legal.form}, création de sites internet.`,
      'Mulhouse (Haut-Rhin), France.',
      `SIREN ${business.legal.siren}, SIRET ${business.legal.siret}`,
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
    p: ['Ce site est hébergé par Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis (www.cloudflare.com).'],
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
      'Les informations envoyées par le formulaire de contact (nom, entreprise, e-mail, téléphone facultatif, type de projet et message) sont transmises par e-mail à Alexandra Porhansl, uniquement pour répondre à votre demande et, le cas échéant, établir un devis.',
      'Elles ne sont pas enregistrées sur ce site, ne sont transmises à aucun tiers et ne servent à aucune prospection. Les échanges sont conservés le temps nécessaire au suivi de votre demande, puis au plus trois ans après le dernier contact.',
      `Vous pouvez à tout moment demander l’accès à vos données, leur rectification ou leur suppression en écrivant à ${business.email}. Vous pouvez aussi adresser une réclamation à la CNIL (www.cnil.fr).`,
    ],
  },
  {
    h: 'Cookies et mesure d’audience',
    p: [
      'Ce site ne dépose aucun cookie et n’utilise aucun outil de mesure d’audience ni aucun traceur publicitaire.',
      'Le lien « ce que j’écoute en ce moment » mène vers Spotify, dans un nouvel onglet : rien n’est chargé depuis Spotify tant que vous ne cliquez pas.',
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
    <h1 class="t-h1">Mentions légales</h1>
    <p class="small l-up">Dernière mise à jour en novembre 2026</p>

    <section v-for="s in sections" :key="s.h" class="l-sec cols">
      <h2 class="t-sec">{{ s.h }}</h2>
      <div>
        <p v-for="(par, i) in s.p" :key="i">{{ par }}</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.legal { padding-top: clamp(40px, 7vw, 96px); padding-bottom: clamp(56px, 8vw, 104px); }
.l-up { margin-top: 14px; margin-bottom: clamp(32px, 5vw, 56px); }
.l-sec { padding: 22px 0; border-top: 1px solid var(--color-hair); }
.l-sec p { max-width: 40em; color: var(--color-gray); font-size: 18px; }
</style>
