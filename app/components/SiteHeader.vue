<script setup lang="ts">
import { business } from '~/data/site'

const { tr, chemin, en, cheminAutreLangue } = useLangue()

const nav = computed<{ to: string, label: string, hot?: boolean }[]>(() => [
  { to: chemin('/services'), label: 'Services' },
  { to: chemin('/realisations'), label: tr('Réalisations', 'Projects') },
  { to: chemin('/parcours'), label: tr('Mon parcours', 'About me') },
  { to: chemin('/contact'), label: 'Contact' },
])

/* Choix explicite de langue : retenu dans le navigateur, la détection automatique (app.vue) ne s'en mêle plus. */
function choisirLangue(l: 'fr' | 'en') {
  try { localStorage.setItem('langue', l) }
  catch { /* navigation privée : tant pis, le lien suffit */ }
}

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
      <NuxtLink :to="chemin('/')" class="brand" :aria-label="tr('Alexandra Porhansl, développeuse web freelance, accueil', 'Alexandra Porhansl, freelance web developer, home')">
        <span class="b-name">Alexandra Porhansl<span class="dot">.</span></span>
      </NuxtLink>

      <nav class="nav" :aria-label="tr('Navigation principale', 'Main navigation')">
        <NuxtLink v-for="n in nav" :key="n.to" :to="n.to" class="nav-link" :class="{ hot: n.hot }">{{ n.label }}</NuxtLink>
        <span class="lang" role="group" aria-label="Langue / Language">
          <span v-if="!en" class="on" aria-current="true">FR</span>
          <NuxtLink v-else :to="cheminAutreLangue" hreflang="fr" lang="fr" aria-label="Version française" @click="choisirLangue('fr')">FR</NuxtLink>
          <span v-if="en" class="on" aria-current="true">EN</span>
          <NuxtLink v-else :to="cheminAutreLangue" hreflang="en" lang="en" aria-label="English version" @click="choisirLangue('en')">EN</NuxtLink>
        </span>
        <a :href="business.booking" class="btn nav-cta" target="_blank" rel="noopener">{{ tr('Parlons de votre projet', 'Let’s talk about your project') }}</a>
      </nav>

      <div class="m-end">
        <NuxtLink
          :to="cheminAutreLangue" class="lang-m" :hreflang="en ? 'fr' : 'en'" :lang="en ? 'fr' : 'en'"
          :aria-label="en ? 'Version française' : 'English version'" @click="choisirLangue(en ? 'fr' : 'en')"
        >
          {{ en ? 'FR' : 'EN' }}
        </NuxtLink>
        <button
          class="burger" type="button"
          :aria-expanded="open" aria-controls="menu-mobile"
          @click="open = !open"
        >
          <span class="sr">{{ open ? tr('Fermer le menu', 'Close the menu') : tr('Ouvrir le menu', 'Open the menu') }}</span>
          <span class="b-lines" aria-hidden="true"><span /><span /></span>
        </button>
      </div>
    </div>

    <nav id="menu-mobile" class="m-nav" :hidden="!open" :aria-label="tr('Navigation mobile', 'Mobile navigation')">
      <div class="wrap">
        <NuxtLink :to="chemin('/')" class="m-link">{{ tr('Accueil', 'Home') }}</NuxtLink>
        <NuxtLink v-for="n in nav" :key="n.to" :to="n.to" class="m-link">{{ n.label }}</NuxtLink>
        <a :href="business.booking" class="btn m-cta" target="_blank" rel="noopener">{{ tr('Parlons de votre projet', 'Let’s talk about your project') }} <span class="arr" aria-hidden="true">↗</span></a>
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
.b-name { white-space: nowrap; font-weight: 780; font-stretch: 116%; font-size: 18px; letter-spacing: -.01em; }
.b-name .dot { color: var(--color-wine); }

.nav { display: flex; align-items: center; gap: clamp(14px, 2.4vw, 34px); }
.nav-link {
  position: relative;
  font-size: 15.5px; font-weight: 520; color: var(--color-ink); text-decoration: none;
  padding: 6px 0; white-space: nowrap;
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
.nav-cta { padding: 11px 20px; font-size: 15px; white-space: nowrap; }

/* sélecteur de langue : la langue en cours sur fond encre, l'autre en lien */
.lang {
  display: inline-flex; align-items: center; gap: 2px; padding: 3px;
  border: 1px solid var(--color-line); border-radius: 999px;
  font-size: 12.5px; font-weight: 680; letter-spacing: .06em; line-height: 1;
}
.lang > * { padding: 6px 9px; border-radius: 999px; color: var(--color-graphite); text-decoration: none; }
.lang a:hover { color: var(--color-wine); }
.lang .on { background: var(--color-ink); color: var(--color-paper); }

.m-end { display: flex; align-items: center; gap: 10px; }
.lang-m { display: none; }
.burger { display: none; }
.m-nav { display: none; }
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }

@media (max-width: 1120px) {
  .nav { display: none; }
  .lang-m {
    display: grid; place-items: center; height: 46px; padding: 0 16px; border-radius: 999px;
    border: 1px solid var(--color-line); background: var(--color-paper);
    font-size: 14px; font-weight: 680; letter-spacing: .06em; color: var(--color-ink); text-decoration: none;
  }
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
