<script setup lang="ts">
// Lien discret vers la chaîne YouTube Music, ancré en bas à droite.
// Aucune ressource tierce chargée : simple ancre, le site reste sans traceur.
</script>

<template>
  <a
    class="music"
    href="https://music.youtube.com/@alexsansdraps2952"
    target="_blank" rel="noopener noreferrer"
  >{{ $t('lofi.real') }} <span aria-hidden="true">↗</span></a>
</template>

<style scoped>
.music {
  position: fixed; right: clamp(16px, 3vw, 28px); bottom: clamp(16px, 3vw, 28px);
  z-index: 20;
  font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
  color: var(--color-mute); text-decoration: none; white-space: nowrap;
  transition: color .25s;
}
.music span { color: var(--color-wine); }
.music:hover { color: var(--color-bone); }
.music:focus-visible { outline: 1px solid var(--color-wine); outline-offset: 3px; }

@media (max-width: 640px) {
  .music { display: none; }
}
</style>
