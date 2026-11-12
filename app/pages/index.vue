<script setup lang="ts">
import { services, maintenance, audit } from '~/data/site'
import { projects } from '~/data/projects'
import portrait from '~/assets/img/portrait.webp'

usePageSeo({
  title: 'Création de site internet à Mulhouse | Agence web en Alsace',
  description: 'Agence web freelance à Mulhouse : création de sites internet, sites vitrines, boutiques en ligne, référencement Google et refontes. Audit gratuit.',
  path: '/',
})
</script>

<template>
  <main>
    <!-- EN-TÊTE DE PAGE -->
    <section class="hero wrap" aria-labelledby="hero-title">
      <h1 id="hero-title" class="t-display">
        Je crée des sites internet pour les entreprises de Mulhouse et d’Alsace.
      </h1>
      <div class="hero-foot">
        <p class="lead">
          Agence web freelance à Mulhouse. Sites vitrines, boutiques en ligne, référencement Google, refontes
          et outils sur mesure. Vous travaillez avec moi, Alexandra, du premier rendez-vous à la mise en ligne.
        </p>
        <ul class="lines hero-links">
          <li><NuxtLink to="/services/site-vitrine">Site vitrine</NuxtLink><span class="num muted">dès 990 € HT</span></li>
          <li><NuxtLink to="/audit-gratuit">Audit de votre site</NuxtLink><span class="muted">gratuit</span></li>
          <li><NuxtLink to="/realisations">Réalisations</NuxtLink><span class="muted">{{ projects.length }} projets récents</span></li>
        </ul>
      </div>
    </section>

    <!-- RÉALISATIONS -->
    <section id="realisations" class="sec" aria-labelledby="real-title">
      <div class="wrap">
        <div class="cols sec-head">
          <h2 id="real-title" class="t-sec">Réalisations</h2>
          <p class="lead muted">Trois sites conçus et développés cette année, pour une entreprise d’animation, une boutique d’affiches personnalisées et un studio photo et vidéo.</p>
        </div>
        <div class="projects">
          <ProjectCard v-for="p in projects" :key="p.slug" :project="p" data-reveal />
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="sec" aria-labelledby="svc-title">
      <div class="wrap cols">
        <h2 id="svc-title" class="t-sec">Services</h2>
        <div>
          <ul class="svc">
            <li v-for="s in services" :key="s.id" data-reveal>
              <h3 class="t-h3"><NuxtLink :to="`/services/${s.id}`">{{ s.title }}</NuxtLink></h3>
              <p class="muted">{{ s.short }}</p>
              <p class="svc-price num">{{ s.price }}</p>
            </li>
          </ul>
          <p class="svc-after" data-reveal>
            <strong>{{ maintenance.title }}.</strong> {{ maintenance.text }} {{ maintenance.price }}
          </p>
          <p class="go-list svc-links"><NuxtLink to="/services" class="go">Services et tarifs en détail</NuxtLink></p>
        </div>
      </div>
    </section>

    <!-- AUDIT GRATUIT -->
    <section class="sec" aria-labelledby="audit-title">
      <div class="wrap cols">
        <p class="t-sec">Audit gratuit</p>
        <div>
          <h2 id="audit-title" class="t-h2">Votre site est-il bien trouvé sur Google ?</h2>
          <p class="lead audit-lead muted">
            On regarde votre site, vos outils, ou votre présence en ligne si vous n’avez pas encore de site, puis on vous
            dit ce qu’on changerait en priorité. C’est gratuit et vous n’êtes engagé à rien.
          </p>
          <div class="audit-cases">
            <div v-for="c in audit.cases" :key="c.t" data-reveal>
              <h3 class="t-h3">{{ c.t }}</h3>
              <p class="muted">{{ c.d }}</p>
            </div>
          </div>
          <p class="go-list audit-links"><NuxtLink to="/audit-gratuit" class="go">Demander l’audit gratuit</NuxtLink></p>
        </div>
      </div>
    </section>

    <!-- MÉTHODE -->
    <section class="sec" aria-labelledby="method-title">
      <div class="wrap cols">
        <h2 id="method-title" class="t-sec">Comment on travaille ensemble</h2>
        <MethodSteps />
      </div>
    </section>

    <!-- À PROPOS -->
    <section class="sec" aria-labelledby="about-title">
      <div class="wrap cols">
        <p class="t-sec">À propos</p>
        <div class="about">
          <div data-reveal>
            <h2 id="about-title" class="t-h2">Bonjour, je suis Alexandra.</h2>
            <div class="about-txt">
              <p>
                Je crée des sites web depuis 2019. J’ai travaillé en agence web, dans une startup et chez des éditeurs
                de logiciels, sur des sites, des boutiques en ligne et des applications mobiles, avant de lancer
                mon agence à Mulhouse.
              </p>
              <p>
                C’est moi qui conçois et développe votre site, alors c’est avec moi que vous échangez du début à la fin.
                Je ne pars pas d’un thème acheté en ligne, je vous montre le site au fur et à mesure et je réponds
                sous 24 heures. Le site, le nom de domaine et les contenus vous appartiennent.
              </p>
            </div>
            <p class="go-list about-links"><NuxtLink to="/parcours" class="go">Mon parcours</NuxtLink></p>
          </div>
          <figure class="about-pic" data-reveal>
            <img :src="portrait" width="720" height="900" alt="Portrait d’Alexandra Porhansl, fondatrice de l’agence" loading="lazy" decoding="async">
          </figure>
        </div>
      </div>
    </section>

    <!-- OÙ ME TROUVER -->
    <section class="sec" aria-labelledby="zone-title">
      <div class="wrap cols">
        <h2 id="zone-title" class="t-sec">Où me trouver</h2>
        <div class="zone">
          <p class="lead" data-reveal>
            Mon agence est à Mulhouse, dans le sud de l’Alsace. On se voit en rendez-vous ou en visio, comme vous préférez.
          </p>
          <div class="zone-map" data-reveal>
            <ZoneMap />
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="sec" aria-labelledby="faq-title">
      <div class="wrap cols">
        <h2 id="faq-title" class="t-sec">Questions fréquentes</h2>
        <FaqList />
      </div>
    </section>

    <CtaBand />
  </main>
