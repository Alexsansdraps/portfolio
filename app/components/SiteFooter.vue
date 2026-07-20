<template>
  <footer class="foot wrap">
    <span>{{ $t('foot.left') }}</span>
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
</style>
