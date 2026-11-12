<script setup lang="ts">
import { services, reasons, maintenance, audit } from '~/data/site'
import { projects } from '~/data/projects'
import portrait from '~/assets/img/portrait.webp'

usePageSeo({
  title: 'Création de site internet à Mulhouse | Agence web en Alsace',
  description: 'Agence web freelance à Mulhouse : création de sites internet, sites vitrines, boutiques en ligne, référencement Google et refontes. Audit gratuit.',
  path: '/',
})

const [lachance, memoryline] = projects
const ticker = ['Site vitrine', 'Boutique en ligne', 'Référencement naturel (SEO)', 'Audit gratuit', 'Refonte de site', 'Logiciel métier sur mesure', 'Suivi & maintenance']
</script>

<template>
  <main>
    <!-- HERO -->
    <section class="hero wrap" aria-labelledby="hero-title">
      <div class="hero-txt">
        <h1 id="hero-title" class="hero-h1 rise d1">
          Je crée des sites internet <em>à&nbsp;Mulhouse.</em>
        </h1>
        <p class="hero-sub rise d2">
          Des sites vitrines, des boutiques en ligne et des logiciels métier sur mesure pour les entreprises du coin.
          Je soigne le design, et je fais en sorte qu’on vous trouve sur Google.
        </p>
        <p class="hero-lead rise d2">
          Du premier échange à la mise en ligne, vous avez une seule interlocutrice&nbsp;: moi, Alexandra.
        </p>
        <div class="hero-ctas rise d3">
          <NuxtLink to="/audit-gratuit" class="btn">Audit gratuit <span class="arr" aria-hidden="true">→</span></NuxtLink>
          <NuxtLink to="/realisations" class="btn btn-ghost">Voir mes réalisations</NuxtLink>
        </div>
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
          <h2 id="real-title" class="h2">Mes derniers projets</h2>
          <p class="lead">Trois sites que j’ai conçus et développés cette année, pour une entreprise d’animation, une boutique d’affiches personnalisées et un studio photo et vidéo.</p>
        </div>
        <div class="projects">
          <ProjectCard v-for="(p, i) in projects" :key="p.slug" :project="p" :flip="i % 2 === 1" />
        </div>
      </div>
    </section>

    <!-- À PROPOS -->
    <section class="section wrap about" aria-labelledby="about-title">
      <div class="about-pic" data-reveal>
        <img :src="portrait" width="720" height="900" alt="Portrait d’Alexandra Porhansl, fondatrice de l’agence" loading="lazy" decoding="async">
      </div>
      <div class="about-txt" data-reveal>
        <h2 id="about-title" class="h2">Bonjour, <em>moi c’est Alexandra.</em></h2>
        <p class="lead">
          Je crée des sites web depuis {{ new Date().getFullYear() - 2019 }} ans. Avant de lancer mon agence, j’ai travaillé
          en agence web, dans une startup et chez des éditeurs de logiciels, sur des sites, des boutiques en ligne
          et des applications mobiles.
        </p>
        <p class="about-p">
          Pour moi, le plus important se passe avant de commencer : comprendre comment vous travaillez et ce que
          vos clients cherchent. Je prends le temps de vous écouter, et je vous explique mes choix simplement.
        </p>
        <ul class="about-why">
          <li v-for="r in reasons" :key="r.t"><strong>{{ r.t }}.</strong> {{ r.d }}</li>
        </ul>
        <NuxtLink to="/parcours" class="link">Découvrir mon parcours →</NuxtLink>
      </div>
    </section>

    <!-- TÉMOIGNAGES (affichés dès qu’il y en a) -->
    <Temoignages />

    <!-- AUDIT GRATUIT -->
    <section class="section audit-sec" aria-labelledby="audit-title">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <h2 id="audit-title" class="h2">Votre site est-il bien trouvé sur&nbsp;Google&nbsp;?</h2>
          <p class="lead">
            On vous propose un audit gratuit : on regarde votre site (ou vos outils, ou votre présence en ligne si
            vous n’avez pas encore de site) et on vous dit ce qu’on changerait en priorité. Vous n’êtes engagé à rien.
          </p>
        </div>
        <div class="audit-cases">
          <div v-for="(c, i) in audit.cases" :key="c.t" class="audit-case" data-reveal>
            <span class="ac-num">{{ i + 1 }}</span>
            <h3>{{ c.t }}</h3>
            <p>{{ c.d }}</p>
          </div>
        </div>
        <div class="audit-cta" data-reveal>
          <NuxtLink to="/audit-gratuit" class="btn">Audit gratuit <span class="arr" aria-hidden="true">→</span></NuxtLink>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="section wrap" aria-labelledby="svc-title">
      <div class="sec-head" data-reveal>
        <h2 id="svc-title" class="h2">Ce que je propose</h2>
      </div>
      <div class="svc-grid">
        <NuxtLink v-for="(s, i) in services" :key="s.id" :to="`/services/${s.id}`" class="svc" data-reveal>
          <span class="svc-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.short }}</p>
          <span class="svc-foot">
            <span class="svc-price">{{ s.price }}</span>
            <span class="svc-more">En savoir plus <span class="arr" aria-hidden="true">→</span></span>
          </span>
        </NuxtLink>
      </div>
      <p class="svc-after" data-reveal><strong>{{ maintenance.title }}</strong> {{ maintenance.text }} {{ maintenance.price }}</p>
    </section>


    <!-- MÉTHODE -->
    <section class="section wrap" aria-labelledby="method-title">
      <div class="sec-head" data-reveal>
        <h2 id="method-title" class="h2">Comment on travaille ensemble</h2>
      </div>
      <MethodSteps />
    </section>

    <!-- ZONE -->
    <section class="section zone-sec" aria-labelledby="zone-title">
      <div class="wrap zone">
        <div class="zone-txt" data-reveal>
          <h2 id="zone-title" class="h2">Je suis basée à Mulhouse</h2>
          <p class="lead">
            Mon agence est installée à Mulhouse, dans le sud de l’Alsace, entre les Vosges et le Rhin.
          </p>
        </div>
        <div class="zone-map" data-reveal>
          <ZoneMap />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section wrap faq-sec" aria-labelledby="faq-title">
      <div class="sec-head" data-reveal>
        <h2 id="faq-title" class="h2">Questions fréquentes</h2>
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

