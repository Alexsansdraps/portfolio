<script setup lang="ts">
const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

interface LegalSection { h: string, p: string[] }

const sections = computed<LegalSection[]>(() => {
  const raw = tm('legal.s') as unknown[]
  if (!Array.isArray(raw)) return []
  return raw.map((s: any) => ({
    h: rt(s.h),
    p: Array.isArray(s.p) ? s.p.map((x: any) => rt(x)) : [],
  }))
})

useSeoMeta({
  title: () => `${t('legal.title')} — Alexandra Porhansl`,
  robots: 'noindex, follow',
})
</script>

<template>
  <main class="legal wrap">
    <NuxtLink class="back" :to="localePath('index')">{{ $t('legal.back') }}</NuxtLink>

    <h1 class="sec-label">{{ $t('legal.title') }} <span class="range">{{ $t('legal.updated') }}</span></h1>

    <section v-for="s in sections" :key="s.h" class="l-sec">
      <h2>{{ s.h }}</h2>
      <p v-for="(par, i) in s.p" :key="i">{{ par }}</p>
    </section>
  </main>
</template>

<style scoped>
.legal { padding-top: clamp(40px, 7vh, 72px); min-height: calc(100svh - 200px); }
.back {
  font-family: var(--font-mono); font-size: 11.5px; letter-spacing: .08em;
  color: var(--color-mute); text-decoration: none;
}
.back:hover { color: var(--color-wine); }
.back:focus-visible { outline: 1px solid var(--color-wine); outline-offset: 3px; }

.sec-label {
  display: flex; flex-wrap: wrap; align-items: baseline; gap: 18px;
  font-weight: 300; font-size: clamp(18px, 2.4vw, 24px); letter-spacing: .22em; text-transform: uppercase;
  color: var(--color-bone);
  margin: clamp(28px, 5vh, 44px) 0 clamp(30px, 5vh, 48px);
}
.sec-label::before { content: "—"; color: var(--color-wine); letter-spacing: 0; }
.sec-label .range { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--color-mute); text-transform: none; }

.l-sec { margin-bottom: clamp(28px, 4.5vh, 40px); max-width: 68ch; }
.l-sec h2 {
  font-weight: 640; font-stretch: 82%;
  font-size: 15px; letter-spacing: .06em; text-transform: uppercase;
  color: var(--color-wine);
  margin-bottom: 10px;
}
.l-sec p {
  font-size: 14.5px; line-height: 1.7; font-weight: 380;
  color: color-mix(in srgb, var(--color-bone) 82%, var(--color-mute));
  margin-bottom: 8px;
}
</style>
