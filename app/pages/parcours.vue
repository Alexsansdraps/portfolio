<script setup lang="ts">
import { steps, stack } from '~/data/experience'
import portrait from '~/assets/img/portrait.webp'

const years = new Date().getFullYear() - 2019

usePageSeo({
  title: `Mon parcours : ${years} ans de développement web | Alexandra Porhansl`,
  description: 'Développeuse full-stack depuis 2019 (agence web, startup SaaS, e-commerce, éditeur de logiciels), aujourd’hui salariée, avec mon agence web à Mulhouse.',
  path: '/parcours',
  type: 'article',
})

useJsonLd([
  breadcrumb([['Accueil', '/'], ['Mon parcours', '/parcours']]),
  {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    'mainEntity': { '@id': absoluteUrl('/#alexandra') },
  },
])

/* la plus récente en premier */
const chrono = [...steps].reverse()
</script>

<template>
  <main>
    <section class="head wrap">
      <div>
        <h1 class="t-h1">Développeuse depuis 2019</h1>
        <p class="lead head-lead">
          J’ai commencé en agence web en 2019, puis j’ai travaillé dans une startup, dans l’e-commerce et chez un éditeur
          de logiciels. Aujourd’hui je suis développeuse full-stack salariée, et je mène en parallèle mon agence web en Alsace.
        </p>
      </div>
      <figure class="head-pic">
        <img :src="portrait" width="720" height="900" alt="Portrait d’Alexandra Porhansl" fetchpriority="high">
      </figure>
    </section>

    <section class="sec" aria-labelledby="tl-title">
      <div class="wrap cols">
        <h2 id="tl-title" class="t-sec">Chronologie</h2>
        <ol class="tl">
          <li v-for="s in chrono" :key="s.id" class="tl-item" data-reveal>
            <p class="tl-when">
              <span class="num">{{ s.dates }}</span>
              <span v-if="s.now" class="muted">en cours</span>
            </p>
            <div>
              <h3 class="t-h3">{{ s.role }}</h3>
              <p class="tl-co"><strong>{{ s.company }}</strong><template v-if="s.place">, {{ s.place }}</template></p>
              <p class="tl-ctx muted">{{ s.context }}</p>
              <ul v-if="s.bullets.length" class="tl-bullets">
                <li v-for="b in s.bullets" :key="b.k"><strong>{{ b.k }}</strong>, {{ b.t }}</li>
              </ul>
              <p v-if="s.tags.length" class="tl-tags small">{{ s.tags.join(', ') }}</p>
              <p v-if="s.own" class="tl-link"><NuxtLink to="/realisations">Voir mes réalisations</NuxtLink></p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="sec" aria-labelledby="stack-title">
      <div class="wrap cols">
        <h2 id="stack-title" class="t-sec">Les outils que j’utilise</h2>
        <dl class="st">
          <div v-for="g in stack" :key="g.label" class="st-row" data-reveal>
            <dt>{{ g.label }}</dt>
            <dd class="muted">{{ g.items.join(', ') }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="sec" aria-labelledby="how-title">
      <div class="wrap cols">
        <h2 id="how-title" class="t-sec">Comment je travaille</h2>
        <div class="how">
          <div data-reveal>
            <h3 class="t-h3">J’écoute avant de développer</h3>
            <p class="muted">Je commence par poser les bonnes questions, au client ou à l’équipe. J’en tire un cahier des charges clair, avec des priorités établies.</p>
          </div>
          <div data-reveal>
            <h3 class="t-h3">Le design fait partie du métier</h3>
            <p class="muted">Je viens du front-end. Je réalise mes maquettes sur Figma, je soigne les détails, et je préfère concevoir une interface plutôt que de me contenter de l’intégrer.</p>
          </div>
          <div data-reveal>
            <h3 class="t-h3">L’IA, toujours à partir d’un plan</h3>
            <p class="muted">J’utilise Claude Code au quotidien, mais jamais sans un plan de développement écrit au préalable. Je garde la main, l’outil va plus vite, et les standards restent les mêmes, avec des conventions, Prettier et des tests.</p>
          </div>
          <div data-reveal>
            <h3 class="t-h3">Jusqu’à la mise en production</h3>
            <p class="muted">Spécifications, développement, recette, mise en ligne, puis le suivi. Je débogue aussi bien le web que le mobile.</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBand title="Envie de travailler ensemble ?" />
  </main>
</template>

<style scoped>
.head {
  display: grid; grid-template-columns: minmax(0, 8fr) minmax(0, 3fr); gap: 32px clamp(32px, 6vw, 96px); align-items: end;
  padding-top: clamp(40px, 7vw, 96px); padding-bottom: clamp(40px, 6vw, 80px);
}
.head-lead { margin-top: 24px; }
.head-pic { margin: 0; }
.head-pic img { display: block; width: 100%; aspect-ratio: 4 / 5; object-fit: cover; object-position: 50% 20%; }

.tl { list-style: none; border-top: 1px solid var(--color-hair); }
.tl-item {
  display: grid; grid-template-columns: minmax(0, 3fr) minmax(0, 7fr); gap: 8px clamp(24px, 4vw, 48px);
  padding: 22px 0; border-bottom: 1px solid var(--color-hair);
}
.tl-when { display: flex; flex-direction: column; gap: 2px; font-size: 17px; }
.tl-co { margin-top: 6px; }
.tl-co strong { font-weight: 500; }
.tl-ctx { margin-top: 2px; font-size: 17px; }
.tl-bullets { list-style: none; margin-top: 12px; display: flex; flex-direction: column; gap: 6px; font-size: 17px; }
.tl-bullets strong { font-weight: 500; }
.tl-tags { margin-top: 12px; font-variant-caps: all-small-caps; letter-spacing: .04em; font-size: 17px; }
.tl-link { margin-top: 12px; }

.st { border-top: 1px solid var(--color-hair); }
.st-row { display: grid; grid-template-columns: minmax(0, 3fr) minmax(0, 7fr); gap: 4px clamp(24px, 4vw, 48px); padding: 14px 0; border-bottom: 1px solid var(--color-hair); }
.st dt { font-weight: 500; }
.st dd { font-variant-caps: all-small-caps; letter-spacing: .04em; }

.how { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px clamp(28px, 4vw, 56px); }
.how > div { padding-top: 14px; border-top: 1px solid var(--color-hair); }
.how p { margin-top: 8px; }

@media (max-width: 860px) {
  .head { grid-template-columns: 1fr; }
  .head-pic { max-width: 300px; order: -1; }
  .tl-item, .st-row, .how { grid-template-columns: 1fr; }
}
</style>
