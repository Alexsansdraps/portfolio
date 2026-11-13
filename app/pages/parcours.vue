<script setup lang="ts">
import { steps } from '~/data/experience'
import portrait from '~/assets/img/portrait.webp'

const years = new Date().getFullYear() - 2019

usePageSeo({
  title: `Mon parcours : ${years} ans de développement web | Alexandra Porhansl`,
  description: 'Développeuse web depuis 2019 : agence web, jeune entreprise, e-commerce et éditeur de logiciels. Aujourd’hui salariée, avec mon agence web à Mulhouse.',
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


/* « Comment je travaille » : icônes dessinées à la main en SVG (aucune ressource externe) */
const facons = [
  {
    t: 'Écoute',
    d: 'Je commence par vous poser les bonnes questions, sur votre métier et sur vos clients. On fixe ensemble les priorités avant de démarrer.',
    ic: '<path d="M4 5h16v10H10l-5 4v-4H4z" /><path d="M8 9h8M8 12h5" />',
  },
  {
    t: 'Design',
    d: 'Je dessine les pages avant de les construire, je soigne les détails, et je pense d’abord à ceux qui vont s’en servir.',
    ic: '<path d="M4 20l1-4L16 5l3 3L8 19z" /><path d="M14 7l3 3" />',
  },
  {
    t: 'Méthode',
    d: 'Rien n’est fait au hasard : je pars d’un plan clair, validé avec vous, et je vous montre l’avancement à chaque étape.',
    ic: '<rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" />',
  },
  {
    t: 'Suivi',
    d: 'Je m’occupe de tout jusqu’à la mise en ligne, puis je reste là pour les mises à jour et les petites évolutions.',
    ic: '<path d="M21 3L3 10l7 3 3 7z" /><path d="M10 13L21 3" />',
  },
]
</script>

<template>
  <main>
    <section class="p-hero wrap">
      <div class="p-hero-txt">
        <h1 class="p-h1 rise d1">Développeuse <em>depuis 2019</em></h1>
        <p class="lead rise d2">
          J’ai commencé en agence web en 2019, puis j’ai travaillé dans une startup, dans l’e-commerce et chez un éditeur
          de logiciels. Aujourd’hui je suis développeuse web salariée et je mène en parallèle mon agence web en Alsace.
        </p>
      </div>
      <div class="p-hero-pic rise d2">
        <img :src="portrait" width="720" height="900" alt="Portrait d’Alexandra Porhansl" fetchpriority="high">
      </div>
    </section>

    <!-- FRISE : la serpentine (SVG) est tracée et animée par plugins/scroll.client.ts -->
    <section class="tl section" data-timeline aria-labelledby="tl-title">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <h2 id="tl-title" class="h2">De 2019 <em>à aujourd’hui.</em></h2>
        </div>

        <div class="snake">
          <svg class="snake-svg" aria-hidden="true" focusable="false">
            <path class="snake-base" d="" />
            <path class="snake-draw" d="" />
            <circle class="snake-head" r="7" cx="-50" cy="-50" />
          </svg>
          <ol class="tl-list">
            <li
              v-for="s in steps" :key="s.id"
              class="tl-item" :class="{ now: s.now, own: s.own }"
            >
              <span class="tl-dot" aria-hidden="true" />
              <p class="tl-yr" aria-hidden="true">
                <span class="tl-yr-n">{{ s.year }}</span>
                <span class="tl-yr-co">{{ s.company }}</span>
              </p>
              <article class="tl-card">
                <p class="tl-dates">
                  {{ s.dates }}
                  <span v-if="s.now" class="tl-now"><span class="pulse" aria-hidden="true" /> en cours</span>
                </p>
                <h3 class="tl-role">{{ s.role }}</h3>
                <p class="tl-co"><strong>{{ s.company }}</strong><template v-if="s.place"> · {{ s.place }}</template></p>
                <p class="tl-ctx">{{ s.context }}</p>
                <ul v-if="s.bullets.length" class="tl-bullets">
                  <li v-for="b in s.bullets" :key="b.k"><strong>{{ b.k }}</strong> — {{ b.t }}</li>
                </ul>
                <ul v-if="s.tags.length" class="tl-tags">
                  <li v-for="t in s.tags" :key="t" class="chip">{{ t }}</li>
                </ul>
                <NuxtLink v-if="s.own" to="/realisations" class="link tl-link">Voir mes réalisations →</NuxtLink>
              </article>
            </li>
          </ol>
        </div>
      </div>
    </section>


    <!-- MÉTHODE : un parcours en 4 étapes -->
    <section class="section how-sec" aria-labelledby="how-title">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <h2 id="how-title" class="h2">Comment je travaille</h2>
          <p class="lead">De la première question à la mise en ligne, voilà ce qui ne change jamais.</p>
        </div>
        <ol class="how">
          <li v-for="h in facons" :key="h.t" class="how-item" data-reveal>
            <span class="how-ic" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" v-html="h.ic" />
            </span>
            <h3>{{ h.t }}</h3>
            <p>{{ h.d }}</p>
          </li>
        </ol>
      </div>
    </section>

    <CtaBand title="Envie de travailler ensemble ?" />
  </main>
</template>

<style scoped>
/* ---------- hero ---------- */
.p-hero {
  display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, .6fr); gap: clamp(32px, 6vw, 88px); align-items: end;
  padding-top: clamp(40px, 7vw, 96px);
}
.p-h1 {
  margin-top: 20px; font-weight: 800; font-stretch: 116%;
  font-size: clamp(40px, 6vw, 82px); line-height: .98; letter-spacing: -.03em; text-wrap: balance;
}
.p-h1 em { font-style: normal; color: var(--color-wine); }
.p-hero .lead { margin-top: 24px; }
.p-hero-pic img { display: block; width: 100%; border-radius: 24px; aspect-ratio: 4 / 5; object-fit: cover; object-position: 50% 20%; }

/* ---------- frise en serpentine ----------
   Bureau : étapes alternées gauche / droite, la serpentine ondule dans la colonne du milieu.
   Mobile : une colonne, la serpentine ondule dans la gouttière de gauche.
   Sans JS : un simple trait vertical (.snake::before) tient lieu de ligne. */
.snake { --mid: clamp(120px, 15vw, 210px); position: relative; }
.snake::before {
  content: ""; position: absolute; top: 0; bottom: 0; left: 50%; width: 2px; margin-left: -1px;
  background: var(--color-line);
}
.snake.has-snake::before { display: none; }
.snake-svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; pointer-events: none; }
.snake-base { fill: none; stroke: var(--color-line); stroke-width: 2; stroke-dasharray: 2 8; stroke-linecap: round; }
.snake-draw { fill: none; stroke: var(--color-wine); stroke-width: 3.5; stroke-linecap: round; stroke-linejoin: round; }
.snake-head { fill: var(--color-wine); stroke: var(--color-paper); stroke-width: 3; }

