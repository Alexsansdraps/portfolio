<script setup lang="ts">
import { business } from '~/data/site'

withDefaults(defineProps<{ title?: string, text?: string }>(), {
  title: 'Vous avez un projet de site ?',
  text: 'Écrivez-moi quelques lignes sur votre activité et sur ce que vous avez en tête. Je vous réponds sous 24 heures.',
})
</script>

<template>
  <section class="sec" aria-labelledby="cta-title">
    <div class="wrap cols">
      <p class="t-sec">Contact</p>
      <div data-reveal>
        <h2 id="cta-title" class="t-h1">{{ title }}</h2>
        <p class="lead cta-p">{{ text }}</p>
        <p class="go-list cta-links">
          <NuxtLink to="/contact" class="go">Parlons de votre projet</NuxtLink>
          <NuxtLink to="/audit-gratuit" class="go">Commencer par un audit gratuit</NuxtLink>
          <a :href="`mailto:${business.email}`" class="muted">{{ business.email }}</a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-p { margin-top: 20px; color: var(--color-gray); }
.cta-links { margin-top: 28px; }
.cta-links a.muted { overflow-wrap: anywhere; }
</style>