</template>

<style scoped>
/* ---------- en-tête de page ---------- */
.hero { padding-top: clamp(40px, 7vw, 104px); padding-bottom: clamp(48px, 7vw, 96px); }
.hero .t-display { max-width: 15em; }
.hero-foot {
  margin-top: clamp(36px, 5vw, 72px);
  display: grid; grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); gap: 32px clamp(32px, 6vw, 96px); align-items: start;
}
.hero-links li { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; font-size: 20px; }
.hero-links a { text-decoration: underline; text-underline-offset: .2em; }
.hero-links span { font-size: 17px; text-align: right; }

/* ---------- sections ---------- */
.sec-head { margin-bottom: clamp(36px, 5vw, 64px); }
.projects { display: flex; flex-direction: column; }
.projects > * + * { margin-top: clamp(40px, 5vw, 64px); padding-top: clamp(40px, 5vw, 64px); border-top: 1px solid var(--color-hair); }

.svc { list-style: none; border-top: 1px solid var(--color-hair); }
.svc li {
  display: grid; grid-template-columns: minmax(0, 4fr) minmax(0, 6fr) minmax(0, 3fr); gap: 8px 32px; align-items: baseline;
  padding: 18px 0; border-bottom: 1px solid var(--color-hair);
}
.svc h3 a { text-decoration: none; }
.svc h3 a:hover { text-decoration: underline; text-decoration-thickness: 1px; }
.svc-price { text-align: right; }
.svc-after { margin-top: 24px; max-width: 40em; }
.svc-after strong { font-weight: 500; }
.svc-links { margin-top: 24px; }

.audit-lead { margin-top: 18px; }
.audit-cases { margin-top: clamp(28px, 4vw, 44px); display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px clamp(24px, 3vw, 40px); }
.audit-cases > div { padding-top: 14px; border-top: 1px solid var(--color-hair); }
.audit-cases p { margin-top: 8px; font-size: 17px; }
.audit-links { margin-top: 32px; }

.about { display: grid; grid-template-columns: minmax(0, 6fr) minmax(0, 3fr); gap: 32px clamp(32px, 5vw, 72px); align-items: start; }
.about-txt { margin-top: 20px; max-width: 36em; }
.about-links { margin-top: 24px; }
.about-pic { margin: 0; }
.about-pic img { display: block; width: 100%; aspect-ratio: 4 / 5; object-fit: cover; object-position: 50% 20%; }

.zone { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 4fr); gap: 32px clamp(32px, 5vw, 72px); align-items: start; }
.zone-map { max-width: 380px; width: 100%; justify-self: end; }

@media (max-width: 960px) {
  .hero-foot, .zone, .about { grid-template-columns: 1fr; }
  .about-pic { max-width: 360px; }
  .zone-map { justify-self: start; }
  .audit-cases { grid-template-columns: 1fr; }
}
@media (max-width: 700px) {
  .svc li { grid-template-columns: 1fr; }
  .svc-price { text-align: left; }
}
</style>
