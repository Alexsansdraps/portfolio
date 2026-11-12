<script setup lang="ts">
import { projects } from '~/data/projects'

usePageSeo({
  title: 'Réalisations : sites vitrines et boutiques en ligne sur mesure',
  description: 'Refontes des sites de La Chance Animation et La Chance Production (Guebwiller), boutique en ligne sur mesure pour MemoryLine : mes sites sur mesure.',
  path: '/realisations',
})

useJsonLd([
  breadcrumb([['Accueil', '/'], ['Réalisations', '/realisations']]),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': projects.map((p, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'url': absoluteUrl(`/realisations/${p.slug}`),
      'name': p.name,
    })),
  },
])
</script>

<template>
  <main>
    <section class="head wrap">
      <h1 class="t-h1">Réalisations</h1>
      <p class="lead head-lead">
        Trois projets réalisés cette année. La refonte du site d’une entreprise d’animation casino, une boutique en ligne
        sur mesure pour des affiches personnalisées, et la refonte du site d’un photographe avec un espace pour ses clients.
      </p>
    </section>

    <section class="sec" aria-label="Projets">
      <div class="wrap projects">
        <ProjectCard v-for="p in projects" :key="p.slug" :project="p" as="h2" data-reveal />
      </div>
    </section>

    <CtaBand title="Le prochain projet, c’est le vôtre ?" />
  </main>
</template>

<style scoped>
.head { padding-top: clamp(40px, 7vw, 96px); padding-bottom: clamp(40px, 6vw, 80px); }
.head-lead { margin-top: 24px; }
.projects { display: flex; flex-direction: column; }
.projects > * + * { margin-top: clamp(40px, 5vw, 64px); padding-top: clamp(40px, 5vw, 64px); border-top: 1px solid var(--color-hair); }
</style>