.tl-list { list-style: none; position: relative; display: flex; flex-direction: column; gap: clamp(40px, 6vw, 88px); padding-block: 40px; }
.tl-item {
  position: relative;
  display: grid; grid-template-columns: minmax(0, 1fr) var(--mid) minmax(0, 1fr); align-items: center;
}
.tl-card { grid-column: 1; grid-row: 1; }
.tl-yr { grid-column: 3; grid-row: 1; padding-left: 8px; }
.tl-item:nth-child(even) .tl-card { grid-column: 3; }
.tl-item:nth-child(even) .tl-yr { grid-column: 1; text-align: right; padding: 0 8px 0 0; }

.tl-dot {
  position: absolute; z-index: 1; top: 50%; left: calc(50% - var(--mid) / 2 + 14px);
  width: 18px; height: 18px; margin: -9px 0 0 -9px; border-radius: 50%;
  background: var(--color-paper); border: 2px solid var(--color-line);
  transition: border-color .3s, background .3s, box-shadow .3s;
}
.tl-item:nth-child(even) .tl-dot { left: calc(50% + var(--mid) / 2 - 14px); }
.tl-item.active .tl-dot, .tl-item.passed .tl-dot { border-color: var(--color-wine); background: var(--color-wine); }
.tl-item.active .tl-dot { box-shadow: 0 0 0 8px color-mix(in srgb, var(--color-wine) 18%, transparent); }

/* l'année, en creux, se remplit quand la serpentine l'atteint */
.tl-yr-n {
  display: block;
  font-weight: 800; font-stretch: 112%; font-size: clamp(56px, 8vw, 128px); line-height: .9; letter-spacing: -.04em;
  color: transparent; -webkit-text-stroke: 1.5px color-mix(in srgb, var(--color-ink) 28%, transparent);
  transition: color .5s, -webkit-text-stroke-color .5s;
}
.tl-item.active .tl-yr-n, .tl-item.passed .tl-yr-n { color: var(--color-wine); -webkit-text-stroke-color: var(--color-wine); }
.tl-yr-co { font-weight: 650; display: block; margin-top: 10px; font-size: 14.5px; color: var(--color-mute); }

