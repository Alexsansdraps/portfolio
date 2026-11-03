<script setup lang="ts">
import { services, reasons, maintenance, zone } from '~/data/site'
import { projects } from '~/data/projects'
import portrait from '~/assets/img/portrait.webp'

usePageSeo({
  title: 'Agence web freelance en Alsace | Alexandra Porhansl, Mulhouse',
  description: 'Agence web freelance à Mulhouse qui se déplace dans toute l’Alsace : sites vitrines, boutiques en ligne, refontes et outils sur mesure. Devis gratuit.',
  path: '/',
})

const [lachance, memoryline] = projects
const ticker = ['Site vitrine', 'Boutique en ligne', 'Refonte de site', 'Référencement local', 'Outils sur mesure', 'Suivi & maintenance']
const cities = [zone.home.name, ...zone.cities.map(c => c.name)]
</script>

<template>
  <main>
    <!-- HERO -->
    <section class="hero wrap" aria-labelledby="hero-title">
      <div class="hero-txt">
        <p class="eyebrow rise">Mulhouse · Haut-Rhin · Bas-Rhin</p>
        <h1 id="hero-title" class="hero-h1 rise d1">
          Agence web<br>freelance <em>en&nbsp;Alsace.</em>
        </h1>
        <p class="hero-sub rise d2">
          Sites vitrines, boutiques en ligne et outils sur mesure, pensés pour être trouvés sur Google
          et pour vous amener des clients.
        </p>
        <p class="hero-lead rise d2">
          Du premier échange à la mise en ligne, vous avez une seule interlocutrice&nbsp;: moi, Alexandra.
          Et je me déplace chez vous, partout en Alsace.
        </p>
        <div class="hero-ctas rise d3">
          <NuxtLink to="/contact" class="btn">Demander un devis gratuit <span class="arr" aria-hidden="true">→</span></NuxtLink>
          <NuxtLink to="/realisations" class="btn btn-ghost">Voir mes réalisations</NuxtLink>
        </div>
        <ul class="hero-trust rise d4">
          <li>Premier échange offert</li>
          <li>Je me déplace chez vous</li>
          <li>Réponse dans la journée</li>
        </ul>
      </div>

      <div class="hero-visual rise d2" aria-hidden="true">
        <div class="hv hv-back" data-depth="0.06">
          <BrowserFrame v-bind="memoryline!.extra" :url="memoryline!.domain" eager />
        </div>
        <div class="hv hv-front" data-depth="0.14">
          <BrowserFrame v-bind="lachance!.cover" :url="lachance!.domain" eager />
        </div>
        <div class="hv hv-phone" data-depth="0.24">
          <PhoneFrame v-bind="memoryline!.mobile" />
        </div>
        <span class="hv-tag t1">La Chance Animation · Guebwiller</span>
        <span class="hv-tag t2">MemoryLine · boutique sur mesure</span>
      </div>
    </section>

    <!-- BANDEAU DÉFILANT -->
    <div class="ticker" aria-hidden="true">
      <div class="ticker-track">
        <template v-for="n in 2" :key="n">
          <span v-for="t in ticker" :key="`${n}-${t}`">{{ t }}<i>✦</i></span>
        </template>
      </div>
    </div>

    <!-- RÉALISATIONS -->
    <section id="realisations" class="section on-dark" aria-labelledby="real-title">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <p class="eyebrow">Réalisations</p>
          <h2 id="real-title" class="h2">Deux entreprises d’Alsace, <em>deux sites sur mesure.</em></h2>
          <p class="lead">Pas de modèle tout fait : chaque site est dessiné pour l’activité de mon client et pour ses propres clients.</p>
        </div>
        <div class="projects">
          <ProjectCard v-for="(p, i) in projects" :key="p.slug" :project="p" :flip="i % 2 === 1" />
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="section wrap" aria-labelledby="svc-title">
      <div class="sec-head" data-reveal>
        <p class="eyebrow">Services</p>
        <h2 id="svc-title" class="h2">Ce que je fais <em>pour vous.</em></h2>
      </div>
      <div class="svc-grid">
        <NuxtLink v-for="(s, i) in services" :key="s.id" :to="`/services#${s.id}`" class="svc" data-reveal>
          <span class="svc-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.short }}</p>
          <span class="svc-more">En savoir plus <span class="arr" aria-hidden="true">→</span></span>
        </NuxtLink>
      </div>
      <p class="svc-after" data-reveal><strong>{{ maintenance.title }}</strong> {{ maintenance.text }}</p>
    </section>

    <!-- POURQUOI -->
    <section class="section why-sec" aria-labelledby="why-title">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <p class="eyebrow">Pourquoi moi</p>
          <h2 id="why-title" class="h2">Le sérieux d’une agence, <em>la proximité d’une freelance.</em></h2>
        </div>
        <div class="why">
          <div v-for="r in reasons" :key="r.t" class="why-item" data-reveal>
            <h3>{{ r.t }}</h3>
            <p>{{ r.d }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- MÉTHODE -->
    <section class="section wrap" aria-labelledby="method-title">
      <div class="sec-head" data-reveal>
        <p class="eyebrow">Comment ça se passe</p>
        <h2 id="method-title" class="h2">Quatre étapes, <em>zéro jargon.</em></h2>
      </div>
      <MethodSteps />
    </section>

    <!-- ZONE -->
    <section class="section zone-sec" aria-labelledby="zone-title">
      <div class="wrap zone">
        <div class="zone-txt" data-reveal>
          <p class="eyebrow">Zone d’intervention</p>
          <h2 id="zone-title" class="h2">Une agence web <em>d’ici.</em></h2>
          <p class="lead">
            Basée à Mulhouse, je me déplace chez vous dans tout le Haut-Rhin et le Bas-Rhin : pour le premier
            rendez-vous, pour vous montrer l’avancement, pour vous apprendre à utiliser votre site.
            Et si vous préférez, tout peut aussi se faire à distance.
          </p>
          <ul class="zone-chips">
            <li v-for="c in cities" :key="c" class="chip">{{ c }}</li>
          </ul>
        </div>
        <div class="zone-map" data-reveal>
          <ZoneMap />
        </div>
      </div>
    </section>

    <!-- À PROPOS -->
    <section class="section wrap about" aria-labelledby="about-title">
      <div class="about-pic" data-reveal>
        <img :src="portrait" width="720" height="938" alt="Portrait d’Alexandra Porhansl, fondatrice de l’agence" loading="lazy" decoding="async">
      </div>
      <div class="about-txt" data-reveal>
        <p class="eyebrow">Qui suis-je</p>
        <h2 id="about-title" class="h2">Bonjour, <em>moi c’est Alexandra.</em></h2>
        <p class="lead">
          Je crée des sites web depuis {{ new Date().getFullYear() - 2019 }} ans. Avant de lancer mon agence, j’ai travaillé
          en agence web, dans une startup et chez des éditeurs de logiciels, sur des sites, des boutiques en ligne
          et des applications mobiles.
        </p>
        <p class="about-p">
          Ce que j’en retiens : le plus difficile n’est pas de construire le site, c’est de bien comprendre ce dont
          vous avez besoin. Alors je commence toujours par vous écouter, et je vous explique chaque choix
          avec des mots simples.
        </p>
        <NuxtLink to="/parcours" class="link">Découvrir mon parcours →</NuxtLink>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section wrap faq-sec" aria-labelledby="faq-title">
      <div class="sec-head" data-reveal>
        <p class="eyebrow">Questions fréquentes</p>
        <h2 id="faq-title" class="h2">Vous vous demandez <em>sûrement…</em></h2>
      </div>
      <FaqList />
    </section>

    <CtaBand />
  </main>
</template>

<style scoped>
/* ---------- hero ---------- */
.hero {
  display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr);
  gap: clamp(32px, 5vw, 72px); align-items: center;
  padding-top: clamp(32px, 5vw, 72px); padding-bottom: clamp(56px, 7vw, 104px);
}
.hero-h1 {
  margin-top: 22px;
  font-weight: 800; font-stretch: 110%;
  font-size: clamp(44px, 5.6vw, 84px); line-height: .96; letter-spacing: -.035em;
}
.hero-h1 em { font-style: normal; color: var(--color-wine); }
.hero-sub {
  margin-top: clamp(22px, 3vw, 32px);
  font-size: clamp(19px, 1.9vw, 24px); line-height: 1.45; font-weight: 500;
  max-width: 34ch; text-wrap: pretty;
}
.hero-lead { margin-top: 14px; font-size: 17px; color: var(--color-graphite); max-width: 46ch; }
.hero-ctas { margin-top: 32px; display: flex; flex-wrap: wrap; gap: 12px; }
.hero-trust {
  list-style: none; margin-top: 28px;
  display: flex; flex-wrap: wrap; gap: 8px 22px;
  font-family: var(--font-mono); font-size: 12.5px; color: var(--color-graphite);
}
.hero-trust li { display: inline-flex; align-items: center; gap: 8px; }
.hero-trust li::before {
  content: "✓"; display: grid; place-items: center; width: 18px; height: 18px; border-radius: 50%;
  background: var(--color-blush); color: var(--color-wine); font-size: 10px; font-weight: 700;
}

