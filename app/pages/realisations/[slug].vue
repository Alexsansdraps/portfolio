<script setup lang="ts">
import { findProject, projects } from '~/data/projects'

const route = useRoute()
const project = findProject(String(route.params.slug))
if (!project) throw createError({ statusCode: 404, statusMessage: 'Réalisation introuvable', fatal: true })
const p = project

const others = projects.filter(o => o.slug !== p.slug)

usePageSeo({
  title: `${p.name} : ${p.kind.toLowerCase()} | Réalisation`,
  description: p.summary,
  path: `/realisations/${p.slug}`,
  image: p.cover.src,
  imageAlt: p.cover.alt,
  imageWidth: p.cover.w,
  imageHeight: p.cover.h,
  type: 'article',
})

useJsonLd([
  breadcrumb([['Accueil', '/'], ['Réalisations', '/realisations'], [p.name, `/realisations/${p.slug}`]]),
  {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    'name': `${p.name} — ${p.kind}`,
    'description': p.summary,
    'image': absoluteUrl(p.cover.src),
    'dateCreated': String(p.year),
    'inLanguage': 'fr-FR',
    'creator': { '@id': absoluteUrl('/#alexandra') },
    'publisher': { '@id': absoluteUrl('/#agence') },
    ...(p.url ? { url: p.url } : {}),
    'about': { '@type': 'Organization', 'name': p.name, ...(p.url ? { url: p.url } : {}) },
  },
])
</script>

<template>
  <main>
    <section class="cs-hero wrap">
      <nav class="crumbs rise" aria-label="Fil d’Ariane">
        <NuxtLink to="/">Accueil</NuxtLink><span aria-hidden="true">/</span>
        <NuxtLink to="/realisations">Réalisations</NuxtLink><span aria-hidden="true">/</span>
        <span aria-current="page">{{ p.name }}</span>
      </nav>

      <p class="cs-meta rise d1">
        <span class="status" :class="{ live: p.live }">{{ p.status }}</span>
        <NuxtLink :to="`/services/${p.service}`" class="cs-kind">{{ p.kind }}</NuxtLink><span aria-hidden="true">·</span><span>{{ p.year }}</span>
      </p>
      <h1 class="cs-h1 rise d1">{{ p.name }}</h1>
      <p class="cs-hook rise d2">{{ p.hook }}</p>
      <p class="cs-place rise d2">{{ [p.sector, p.place].filter(Boolean).join(' · ') }}</p>
      <div class="cs-ctas rise d3">
        <a v-if="p.url" :href="p.url" class="btn" target="_blank" rel="noopener">
          Visiter {{ p.domain }} <span aria-hidden="true">↗</span>
        </a>
        <NuxtLink to="/contact" class="btn" :class="{ 'btn-ghost': p.url }">Un projet similaire ? Parlons-en</NuxtLink>
      </div>
    </section>

    <div class="wrap cs-shot rise d3">
      <BrowserFrame v-bind="p.cover" :url="p.domain" eager />
    </div>

    <section class="wrap cs-grid section">
      <div class="cs-col" data-reveal>
        <h2 class="cs-h2">Le client</h2>
        <p class="cs-text">{{ p.context }}</p>
      </div>
      <div class="cs-col" data-reveal>
        <h2 class="cs-h2">Les objectifs</h2>
        <ul class="cs-goals">
          <li v-for="g in p.goals" :key="g">{{ g }}</li>
        </ul>
      </div>
    </section>

    <section class="on-dark section" aria-labelledby="done-title">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <h2 id="done-title" class="h2">Ce que j’ai fait</h2>
        </div>
        <ol class="cs-done">
          <li v-for="(d, i) in p.done" :key="i" data-reveal>
            <span class="n">{{ String(i + 1).padStart(2, '0') }}</span>
            <p>{{ d }}</p>
          </li>
        </ol>
        <ul v-if="p.figures.length" class="cs-figs" data-reveal>
          <li v-for="f in p.figures" :key="f.k"><b>{{ f.v }}</b><span>{{ f.k }}</span></li>
        </ul>
      </div>
    </section>

    <section class="section wrap cs-gallery" aria-label="Aperçus">
      <div class="g-wide" data-reveal>
        <BrowserFrame v-bind="p.extra" :url="p.domain" />
      </div>
      <div class="g-phone" data-reveal>
        <PhoneFrame v-bind="p.mobile" />
      </div>
    </section>

    <section class="wrap cs-next" aria-labelledby="next-title">
      <h2 id="next-title" class="cs-h2">{{ others.length > 1 ? 'Les autres réalisations' : 'Une autre réalisation' }}</h2>
      <NuxtLink v-for="o in others" :key="o.slug" :to="`/realisations/${o.slug}`" class="next">
        <img :src="o.cover.src" alt="" width="1440" height="900" loading="lazy" decoding="async">
        <span>
          <small>{{ o.kind }}</small>
          <strong>{{ o.name }}</strong>
        </span>
        <span class="arr" aria-hidden="true">→</span>
      </NuxtLink>
    </section>

    <CtaBand title="Un projet comme celui-ci ?" />
  </main>
