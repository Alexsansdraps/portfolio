<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const { mode, setMode } = useAudienceMode()

/* CV dans la langue du visiteur — pas encore de version DE, l'anglais fait le pont */
const cvHref = computed(() =>
  locale.value === 'fr' ? '/cv/cv-alexandra-porhansl-fr.pdf' : '/cv/cv-alexandra-porhansl-en.pdf',
)
</script>

<template>
  <header class="bar">
    <div class="wrap bar-in">
      <div class="bar-id">
        <span class="short" aria-hidden="true">AP<em>.</em></span>
        <span class="long">Alexandra Porhansl <em>·</em> <span class="full">Full-Stack</span></span>
      </div>
      <div class="bar-right">
        <nav class="langs" :aria-label="$t('nav.aria')">
          <NuxtLink
            v-for="l in locales"
            :key="l.code"
            :to="switchLocalePath(l.code)"
            :aria-current="l.code === locale ? 'true' : undefined"
            :title="l.name"
          >{{ l.code.toUpperCase() }}</NuxtLink>
        </nav>
        <div class="mode" role="group" :aria-label="$t('nav.modeAria')">
          <button :aria-pressed="mode === 'fl'" @click="setMode('fl')">{{ $t('nav.freelance') }}</button>
          <button :aria-pressed="mode === 'cdi'" @click="setMode('cdi')">{{ $t('nav.cdi') }}</button>
        </div>
        <a class="cv-btn" :href="cvHref" download :title="$t('nav.cv')" :aria-label="$t('nav.cv')">CV <span aria-hidden="true">↓</span></a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.bar {
  position: sticky; top: 0; z-index: 10;
  background: color-mix(in srgb, var(--color-void) 88%, transparent);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-ash);
}
.bar-in {
  display: flex; align-items: center; justify-content: space-between;
  gap: 16px; height: 58px;
}
.bar-id {
  font-family: var(--font-mono); font-size: 11.5px; font-weight: 500;
  letter-spacing: .14em; color: var(--color-bone); text-transform: uppercase;
  white-space: nowrap;
}
.bar-id em { font-style: normal; color: var(--color-wine); }
.bar-id .short { display: none; }
.bar-right { display: flex; align-items: center; gap: clamp(10px, 2.5vw, 28px); }
.langs { display: flex; gap: 2px; }
.langs a {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
  color: var(--color-mute); padding: 6px 8px; text-decoration: none;
}
.langs a[aria-current="true"] {
  color: var(--color-bone);
  text-decoration: underline; text-underline-offset: 5px;
  text-decoration-color: var(--color-wine);
}
.langs a:hover { color: var(--color-bone); }
.langs a:focus-visible, .mode button:focus-visible {
  outline: 1px solid var(--color-wine); outline-offset: 3px;
}
.mode { display: flex; border: 1px solid var(--color-ash); }
.mode button {
  all: unset; cursor: pointer;
  font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .12em;
  color: var(--color-mute); padding: 8px 14px; text-transform: uppercase;
  transition: color .25s, background .25s;
}
.mode button[aria-pressed="true"] { background: var(--color-wine); color: var(--color-void); font-weight: 600; }
.mode button[aria-pressed="false"]:hover { color: var(--color-bone); }

.cv-btn {
  font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .12em;
  color: var(--color-bone); text-decoration: none; text-transform: uppercase;
  border: 1px solid var(--color-ash); padding: 8px 12px;
  transition: color .2s, border-color .2s;
  white-space: nowrap;
}
.cv-btn span { color: var(--color-wine); }
.cv-btn:hover { color: var(--color-wine); border-color: var(--color-wine); }
.cv-btn:focus-visible { outline: 1px solid var(--color-wine); outline-offset: 3px; }

/* FESTANSTELLUNG (DE) rend le toggle large : monogramme sous 640px */
@media (max-width: 640px) {
  .bar-id .long { display: none; }
  .bar-id .short { display: inline; font-size: 13px; }
  .bar-right { gap: 8px; }
  .langs a { padding: 5px 5px; font-size: 10px; }
  .mode button { padding: 7px 9px; font-size: 9.5px; letter-spacing: .06em; }
  .cv-btn { padding: 7px 9px; font-size: 9.5px; letter-spacing: .06em; }
}
</style>
