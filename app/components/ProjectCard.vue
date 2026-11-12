<script setup lang="ts">
import type { Project } from '~/data/projects'

/** as : niveau du titre selon la page (h3 sous un h2 de section, h2 sur la page Réalisations) */
defineProps<{ project: Project, as?: 'h2' | 'h3' }>()
</script>

<template>
  <article class="pc">
    <div class="pc-txt">
      <p class="small">{{ project.kind }}, {{ project.year }}<template v-if="!project.live">, {{ project.status.toLowerCase() }}</template></p>
      <component :is="as || 'h3'" class="t-h2 pc-name">
        <NuxtLink :to="`/realisations/${project.slug}`">{{ project.name }}</NuxtLink>
      </component>
      <p class="pc-place muted">{{ [project.sector, project.place].filter(Boolean).join(', ') }}</p>
      <p class="pc-hook">{{ project.hook }}</p>
      <p class="go-list pc-links">
        <NuxtLink :to="`/realisations/${project.slug}`" class="go">Voir le projet</NuxtLink>
        <a v-if="project.url" :href="project.url" target="_blank" rel="noopener">{{ project.domain }}</a>
      </p>
    </div>
    <NuxtLink :to="`/realisations/${project.slug}`" class="pc-shot" tabindex="-1" aria-hidden="true">
      <Capture v-bind="project.cover" alt="" />
    </NuxtLink>
  </article>
</template>

<style scoped>
.pc {
  display: grid; grid-template-columns: minmax(0, 4fr) minmax(0, 8fr);
  gap: 24px clamp(24px, 4vw, 64px); align-items: start;
}
.pc-name { margin-top: 8px; }
.pc-name a { text-decoration: none; }
.pc-name a:hover { text-decoration: underline; text-decoration-thickness: 1.5px; }
.pc-place { margin-top: 10px; font-size: 17px; }
.pc-hook { margin-top: 16px; }
.pc-links { margin-top: 22px; }
.pc-shot { display: block; }
.pc-shot :deep(img) { transition: opacity .25s; }
.pc-shot:hover :deep(img) { opacity: .9; }
@media (max-width: 860px) {
  .pc { grid-template-columns: 1fr; }
  .pc-shot { order: -1; }
}
</style>