.hero-visual { position: relative; aspect-ratio: 1 / .92; margin-top: 40px; }
.hv { position: absolute; will-change: transform; }
.hv-back { top: 0; right: 0; width: 78%; transform: rotate(2.5deg); opacity: .96; }
.hv-front { left: 0; top: 30%; width: 82%; transform: rotate(-2deg); }
.hv-phone { right: 2%; bottom: -2%; width: 22%; transform: rotate(4deg); }
.hv-tag {
  position: absolute; z-index: 2;
  font-family: var(--font-mono); font-size: 11.5px; letter-spacing: .03em;
  background: var(--color-ink); color: var(--color-paper);
  padding: 7px 12px; border-radius: 999px; white-space: nowrap;
}
.hv-tag.t1 { left: 4%; bottom: 4%; }
.hv-tag.t2 { right: 4%; top: -11%; background: var(--color-wine); color: #fff; }

/* ---------- bandeau défilant ---------- */
.ticker {
  overflow: hidden; border-block: 1px solid var(--color-line);
  background: var(--color-sand); padding: 16px 0;
}
.ticker-track { display: flex; width: max-content; }
.ticker span {
  display: inline-flex; align-items: center; gap: 28px; padding-right: 28px;
  font-weight: 700; font-stretch: 116%; font-size: clamp(18px, 2vw, 24px); letter-spacing: -.01em;
  white-space: nowrap;
}
.ticker i { font-style: normal; color: var(--color-wine); font-size: .7em; }
@media (prefers-reduced-motion: no-preference) {
  .ticker-track { animation: ticker 38s linear infinite; }
  @keyframes ticker { to { transform: translateX(-50%); } }
}

/* ---------- réalisations ---------- */
.projects { display: flex; flex-direction: column; gap: clamp(72px, 10vw, 140px); }

/* ---------- services ---------- */
.svc-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(16px, 2vw, 24px); }
.svc {
  position: relative; display: flex; flex-direction: column;
  padding: clamp(24px, 3vw, 40px); border-radius: 22px;
  background: #fff; border: 1px solid var(--color-line);
  color: var(--color-ink); text-decoration: none;
  transition: border-color .25s, transform .25s, box-shadow .25s;
}
.svc:hover { border-color: var(--color-wine); transform: translateY(-3px); box-shadow: 0 20px 40px -28px rgb(29 22 26 / .35); }
.svc-num { font-family: var(--font-mono); font-size: 13px; color: var(--color-wine); }
.svc h3 { margin-top: 18px; font-weight: 760; font-stretch: 112%; font-size: clamp(24px, 2.4vw, 30px); letter-spacing: -.015em; line-height: 1.1; }
.svc p { margin-top: 12px; color: var(--color-graphite); font-size: 16.5px; line-height: 1.6; flex: 1; }
.svc-more { margin-top: 22px; font-weight: 650; color: var(--color-wine); }
.svc-more .arr { display: inline-block; transition: transform .2s; }
.svc:hover .svc-more .arr { transform: translateX(4px); }
.svc-after {
  margin-top: 28px; padding: 20px 24px; border-radius: 16px;
  background: var(--color-blush); color: var(--color-ink); font-size: 16px; line-height: 1.6;
}
.svc-after strong { color: var(--color-wine-deep); margin-right: 4px; }

