<script setup lang="ts">
/* Témoignages clients (app/data/site.ts, et site.en.ts pour l'anglais). Rien ne s'affiche tant que la liste est vide. */
const { tr, chemin } = useLangue()
const c = useContenu()
</script>

<template>
  <section v-if="c.testimonials.length" class="section tm-sec" aria-labelledby="tm-title">
    <div class="wrap">
      <h2 id="tm-title" class="h2" data-reveal>{{ tr('Ils m’ont fait confiance', 'They trusted me') }}</h2>
      <div class="tm">
        <figure v-for="t in c.testimonials" :key="t.name" class="tm-item" data-reveal>
          <blockquote>{{ tr(`« ${t.quote} »`, `“${t.quote}”`) }}</blockquote>
          <figcaption>
            <strong>{{ t.name }}</strong>
            <span>{{ t.role }}</span>
            <NuxtLink v-if="t.project" :to="chemin(`/realisations/${t.project}`)" class="link">{{ tr('Voir le projet', 'See the project') }}</NuxtLink>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tm-sec { background: var(--color-sand); }
.tm { margin-top: clamp(28px, 4vw, 48px); display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: clamp(16px, 2vw, 24px); }
.tm-item { margin: 0; padding: clamp(24px, 3vw, 36px); border-radius: 22px; background: #fff; border: 1px solid var(--color-line); display: flex; flex-direction: column; gap: 20px; }
blockquote { font-size: clamp(18px, 1.6vw, 21px); line-height: 1.5; font-weight: 500; }
figcaption { margin-top: auto; display: flex; flex-direction: column; gap: 2px; font-size: 15.5px; }
figcaption strong { font-weight: 720; }
figcaption span { color: var(--color-graphite); }
figcaption .link { margin-top: 8px; width: fit-content; }
</style>
