<script setup lang="ts">
const nav = [
  { to: '/services', label: 'Services' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/parcours', label: 'Parcours' },
  { to: '/audit-gratuit', label: 'Audit gratuit' },
  { to: '/contact', label: 'Contact' },
]

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
</script>

<template>
  <header class="bar">
    <div class="wrap bar-in">
      <NuxtLink to="/" class="brand">
        Alexandra Porhansl
        <span class="brand-sub">agence web, Mulhouse</span>
      </NuxtLink>

      <nav class="nav" aria-label="Navigation principale">
        <NuxtLink v-for="n in nav" :key="n.to" :to="n.to" class="nav-link">{{ n.label }}</NuxtLink>
      </nav>

      <button class="menu" type="button" :aria-expanded="open" aria-controls="menu-mobile" @click="open = !open">
        {{ open ? 'Fermer' : 'Menu' }}
      </button>
    </div>

    <nav id="menu-mobile" class="m-nav" :hidden="!open" aria-label="Navigation mobile">
      <div class="wrap">
        <NuxtLink to="/" class="m-link">Accueil</NuxtLink>
        <NuxtLink v-for="n in nav" :key="n.to" :to="n.to" class="m-link">{{ n.label }}</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.bar { border-bottom: 1px solid var(--color-ink); background: var(--color-paper); }
.bar-in { display: flex; align-items: baseline; justify-content: space-between; gap: 24px; padding-block: 22px 18px; }

.brand { text-decoration: none; font-size: 22px; font-weight: 500; letter-spacing: -.01em; line-height: 1.2; }
.brand-sub { margin-left: 8px; font-size: 16px; font-weight: 400; color: var(--color-mute); }

.nav { display: flex; gap: clamp(16px, 2.2vw, 30px); }
.nav-link { font-size: 18px; text-decoration: none; }
.nav-link:hover, .nav-link.router-link-active { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: .25em; }

.menu { display: none; font: inherit; font-size: 18px; background: none; border: 0; padding: 0; cursor: pointer; text-decoration: underline; text-underline-offset: .2em; }
.m-nav { display: none; }

@media (max-width: 900px) {
  .nav { display: none; }
  .brand-sub { display: none; }
  .menu { display: block; }
  .m-nav:not([hidden]) { display: block; border-top: 1px solid var(--color-hair); padding: 8px 0 28px; }
  .m-nav .wrap { display: flex; flex-direction: column; }
  .m-link { padding: 12px 0; border-bottom: 1px solid var(--color-hair); font-size: 28px; text-decoration: none; }
  .m-link.router-link-exact-active { text-decoration: underline; text-decoration-thickness: 1px; }
}
</style>
