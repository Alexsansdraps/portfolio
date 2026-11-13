<script setup lang="ts">
import { business } from '~/data/site'

const { tr, chemin, en } = useLangue()

usePageSeo({
  title: tr('Mentions légales | Alexandra Porhansl', 'Legal notice | Alexandra Porhansl'),
  description: tr(
    'Mentions légales, hébergement et données personnelles du site alexandraporhansl.com.',
    'Legal notice, hosting and personal data for the alexandraporhansl.com website.',
  ),
  path: '/mentions-legales',
  noindex: true,
})

const sectionsFr = [
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
      'Ce site ne dépose aucun cookie et n’utilise aucun outil de mesure d’audience ni aucun traceur publicitaire. Seul votre choix de langue (français ou anglais) est retenu dans votre navigateur, et il n’est transmis à personne.',
      'Le bouton « Réserver un créneau » mène vers la page de réservation Google Agenda, dans un nouvel onglet : rien n’est chargé depuis Google tant que vous ne cliquez pas. La réservation est ensuite soumise aux règles de confidentialité de Google.',
    ],
  },
  {
    h: 'Crédits',
    p: ['Design et développement : Alexandra Porhansl.'],
  },
]

const sectionsEn = [
  {
    h: 'Website publisher',
    p: [
      'Alexandra Porhansl, sole proprietorship (Entrepreneur individuel, EI) — website design and development.',
      'Mulhouse (Haut-Rhin), France.',
      `SIREN: ${business.legal.siren} — SIRET: ${business.legal.siret}`,
      `EU VAT number: ${business.legal.vat}`,
      'Activity: computer programming (NAF 6201Z)',
      `Contact: ${business.email}`,
    ],
  },
  {
    h: 'Publication director',
    p: ['Alexandra Porhansl.'],
  },
  {
    h: 'Hosting',
    p: ['This website is hosted by Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, United States — www.cloudflare.com.'],
  },
  {
    h: 'Intellectual property',
    p: [
      'All content on this website (text, visuals, photographs, code) is the property of Alexandra Porhansl unless stated otherwise. Any full or partial reproduction or representation without prior permission is prohibited.',
      'The names, logos and screenshots of client websites shown in the projects belong to their respective owners.',
    ],
  },
  {
    h: 'Contact form',
    p: [
      'The information sent through the contact form (name, email, optional phone number and message) is forwarded by email to Alexandra Porhansl, solely to answer your enquiry and, where relevant, draw up a quote.',
      'It is not stored on this website, is not passed on to any third party and is never used for marketing. Exchanges are kept for as long as needed to follow up your enquiry, then for no more than three years after the last contact.',
      `You can ask at any time to access, correct or delete your data by writing to ${business.email}. You can also lodge a complaint with the CNIL, the French data protection authority (www.cnil.fr).`,
    ],
  },
  {
    h: 'Cookies and analytics',
    p: [
      'This website sets no cookies and uses no analytics or advertising trackers. Only your choice of language (French or English) is remembered in your browser, and it is shared with no one.',
      'The “Book a time slot” button leads to the Google Calendar booking page, in a new tab: nothing is loaded from Google until you click. The booking is then subject to Google’s privacy policy.',
    ],
  },
  {
    h: 'Credits',
    p: ['Design and development: Alexandra Porhansl.'],
  },
]

const sections = en.value ? sectionsEn : sectionsFr
</script>

<template>
  <main class="legal wrap">
    <NuxtLink class="back" :to="chemin('/')">← {{ tr('Retour à l’accueil', 'Back to the home page') }}</NuxtLink>

    <h1 class="l-h1">{{ tr('Mentions légales', 'Legal notice') }}</h1>
    <p class="l-up">{{ tr('Dernière mise à jour : novembre 2026', 'Last updated: November 2026') }}</p>

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