/* ---------- pourquoi ---------- */
.why-sec { background: var(--color-sand); }
.why { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(28px, 3.5vw, 48px) clamp(24px, 3vw, 40px); }
.why-item { padding-top: 20px; border-top: 2px solid var(--color-ink); }
.why-item h3 { font-weight: 740; font-stretch: 110%; font-size: 21px; line-height: 1.2; letter-spacing: -.01em; }
.why-item p { margin-top: 10px; font-size: 16px; line-height: 1.6; color: var(--color-graphite); }

/* ---------- zone ---------- */
.zone-sec { background: linear-gradient(var(--color-paper), var(--color-sand)); }
.zone { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, .9fr); gap: clamp(32px, 6vw, 96px); align-items: center; }
.zone-txt .h2 { margin-top: 18px; }
.zone-txt .lead { margin-top: 20px; }
.zone-chips { list-style: none; margin-top: 28px; display: flex; flex-wrap: wrap; gap: 8px; }
.zone-map { max-width: 460px; justify-self: center; width: 100%; }

/* ---------- à propos ---------- */
.about { display: grid; grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr); gap: clamp(32px, 6vw, 96px); align-items: center; }
.about-pic img { display: block; width: 100%; border-radius: 24px; aspect-ratio: 4 / 5; object-fit: cover; object-position: 50% 20%; }
.about-txt .h2 { margin-top: 18px; }
.about-txt .lead { margin-top: 22px; }
.about-p { margin-top: 16px; color: var(--color-graphite); max-width: 60ch; }
.about-txt .link { display: inline-block; margin-top: 24px; }

.faq-sec { padding-bottom: clamp(24px, 4vw, 48px); }

@media (max-width: 960px) {
  .hero { grid-template-columns: 1fr; }
  .hero-visual { max-width: 620px; width: 100%; margin: 12px auto 0; }
  .why { grid-template-columns: 1fr 1fr; }
  .zone, .about { grid-template-columns: 1fr; }
  .about-pic { max-width: 420px; }
}
@media (max-width: 640px) {
  .svc-grid, .why { grid-template-columns: 1fr; }
  .hv-tag { font-size: 10px; padding: 5px 9px; }
}
</style>
