<script setup lang="ts">
import { audit } from '~/data/site'

usePageSeo({
  title: 'Audit gratuit de site web et de référencement (SEO) à Mulhouse',
  description: 'Audit gratuit de votre site, de votre référencement Google ou de vos outils, par une agence web basée à Mulhouse. Pas encore de site ? On fait le point.',
  path: '/audit-gratuit',
})

useJsonLd([
  breadcrumb([['Accueil', '/'], ['Audit gratuit', '/audit-gratuit']]),
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Audit gratuit de site web et de référencement',
    'serviceType': 'Audit SEO et site internet',
    'description': 'Analyse gratuite et sans engagement d’un site internet, de son référencement Google, des outils utilisés ou de la présence en ligne d’une entreprise qui n’a pas encore de site.',
    'url': absoluteUrl('/audit-gratuit'),
    'provider': { '@id': absoluteUrl('/#agence') },
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Alsace' },
      { '@type': 'Country', 'name': 'France' },
    ],
    'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'EUR' },
  },
])

const steps = [
  { t: 'Vous décrivez votre situation', d: 'Avec le formulaire en bas de cette page, en indiquant votre site s’il existe, vos outils et ce qui vous gêne.' },
  { t: 'On analyse', d: 'Votre site, votre visibilité sur Google, vos outils ou votre présence en ligne actuelle.' },
  { t: 'On vous présente le compte rendu', d: 'En rendez-vous ou en visio, avec les priorités et les prochaines étapes.' },
]
</script>

<template>
  <main>
    <section class="head wrap">
      <h1 class="t-h1">Audit gratuit de votre site et de votre référencement</h1>
      <div class="head-foot">
        <p class="lead">
          Votre site ne vous amène pas assez de clients, vos outils vous font perdre du temps, ou vous n’avez pas encore
          de site ? On fait le point gratuitement et sans engagement, puis on vous dit concrètement quoi faire.
        </p>
        <p class="go-list"><a href="#demande" class="go">Faire ma demande</a><span class="muted">gratuit, sans engagement</span></p>
      </div>
    </section>

    <section class="sec" aria-labelledby="cases-t">
      <div class="wrap cols">
        <h2 id="cases-t" class="t-sec">Pour qui</h2>
        <div class="cases">
          <div v-for="c in audit.cases" :key="c.t" data-reveal>
            <h3 class="t-h3">{{ c.t }}</h3>
            <p class="muted">{{ c.d }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sec" aria-labelledby="checks-t">
      <div class="wrap cols">
        <h2 id="checks-t" class="t-sec">Ce qu’on regarde</h2>
        <div class="two">
          <ul class="lines" data-reveal>
            <li v-for="c in audit.checks" :key="c">{{ c }}</li>
          </ul>
          <div data-reveal>
            <h3 class="k">Ce que vous recevez</h3>
            <ul class="lines">
              <li v-for="g in audit.gets" :key="g">{{ g }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="sec" aria-labelledby="how-t">
      <div class="wrap cols">
        <h2 id="how-t" class="t-sec">Comment ça marche</h2>
        <ol class="steps">
          <li v-for="(s, i) in steps" :key="s.t" data-reveal>
            <span class="num muted" aria-hidden="true">{{ i + 1 }}.</span>
            <div>
              <h3 class="t-h3">{{ s.t }}</h3>
              <p class="muted">{{ s.d }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section id="demande" class="sec" aria-labelledby="form-t">
      <div class="wrap cols">
        <div>
          <h2 id="form-t" class="t-sec">Votre demande d’audit</h2>
          <p class="small form-help">Indiquez votre site si vous en avez un, et dites-m’en un peu plus sur votre activité.</p>
        </div>
        <ContactForm projet="Audit gratuit" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.head { padding-top: clamp(40px, 7vw, 96px); padding-bottom: clamp(40px, 6vw, 80px); }
.head .t-h1 { max-width: 14em; }
.head-foot {
  margin-top: clamp(28px, 4vw, 48px);
  display: grid; grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); gap: 24px clamp(32px, 6vw, 96px); align-items: end;
}

.cases { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px clamp(24px, 3vw, 40px); }
.cases > div { padding-top: 14px; border-top: 1px solid var(--color-hair); }
.cases p { margin-top: 8px; font-size: 17px; }

.two { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 32px clamp(32px, 4vw, 64px); align-items: start; }
.k { font-weight: 500; font-size: 18px; margin-bottom: 10px; }

.steps { list-style: none; border-top: 1px solid var(--color-hair); }
.steps li { display: grid; grid-template-columns: 2.2em 1fr; padding: 18px 0; border-bottom: 1px solid var(--color-hair); }
.steps .num { font-size: clamp(22px, 2vw, 26px); line-height: 1.2; }
.steps p { margin-top: 6px; }

.form-help { margin-top: 10px; max-width: 18em; }

@media (max-width: 960px) {
  .head-foot, .cases, .two { grid-template-columns: 1fr; }
}
</style>
