<script setup lang="ts">
import { zone } from '~/data/site'

const { home, cities } = zone
const aria = `Carte de l’Alsace : depuis Mulhouse, ${cities.map(c => `${c.name} ${c.time}`).join(', ')}`

/* Le Rhin, de Bâle à Lauterbourg (mêmes coordonnées projetées que les villes) */
const rhine = 'M 218 600 C 214 560, 205 520, 203 470 S 212 400, 215 387 S 228 320, 234 290 S 255 220, 268 189 S 300 140, 328 110 S 360 70, 371 49'
</script>

<template>
  <svg class="zm" viewBox="40 30 380 600" role="img" :aria-label="aria">
    <!-- relief des Vosges, simple ombrage -->
    <ellipse class="vosges" cx="118" cy="300" rx="70" ry="210" />
    <text class="geo" x="78" y="250" transform="rotate(-72 78 250)">VOSGES</text>

    <!-- Rhin + pays voisins -->
    <path class="rhine" :d="rhine" />
    <text class="geo river" x="283" y="246" transform="rotate(-56 283 246)">RHIN</text>
    <text class="geo" x="330" y="300">ALLEMAGNE</text>
    <text class="geo" x="244" y="610">SUISSE</text>

    <!-- trajets depuis Mulhouse -->
    <g class="routes">
      <line v-for="c in cities" :key="c.name" :x1="home.x" :y1="home.y" :x2="c.x" :y2="c.y" />
    </g>

    <g v-for="c in cities" :key="`c-${c.name}`" class="city">
      <circle :cx="c.x" :cy="c.y" r="4" />
      <text class="c-name" :x="c.x + (c.side === 'left' ? -10 : 10)" :y="c.y - 1" :text-anchor="c.side === 'left' ? 'end' : 'start'">{{ c.name }}</text>
      <text class="c-time" :x="c.x + (c.side === 'left' ? -10 : 10)" :y="c.y + 12" :text-anchor="c.side === 'left' ? 'end' : 'start'">{{ c.time }}</text>
    </g>

    <g class="home">
      <circle class="home-halo" :cx="home.x" :cy="home.y" r="16" />
      <circle class="home-dot" :cx="home.x" :cy="home.y" r="6.5" />
      <text class="c-name home-name" :x="home.x + 14" :y="home.y + 20">{{ home.name }}</text>
    </g>
  </svg>
</template>

<style scoped>
.zm { display: block; width: 100%; height: auto; max-height: 640px; overflow: visible; }
.vosges { fill: color-mix(in srgb, var(--color-sand) 80%, var(--color-line)); }
.geo {
  font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .3em;
  fill: var(--color-mute); opacity: .8;
}
.rhine { fill: none; stroke: #8db3cf; stroke-width: 3; stroke-linecap: round; opacity: .75; }
.river { fill: #5d87a6; }

.routes line { stroke: var(--color-wine); stroke-width: 1.2; stroke-dasharray: 3 4; opacity: .55; }
.city circle { fill: var(--color-paper); stroke: var(--color-ink); stroke-width: 1.5; }
.c-name { font-family: var(--font-display); font-weight: 680; font-size: 13.5px; fill: var(--color-ink); }
.c-time { font-family: var(--font-mono); font-size: 10.5px; fill: var(--color-wine); letter-spacing: .04em; }
/* liseré couleur papier : étiquettes lisibles par-dessus le Rhin et les trajets */
.c-name, .c-time { paint-order: stroke; stroke: var(--color-paper); stroke-width: 4px; stroke-linejoin: round; }
.home-dot { fill: var(--color-wine); }
.home-halo { fill: var(--color-wine); opacity: .18; transform-box: fill-box; transform-origin: center; }
.home-name { font-size: 16px; font-weight: 780; fill: var(--color-wine); }

@media (prefers-reduced-motion: no-preference) {
  .home-halo { animation: halo 2.6s ease-out infinite; }
  @keyframes halo { 0% { transform: scale(.6); opacity: .35; } 100% { transform: scale(1.8); opacity: 0; } }
}
</style>
