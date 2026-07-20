<script setup lang="ts">
import portrait from '~/assets/img/portrait.webp'

const { mode } = useAudienceMode()
</script>

<template>
  <section class="hero wrap">
    <div class="hero-txt">
      <p class="hero-eyebrow rise">{{ $t('hero.eyebrow') }}</p>
      <div class="hero-name rise d1" aria-label="Alexandra Porhansl">
        Alexandra
        <span class="l2">Porhansl<span class="dot">.</span></span>
      </div>
      <div class="hero-role rise d2">
        <h1>{{ $t('hero.role') }}</h1>
        <span class="stack">{{ $t('hero.stack') }}</span>
      </div>
      <div class="hero-status rise d3">
        <span><span class="pulse" aria-hidden="true" /><span class="st">{{ $t(`status.${mode}`) }}</span></span>
        <span>{{ $t('status.geo') }}</span>
      </div>
    </div>
    <div class="hero-pic rise d2">
      <img :src="portrait" width="720" height="938" :alt="$t('hero.portraitAlt')" fetchpriority="high">
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: clamp(28px, 5vw, 72px);
  align-items: end;
  /* plafonné : sur grand écran le contenu ne s'enfonce plus en bas de viewport */
  min-height: min(calc(100svh - 58px), 700px);
  padding-top: 40px;
}
.hero-txt { padding-bottom: clamp(32px, 6vh, 72px); }
.hero-eyebrow {
  font-family: var(--font-mono); font-size: clamp(10.5px, 1.05vw, 12.5px);
  color: var(--color-mute); letter-spacing: .06em;
  margin-bottom: clamp(22px, 4.5vh, 56px);
}
.hero-name {
  font-weight: 700;
  font-stretch: 125%;
  font-size: clamp(38px, 6vw, 78px);
  line-height: .95;
  letter-spacing: -.015em;
  text-transform: uppercase;
  margin-left: -0.04em;
}
.hero-name .l2 { display: block; }
.hero-name .dot { color: var(--color-wine); }
.hero-role {
  margin-top: clamp(18px, 3vh, 32px);
  display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 18px;
}
.hero-role h1 {
  font-size: clamp(12.5px, 1.4vw, 16px);
  font-weight: 300; letter-spacing: .22em; text-transform: uppercase;
  color: var(--color-bone);
}
.hero-role .stack {
  font-family: var(--font-mono); font-size: clamp(11px, 1.1vw, 13px);
  color: var(--color-mute); letter-spacing: .04em;
}
.hero-status {
  margin-top: clamp(20px, 3.2vh, 36px);
  border-top: 1px solid var(--color-ash);
  padding-top: 18px;
  display: flex; flex-direction: column; gap: 10px;
  font-family: var(--font-mono); font-size: clamp(10.5px, 1.1vw, 12.5px);
  letter-spacing: .05em; color: var(--color-mute);
}
.hero-status .st { color: var(--color-bone); }

.hero-pic { position: relative; align-self: end; }
.hero-pic img {
  display: block; width: 100%; max-width: 300px; height: auto;
  margin-left: auto;
  opacity: .9;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 9%, #000 100%),
                      linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-image: linear-gradient(to bottom, transparent 0, #000 9%, #000 100%),
              linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%);
  mask-composite: intersect;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    align-items: start;
    min-height: 0;
    padding-top: 28px;
  }
  .hero-pic { order: -1; }
  .hero-pic img { max-width: min(46vw, 200px); margin: 0 auto; }
  .hero-txt { padding-bottom: 8px; }
  .hero-name { font-size: min(10.2vw, calc((100vw - 48px) / 8), 64px); }
}
</style>
