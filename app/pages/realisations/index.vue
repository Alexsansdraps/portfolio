<script setup lang="ts">
const { tr, chemin } = useLangue()
const c = useContenu()

const memoryline = computed(() => c.value.projects.find(p => p.slug === 'memoryline'))

usePageSeo({
  title: tr('Réalisations : sites vitrines et boutiques en ligne sur mesure', 'My work: custom business websites and online shops'),
  description: tr(
    'Refontes des sites de La Chance Animation et La Chance Production (Guebwiller), boutique en ligne sur mesure pour MemoryLine : mes sites sur mesure.',
    'Website redesigns for La Chance Animation and La Chance Production (Guebwiller, Alsace) and a custom online shop for MemoryLine: websites I designed and built.',
  ),
  path: '/realisations',
})

useJsonLd([
  breadcrumb([[tr('Accueil', 'Home'), '/'], [tr('Réalisations', 'Projects'), '/realisations']]),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': c.value.projects.map((p, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'url': absoluteUrl(chemin(`/realisations/${p.slug}`)),
      'name': p.name,
    })),
  },
])
</script>

<template>
  <main>
    <section class="r-hero wrap hero-split">
      <div>
      <h1 class="r-h1 rise d1">{{ tr('Mes réalisations', 'My work') }}</h1>
      <p class="lead rise d2">
        {{ tr(
          'Trois projets réalisés cette année : la refonte du site d’une entreprise d’animation casino, une boutique en ligne sur mesure pour des affiches personnalisées, et la refonte du site d’un photographe, avec un espace pour ses clients.',
          'Three projects from this year: a redesign for a casino entertainment company, a custom online shop for personalised posters, and a redesign for a photographer, with a space for his customers.',
        ) }}
      </p>
      </div>
      <HeroVisual v-if="memoryline" class="rise d2" :cover="memoryline.extra" :url="memoryline.domain" :mobile="memoryline.mobile" />
    </section>

    <section class="section on-dark" :aria-label="tr('Projets', 'Projects')">
      <div class="wrap projects">
        <ProjectCard v-for="(p, i) in c.projects" :key="p.slug" :project="p" :flip="i % 2 === 1" as="h2" />
      </div>
    </section>

    <CtaBand :title="tr('Le prochain projet, c’est le vôtre ?', 'Could the next project be yours?')" />
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
