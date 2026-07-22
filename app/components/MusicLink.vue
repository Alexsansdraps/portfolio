<script setup lang="ts">
// Widget « pochette vinyle » → chaîne YouTube Music.
// 100 % CSS, aucune ressource tierce : le site reste sans traceur.
</script>

<template>
  <a
    class="mw"
    href="https://music.youtube.com/@alexsansdraps2952"
    target="_blank" rel="noopener noreferrer"
    :aria-label="$t('lofi.real')"
  >
    <span class="disc" aria-hidden="true"><span class="label" /></span>
    <span class="txt">
      <span class="l1">{{ $t('lofi.real') }}</span>
      <span class="l2">YouTube Music <span class="arr">↗</span></span>
    </span>
  </a>
</template>

<style scoped>
.mw {
  position: fixed; right: clamp(16px, 3vw, 28px); bottom: clamp(16px, 3vw, 28px);
  z-index: 20;
  display: flex; align-items: center; gap: 11px;
  padding: 8px 14px 8px 8px;
  background: color-mix(in srgb, var(--color-carbon) 90%, transparent);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-ash);
  text-decoration: none;
  transition: border-color .25s;
}
.mw:hover { border-color: var(--color-wine); }
.mw:focus-visible { outline: 1px solid var(--color-wine); outline-offset: 3px; }

/* ---- le disque ---- */
.disc {
  position: relative; flex-shrink: 0;
  width: 34px; height: 34px; border-radius: 50%;
  background:
    repeating-radial-gradient(circle at 50% 50%,
      #17171b 0, #17171b 1px, #0c0c0f 1px, #0c0c0f 2.5px);
  box-shadow: inset 0 0 0 1px #000;
}
.disc .label {
  position: absolute; inset: 34%;
  border-radius: 50%;
  background: var(--color-wine);
  box-shadow: 0 0 0 1px #000;
}
.disc .label::after {
  content: ""; position: absolute; inset: 42%;
  border-radius: 50%; background: var(--color-void);
}

/* ---- texte ---- */
.txt { display: flex; flex-direction: column; gap: 2px; line-height: 1.2; }
.l1 {
  font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em;
  color: var(--color-bone);
}
.l2 {
  font-family: var(--font-mono); font-size: 8.5px; letter-spacing: .1em;
  color: var(--color-mute); text-transform: uppercase;
}
.arr { color: var(--color-wine); }

/* rotation au survol */
@media (prefers-reduced-motion: no-preference) {
  .disc { transition: box-shadow .25s; }
  .mw:hover .disc, .mw:focus-visible .disc { animation: spin 3.4s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
}

@media (max-width: 640px) {
  .mw { padding: 8px; gap: 0; }
  .txt { display: none; }
}
</style>
