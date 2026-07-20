<script setup lang="ts">
/** Niveaux CECRL → largeur de jauge : A1 16 · A2 33 · B1 50 · B2 66 · C1 83 · natif 100 */
const items = [
  { id: 'fr', code: 'FR', pct: 100 },
  { id: 'en', code: 'EN', pct: 50, target: 66 },
  { id: 'de', code: 'DE', pct: 33, target: 50 },
] as const
</script>

<template>
  <section id="langues" class="ls wrap">
    <h2 class="sec-label" data-reveal>{{ $t('langs.title') }} <span class="range">{{ $t('langs.range') }}</span></h2>

    <div class="l-rows">
      <div v-for="l in items" :key="l.id" class="l-row" data-reveal>
        <div class="l-head">
          <span class="l-code">{{ l.code }}</span>
          <span class="l-name">{{ $t(`langs.${l.id}.name`) }}</span>
          <span class="l-level">{{ $t(`langs.${l.id}.level`) }}</span>
        </div>
        <div class="l-bar" role="img" :aria-label="`${$t(`langs.${l.id}.name`)} — ${$t(`langs.${l.id}.level`)}`">
          <span class="l-fill" :style="{ width: l.pct + '%' }" />
          <span v-if="'target' in l && l.target" class="l-goal" :style="{ left: l.pct + '%', width: (l.target - l.pct) + '%' }" />
        </div>
        <p v-if="$t(`langs.${l.id}.note`)" class="l-note">{{ $t(`langs.${l.id}.note`) }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ls { padding-top: clamp(64px, 11vh, 120px); }
.sec-label {
  display: flex; align-items: baseline; gap: 18px;
  font-weight: 300; font-size: 13px; letter-spacing: .3em; text-transform: uppercase;
  color: var(--color-bone); margin-bottom: clamp(30px, 5vh, 48px);
}
.sec-label::before { content: "—"; color: var(--color-wine); letter-spacing: 0; }
.sec-label .range { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--color-mute); }

.l-rows { display: flex; flex-direction: column; gap: clamp(26px, 4vh, 38px); max-width: 720px; }
.l-head {
  display: flex; align-items: baseline; gap: 16px;
  margin-bottom: 10px;
}
.l-code { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--color-wine); width: 28px; }
.l-name {
  font-weight: 300; font-size: 14px; letter-spacing: .18em; text-transform: uppercase;
  color: var(--color-bone);
}
.l-level { margin-left: auto; font-family: var(--font-mono); font-size: 11.5px; letter-spacing: .05em; color: var(--color-mute); }

.l-bar { position: relative; height: 2px; background: var(--color-ash); overflow: hidden; }
.l-fill { position: absolute; inset: 0 auto 0 0; background: var(--color-wine); }
.l-goal { position: absolute; top: 0; bottom: 0; background: color-mix(in srgb, var(--color-wine) 35%, transparent); }

.l-note {
  margin-top: 8px;
  font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em;
  color: var(--color-mute);
}
</style>
