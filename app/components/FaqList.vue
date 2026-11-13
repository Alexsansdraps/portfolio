<script setup lang="ts">
import type { Faq } from '~/data/site'

/* Données structurées FAQPage : les mêmes questions/réponses que celles affichées.
   Une même question ne se balise qu'une fois sur le site : la FAQ générale seulement sur l'accueil,
   les questions propres à un service (items) sur la page de ce service. */
const props = withDefaults(defineProps<{ schema?: boolean, items?: Faq[] }>(), { schema: true })
const c = useContenu()
const list = computed(() => props.items ?? c.value.faq)
if (props.schema) useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': list.value.map(f => ({
    '@type': 'Question',
    'name': f.q,
    'acceptedAnswer': { '@type': 'Answer', 'text': f.a },
  })),
})
</script>

<template>
  <div class="faq">
    <details v-for="(f, i) in list" :key="f.q" class="fq" :open="i === 0" data-reveal>
      <summary>
        <h3>{{ f.q }}</h3>
        <span class="ic" aria-hidden="true" />
      </summary>
      <p>{{ f.a }}</p>
    </details>
  </div>
</template>

<style scoped>
.faq { border-top: 1px solid var(--color-line); }
.fq { border-bottom: 1px solid var(--color-line); }
summary {
  list-style: none; cursor: pointer;
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
  padding: 22px 0;
}
summary::-webkit-details-marker { display: none; }
summary h3 { font-weight: 680; font-stretch: 106%; font-size: clamp(17px, 1.6vw, 20px); line-height: 1.35; }
summary:hover h3 { color: var(--color-wine); }
.ic { position: relative; flex-shrink: 0; width: 34px; height: 34px; border-radius: 50%; border: 1px solid var(--color-line); transition: background .2s, border-color .2s; }
.ic::before, .ic::after {
  content: ""; position: absolute; left: 50%; top: 50%; width: 12px; height: 1.5px;
  background: var(--color-ink); transform: translate(-50%, -50%); transition: transform .25s;
}
.ic::after { transform: translate(-50%, -50%) rotate(90deg); }
.fq[open] .ic { background: var(--color-wine); border-color: var(--color-wine); }
.fq[open] .ic::before, .fq[open] .ic::after { background: #fff; }
.fq[open] .ic::after { transform: translate(-50%, -50%) rotate(0); }
.fq p { padding: 0 56px 24px 0; font-size: 16.5px; line-height: 1.65; color: var(--color-graphite); max-width: 72ch; }
@media (max-width: 560px) { .fq p { padding-right: 0; } }
</style>
