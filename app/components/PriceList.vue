<script setup lang="ts">
import type { Price } from '~/data/site'

/* Grille de prix d'un service : libellé à gauche, prix à droite. */
defineProps<{ prices: Price[], note?: string }>()
</script>

<template>
  <div class="pl">
    <dl>
      <div v-for="p in prices" :key="p.label" class="pl-row">
        <dt>{{ p.label }}</dt>
        <dd class="num">{{ p.value }}</dd>
      </div>
    </dl>
    <p v-if="note" class="small pl-note">{{ note }}</p>
  </div>
</template>

<style scoped>
.pl { max-width: 640px; }
dl { border-top: 1px solid var(--color-hair); }
.pl-row {
  display: flex; align-items: baseline; justify-content: space-between; gap: 6px 24px; flex-wrap: wrap;
  padding: 12px 0; border-bottom: 1px solid var(--color-hair);
}
/* margin-left: auto : le prix reste calé à droite même quand il passe à la ligne */
dd { margin-left: auto; font-weight: 500; white-space: nowrap; }
.pl-note { margin-top: 10px; }
</style>