.hero-visual { position: relative; aspect-ratio: 1 / .92; margin-top: 40px; }
.hv { position: absolute; will-change: transform; }
.hv-back { top: 0; right: 0; width: 78%; transform: rotate(2.5deg); opacity: .96; }
.hv-front { left: 0; top: 30%; width: 82%; transform: rotate(-2deg); }
.hv-phone { right: 2%; bottom: -2%; width: 22%; transform: rotate(4deg); }

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

/* ---------- audit gratuit ---------- */
.audit-sec { background: var(--color-blush); }
.audit-cases { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(16px, 2vw, 24px); }
.audit-case { padding: clamp(24px, 3vw, 34px); border-radius: 22px; background: #fff; border: 1px solid color-mix(in srgb, var(--color-wine) 18%, var(--color-line)); }
.ac-num {
  display: grid; place-items: center; width: 38px; height: 38px; border-radius: 50%;
  background: var(--color-wine); color: #fff; font-weight: 760; font-size: 17px;
}
.audit-case h3 { margin-top: 18px; font-weight: 740; font-stretch: 110%; font-size: 22px; line-height: 1.2; letter-spacing: -.01em; }
.audit-case p { margin-top: 10px; font-size: 16px; line-height: 1.6; color: var(--color-graphite); }
.audit-cta { margin-top: clamp(28px, 4vw, 44px); display: flex; flex-wrap: wrap; align-items: center; gap: 14px 24px; }

/* ---------- services ---------- */
.svc-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(16px, 2vw, 24px); }
.svc {
  position: relative; display: flex; flex-direction: column;
  padding: clamp(24px, 3vw, 40px); border-radius: 22px;
  background: #fff; border: 1px solid var(--color-line);
  color: var(--color-ink); text-decoration: none;
  transition: border-color .25s, transform .25s, box-shadow .25s;
}
.svc:last-child:nth-child(odd) { grid-column: 1 / -1; }
.svc:hover { border-color: var(--color-wine); transform: translateY(-3px); box-shadow: 0 20px 40px -28px rgb(29 22 26 / .35); }
.svc-num { font-size: 14px; color: var(--color-wine); }
.svc h3 { margin-top: 18px; font-weight: 760; font-stretch: 112%; font-size: clamp(24px, 2.4vw, 30px); letter-spacing: -.015em; line-height: 1.1; }
.svc p { margin-top: 12px; color: var(--color-graphite); font-size: 16.5px; line-height: 1.6; flex: 1; }
.svc-foot {
  margin-top: 22px; padding-top: 18px; border-top: 1px solid var(--color-line);
  display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 8px 20px;
}
.svc-price { font-weight: 720; font-stretch: 106%; font-size: 16.5px; color: var(--color-ink); }
.svc-more { font-weight: 650; color: var(--color-wine); }
.svc-more .arr { display: inline-block; transition: transform .2s; }
.svc:hover .svc-more .arr { transform: translateX(4px); }
.svc-after {
  margin-top: 28px; padding: 20px 24px; border-radius: 16px;
  background: var(--color-blush); color: var(--color-ink); font-size: 16px; line-height: 1.6;
}
.svc-after strong { color: var(--color-wine-deep); margin-right: 4px; }


/* ---------- zone ---------- */
.zone-sec { background: linear-gradient(var(--color-paper), var(--color-sand)); }
.zone { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, .9fr); gap: clamp(32px, 6vw, 96px); align-items: center; }
.zone-txt .h2 { margin-top: 18px; }
.zone-txt .lead { margin-top: 20px; }
.zone-map { max-width: 460px; justify-self: center; width: 100%; }

/* ---------- à propos ---------- */
.about { display: grid; grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr); gap: clamp(32px, 6vw, 96px); align-items: center; }
.about-pic img { display: block; width: 100%; border-radius: 24px; aspect-ratio: 4 / 5; object-fit: cover; object-position: 50% 20%; }
.about-txt .h2 { margin-top: 18px; }
.about-txt .lead { margin-top: 22px; }
.about-p { margin-top: 16px; color: var(--color-graphite); max-width: 60ch; }
.about-why { list-style: none; margin-top: 22px; display: flex; flex-direction: column; }
.about-why li { padding: 12px 0; border-top: 1px solid var(--color-line); font-size: 16.5px; line-height: 1.55; color: var(--color-graphite); }
.about-why li:last-child { border-bottom: 1px solid var(--color-line); }
.about-why strong { color: var(--color-ink); font-weight: 720; }
.about-txt .link { display: inline-block; margin-top: 24px; }

.faq-sec { padding-bottom: clamp(24px, 4vw, 48px); }

@media (max-width: 960px) {
  .hero { grid-template-columns: 1fr; }
  .hero-visual { max-width: 620px; width: 100%; margin: 12px auto 0; }
  .audit-cases { grid-template-columns: 1fr; }
  .zone, .about { grid-template-columns: 1fr; }
  .about-pic { max-width: 420px; }
}
@media (max-width: 640px) {
  .svc-grid { grid-template-columns: 1fr; }
}
</style>
