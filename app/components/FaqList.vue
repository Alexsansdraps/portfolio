<script setup lang="ts">
import { faq, type Faq } from '~/data/site'

/* Données structurées FAQPage : les mêmes questions/réponses que celles affichées.
   Une même question ne se balise qu'une fois sur le site : la FAQ générale seulement sur l'accueil,
   les questions propres à un service (items) sur la page de ce service. */
const props = withDefaults(defineProps<{ schema?: boolean, items?: Faq[] }>(), { schema: true })
const list = props.items ?? faq
if (props.schema) useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': list.map(f => ({
    '@type': 'Question',
    'name': f.q,
    'acceptedAnswer': { '@type': 'Answer', 'text': f.a },
  })),
})
</script>

<template>
  <div class="faq">
    <details v-for="(f, i) in list" :key="f.q" class="fq" :open="i === 0">
      <summary>
        <h3>{{ f.q }}</h3>
        <span class="ic" aria-hidden="true" />
      </summary>
      <p class="muted">{{ f.a }}</p>
    </details>
  </div>
</template>

<style scoped>
.faq { border-top: 1px solid var(--color-ink); }
.fq { border-bottom: 1px solid var(--color-hair); }
summary {
  list-style: none; cursor: pointer;
  display: flex; align-items: baseline; justify-content: space-between; gap: 24px;
  padding: 18px 0;
}
summary::-webkit-details-marker { display: none; }
summary h3 { font-weight: 500; font-size: clamp(20px, 1.8vw, 23px); line-height: 1.3; }
summary:hover h3 { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: .2em; }
.ic::before { content: "+"; font-size: 26px; line-height: 1; color: var(--color-mute); }
.fq[open] .ic::before { content: "−"; }
.fq p { padding: 0 3em 22px 0; max-width: 40em; }
@media (max-width: 560px) { .fq p { padding-right: 0; } }
</style>
