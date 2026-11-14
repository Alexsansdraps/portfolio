<script setup lang="ts">
import { business } from '~/data/site'

const { tr, chemin } = useLangue()
const c = useContenu()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="foot on-dark">
    <div class="wrap">
      <div class="f-grid">
        <div class="f-brand">
          <p class="f-name">Alexandra Porhansl<span>.</span></p>
          <p class="f-desc">
            {{ tr(
              'Développeuse web freelance à Mulhouse, en Alsace. Sites vitrines, boutiques en ligne, référencement et logiciels métier sur mesure.',
              'Freelance web developer in Mulhouse, Alsace, France. Business websites, online shops, search engine optimisation and custom business software.',
            ) }}
          </p>
          <a :href="business.booking" class="btn f-cta" target="_blank" rel="noopener">{{ tr('Parlons de votre projet', 'Let’s talk about your project') }} <span class="arr" aria-hidden="true">↗</span></a>
        </div>

        <nav class="f-col" aria-label="Services">
          <p class="f-h">Services</p>
          <NuxtLink v-for="s in c.services" :key="s.id" :to="chemin(`/services/${s.id}`)">{{ s.title }}</NuxtLink>
        </nav>

        <nav class="f-col" :aria-label="tr('Le site', 'This website')">
          <p class="f-h">{{ tr('Le site', 'This website') }}</p>
          <NuxtLink :to="chemin('/realisations')">{{ tr('Réalisations', 'Projects') }}</NuxtLink>
          <NuxtLink :to="chemin('/parcours')">{{ tr('Mon parcours', 'About me') }}</NuxtLink>
          <NuxtLink :to="chemin('/contact')">Contact</NuxtLink>
          <a :href="`mailto:${business.email}`">{{ business.email }}</a>
        </nav>

        <div class="f-col">
          <p class="f-h">{{ tr('Où me trouver', 'Where to find me') }}</p>
          <p class="f-zone">
            Mulhouse, Haut-Rhin (68)<br>{{ tr('Alsace', 'Alsace, France') }}
          </p>
        </div>
      </div>

      <div class="f-bottom">
        <span>© {{ year }} Alexandra Porhansl · EI · SIRET {{ business.legal.siret }}</span>
        <span class="f-links">
          <NuxtLink :to="chemin('/mentions-legales')">{{ tr('Mentions légales', 'Legal notice') }}</NuxtLink>
          <span aria-hidden="true">·</span>
          <span>{{ tr('Conçu et développé avec ♥ à Mulhouse', 'Designed and built with ♥ in Mulhouse') }}</span>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.foot { padding: clamp(56px, 8vw, 96px) 0 28px; }
.f-grid {
  display: grid; grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: clamp(32px, 4vw, 56px);
}
.f-name { font-weight: 780; font-stretch: 116%; font-size: 24px; letter-spacing: -.01em; }
.f-name span { color: var(--color-rose); }
.f-desc {
  margin-top: 14px; max-width: 38ch; font-size: 15.5px; line-height: 1.6;
  color: color-mix(in srgb, var(--color-bone) 72%, var(--color-plum));
}
.f-cta { margin-top: 24px; padding: 12px 20px; font-size: 15px; }
.f-h {
 font-weight: 650; font-size: 14.5px;
  color: var(--color-rose); margin-bottom: 14px;
}
.f-col { display: flex; flex-direction: column; gap: 10px; }
.f-col a {
  color: var(--color-bone); text-decoration: none; font-size: 15.5px; width: fit-content;
  border-bottom: 1px solid transparent; transition: border-color .2s, color .2s;
  overflow-wrap: anywhere;
}
.f-col a:hover { border-bottom-color: var(--color-rose); }
.f-zone { font-size: 14.5px; line-height: 1.65; color: color-mix(in srgb, var(--color-bone) 72%, var(--color-plum)); }

.f-bottom {
  margin-top: clamp(40px, 6vw, 72px); padding-top: 20px;
  border-top: 1px solid color-mix(in srgb, var(--color-bone) 14%, transparent);
  display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px 24px;
 font-size: 14px;
  color: color-mix(in srgb, var(--color-bone) 64%, var(--color-plum));
}
.f-links { display: flex; flex-wrap: wrap; gap: 8px 12px; }
.f-links a { color: inherit; text-decoration: underline; text-underline-offset: 3px; }
.f-links a:hover { color: var(--color-bone); }

@media (max-width: 960px) { .f-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .f-grid { grid-template-columns: 1fr; } }
</style>
