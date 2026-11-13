<script setup lang="ts">
import { business, services, reasons, maintenance } from '~/data/site'
import { projects } from '~/data/projects'
import portrait from '~/assets/img/portrait.webp'

usePageSeo({
  title: 'Création de site internet à Mulhouse | Freelance en Alsace',
  description: 'Développeuse web freelance à Mulhouse : sites internet, boutiques en ligne, référencement Google, réseaux sociaux et logiciels sur mesure. Premier rendez-vous gratuit et sans engagement.',
  path: '/',
})

const [lachance, memoryline] = projects
const formules = [
  { t: 'De A à Z', d: 'Je m’occupe de tout : votre site, votre fiche Google, vos réseaux sociaux, puis le suivi une fois en ligne.', lien: 'Parlons de votre projet', to: business.booking },
  { t: 'Juste une partie', d: 'Un site, une refonte, le référencement ou vos réseaux sociaux : je prends ce qui vous manque, et vous gardez le reste.', lien: 'Voir les services et les tarifs', to: '/services' },
  { t: 'Des conseils', d: 'Un regard extérieur sur ce que vous faites déjà, pour savoir quoi améliorer en priorité.', lien: 'Réserver un rendez-vous gratuit', to: business.booking },
]
</script>

<template>
  <main>
    <!-- HERO -->
    <section class="hero wrap" aria-labelledby="hero-title">
      <div class="hero-txt">
        <h1 id="hero-title" class="hero-h1 rise d1">
          Votre présence en ligne, <em>je m’en occupe.</em>
        </h1>
        <p class="hero-sub rise d2">
          Site internet, fiche Google, réseaux sociaux&nbsp;: je vous accompagne de A à Z, ou seulement sur ce qui vous manque.
        </p>
        <p class="hero-lead rise d2">
          Développeuse web freelance à Mulhouse&nbsp;: vous gardez le même contact du début à la fin.
        </p>
        <div class="hero-ctas rise d3">
          <a :href="business.booking" class="btn" target="_blank" rel="noopener">Rendez-vous gratuit <span class="arr" aria-hidden="true">↗</span></a>
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

    <!-- TROIS FAÇONS DE TRAVAILLER ENSEMBLE -->
    <section class="formules" aria-labelledby="formules-title">
      <div class="wrap">
        <h2 id="formules-title" class="formules-t" data-reveal>Tout, une partie, ou juste des conseils</h2>
        <div class="formules-grid">
          <div v-for="f in formules" :key="f.t" class="formule" data-reveal>
            <h3>{{ f.t }}</h3>
            <p>{{ f.d }}</p>
            <NuxtLink :to="f.to" class="link" :target="f.to.startsWith('http') ? '_blank' : undefined">{{ f.lien }} {{ f.to.startsWith('http') ? '↗' : '→' }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>

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
        <img :src="portrait" width="720" height="900" alt="Portrait d’Alexandra Porhansl, développeuse web freelance" loading="lazy" decoding="async">
      </div>
      <div class="about-txt" data-reveal>
        <h2 id="about-title" class="h2">Bonjour, <em>moi c’est Alexandra.</em></h2>
        <p class="lead">
          Je crée des sites web depuis {{ new Date().getFullYear() - 2019 }} ans, en agence, en startup puis chez des éditeurs de logiciels.
        </p>
        <p class="about-p">
          J’ai toujours aimé le contact avec les clients : coder seule dans mon coin ne m’a jamais suffi.
          Avec moi, vous parlez directement à la personne qui fait votre site.
        </p>
        <ul class="about-why">
          <li v-for="r in reasons" :key="r.t"><strong>{{ r.t }}.</strong> {{ r.d }}</li>
        </ul>
        <NuxtLink to="/parcours" class="link">Découvrir mon parcours →</NuxtLink>
      </div>
    </section>

    <!-- TÉMOIGNAGES (affichés dès qu’il y en a) -->
    <Temoignages />

    <!-- PREMIER RENDEZ-VOUS OFFERT -->
    <section class="section rdv-sec" aria-labelledby="rdv-title">
      <div class="wrap rdv">
        <div data-reveal>
          <h2 id="rdv-title" class="h2">Un premier rendez-vous d’une heure, <em>gratuit et sans engagement.</em></h2>
          <p class="lead">
            On discute ensemble de votre situation, de vos besoins, de ce qui marche déjà et de ce qui vous manque.
            En visio ou en vrai, comme vous préférez.
          </p>
        </div>
        <a :href="business.booking" class="btn rdv-btn" target="_blank" rel="noopener" data-reveal>Réserver mon rendez-vous <span class="arr" aria-hidden="true">↗</span></a>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="section wrap" aria-labelledby="svc-title">
      <div class="sec-head" data-reveal>
        <h2 id="svc-title" class="h2">Ce que je propose</h2>
      </div>
      <div class="svc-grid">
        <NuxtLink v-for="s in services" :key="s.id" :to="`/services/${s.id}`" class="svc" data-reveal>
          <span class="svc-ic" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" v-html="s.icon" />
          </span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.short }}</p>
          <span class="svc-foot">
            <span class="svc-price">{{ s.price }}</span>
            <span class="svc-more">Voir le détail <span class="arr" aria-hidden="true">→</span></span>
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
          <h2 id="zone-title" class="h2">Je suis basée <em>à Mulhouse.</em></h2>
          <p class="lead">
            Je travaille depuis Mulhouse, dans le sud de l’Alsace. On se voit en vrai ou en visio,
            comme vous préférez.
          </p>
          <Bretzel class="zone-bretzel" />
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

