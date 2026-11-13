<script setup lang="ts">
// Page d'arrivée d'un envoi du formulaire sans JavaScript.
const { tr, chemin, en } = useLangue()

usePageSeo({
  title: tr('Message envoyé | Alexandra Porhansl', 'Message sent | Alexandra Porhansl'),
  description: tr('Votre message est bien parti. Je vous réponds sous 24 h.', 'Your message is on its way. I’ll reply within 24 hours.'),
  path: '/contact/merci',
  noindex: true,
})
</script>

<template>
  <main class="m wrap">
    <h1 v-if="!en" class="m-h1">Merci vielmols, votre message <em>est bien parti&nbsp;!</em></h1>
    <h1 v-else class="m-h1">Merci vielmols, as we say in Alsace: <em>your message is on its way!</em></h1>
    <p class="lead">{{ tr('Je vous réponds sous 24 h, à l’adresse e-mail que vous avez indiquée.', 'I’ll reply within 24 hours, to the email address you gave.') }}</p>
    <div class="m-links">
      <NuxtLink :to="chemin('/realisations')" class="btn">{{ tr('Voir mes réalisations', 'See my work') }}</NuxtLink>
      <NuxtLink :to="chemin('/')" class="btn btn-ghost">{{ tr('Retour à l’accueil', 'Back to the home page') }}</NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.m { padding-block: clamp(64px, 12vw, 160px); min-height: 60svh; }
.m-h1 { margin-top: 20px; font-weight: 800; font-stretch: 116%; font-size: clamp(38px, 5.6vw, 72px); line-height: 1; letter-spacing: -.03em; max-width: 18ch; }
.m-h1 em { font-style: normal; color: var(--color-wine); }
.m .lead { margin-top: 22px; }
.m-links { margin-top: 32px; display: flex; flex-wrap: wrap; gap: 12px; }
</style>
