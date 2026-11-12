<script setup lang="ts">
// Page d'arrivée d'un envoi du formulaire sans JavaScript.
usePageSeo({
  title: 'Message envoyé | Alexandra Porhansl',
  description: 'Votre message est bien parti. Je vous réponds sous 24 h.',
  path: '/contact/merci',
  noindex: true,
})
</script>

<template>
  <main class="m wrap">
    <h1 class="t-h1">Merci, votre message est bien parti.</h1>
    <p class="lead m-lead muted">Je vous réponds sous 24 heures, à l’adresse e-mail que vous avez indiquée.</p>
    <p class="go-list m-links">
      <NuxtLink to="/realisations" class="go">Voir mes réalisations</NuxtLink>
      <NuxtLink to="/" class="go">Retour à l’accueil</NuxtLink>
    </p>
  </main>
</template>

<style scoped>
.m { padding-block: clamp(64px, 12vw, 160px); min-height: 60svh; }
.m .t-h1 { max-width: 14em; }
.m-lead { margin-top: 22px; }
.m-links { margin-top: 32px; }
</style>
