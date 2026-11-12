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
    'name': `${p.name}, ${p.kind}`,
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
    <section class="head wrap">
      <nav class="crumbs" aria-label="Fil d’Ariane">
        <NuxtLink to="/">Accueil</NuxtLink><span aria-hidden="true">/</span>
        <NuxtLink to="/realisations">Réalisations</NuxtLink><span aria-hidden="true">/</span>
        <span aria-current="page">{{ p.name }}</span>
      </nav>
      <h1 class="t-display cs-h1">{{ p.name }}</h1>
      <div class="cs-intro">
        <p class="lead">{{ p.hook }}</p>
        <dl class="cs-facts">
          <div><dt>Client</dt><dd>{{ [p.sector, p.place].filter(Boolean).join(', ') }}</dd></div>
          <div><dt>Prestation</dt><dd><NuxtLink :to="`/services/${p.service}`">{{ p.kind }}</NuxtLink></dd></div>
          <div><dt>Année</dt><dd class="num">{{ p.year }}</dd></div>
          <div><dt>État</dt><dd>{{ p.status }}</dd></div>
          <div v-if="p.url"><dt>Adresse</dt><dd><a :href="p.url" target="_blank" rel="noopener">{{ p.domain }}</a></dd></div>
        </dl>
      </div>
    </section>

    <div class="wrap cs-shot">
      <Capture v-bind="p.cover" eager />
    </div>

    <section class="sec" aria-labelledby="ctx-t">
      <div class="wrap cols">
        <h2 id="ctx-t" class="t-sec">Le client</h2>
        <div class="cs-two">
          <p class="cs-text" data-reveal>{{ p.context }}</p>
          <div data-reveal>
            <h3 class="cs-k">Les objectifs</h3>
            <ul class="lines">
              <li v-for="g in p.goals" :key="g">{{ g }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="sec" aria-labelledby="done-t">
      <div class="wrap cols">
        <h2 id="done-t" class="t-sec">Ce que j’ai fait</h2>
        <div>
          <ol class="cs-done">
            <li v-for="(d, i) in p.done" :key="i" data-reveal>
              <span class="num muted" aria-hidden="true">{{ i + 1 }}.</span>
              <p>{{ d }}</p>
            </li>
          </ol>
          <dl class="cs-figs" data-reveal>
            <div v-for="f in p.figures" :key="f.k">
              <dt class="num">{{ f.v }}</dt>
              <dd class="muted">{{ f.k }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section class="sec" aria-label="Aperçus">
      <div class="wrap cs-gallery">
        <Capture v-bind="p.extra" data-reveal />
        <Capture v-bind="p.mobile" caption="Sur téléphone" data-reveal />
      </div>
    </section>

    <nav class="sec" aria-labelledby="next-t">
      <div class="wrap cols">
        <h2 id="next-t" class="t-sec">{{ others.length > 1 ? 'Les autres réalisations' : 'Une autre réalisation' }}</h2>
        <ul class="lines cs-next">
          <li v-for="o in others" :key="o.slug">
            <NuxtLink :to="`/realisations/${o.slug}`" class="next">
              <img :src="o.cover.src" alt="" width="1440" height="900" loading="lazy" decoding="async">
              <span>
                <strong class="t-h3">{{ o.name }}</strong>
                <span class="small">{{ o.kind }}</span>
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>

    <CtaBand title="Un projet comme celui-ci ?" />
  </main>
</template>

<style scoped>
.head { padding-top: clamp(28px, 4vw, 48px); padding-bottom: clamp(32px, 5vw, 64px); }
.cs-h1 { margin-top: clamp(28px, 4vw, 56px); }
.cs-intro {
  margin-top: clamp(24px, 4vw, 48px);
  display: grid; grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); gap: 28px clamp(32px, 6vw, 96px); align-items: start;
}
.cs-facts { border-top: 1px solid var(--color-ink); font-size: 17px; }
.cs-facts > div { display: grid; grid-template-columns: 7.5em 1fr; gap: 12px; padding: 9px 0; border-bottom: 1px solid var(--color-hair); }
.cs-facts dt { color: var(--color-mute); }
.cs-shot { padding-bottom: clamp(48px, 7vw, 96px); }

.cs-two { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 32px clamp(32px, 4vw, 64px); align-items: start; }
.cs-text { font-size: clamp(19px, 1.6vw, 21px); }
.cs-k { font-weight: 500; font-size: 18px; margin-bottom: 10px; }

.cs-done { list-style: none; border-top: 1px solid var(--color-hair); }
.cs-done li { display: grid; grid-template-columns: 2.2em 1fr; padding: 16px 0; border-bottom: 1px solid var(--color-hair); }
.cs-done p { max-width: 38em; }
.cs-figs { margin-top: clamp(32px, 4vw, 48px); display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px clamp(24px, 3vw, 40px); }
.cs-figs dt { font-size: clamp(36px, 4vw, 52px); line-height: 1; letter-spacing: -.02em; }
.cs-figs dd { margin-top: 8px; font-size: 17px; }

.cs-gallery { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, .3fr); gap: clamp(24px, 4vw, 56px); align-items: end; }

.next { display: grid; grid-template-columns: 160px 1fr; gap: 20px; align-items: center; text-decoration: none; }
.next img { width: 160px; height: 100px; object-fit: cover; object-position: top; border: 1px solid var(--color-hair); }
.next strong { display: block; }
.next:hover strong { text-decoration: underline; text-decoration-thickness: 1px; }

@media (max-width: 860px) {
  .cs-intro, .cs-two { grid-template-columns: 1fr; }
  .cs-figs { grid-template-columns: 1fr; }
  .cs-gallery { grid-template-columns: 1fr; }
  .cs-gallery > :last-child { max-width: 260px; }
}
@media (max-width: 520px) {
  .next { grid-template-columns: 100px 1fr; gap: 14px; }
  .next img { width: 100px; height: 64px; }
}
</style>
