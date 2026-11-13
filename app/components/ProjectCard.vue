<script setup lang="ts">
import type { Project } from '~/data/projects'

/** as : niveau du titre selon la page (h3 sous un h2 de section, h2 sur la page Réalisations) */
defineProps<{ project: Project, flip?: boolean, as?: 'h2' | 'h3' }>()
const { tr, chemin } = useLangue()
</script>

<template>
  <article class="pc" :class="{ flip }">
    <NuxtLink :to="chemin(`/realisations/${project.slug}`)" class="pc-visual" tabindex="-1" aria-hidden="true" data-parallax>
      <BrowserFrame v-bind="project.cover" :url="project.domain" />
      <div class="pc-phone">
        <PhoneFrame v-bind="project.mobile" />
      </div>
    </NuxtLink>

    <div class="pc-body" data-reveal>
      <p class="pc-meta">
        <span class="status" :class="{ live: project.live }">{{ project.status }}</span>
        <span>{{ project.kind }}</span>
      </p>
      <component :is="as || 'h3'" class="pc-name">
        <NuxtLink :to="chemin(`/realisations/${project.slug}`)">{{ project.name }}</NuxtLink>
      </component>
      <p class="pc-place">{{ [project.sector, project.place].filter(Boolean).join(' · ') }}</p>
      <p class="pc-hook">{{ project.hook }}</p>

      <ul v-if="project.figures.length" class="pc-figs">
        <li v-for="f in project.figures" :key="f.k"><b>{{ f.v }}</b><span>{{ f.k }}</span></li>
      </ul>

      <div class="pc-actions">
        <NuxtLink class="btn" :to="chemin(`/realisations/${project.slug}`)">
          {{ tr('Voir le projet', 'See the project') }} <span class="arr" aria-hidden="true">→</span>
        </NuxtLink>
        <a v-if="project.url" class="btn btn-ghost" :href="project.url" target="_blank" rel="noopener">
          {{ tr('Visiter le site', 'Visit the website') }} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.pc {
  display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  gap: clamp(32px, 5vw, 80px); align-items: center;
}
.pc.flip .pc-visual { order: 2; }

.pc-visual { position: relative; display: block; padding: 0 0 40px 0; }
.pc-visual :deep(.bf) { transition: transform .5s cubic-bezier(.2, .65, .25, 1); }
.pc-visual:hover :deep(.bf) { transform: translateY(-6px); }
.pc-phone {
  position: absolute; right: -14px; bottom: 0; width: 22%; min-width: 92px;
  transform: rotate(3deg);
}
.flip .pc-phone { right: auto; left: -14px; transform: rotate(-3deg); }

.pc-meta {
  display: flex; flex-wrap: wrap; align-items: center; gap: 8px 14px;
 font-weight: 650; font-size: 14.5px;
  color: color-mix(in srgb, currentColor 70%, transparent);
}
.status {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 5px 11px; border-radius: 999px;
  border: 1px solid color-mix(in srgb, currentColor 30%, transparent);
}
.status::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: #d9a441; }
.status.live::before { background: #39b36e; }

.pc-name {
  margin-top: 18px;
  font-weight: 780; font-stretch: 114%; font-size: clamp(30px, 3.6vw, 46px);
  line-height: 1.02; letter-spacing: -.02em;
}
.pc-name a { color: inherit; text-decoration: none; }
.pc-name a:hover { text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 6px; }
.pc-place { margin-top: 8px; font-size: 15px; color: color-mix(in srgb, currentColor 65%, transparent); }
.pc-hook { margin-top: 18px; font-size: clamp(17px, 1.5vw, 19px); line-height: 1.55; max-width: 44ch; }

.pc-figs {
  list-style: none; margin-top: 26px; padding-top: 22px;
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px;
  border-top: 1px solid color-mix(in srgb, currentColor 18%, transparent);
}
.pc-figs li { display: flex; flex-direction: column; gap: 4px; }
.pc-figs b { font-weight: 780; font-stretch: 112%; font-size: 26px; line-height: 1; }
.pc-figs span { font-size: 13px; line-height: 1.4; color: color-mix(in srgb, currentColor 65%, transparent); }

.pc-actions { margin-top: 30px; display: flex; flex-wrap: wrap; gap: 12px; }

@media (max-width: 900px) {
  .pc { grid-template-columns: 1fr; }
  .pc.flip .pc-visual { order: 0; }
  .pc-phone { right: -6px; width: 24%; }
  .flip .pc-phone { left: auto; right: -6px; transform: rotate(3deg); }
}
@media (max-width: 480px) {
  .pc-figs { grid-template-columns: 1fr 1fr; }
  .pc-figs li:last-child { grid-column: 1 / -1; }
}
</style>
