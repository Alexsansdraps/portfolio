<script setup lang="ts">
import { audit } from '~/data/site'

usePageSeo({
  title: 'Audit gratuit de site web et de référencement (SEO)',
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
  { t: 'Vous décrivez votre situation', d: 'Avec le formulaire ci-dessous : votre site s’il existe, vos outils, ce qui vous gêne.' },
  { t: 'On analyse', d: 'Votre site, votre visibilité sur Google, vos outils ou votre présence en ligne actuelle.' },
  { t: 'On vous présente le compte rendu', d: 'En rendez-vous ou en visio, avec les priorités et les prochaines étapes.' },
]
</script>

<template>
  <main>
    <section class="a-hero wrap">
      <p class="eyebrow rise">Audit gratuit</p>
      <h1 class="a-h1 rise d1">Audit gratuit de votre site <em>et de votre référencement.</em></h1>
      <p class="lead rise d2">
        Votre site ne vous amène pas assez de clients ? Vos outils vous font perdre du temps ? Vous n’avez pas encore
        de site ? On fait le point gratuitement, sans engagement, et on vous dit concrètement quoi faire.
      </p>
      <div class="a-ctas rise d3">
        <a href="#demande" class="btn">Audit gratuit <span class="arr" aria-hidden="true">↓</span></a>
        <span class="a-note">Gratuit · sans engagement</span>
      </div>
    </section>

    <section class="wrap a-cases" aria-label="Pour qui ?">
      <div v-for="(c, i) in audit.cases" :key="c.t" class="a-case" data-reveal>
        <span class="a-num">{{ i + 1 }}</span>
        <h2>{{ c.t }}</h2>
        <p>{{ c.d }}</p>
      </div>
    </section>

    <section class="section wrap a-grid">
      <div data-reveal>
        <p class="eyebrow">Ce qu’on regarde</p>
        <ul class="a-list">
          <li v-for="c in audit.checks" :key="c">{{ c }}</li>
        </ul>
      </div>
      <div class="a-gets" data-reveal>
        <p class="eyebrow">Ce que vous recevez</p>
        <ul class="a-list check">
          <li v-for="g in audit.gets" :key="g">{{ g }}</li>
        </ul>
      </div>
    </section>

    <section class="on-dark section" aria-labelledby="a-how">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <p class="eyebrow">Comment ça se passe</p>
          <h2 id="a-how" class="h2">Comment ça marche</h2>
        </div>
        <ol class="a-steps">
          <li v-for="(s, i) in steps" :key="s.t" data-reveal>
            <span class="n">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3>{{ s.t }}</h3>
            <p>{{ s.d }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section id="demande" class="section wrap a-form" aria-labelledby="a-form-t">
      <div class="sec-head" data-reveal>
        <p class="eyebrow">Demande d’audit</p>
        <h2 id="a-form-t" class="h2">Hopla, <em>on fait le point ?</em></h2>
        <p class="lead">Indiquez votre site si vous en avez un, et dites-m’en un peu plus sur votre activité.</p>
      </div>
      <ContactForm projet="Audit gratuit" />
    </section>
  </main>
</template>

<style scoped>
.a-hero { padding-top: clamp(40px, 7vw, 96px); padding-bottom: clamp(40px, 5vw, 64px); }
.a-h1 {
  margin-top: 20px; font-weight: 800; font-stretch: 116%;
  font-size: clamp(40px, 6vw, 82px); line-height: .98; letter-spacing: -.03em; max-width: 17ch; text-wrap: balance;
}
.a-h1 em { font-style: normal; color: var(--color-wine); }
.a-hero .lead { margin-top: 24px; }
.a-ctas { margin-top: 30px; display: flex; flex-wrap: wrap; align-items: center; gap: 14px 22px; }
.a-note { font-family: var(--font-mono); font-size: 12.5px; letter-spacing: .04em; color: var(--color-graphite); }

.a-cases { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(16px, 2vw, 24px); }
.a-case { padding: clamp(24px, 3vw, 34px); border-radius: 22px; background: var(--color-blush); }
.a-num {
  display: grid; place-items: center; width: 38px; height: 38px; border-radius: 50%;
  background: var(--color-wine); color: #fff; font-weight: 760; font-size: 17px;
}
.a-case h2 { margin-top: 18px; font-weight: 740; font-stretch: 110%; font-size: 22px; line-height: 1.2; letter-spacing: -.01em; }
.a-case p { margin-top: 10px; font-size: 16px; line-height: 1.6; color: var(--color-graphite); }

.a-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: clamp(32px, 6vw, 88px); align-items: start; }
.a-list { list-style: none; margin-top: 18px; }
.a-list li {
  position: relative; padding: 14px 0 14px 32px; border-bottom: 1px solid var(--color-line);
  font-size: 16.5px; line-height: 1.5;
}
.a-list li::before { content: "→"; position: absolute; left: 0; top: 14px; color: var(--color-wine); font-weight: 700; }
.a-list.check li::before {
  content: "✓"; top: 15px; display: grid; place-items: center; width: 20px; height: 20px; border-radius: 50%;
  background: var(--color-wine); color: #fff; font-size: 11px;
}
.a-gets { padding: clamp(24px, 3vw, 36px); border-radius: 24px; background: #fff; border: 1px solid var(--color-line); }

.a-steps { list-style: none; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(24px, 3vw, 40px); }
.a-steps li { padding-top: 20px; border-top: 1px solid color-mix(in srgb, var(--color-bone) 20%, transparent); }
.a-steps .n { font-family: var(--font-mono); font-size: 13px; color: var(--color-rose); }
.a-steps h3 { margin-top: 10px; font-weight: 740; font-stretch: 110%; font-size: 22px; line-height: 1.2; }
.a-steps p { margin-top: 10px; color: color-mix(in srgb, var(--color-bone) 80%, var(--color-plum)); }

.a-form { max-width: 960px; }

@media (max-width: 900px) {
  .a-cases, .a-grid, .a-steps { grid-template-columns: 1fr; }
}
</style>
