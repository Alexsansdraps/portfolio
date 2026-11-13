<script setup lang="ts">
/* Petit bouton rond « revenir en haut », visible une fois qu'on a fait défiler la page.
   Lien vers #haut : le défilement doux (Lenis) gère l'ancre, et sans JS le lien marche quand même. */
const { tr } = useLangue()
const visible = ref(false)
onMounted(() => {
  const onScroll = () => { visible.value = window.scrollY > 600 }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <a href="#haut" class="rh" :class="{ visible }" :aria-label="tr('Revenir en haut de la page', 'Back to the top of the page')">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  </a>
</template>

<style scoped>
.rh {
  position: fixed; right: clamp(14px, 3vw, 28px); bottom: clamp(14px, 3vw, 28px); z-index: 20;
  display: grid; place-items: center; width: 48px; height: 48px; border-radius: 50%;
  background: var(--color-wine); color: #fff;
  box-shadow: 0 10px 26px -10px rgb(29 22 26 / .55);
  opacity: 0; transform: translateY(12px); pointer-events: none;
  transition: opacity .25s, transform .25s, background .2s;
}
.rh.visible { opacity: 1; transform: none; pointer-events: auto; }
.rh:hover { background: var(--color-wine-deep); }
.rh svg { width: 22px; height: 22px; }
@media (prefers-reduced-motion: reduce) { .rh { transition: none; } }
</style>
