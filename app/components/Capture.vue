<script setup lang="ts">
/** Capture d'écran d'un site client, présentée telle quelle : un filet fin, une légende facultative. */
defineProps<{
  src: string
  alt: string
  w: number
  h: number
  caption?: string
  eager?: boolean
}>()
</script>

<template>
  <figure class="cap">
    <img
      :src="src" :alt="alt" :width="w" :height="h"
      :loading="eager ? 'eager' : 'lazy'" :fetchpriority="eager ? 'high' : undefined"
      decoding="async"
    >
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.cap { margin: 0; }
img { display: block; width: 100%; height: auto; border: 1px solid var(--color-hair); }
figcaption { margin-top: 10px; font-size: 15px; line-height: 1.4; color: var(--color-mute); }
</style>
