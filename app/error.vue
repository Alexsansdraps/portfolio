<script setup lang="ts">
import type { NuxtError } from '#app'

/* Page d'erreur (404 surtout) : garde l'en-tête et le pied de page, propose les pages utiles,
   et reste hors de l'index Google. */
const props = defineProps<{ error: NuxtError }>()
const introuvable = props.error.statusCode === 404

useSeoMeta({
  title: introuvable ? 'Page introuvable | Alexandra Porhansl' : 'Erreur | Alexandra Porhansl',
  robots: 'noindex, follow',
})

const liens = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services et tarifs' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/audit-gratuit', label: 'Audit gratuit' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <div>
    <SiteHeader />
    <main class="e wrap">
      <p class="small">{{ introuvable ? 'Erreur 404' : `Erreur ${error.statusCode}` }}</p>
      <h1 class="t-h1 e-h1">{{ introuvable ? 'Cette page n’existe pas, ou plus.' : 'Quelque chose s’est mal passé.' }}</h1>
      <p class="lead e-lead muted">
        {{ introuvable
          ? 'L’adresse a peut-être changé. Vous pouvez continuer par l’une de ces pages.'
          : 'Réessayez dans un instant, ou continuez par l’une de ces pages.' }}
      </p>
      <ul class="lines e-links">
        <li v-for="l in liens" :key="l.to"><NuxtLink :to="l.to">{{ l.label }}</NuxtLink></li>
      </ul>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.e { padding-block: clamp(56px, 9vw, 128px); }
.e-h1 { margin-top: 14px; max-width: 14em; }
.e-lead { margin-top: 22px; }
.e-links { margin-top: 32px; max-width: 480px; font-size: 21px; }
</style>
