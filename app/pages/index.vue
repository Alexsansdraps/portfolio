<script setup lang="ts">
import { business } from '~/data/site'
import portrait from '~/assets/img/portrait.webp'

const { tr, chemin, en } = useLangue()
const c = useContenu()

usePageSeo({
  title: tr('Création de site internet à Mulhouse | Freelance en Alsace', 'Website design in Mulhouse, Alsace | Freelance web developer'),
  description: tr(
    'Développeuse web freelance à Mulhouse : sites internet, boutiques en ligne, référencement Google, réseaux sociaux et logiciels sur mesure. Premier rendez-vous gratuit et sans engagement.',
    'Freelance web developer in Mulhouse, France: websites, online shops, Google search, social media and custom software. Free first meeting, with no obligation.',
  ),
  path: '/',
})

const lachance = computed(() => c.value.projects[0]!)
const memoryline = computed(() => c.value.projects[1]!)
const years = new Date().getFullYear() - business.since
const formules = computed(() => [
  {
    t: tr('De A à Z', 'From A to Z'),
    d: tr('Je m’occupe de tout : votre site, votre fiche Google, vos réseaux sociaux, puis le suivi une fois en ligne.', 'I take care of everything: your website, your Google profile, your social media, then ongoing care once you’re live.'),
    lien: tr('Parlons de votre projet', 'Let’s talk about your project'),
    to: business.booking,
  },
  {
    t: tr('Juste une partie', 'Just one part'),
    d: tr('Un site, une refonte, le référencement ou vos réseaux sociaux : je prends ce qui vous manque, et vous gardez le reste.', 'A website, a redesign, search rankings or your social media: I take on what you’re missing, and you keep the rest.'),
    lien: tr('Voir les services et les tarifs', 'See services and prices'),
    to: chemin('/services'),
  },
  {
    t: tr('Des conseils', 'Advice'),
    d: tr('Un regard extérieur sur ce que vous faites déjà, pour savoir quoi améliorer en priorité.', 'An outside view of what you already do, so you know what to improve first.'),
    lien: tr('Réserver un rendez-vous gratuit', 'Book a free meeting'),
    to: business.booking,
  },
])
</script>

