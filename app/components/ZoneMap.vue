<script setup lang="ts">
import { zone } from '~/data/site'

const { home, cities } = zone
const aria = `Carte de l’Alsace avec Mulhouse et ${cities.map(c => c.name).join(', ')}`

/* Le Rhin, de Bâle à Lauterbourg (mêmes coordonnées projetées que les villes) */
const rhine = 'M 218 600 C 214 560, 205 520, 203 470 S 212 400, 215 387 S 228 320, 234 290 S 255 220, 268 189 S 300 140, 328 110 S 360 70, 371 49'
</script>

<template>
  <svg class="zm" viewBox="40 30 380 600" role="img" :aria-label="aria">
    <!-- relief des Vosges, simple ombrage -->
    <ellipse class="vosges" cx="118" cy="300" rx="70" ry="210" />
    <text class="geo" x="78" y="250" transform="rotate(-72 78 250)">Vosges</text>

    <!-- Rhin + pays voisins -->
    <path class="rhine" :d="rhine" />
    <text class="geo" x="283" y="246" transform="rotate(-56 283 246)">Rhin</text>
    <text class="geo" x="330" y="300">Allemagne</text>
    <text class="geo" x="244" y="610">Suisse</text>

    <g v-for="c in cities" :key="`c-${c.name}`">
      <circle class="city" :cx="c.x" :cy="c.y" r="3.5" />
      <text class="c-name" :x="c.x + (c.side === 'left' ? -9 : 9)" :y="c.y + 4" :text-anchor="c.side === 'left' ? 'end' : 'start'">{{ c.name }}</text>
    </g>

    <circle class="home-dot" :cx="home.x" :cy="home.y" r="6" />
    <text class="c-name home-name" :x="home.x + 13" :y="home.y + 19">{{ home.name }}</text>
  </svg>
</template>

<style scoped>
.zm { display: block; width: 100%; height: auto; max-height: 600px; overflow: visible; font-family: var(--font-serif); }
.vosges { fill: var(--color-soft); }
.geo { font-size: 12px; letter-spacing: .12em; font-variant-caps: all-small-caps; fill: var(--color-mute); }
.rhine { fill: none; stroke: #a9a9a9; stroke-width: 2; stroke-linecap: round; }
.city { fill: var(--color-paper); stroke: var(--color-ink); stroke-width: 1.2; }
.c-name { font-size: 14px; fill: var(--color-ink); paint-order: stroke; stroke: var(--color-paper); stroke-width: 4px; stroke-linejoin: round; }
.home-dot { fill: var(--color-ink); }
.home-name { font-size: 17px; font-weight: 600; }
</style>
