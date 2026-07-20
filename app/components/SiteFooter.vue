<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <footer class="foot wrap">
    <span>{{ $t('foot.left') }} <span class="sep" aria-hidden="true">·</span> <NuxtLink class="legal-link" :to="localePath('mentions')">{{ $t('foot.legal') }}</NuxtLink></span>
    <span>{{ $t('foot.right1') }} <span class="heart" aria-hidden="true">♥</span> {{ $t('foot.right2') }}</span>
  </footer>
</template>

<style scoped>
.foot {
  margin-top: clamp(48px, 8vh, 80px);
  border-top: 1px solid var(--color-ash);
  padding-top: 18px; padding-bottom: 30px;
  display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px;
  font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .08em;
  color: var(--color-mute);
}
.heart { color: var(--color-wine); }
.sep { color: var(--color-ash); }
.legal-link {
  color: var(--color-mute); text-decoration: underline;
  text-underline-offset: 4px; text-decoration-color: var(--color-ash);
  transition: color .2s;
}
.legal-link:hover { color: var(--color-wine); text-decoration-color: var(--color-wine); }
.legal-link:focus-visible { outline: 1px solid var(--color-wine); outline-offset: 3px; }
</style>
