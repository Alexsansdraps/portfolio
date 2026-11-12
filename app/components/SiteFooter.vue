<script setup lang="ts">
import { business, services } from '~/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="foot">
    <div class="wrap">
      <div class="f-grid">
        <div>
          <p class="f-name">Alexandra Porhansl</p>
          <p class="f-desc">
            Agence web freelance à Mulhouse, dans le Haut-Rhin. Sites vitrines, boutiques en ligne, référencement
            et outils sur mesure.
          </p>
          <p class="f-mail"><a :href="`mailto:${business.email}`">{{ business.email }}</a></p>
        </div>

        <nav aria-label="Services">
          <p class="f-h">Services</p>
          <ul>
            <li v-for="s in services" :key="s.id"><NuxtLink :to="`/services/${s.id}`">{{ s.title }}</NuxtLink></li>
          </ul>
        </nav>

        <nav aria-label="Le site">
          <p class="f-h">Le site</p>
          <ul>
            <li><NuxtLink to="/audit-gratuit">Audit gratuit</NuxtLink></li>
            <li><NuxtLink to="/realisations">Réalisations</NuxtLink></li>
            <li><NuxtLink to="/parcours">Parcours</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </nav>

        <nav aria-label="Ailleurs">
          <p class="f-h">Ailleurs</p>
          <ul>
            <li><a :href="business.github" target="_blank" rel="noopener noreferrer">Mon code sur GitHub</a></li>
            <li><a :href="business.spotify" target="_blank" rel="noopener noreferrer">Ce que j’écoute en ce moment</a></li>
          </ul>
        </nav>
      </div>

      <div class="f-bottom">
        <span>© {{ year }} Alexandra Porhansl, entrepreneuse individuelle, SIRET <span class="num">{{ business.legal.siret }}</span></span>
        <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.foot { border-top: 1px solid var(--color-ink); padding: clamp(40px, 6vw, 72px) 0 28px; font-size: 17px; }
.f-grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1.2fr; gap: 32px clamp(24px, 4vw, 56px); }
.f-name { font-size: 22px; font-weight: 500; }
.f-desc { margin-top: 10px; max-width: 32em; color: var(--color-gray); }
.f-mail { margin-top: 14px; overflow-wrap: anywhere; }
.f-h { font-weight: 500; margin-bottom: 10px; }
ul { list-style: none; display: flex; flex-direction: column; gap: 6px; }
ul a { text-decoration: none; }
ul a:hover { text-decoration: underline; }
.f-bottom {
  margin-top: clamp(36px, 5vw, 64px); padding-top: 16px; border-top: 1px solid var(--color-hair);
  display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px;
  font-size: 15px; color: var(--color-mute);
}
@media (max-width: 960px) { .f-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .f-grid { grid-template-columns: 1fr; } }
</style>