</template>

<style scoped>
.cs-hero { padding-top: clamp(32px, 5vw, 64px); }
.crumbs { display: flex; flex-wrap: wrap; gap: 8px; font-size: 14px; color: var(--color-mute); }
.crumbs a { color: var(--color-graphite); text-decoration: none; }
.crumbs a:hover { color: var(--color-wine); text-decoration: underline; }
.cs-meta {
  margin-top: clamp(28px, 4vw, 48px);
  display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px;
 font-weight: 650; font-size: 14.5px; color: var(--color-graphite);
}
.cs-kind { color: inherit; text-decoration: underline; text-decoration-color: var(--color-line); text-underline-offset: 4px; }
.cs-kind:hover { color: var(--color-wine); text-decoration-color: currentColor; }
.status {
  display: inline-flex; align-items: center; gap: 8px; padding: 5px 11px; border-radius: 999px;
  border: 1px solid var(--color-line); background: #fff;
}
.status::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: #d9a441; }
.status.live::before { background: #39b36e; }
.cs-h1 {
  margin-top: 18px; font-weight: 800; font-stretch: 118%;
  font-size: clamp(44px, 8vw, 112px); line-height: .94; letter-spacing: -.035em;
}
.cs-hook { margin-top: 22px; font-size: clamp(19px, 2vw, 25px); line-height: 1.4; font-weight: 500; max-width: 36ch; text-wrap: pretty; }
.cs-place { margin-top: 12px; color: var(--color-graphite); }
.cs-ctas { margin-top: 30px; display: flex; flex-wrap: wrap; gap: 12px; }
.cs-shot { margin-top: clamp(40px, 6vw, 72px); }

.cs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(32px, 6vw, 96px); }
.cs-h2 {
 font-size: 14.5px; font-weight: 650;
  color: var(--color-wine);
}
.cs-text { margin-top: 16px; font-size: clamp(17px, 1.5vw, 19px); line-height: 1.65; }
.cs-goals { list-style: none; margin-top: 16px; }
.cs-goals li {
  position: relative; padding: 13px 0 13px 30px; border-bottom: 1px solid var(--color-line);
  font-size: 17px; line-height: 1.45; font-weight: 520;
}
.cs-goals li::before { content: "→"; position: absolute; left: 0; color: var(--color-wine); }

.cs-done { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 0 clamp(32px, 5vw, 72px); }
.cs-done li {
  display: grid; grid-template-columns: 44px 1fr; gap: 12px;
  padding: 22px 0; border-top: 1px solid color-mix(in srgb, var(--color-bone) 16%, transparent);
}
.cs-done .n { font-size: 14px; color: var(--color-rose); padding-top: 3px; }
.cs-done p { font-size: 16.5px; line-height: 1.6; color: color-mix(in srgb, var(--color-bone) 88%, var(--color-plum)); }
.cs-figs {
  list-style: none; margin-top: clamp(40px, 6vw, 72px);
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px;
}
.cs-figs li { padding: 24px; border-radius: 20px; background: var(--color-plum-2); display: flex; flex-direction: column; gap: 8px; }
.cs-figs b { font-weight: 800; font-stretch: 116%; font-size: clamp(34px, 4vw, 52px); line-height: 1; color: var(--color-rose); }
.cs-figs span { font-size: 15px; color: color-mix(in srgb, var(--color-bone) 80%, var(--color-plum)); }

.cs-gallery { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, .32fr); gap: clamp(24px, 4vw, 56px); align-items: end; }

.cs-next { padding-bottom: clamp(8px, 2vw, 24px); display: flex; flex-direction: column; gap: 14px; }
.next {
  display: grid; grid-template-columns: 140px 1fr auto; gap: 20px; align-items: center;
  padding: 12px; border-radius: 18px; background: #fff; border: 1px solid var(--color-line);
  color: var(--color-ink); text-decoration: none; transition: border-color .2s, transform .2s;
}
.next:hover { border-color: var(--color-wine); transform: translateY(-2px); }
.next img { width: 140px; height: 88px; object-fit: cover; object-position: top; border-radius: 10px; }
.next small { font-weight: 650; display: block; font-size: 14.5px; color: var(--color-mute); }
.next strong { font-weight: 760; font-stretch: 112%; font-size: 24px; }
.next .arr { font-size: 22px; color: var(--color-wine); padding-right: 12px; }

@media (max-width: 860px) {
  .cs-grid, .cs-done { grid-template-columns: 1fr; }
  .cs-figs { grid-template-columns: 1fr; }
  .cs-gallery { grid-template-columns: 1fr; }
  .g-phone { max-width: 240px; margin: 0 auto; }
}
@media (max-width: 520px) {
  .next { grid-template-columns: 96px 1fr auto; gap: 14px; }
  .next img { width: 96px; height: 64px; }
  .next strong { font-size: 19px; }
}
</style>
