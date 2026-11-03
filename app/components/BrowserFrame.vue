<script setup lang="ts">
/** Capture d'écran présentée dans une fenêtre de navigateur stylisée. */
defineProps<{
  src: string
  alt: string
  w: number
  h: number
  /** adresse affichée dans la barre */
  url?: string
  eager?: boolean
  sizes?: string
}>()
</script>

<template>
  <figure class="bf">
    <div class="bf-bar" aria-hidden="true">
      <span class="dots"><i /><i /><i /></span>
      <span v-if="url" class="bf-url">{{ url }}</span>
    </div>
    <img
      :src="src" :alt="alt" :width="w" :height="h"
      :loading="eager ? 'eager' : 'lazy'" :fetchpriority="eager ? 'high' : undefined"
      decoding="async"
    >
  </figure>
</template>

<style scoped>
.bf {
  margin: 0;
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgb(29 22 26 / .1);
  box-shadow:
    0 1px 2px rgb(29 22 26 / .06),
    0 24px 60px -28px rgb(29 22 26 / .45);
}
.bf-bar {
  display: flex; align-items: center; gap: 14px;
  height: 34px; padding: 0 14px;
  background: #f1ece6; border-bottom: 1px solid rgb(29 22 26 / .08);
}
.dots { display: flex; gap: 6px; }
.dots i { width: 9px; height: 9px; border-radius: 50%; background: #d9cfc6; }
.dots i:first-child { background: #e0897f; }
.dots i:nth-child(2) { background: #e6c170; }
.dots i:nth-child(3) { background: #8fc28a; }
.bf-url {
  flex: 1; max-width: 340px; margin: 0 auto;
  font-family: var(--font-mono); font-size: 11px; color: #6e6469;
  background: #fff; border-radius: 6px; padding: 4px 10px; text-align: center;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
img { display: block; width: 100%; height: auto; }
</style>
