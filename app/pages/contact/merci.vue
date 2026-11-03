<script setup lang="ts">
// Page d'arrivée d'un envoi du formulaire sans JavaScript.
usePageSeo({
  title: 'Message envoyé | Alexandra Porhansl',
  description: 'Votre message est bien parti. Je vous réponds en général dans la journée.',
  path: '/contact/merci',
  noindex: true,
})
</script>

<template>
  <main class="m wrap">
    <p class="eyebrow">Message envoyé</p>
    <h1 class="m-h1">Merci, votre message <em>est bien parti&nbsp;!</em></h1>
    <p class="lead">Je vous réponds en général dans la journée, à l’adresse e-mail que vous avez indiquée.</p>
    <div class="m-links">
      <NuxtLink to="/realisations" class="btn">Voir mes réalisations</NuxtLink>
      <NuxtLink to="/" class="btn btn-ghost">Retour à l’accueil</NuxtLink>
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