<template>
  <main>
    <!-- HERO -->
    <section class="hero wrap" aria-labelledby="hero-title">
      <div class="hero-txt">
        <h1 v-if="!en" id="hero-title" class="hero-h1 rise d1">
          Votre présence en ligne, <em>je m’en occupe.</em>
        </h1>
        <h1 v-else id="hero-title" class="hero-h1 rise d1">
          Your online presence, <em>taken care of.</em>
        </h1>
        <p class="hero-sub rise d2">
          {{ tr('Site internet, fiche Google, réseaux sociaux : je vous accompagne de A à Z, ou seulement sur ce qui vous manque.', 'Website, Google profile, social media: I can handle everything from A to Z, or just the part you’re missing.') }}
        </p>
        <p class="hero-lead rise d2">
          {{ tr('Développeuse web freelance à Mulhouse : vous gardez le même contact du début à la fin.', 'Freelance web developer in Mulhouse, France: you deal with the same person from start to finish.') }}
        </p>
        <div class="hero-ctas rise d3">
          <a :href="business.booking" class="btn" target="_blank" rel="noopener">{{ tr('Rendez-vous gratuit', 'Free meeting') }} <span class="arr" aria-hidden="true">↗</span></a>
          <NuxtLink :to="chemin('/realisations')" class="btn btn-ghost">{{ tr('Voir mes réalisations', 'See my work') }}</NuxtLink>
        </div>
      </div>

      <div class="hero-visual rise d2" aria-hidden="true">
        <div class="hv hv-back" data-depth="0.06">
          <BrowserFrame v-bind="memoryline.extra" :url="memoryline.domain" eager />
        </div>
        <div class="hv hv-front" data-depth="0.14">
          <BrowserFrame v-bind="lachance.cover" :url="lachance.domain" eager />
        </div>
        <div class="hv hv-phone" data-depth="0.24">
          <PhoneFrame v-bind="memoryline.mobile" />
        </div>
      </div>
    </section>

    <!-- TROIS FAÇONS DE TRAVAILLER ENSEMBLE -->
    <section class="formules" aria-labelledby="formules-title">
      <div class="wrap">
        <h2 id="formules-title" class="formules-t" data-reveal>{{ tr('Tout, une partie, ou juste des conseils', 'Everything, just one part, or simply advice') }}</h2>
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
          <h2 id="real-title" class="h2">{{ tr('Mes derniers projets', 'My latest projects') }}</h2>
          <p class="lead">
            {{ tr(
              'Trois sites que j’ai conçus et développés cette année, pour une entreprise d’animation, une boutique d’affiches personnalisées et un studio photo et vidéo.',
              'Three websites I designed and built this year, for an entertainment company, a personalised poster shop and a photo and video studio.',
            ) }}
          </p>
        </div>
        <div class="projects">
          <ProjectCard v-for="(p, i) in c.projects" :key="p.slug" :project="p" :flip="i % 2 === 1" />
        </div>
      </div>
    </section>

    <!-- À PROPOS -->
    <section class="section wrap about" aria-labelledby="about-title">
      <div class="about-pic" data-reveal>
        <img :src="portrait" width="720" height="900" :alt="tr('Portrait d’Alexandra Porhansl, développeuse web freelance', 'Portrait of Alexandra Porhansl, freelance web developer')" loading="lazy" decoding="async">
      </div>
      <div class="about-txt" data-reveal>
        <h2 v-if="!en" id="about-title" class="h2">Bonjour, <em>moi c’est Alexandra.</em></h2>
        <h2 v-else id="about-title" class="h2">Hello, <em>I’m Alexandra.</em></h2>
        <p class="lead">
          {{ tr(
            `Je crée des sites web depuis ${years} ans, en agence, en startup puis chez des éditeurs de logiciels.`,
            `I’ve been building websites for ${years} years, at an agency, at a start-up, then at software companies.`,
          ) }}
        </p>
        <p class="about-p">
          {{ tr(
            'J’ai toujours aimé le contact avec les clients : coder seule dans mon coin ne m’a jamais suffi. Avec moi, vous parlez directement à la personne qui fait votre site.',
            'I’ve always enjoyed working with clients: coding alone in my corner was never enough for me. With me, you talk directly to the person building your website.',
          ) }}
        </p>
        <ul class="about-why">
          <li v-for="r in c.reasons" :key="r.t"><strong>{{ r.t }}.</strong> {{ r.d }}</li>
        </ul>
        <NuxtLink :to="chemin('/parcours')" class="link">{{ tr('Découvrir mon parcours', 'More about me') }} →</NuxtLink>
      </div>
    </section>

    <!-- TÉMOIGNAGES (affichés dès qu’il y en a) -->
    <Temoignages />

    <!-- PREMIER RENDEZ-VOUS GRATUIT -->
    <section class="section rdv-sec" aria-labelledby="rdv-title">
      <div class="wrap rdv">
        <div data-reveal>
          <h2 v-if="!en" id="rdv-title" class="h2">Un premier rendez-vous d’une heure, <em>gratuit et sans engagement.</em></h2>
          <h2 v-else id="rdv-title" class="h2">A first one-hour meeting, <em>free with no obligation.</em></h2>
          <p class="lead">
            {{ tr(
              'On discute ensemble de votre situation, de vos besoins, de ce qui marche déjà et de ce qui vous manque. En visio ou en vrai, comme vous préférez.',
              'We talk about where you are, what you need, what already works and what’s missing. By video call or in person, whichever you prefer.',
            ) }}
          </p>
        </div>
        <a :href="business.booking" class="btn rdv-btn" target="_blank" rel="noopener" data-reveal>{{ tr('Réserver mon rendez-vous', 'Book my meeting') }} <span class="arr" aria-hidden="true">↗</span></a>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="section wrap" aria-labelledby="svc-title">
      <div class="sec-head" data-reveal>
        <h2 id="svc-title" class="h2">{{ tr('Ce que je propose', 'What I offer') }}</h2>
      </div>
      <div class="svc-grid">
        <NuxtLink v-for="s in c.services" :key="s.id" :to="chemin(`/services/${s.id}`)" class="svc" data-reveal>
          <span class="svc-ic" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" v-html="s.icon" />
          </span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.short }}</p>
          <span class="svc-foot">
            <span class="svc-price">{{ s.price }}</span>
            <span class="svc-more">{{ tr('Voir le détail', 'See details') }} <span class="arr" aria-hidden="true">→</span></span>
          </span>
        </NuxtLink>
      </div>
      <p class="svc-after" data-reveal><strong>{{ c.maintenance.title }}</strong> {{ c.maintenance.text }} {{ c.maintenance.price }}</p>
    </section>


    <!-- MÉTHODE -->
    <section class="section wrap" aria-labelledby="method-title">
      <div class="sec-head" data-reveal>
        <h2 id="method-title" class="h2">{{ tr('Comment on travaille ensemble', 'How we work together') }}</h2>
      </div>
      <MethodSteps />
    </section>

    <!-- ZONE -->
    <section class="section zone-sec" aria-labelledby="zone-title">
      <div class="wrap zone">
        <div class="zone-txt" data-reveal>
          <h2 v-if="!en" id="zone-title" class="h2">Je suis basée <em>à Mulhouse.</em></h2>
          <h2 v-else id="zone-title" class="h2">I’m based <em>in Mulhouse.</em></h2>
          <p class="lead">
            {{ tr(
              'Je travaille depuis Mulhouse, dans le sud de l’Alsace. On se voit en vrai ou en visio, comme vous préférez.',
              'I work from Mulhouse, in the south of Alsace, France, close to Germany and Switzerland. We can meet in person or by video call, whichever you prefer.',
            ) }}
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
        <h2 id="faq-title" class="h2">{{ tr('Questions fréquentes', 'Frequently asked questions') }}</h2>
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
