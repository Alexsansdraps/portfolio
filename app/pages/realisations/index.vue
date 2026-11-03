<script setup lang="ts">
import { projects } from '~/data/projects'

usePageSeo({
  title: 'Réalisations : sites créés pour des entreprises d’Alsace',
  description: 'Refonte du site de La Chance Animation (Guebwiller) et boutique en ligne sur mesure pour MemoryLine : découvrez les sites que j’ai conçus et développés en Alsace.',
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
    <section class="r-hero wrap">
      <p class="eyebrow rise">Réalisations</p>
      <h1 class="r-h1 rise d1">Mes réalisations</h1>
      <p class="lead rise d2">
        Deux projets réalisés cette année : la refonte du site d’une entreprise d’animation casino,
        et une boutique en ligne sur mesure pour des affiches personnalisées.
      </p>
    </section>

    <section class="section on-dark" aria-label="Projets">
      <div class="wrap projects">
        <ProjectCard v-for="(p, i) in projects" :key="p.slug" :project="p" :flip="i % 2 === 1" as="h2" />
      </div>
    </section>

    <CtaBand title="Le prochain projet, c’est le vôtre ?" />
  </main>
</template>

<style scoped>
.r-hero { padding-top: clamp(40px, 7vw, 96px); padding-bottom: clamp(48px, 6vw, 80px); }
.r-h1 {
  margin-top: 20px; font-weight: 800; font-stretch: 116%;
  font-size: clamp(40px, 6.2vw, 84px); line-height: .98; letter-spacing: -.03em; max-width: 17ch;
}
.r-h1 em { font-style: normal; color: var(--color-wine); }
.r-hero .lead { margin-top: 24px; }
.projects { display: flex; flex-direction: column; gap: clamp(72px, 10vw, 140px); }
</style>