/* ---------- tout, une partie, ou juste des conseils ---------- */
.formules { background: var(--color-sand); border-block: 1px solid var(--color-line); padding-block: clamp(40px, 6vw, 72px); }
.formules-t { font-weight: 760; font-stretch: 112%; font-size: clamp(24px, 2.6vw, 34px); line-height: 1.1; letter-spacing: -.015em; }
.formules-grid { margin-top: clamp(22px, 3vw, 36px); display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(16px, 2vw, 24px); }
.formule { padding: clamp(22px, 2.6vw, 30px); border-radius: 22px; background: #fff; border: 1px solid var(--color-line); display: flex; flex-direction: column; gap: 10px; }
.formule h3 { font-weight: 760; font-stretch: 112%; font-size: clamp(21px, 2vw, 26px); letter-spacing: -.01em; color: var(--color-wine); }
.formule p { font-size: 16.5px; line-height: 1.6; color: var(--color-graphite); flex: 1; }
.formule .link { width: fit-content; }
@media (max-width: 900px) { .formules-grid { grid-template-columns: 1fr; } }

/* ---------- réalisations ---------- */
.projects { display: flex; flex-direction: column; gap: clamp(72px, 10vw, 140px); }

/* ---------- premier rendez-vous gratuit ---------- */
.rdv-sec { background: var(--color-blush); }
.rdv { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 24px 56px; align-items: end; }
.rdv .h2 em { font-style: normal; color: var(--color-wine); }
.rdv .lead { margin-top: 18px; }
@media (max-width: 860px) { .rdv { grid-template-columns: 1fr; align-items: start; } .rdv-btn { justify-self: start; } }

/* ---------- services ---------- */
.svc-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(16px, 2vw, 24px); }
.svc {
  display: flex; flex-direction: column; align-items: flex-start; gap: 12px;
  padding: clamp(22px, 2.4vw, 28px); border-radius: 22px; background: #fff;
  box-shadow: 0 18px 40px -30px rgb(29 22 26 / .45);
  color: var(--color-ink); text-decoration: none;
  transition: transform .25s, box-shadow .25s;
}
.svc:hover { transform: translateY(-4px); box-shadow: 0 24px 46px -28px rgb(29 22 26 / .5); }
.svc-ic {
  display: grid; place-items: center; width: 52px; height: 52px; border-radius: 50%;
  background: var(--color-wine); color: #fff;
}
.svc-ic svg { width: 24px; height: 24px; }
.svc h3 { margin-top: 4px; font-weight: 740; font-stretch: 110%; font-size: 20px; letter-spacing: -.01em; line-height: 1.2; }
.svc p { color: var(--color-graphite); font-size: 15.5px; line-height: 1.6; flex: 1; }
.svc-foot {
  align-self: stretch; margin-top: 6px; padding-top: 14px; border-top: 1px solid var(--color-line);
  display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 6px 16px;
}
.svc-price { font-weight: 720; font-stretch: 106%; font-size: 15.5px; color: var(--color-ink); }
.svc-more { font-weight: 650; font-size: 15px; color: var(--color-wine); }
.svc-more .arr { display: inline-block; transition: transform .2s; }
.svc:hover .svc-more .arr { transform: translateX(4px); }
@media (max-width: 1000px) { .svc-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
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
.zone-bretzel { margin-top: 24px; transform: rotate(-10deg); }
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
  .zone, .about { grid-template-columns: 1fr; }
  .about-pic { max-width: 420px; }
}
@media (max-width: 640px) {
  .svc-grid { grid-template-columns: 1fr; }
}
</style>
