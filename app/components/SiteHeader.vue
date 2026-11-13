<script setup lang="ts">
import { business } from '~/data/site'

const nav = [
  { to: '/services', label: 'Services' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/parcours', label: 'Mon parcours' },
  { to: '/contact', label: 'Contact' },
]

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })

/* Filet sous la barre une fois qu'on a commencé à défiler */
const scrolled = ref(false)
onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 8 }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header class="bar" :class="{ scrolled, open }">
    <div class="wrap bar-in">
      <NuxtLink to="/" class="brand" aria-label="Alexandra Porhansl, agence web — accueil">
        <span class="b-name">Alexandra Porhansl<span class="dot">.</span></span>
      </NuxtLink>

      <nav class="nav" aria-label="Navigation principale">
        <NuxtLink v-for="n in nav" :key="n.to" :to="n.to" class="nav-link" :class="{ hot: n.hot }">{{ n.label }}</NuxtLink>
        <a :href="business.booking" class="btn nav-cta" target="_blank" rel="noopener">Parlons de votre projet</a>
      </nav>

      <button
        class="burger" type="button"
        :aria-expanded="open" aria-controls="menu-mobile"
        @click="open = !open"
      >
        <span class="sr">{{ open ? 'Fermer le menu' : 'Ouvrir le menu' }}</span>
        <span class="b-lines" aria-hidden="true"><span /><span /></span>
      </button>
    </div>

    <nav id="menu-mobile" class="m-nav" :hidden="!open" aria-label="Navigation mobile">
      <div class="wrap">
        <NuxtLink to="/" class="m-link">Accueil</NuxtLink>
        <NuxtLink v-for="n in nav" :key="n.to" :to="n.to" class="m-link">{{ n.label }}</NuxtLink>
        <a :href="business.booking" class="btn m-cta" target="_blank" rel="noopener">Parlons de votre projet <span class="arr" aria-hidden="true">↗</span></a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.bar {
  position: sticky; top: 0; z-index: 30;
  background: color-mix(in srgb, var(--color-paper) 86%, transparent);
  backdrop-filter: blur(14px) saturate(1.2);
  -webkit-backdrop-filter: blur(14px) saturate(1.2);
  border-bottom: 1px solid transparent;
  transition: border-color .25s;
}
.bar.scrolled, .bar.open { border-bottom-color: var(--color-line); }
.bar-in { display: flex; align-items: center; justify-content: space-between; gap: 20px; height: 72px; }

.brand { display: flex; text-decoration: none; color: var(--color-ink); line-height: 1; }
.b-name { font-weight: 780; font-stretch: 116%; font-size: 18px; letter-spacing: -.01em; }
.b-name .dot { color: var(--color-wine); }

.nav { display: flex; align-items: center; gap: clamp(14px, 2.4vw, 34px); }
.nav-link {
  position: relative;
  font-size: 15.5px; font-weight: 520; color: var(--color-ink); text-decoration: none;
  padding: 6px 0;
}
.nav-link::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 2px;
  background: var(--color-wine); transform: scaleX(0); transform-origin: left;
  transition: transform .25s;
}
.nav-link:hover::after, .nav-link.router-link-active::after { transform: scaleX(1); }
.nav-link.hot { color: var(--color-wine); font-weight: 650; }
.nav-link.hot::before {
  content: ""; display: inline-block; width: 7px; height: 7px; margin-right: 7px; vertical-align: 2px;
  border-radius: 50%; background: var(--color-wine);
}
.nav-cta { padding: 11px 20px; font-size: 15px; }

.burger { display: none; }
.m-nav { display: none; }
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }

@media (max-width: 1000px) {
  .nav { display: none; }
  .burger {
    display: grid; place-items: center;
    width: 46px; height: 46px; border-radius: 50%;
    border: 1px solid var(--color-line); background: var(--color-paper); cursor: pointer;
  }
  .b-lines { display: grid; gap: 6px; width: 18px; }
  .b-lines span { height: 2px; background: var(--color-ink); border-radius: 2px; transition: transform .25s; }
  .open .b-lines span:first-child { transform: translateY(4px) rotate(45deg); }
  .open .b-lines span:last-child { transform: translateY(-4px) rotate(-45deg); }

  .m-nav:not([hidden]) {
    display: block;
    border-top: 1px solid var(--color-line);
    padding: 12px 0 24px;
    min-height: calc(100svh - 72px);
    background: var(--color-paper);
  }
  .m-nav .wrap { display: flex; flex-direction: column; }
  .m-link {
    font-weight: 720; font-stretch: 112%; font-size: 30px; letter-spacing: -.01em;
    color: var(--color-ink); text-decoration: none;
    padding: 14px 0; border-bottom: 1px solid var(--color-line);
  }
  .m-link.router-link-exact-active { color: var(--color-wine); }
  .m-cta { margin-top: 28px; align-self: flex-start; }
}
</style>
