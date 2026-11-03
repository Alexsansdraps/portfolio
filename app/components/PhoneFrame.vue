<script setup lang="ts">
/** Capture mobile présentée dans un cadre de téléphone. */
defineProps<{ src: string, alt: string, w: number, h: number }>()
</script>

<template>
  <figure class="pf">
    <img :src="src" :alt="alt" :width="w" :height="h" loading="lazy" decoding="async">
  </figure>
</template>

<style scoped>
.pf {
  margin: 0;
  padding: 7px;
  background: #16121a;
  border-radius: 30px;
  box-shadow: 0 30px 60px -30px rgb(29 22 26 / .6), inset 0 0 0 1px rgb(255 255 255 / .08);
}
img {
  display: block; width: 100%; height: auto;
  border-radius: 23px;
  aspect-ratio: 1 / 2; object-fit: cover; object-position: top;
}
</style>