.tl-card {
  padding: clamp(22px, 2.6vw, 32px); border-radius: 22px;
  background: #fff; border: 1px solid var(--color-line);
  transition: border-color .3s, box-shadow .3s;
}
.tl-item.active .tl-card { border-color: color-mix(in srgb, var(--color-wine) 45%, var(--color-line)); box-shadow: 0 24px 48px -32px rgb(29 22 26 / .35); }
.tl-item.own .tl-card { background: var(--color-wine); border-color: var(--color-wine); color: #fff; }
.tl-item.own .tl-dates, .tl-item.own .tl-ctx, .tl-item.own .tl-co { color: rgb(255 255 255 / .82); }
.tl-item.own .tl-co strong { color: #fff; }
.tl-item.own .chip { background: transparent; color: #fff; border-color: rgb(255 255 255 / .35); }
.tl-item.own .tl-bullets li { color: rgb(255 255 255 / .92); }
.tl-item.own .tl-bullets strong { color: #fff; }
.tl-item.own .link { color: #fff; }
.tl-item.own :focus-visible { outline-color: #fff; }

.tl-dates { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; font-size: 14px; color: var(--color-mute); }
.tl-now {
  display: inline-flex; align-items: center; gap: 8px; padding: 3px 10px; border-radius: 999px;
  background: rgb(47 158 98 / .12); color: #217a4a; font-size: 11.5px; letter-spacing: .06em; text-transform: uppercase;
}
.tl-item.own .tl-now { background: rgb(255 255 255 / .18); color: #fff; }
.tl-role { margin-top: 10px; font-weight: 760; font-stretch: 112%; font-size: clamp(21px, 2.1vw, 27px); line-height: 1.12; letter-spacing: -.015em; }
.tl-co { margin-top: 6px; font-size: 16.5px; color: var(--color-graphite); }
.tl-co strong { color: var(--color-wine); font-weight: 700; }
.tl-ctx { margin-top: 4px; font-size: 14px; color: var(--color-mute); line-height: 1.5; }
.tl-bullets { list-style: none; margin-top: 16px; display: flex; flex-direction: column; gap: 8px; }
.tl-bullets li { font-size: 15px; line-height: 1.6; color: var(--color-graphite); }
.tl-bullets strong { color: var(--color-ink); font-weight: 650; }
.tl-tags { list-style: none; margin-top: 16px; display: flex; flex-wrap: wrap; gap: 6px; }
.tl-link { display: inline-block; margin-top: 18px; }


/* ---------- méthode ---------- */
.how-sec { background: var(--color-blush); }
.how { position: relative; list-style: none; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: clamp(16px, 2vw, 24px); }
/* la ligne pointillée qui relie les étapes, à hauteur des icônes */
.how::before {
  content: ""; position: absolute; left: 12%; right: 12%; top: 54px; height: 0;
  border-top: 2px dashed color-mix(in srgb, var(--color-wine) 45%, transparent);
}
.how-item {
  position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 12px;
  padding: clamp(22px, 2.4vw, 28px); border-radius: 22px; background: #fff;
  box-shadow: 0 18px 40px -30px rgb(29 22 26 / .45);
  transition: transform .25s;
}
.how-item:hover { transform: translateY(-4px); }
.how-ic {
  display: grid; place-items: center; width: 56px; height: 56px; border-radius: 50%;
  background: var(--color-wine); color: #fff; box-shadow: 0 0 0 6px #fff;
}
.how-ic svg { width: 26px; height: 26px; }
.how-item h3 { margin-top: 4px; font-weight: 740; font-stretch: 110%; font-size: 20px; letter-spacing: -.01em; line-height: 1.2; }
.how-item p { font-size: 15.5px; line-height: 1.6; color: var(--color-graphite); }
@media (max-width: 1100px) {
  .how { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .how::before { display: none; }
}

@media (max-width: 900px) {
  .p-hero { grid-template-columns: 1fr; }
  .p-hero-pic { max-width: 320px; order: -1; }
  .snake { --mid: 52px; }
  .snake::before { left: 26px; }
  .tl-item { grid-template-columns: var(--mid) minmax(0, 1fr); }
  .tl-item .tl-card, .tl-item:nth-child(even) .tl-card { grid-column: 2; }
  .tl-yr { display: none; }
  .tl-dot { left: 14px; }
  .tl-item:nth-child(even) .tl-dot { left: 38px; }
  .how { grid-template-columns: 1fr; }
  .how-item:hover { transform: none; }
}
@media (max-width: 560px) {
  .st-row { grid-template-columns: 1fr; }
}
</style>
