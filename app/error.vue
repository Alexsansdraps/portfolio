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
      <h1 class="e-h1">
        <template v-if="introuvable">Cette page s’est perdue <em>entre les Vosges et le Rhin.</em></template>
        <template v-else>Oups, quelque chose <em>s’est mal passé.</em></template>
      </h1>
      <p class="lead">
        {{ introuvable
          ? 'L’adresse a peut-être changé, ou la page n’existe plus. Voici par où continuer :'
          : 'Réessayez dans un instant, ou continuez par ici :' }}
      </p>
      <div class="e-links">
        <NuxtLink to="/" class="btn">Retour à l’accueil <span class="arr" aria-hidden="true">→</span></NuxtLink>
        <NuxtLink v-for="l in liens" :key="l.to" :to="l.to" class="btn btn-ghost">{{ l.label }}</NuxtLink>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.e { padding-block: clamp(64px, 10vw, 140px); }
.e-h1 {
  margin-top: 20px; max-width: 18ch;
  font-weight: 800; font-stretch: 116%;
  font-size: clamp(38px, 6vw, 76px); line-height: 1; letter-spacing: -.03em;
}
.e-h1 em { font-style: normal; color: var(--color-wine); }
.e .lead { margin-top: 24px; }
.e-links { margin-top: 32px; display: flex; flex-wrap: wrap; gap: 12px; }
</style>
