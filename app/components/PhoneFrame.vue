<script setup lang="ts">
/**
 * Capture mobile présentée dans un vrai téléphone : coque, boutons latéraux, Dynamic Island,
 * barre d'état et barre d'accueil. Tout est dimensionné en cqw : le rendu reste juste
 * quelle que soit la taille du téléphone (vignette de 90 px comme visuel de 240 px).
 * theme : couleur de la barre d'état, assortie au haut du site affiché.
 */
withDefaults(defineProps<{ src: string, alt: string, w: number, h: number, theme?: 'light' | 'dark' }>(), {
  theme: 'light',
})
</script>

<template>
  <figure class="pf">
    <div class="body">
      <span class="btn-side action" aria-hidden="true" />
      <span class="btn-side vol-up" aria-hidden="true" />
      <span class="btn-side vol-down" aria-hidden="true" />
      <span class="btn-side power" aria-hidden="true" />
      <div class="screen" :class="theme">
        <div class="status" aria-hidden="true">
          <span class="time">9:41</span>
          <span class="island" />
          <span class="icons">
            <svg viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx=".8" /><rect x="5" y="5.5" width="3" height="6.5" rx=".8" /><rect x="10" y="3" width="3" height="9" rx=".8" /><rect x="15" y="0" width="3" height="12" rx=".8" /></svg>
            <svg viewBox="0 0 16 12"><path d="M8 11.5 5.6 9a3.4 3.4 0 0 1 4.8 0L8 11.5Zm-4.3-4.3L2 5.5a8.5 8.5 0 0 1 12 0l-1.7 1.7a6 6 0 0 0-8.6 0Z" /></svg>
            <svg viewBox="0 0 26 12"><rect x=".5" y=".5" width="22" height="11" rx="3" fill="none" stroke="currentColor" stroke-opacity=".45" /><rect x="2" y="2" width="16" height="8" rx="1.8" /><rect x="23.5" y="4" width="1.8" height="4" rx=".9" fill-opacity=".45" /></svg>
          </span>
        </div>
        <img :src="src" :alt="alt" :width="w" :height="h" loading="lazy" decoding="async">
        <span class="home-bar" aria-hidden="true" />
      </div>
    </div>
  </figure>
</template>

<style scoped>
/* .pf porte le conteneur : les cqw de la coque et de l'écran se rapportent à la largeur du téléphone */
.pf { container-type: inline-size; margin: 0; }
.body {
  position: relative;
  padding: 3.6cqw;
  border-radius: 17cqw;
  /* coque titane : dégradé + double liseré, ombre portée douce */
  background: linear-gradient(150deg, #4a474d 0%, #1d1b20 38%, #2b282e 70%, #444148 100%);
  box-shadow:
    inset 0 0 0 .5cqw #6b676f,
    inset 0 0 0 1.4cqw #0c0b0d,
    0 1px 2px rgb(29 22 26 / .25),
    0 34px 60px -30px rgb(29 22 26 / .65);
}

/* boutons sur la tranche */
.btn-side { position: absolute; width: 1.3cqw; background: linear-gradient(90deg, #2a272c, #5b575f); border-radius: 1cqw; }
.action { left: -1cqw; top: 17%; height: 7cqw; }
.vol-up { left: -1cqw; top: 25%; height: 13cqw; }
.vol-down { left: -1cqw; top: 33%; height: 13cqw; }
.power { right: -1cqw; top: 27%; height: 20cqw; transform: scaleX(-1); }

.screen {
  position: relative; overflow: hidden;
  border-radius: 13.6cqw;
  background: #fff;
  aspect-ratio: 9 / 19.5;
  display: flex; flex-direction: column;
}
.screen.dark { background: #120d0c; }

.status {
  position: relative; flex-shrink: 0;
  height: 13cqw; padding: 0 7.5cqw;
  display: flex; align-items: center; justify-content: space-between;
  color: #111; font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
}
.dark .status { color: #fff; }
.time { font-size: 4.6cqw; font-weight: 650; letter-spacing: -.01em; padding-top: .6cqw; }
.icons { display: flex; align-items: center; gap: 1.6cqw; padding-top: .6cqw; }
.icons svg { height: 3.4cqw; width: auto; fill: currentColor; }
.icons svg:last-child { height: 3.6cqw; }
.island {
  position: absolute; left: 50%; top: 3cqw; transform: translateX(-50%);
  width: 31cqw; height: 9cqw; border-radius: 99px; background: #000;
}

img {
  display: block; width: 100%; height: auto; flex: 1; min-height: 0;
  object-fit: cover; object-position: top;
}
.home-bar {
  position: absolute; left: 50%; bottom: 2.2cqw; transform: translateX(-50%);
  width: 35cqw; height: 1.3cqw; border-radius: 99px;
  background: rgb(17 17 17 / .7);
}
.dark .home-bar { background: rgb(255 255 255 / .8); }

/* reflet léger sur la vitre */
.screen::after {
  content: ""; position: absolute; inset: 0; pointer-events: none; border-radius: inherit;
  background: linear-gradient(115deg, rgb(255 255 255 / .1) 0%, transparent 32%);
}
</style>
