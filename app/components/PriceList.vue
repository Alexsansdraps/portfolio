<script setup lang="ts">
import type { Price } from '~/data/site'

/* Grille de prix d'un service (page Services) : libellé à gauche, prix à droite. */
defineProps<{ prices: Price[], note?: string }>()
</script>

<template>
  <div class="pl">
    <dl class="pl-box">
      <div v-for="p in prices" :key="p.label" class="pl-row">
        <dt>{{ p.label }}</dt>
        <dd>{{ p.value }}</dd>
      </div>
    </dl>
    <p v-if="note" class="pl-note">{{ note }}</p>
  </div>
</template>

<style scoped>
.pl { margin-top: 28px; max-width: 560px; }
.pl-box { border-radius: 16px; background: #fff; border: 1px solid var(--color-line); padding: 4px 20px; }
.pl-row {
  display: flex; align-items: baseline; justify-content: space-between; gap: 8px 20px; flex-wrap: wrap;
  padding: 14px 0; border-bottom: 1px solid var(--color-line);
}
.pl-row:last-child { border-bottom: 0; }
dt { font-size: 16px; line-height: 1.45; color: var(--color-ink); }
/* margin-left: auto → le prix reste calé à droite même quand il passe à la ligne */
dd { margin-left: auto; font-weight: 740; font-stretch: 108%; font-size: 17px; color: var(--color-wine); white-space: nowrap; }
.pl-note { margin-top: 10px; font-family: var(--font-mono); font-size: 12px; color: var(--color-mute); }
</style>
