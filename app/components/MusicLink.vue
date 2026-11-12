<script setup lang="ts">
// Widget « pochette vinyle » → profil Spotify.
// 100 % CSS, aucune ressource tierce chargée : le site reste sans traceur.
import { business } from '~/data/site'
</script>

<template>
  <a
    class="mw"
    :href="business.spotify"
    target="_blank" rel="noopener noreferrer"
    aria-label="Ce que j’écoute en ce moment, sur Spotify (nouvel onglet)"
  >
    <span class="disc" aria-hidden="true"><span class="label" /></span>
    <span class="txt">
      <span class="l1">ce que j’écoute en ce moment</span>
      <span class="l2">Spotify <span class="arr">↗</span></span>
    </span>
  </a>
</template>

<style scoped>
.mw {
  position: fixed; right: clamp(14px, 3vw, 28px); bottom: clamp(14px, 3vw, 28px);
  z-index: 20;
  display: flex; align-items: center; gap: 11px;
  padding: 7px 16px 7px 7px;
  background: color-mix(in srgb, var(--color-paper) 88%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--color-line);
  border-radius: 999px;
  box-shadow: 0 6px 24px -12px rgb(29 22 26 / .35);
  text-decoration: none;
  transition: border-color .25s, transform .25s;
}
.mw:hover { border-color: var(--color-wine); transform: translateY(-2px); }

/* ---- le disque ---- */
.disc {
  position: relative; flex-shrink: 0;
  width: 34px; height: 34px; border-radius: 50%;
  background: repeating-radial-gradient(circle at 50% 50%, #1f1a1d 0, #1f1a1d 1px, #0e0b0d 1px, #0e0b0d 2.5px);
  box-shadow: inset 0 0 0 1px #000;
}
.disc .label { position: absolute; inset: 34%; border-radius: 50%; background: var(--color-wine); }
.disc .label::after { content: ""; position: absolute; inset: 42%; border-radius: 50%; background: var(--color-paper); }

/* ---- texte ---- */
.txt { display: flex; flex-direction: column; gap: 1px; line-height: 1.2; }
.l1 { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .04em; color: var(--color-ink); }
.l2 { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .1em; color: var(--color-mute); text-transform: uppercase; }
.arr { color: #1db954; }

@media (prefers-reduced-motion: no-preference) {
  .mw:hover .disc, .mw:focus-visible .disc { animation: spin 3.4s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
}

@media (max-width: 640px) {
  .mw { padding: 6px; gap: 0; }
  .txt { display: none; }
}
</style>
