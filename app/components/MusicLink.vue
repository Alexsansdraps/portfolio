<script setup lang="ts">
// Lien « ce que j'écoute en ce moment » → profil Spotify, aux couleurs de Spotify (noir, vert, blanc).
// Logo en SVG dans la page : aucune ressource tierce chargée, le site reste sans traceur.
import { business } from '~/data/site'
</script>

<template>
  <a
    class="sp"
    :href="business.spotify"
    target="_blank" rel="noopener noreferrer"
    aria-label="Ce que j’écoute en ce moment, sur Spotify (nouvel onglet)"
  >
    <svg class="sp-logo" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
    <span class="sp-txt">
      <span class="sp-l1">Ce que j’écoute</span>
      <span class="sp-l2">sur Spotify</span>
    </span>
  </a>
</template>

<style scoped>
.sp {
  position: fixed; right: clamp(14px, 3vw, 28px); bottom: clamp(14px, 3vw, 28px);
  z-index: 20;
  display: flex; align-items: center; gap: 10px;
  padding: 8px 18px 8px 8px;
  background: #121212; color: #fff;
  border-radius: 999px;
  box-shadow: 0 8px 24px -10px rgb(0 0 0 / .5);
  text-decoration: none;
  transition: background .2s, transform .2s;
}
.sp:hover { background: #1f1f1f; transform: scale(1.03); }
.sp:focus-visible { outline: 2px solid #1ed760; outline-offset: 3px; }

.sp-logo { flex-shrink: 0; width: 30px; height: 30px; fill: #1ed760; }

.sp-txt { display: flex; flex-direction: column; line-height: 1.15; }
.sp-l1 { font-weight: 700; font-size: 14px; letter-spacing: -.01em; }
.sp-l2 { font-size: 12.5px; color: #b3b3b3; }
.sp:hover .sp-l2 { color: #1ed760; }

@media (max-width: 640px) {
  .sp { padding: 7px; }
  .sp-txt { display: none; }
}
</style>
