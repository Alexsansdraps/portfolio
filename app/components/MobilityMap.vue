<script setup lang="ts">
const { t, tm, rt } = useI18n()

/* Positions ~géographiques depuis Mulhouse (centre), échelle ≈ temps de route.
   flip → étiquette à gauche du point (villes côté ouest / lignes croisées) */
const cities = [
  { id: 'colmar', x: 322, y: 148, time: '30 min', country: 'FR', flip: false },
  { id: 'basel', x: 362, y: 268, time: '35 min', country: 'CH', flip: true },
  { id: 'belfort', x: 210, y: 244, time: '40 min', country: 'FR', flip: true },
  { id: 'freiburg', x: 396, y: 168, time: '50 min', country: 'DE', flip: false },
  { id: 'montbeliard', x: 186, y: 283, time: '50 min', country: 'FR', flip: true },
  { id: 'strasbourg', x: 352, y: 92, time: '55 min', country: 'FR', flip: false },
  { id: 'zurich', x: 505, y: 315, time: '1 h 50', country: 'CH', flip: false },
] as const

const CX = 300
const CY = 220

const chips = computed(() => {
  const raw = tm('mob.chips') as unknown[]
  return Array.isArray(raw) ? raw.map(c => rt(c as any)) : []
})
</script>

<template>
  <section id="mobilite" class="mob wrap">
    <h2 class="sec-label" data-reveal>{{ $t('mob.title') }} <span class="range">{{ $t('mob.range') }}</span></h2>

    <div class="mob-grid">
      <div class="mob-txt" data-reveal>
        <p>{{ $t('mob.text') }}</p>
        <div class="tags">
          <span v-for="c in chips" :key="c" class="tag">{{ c }}</span>
        </div>
      </div>

      <svg
        class="mob-map" data-reveal
        viewBox="0 0 640 440" role="img" :aria-label="t('mob.mapAria')"
      >
        <!-- anneaux de temps de trajet -->
        <g class="rings">
          <circle :cx="CX" :cy="CY" r="70" />
          <circle :cx="CX" :cy="CY" r="140" />
          <circle :cx="CX" :cy="CY" r="245" />
        </g>
        <g class="ring-labels">
          <text :x="CX" :y="CY + 84">30 MIN</text>
          <text :x="CX - 105" :y="CY - 103">1 H</text>
          <text :x="CX - 180" :y="CY - 178">2 H</text>
        </g>

        <!-- villes : la ligne vit dans le groupe → hover ciblé -->
        <g
          v-for="c in cities" :key="c.id"
          class="city" tabindex="0"
          :aria-label="`${$t(`mob.cities.${c.id}`)} — ${c.time}`"
        >
          <line :x1="CX" :y1="CY" :x2="c.x" :y2="c.y" />
          <circle :cx="c.x" :cy="c.y" r="3.5" />
          <text class="c-name" :x="c.x + (c.flip ? -10 : 10)" :y="c.y + 1" :text-anchor="c.flip ? 'end' : 'start'">{{ $t(`mob.cities.${c.id}`) }}</text>
          <text class="c-meta" :x="c.x + (c.flip ? -10 : 10)" :y="c.y + 14" :text-anchor="c.flip ? 'end' : 'start'">{{ c.time }} · {{ c.country }}</text>
        </g>

        <!-- Mulhouse -->
        <g class="home">
          <circle class="home-dot" :cx="CX" :cy="CY" r="5" />
          <text class="c-name home-name" :x="CX + 12" :y="CY - 8">{{ $t('mob.home') }}</text>
          <text class="c-meta" :x="CX + 12" :y="CY + 5">{{ $t('mob.homeTag') }}</text>
        </g>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.mob { padding-top: clamp(64px, 11vh, 120px); }
.sec-label {
  display: flex; align-items: baseline; gap: 18px;
  font-weight: 300; font-size: 13px; letter-spacing: .3em; text-transform: uppercase;
  color: var(--color-bone); margin-bottom: clamp(26px, 4vh, 40px);
}
.sec-label::before { content: "—"; color: var(--color-wine); letter-spacing: 0; }
.sec-label .range { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--color-mute); }

.mob-grid {
  display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr);
  gap: clamp(28px, 5vw, 64px); align-items: center;
}
.mob-txt p {
  font-size: clamp(15px, 1.7vw, 18px); font-weight: 300; line-height: 1.65;
  color: color-mix(in srgb, var(--color-bone) 88%, var(--color-mute));
  max-width: 44ch;
}
.tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 22px; }
.tag {
  font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em;
  color: var(--color-mute); border: 1px solid var(--color-ash); padding: 5px 10px;
}

.mob-map { width: 100%; height: auto; display: block; }
.rings circle { fill: none; stroke: var(--color-ash); stroke-width: 1; }
.ring-labels text {
  font-family: var(--font-mono); font-size: 9px; letter-spacing: .12em;
  fill: var(--color-mute); text-anchor: middle;
}

/* ---- villes interactives ---- */
.city { cursor: pointer; outline: none; transition: opacity .3s; }
.city line { stroke: var(--color-wine); stroke-opacity: .45; stroke-width: 1; transition: stroke-opacity .25s, stroke-width .25s; }
.city circle {
  fill: var(--color-bone);
  transform-box: fill-box; transform-origin: center;
  transition: transform .25s, fill .25s;
}
.c-name {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
  fill: var(--color-bone); transition: fill .25s;
}
.c-meta {
  font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .05em;
  fill: var(--color-mute); transition: fill .25s;
}

.city:hover line, .city:focus-visible line { stroke-opacity: 1; stroke-width: 1.5; }
.city:hover circle, .city:focus-visible circle { transform: scale(1.7); fill: var(--color-wine); }
.city:hover .c-name, .city:focus-visible .c-name { fill: var(--color-wine); }
.city:hover .c-meta, .city:focus-visible .c-meta { fill: var(--color-bone); }

/* les autres s'effacent quand une ville est visée */
.mob-map:has(.city:hover) .city:not(:hover),
.mob-map:has(.city:focus-visible) .city:not(:focus-visible) { opacity: .3; }

.home-dot { fill: var(--color-wine); animation: pulse 2.4s ease-in-out infinite; }
.home-name { fill: var(--color-wine); }

@media (max-width: 860px) {
  .mob-grid { grid-template-columns: 1fr; }
  .mob-map { max-width: 560px; margin: 0 auto; }
}
</style>
