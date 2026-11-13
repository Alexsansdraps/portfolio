<script setup lang="ts">
import type { Shot } from '~/data/projects'

/**
 * Visuel de droite des en-têtes de page : aplat rose incliné avec une trame de points.
 * Par-dessus, soit une capture d'écran + un téléphone (cover / mobile), soit le contenu du slot
 * (aperçu « présence en ligne », portrait…).
 */
defineProps<{ cover?: Shot, url?: string, mobile?: Shot }>()
</script>

<template>
  <div class="hv" aria-hidden="true">
    <div class="hv-bg" />
    <slot>
      <div v-if="cover" class="hv-shot" data-depth="0.08">
        <BrowserFrame v-bind="cover" :url="url" eager />
      </div>
      <div v-if="mobile" class="hv-phone" data-depth="0.18">
        <PhoneFrame v-bind="mobile" />
      </div>
    </slot>
  </div>
</template>

<style scoped>
.hv { position: relative; aspect-ratio: 1 / .86; }
.hv-bg {
  position: absolute; inset: 4% -6% 2% 12%; border-radius: 36px; transform: rotate(-3deg);
  background:
    radial-gradient(circle at 78% 22%, color-mix(in srgb, var(--color-wine) 26%, transparent), transparent 58%),
    var(--color-blush);
  overflow: hidden;
}
.hv-bg::after {
  content: ""; position: absolute; inset: 0;
  background-image: radial-gradient(color-mix(in srgb, var(--color-wine) 30%, transparent) 1.3px, transparent 1.6px);
  background-size: 18px 18px;
  mask-image: linear-gradient(135deg, transparent 30%, #000 85%);
}
.hv-shot { position: absolute; left: 0; top: 16%; width: 84%; transform: rotate(-2deg); will-change: transform; }
.hv-phone { position: absolute; right: 2%; bottom: 0; width: 23%; min-width: 88px; transform: rotate(4deg); will-change: transform; }
</style>
