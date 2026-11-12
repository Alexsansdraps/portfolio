<script setup lang="ts">
import { services, maintenance, priceNote } from '~/data/site'
import { findProject } from '~/data/projects'

usePageSeo({
  title: 'Services et tarifs : création de site et SEO à Mulhouse',
  description: 'Site vitrine dès 690 € HT, boutique en ligne, référencement (SEO), refonte Wix ou Shopify, logiciel métier : services et tarifs de mon agence web à Mulhouse.',
  path: '/services',
})

/* Le détail de chaque service (données structurées Service comprises) est sur sa propre page. */
useJsonLd([
  breadcrumb([['Accueil', '/'], ['Services', '/services']]),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': services.map((s, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'url': absoluteUrl(`/services/${s.id}`),
      'name': s.title,
    })),
  },
])

const list = services.map(s => ({ ...s, ref: s.project ? findProject(s.project) : undefined }))
</script>

<template>
  <main>
    <section class="s-hero wrap">
      <h1 class="s-h1 rise d1">Ce que je fais, <em>et combien ça coûte.</em></h1>
      <p class="lead rise d2">
        Sites vitrines, boutiques en ligne, référencement, refontes et logiciels métier sur mesure. Pour chaque service,
        vous trouverez ce qui est compris, les prix et la façon dont on travaille.
      </p>
      <nav class="s-toc rise d3" aria-label="Services">
        <a v-for="(s, i) in services" :key="s.id" :href="`#${s.id}`">
          <span>{{ String(i + 1).padStart(2, '0') }}</span>{{ s.title }}
        </a>
      </nav>
    </section>

    <section class="wrap s-audit" aria-label="Audit gratuit">
      <div class="s-audit-in" data-reveal>
        <div>
          <p class="s-audit-t">Un audit gratuit de votre site, de vos outils ou de votre situation.</p>
          <p class="s-audit-p">On fait le point et on vous donne les priorités, sans engagement.</p>
        </div>
        <NuxtLink to="/audit-gratuit" class="btn">Audit gratuit <span class="arr" aria-hidden="true">→</span></NuxtLink>
      </div>
    </section>

    <section v-for="(s, i) in list" :id="s.id" :key="s.id" class="s-block" :class="{ alt: i % 2 === 1 }" :aria-labelledby="`${s.id}-t`">
      <div class="wrap s-grid">
        <div class="s-main" data-reveal>
          <span class="s-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <h2 :id="`${s.id}-t`" class="h2"><NuxtLink :to="`/services/${s.id}`" class="s-h2-link">{{ s.title }}</NuxtLink></h2>
          <p class="lead">{{ s.long }}</p>
          <PriceList :prices="s.prices" :note="priceNote" />
          <div class="s-actions">
            <NuxtLink to="/contact" class="btn">Parler de mon projet <span class="arr" aria-hidden="true">→</span></NuxtLink>
            <NuxtLink :to="`/services/${s.id}`" class="link">{{ s.linkText }} →</NuxtLink>
          </div>
        </div>
        <div class="s-side" data-reveal>
          <p class="s-label">Ce qui est compris</p>
          <ul class="s-list">
            <li v-for="it in s.includes" :key="it">{{ it }}</li>
          </ul>
          <NuxtLink v-if="s.ref" :to="`/realisations/${s.ref.slug}`" class="s-ref">
            <img :src="s.ref.cover.src" :alt="''" width="1440" height="900" loading="lazy" decoding="async">
            <span class="s-ref-t">
              <small>Exemple</small>
              {{ s.ref.name }}
              <span class="arr" aria-hidden="true">→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section id="maintenance" class="wrap s-maint" data-reveal>
      <div>
        <h2 class="h2">{{ maintenance.title }}</h2>
        <p class="lead">{{ maintenance.text }}</p>
      </div>
      <PriceList :prices="maintenance.prices" :note="priceNote" />
    </section>

    <section class="section wrap" aria-labelledby="m-title">
      <div class="sec-head" data-reveal>
        <h2 id="m-title" class="h2">Comment on travaille ensemble</h2>
      </div>
      <MethodSteps />
    </section>

    <section class="section wrap faq-sec" aria-labelledby="f-title">
      <div class="sec-head" data-reveal>
        <h2 id="f-title" class="h2">Questions fréquentes</h2>
      </div>
      <FaqList :schema="false" />
    </section>

    <CtaBand />
  </main>
</template>

<style scoped>
.s-hero { padding-top: clamp(40px, 7vw, 96px); padding-bottom: clamp(48px, 6vw, 80px); }
.s-h1 {
  margin-top: 20px; font-weight: 800; font-stretch: 116%;
  font-size: clamp(40px, 6.2vw, 84px); line-height: .98; letter-spacing: -.03em; max-width: 16ch;
}
.s-h1 em { font-style: normal; color: var(--color-wine); }
.s-hero .lead { margin-top: 24px; }
.s-toc { margin-top: 36px; display: flex; flex-wrap: wrap; gap: 10px; }
.s-toc a {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 10px 16px; border-radius: 999px; border: 1px solid var(--color-line);
  color: var(--color-ink); text-decoration: none; font-weight: 560; font-size: 15px;
  transition: border-color .2s, background .2s;
}
.s-toc a span { font-size: 14px; color: var(--color-wine); }
.s-toc a:hover { border-color: var(--color-wine); background: #fff; }

.s-audit { padding-bottom: clamp(40px, 6vw, 72px); }
.s-audit-in {
  display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px 32px;
  padding: clamp(24px, 3.5vw, 40px); border-radius: 24px; background: var(--color-blush);
}
.s-audit-t { margin-top: 10px; font-weight: 760; font-stretch: 110%; font-size: clamp(22px, 2.4vw, 30px); line-height: 1.15; letter-spacing: -.015em; max-width: 30ch; }
.s-audit-p { margin-top: 8px; color: var(--color-graphite); }
.s-block { padding-block: clamp(56px, 8vw, 104px); border-top: 1px solid var(--color-line); }
.s-block.alt { background: var(--color-sand); }
.s-grid { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr); gap: clamp(32px, 6vw, 96px); align-items: start; }
.s-num { font-size: 14px; color: var(--color-wine); }
.s-main .h2 { margin-top: 10px; }
.s-main .lead { margin-top: 20px; }
.s-actions { margin-top: 28px; display: flex; flex-wrap: wrap; align-items: center; gap: 14px 24px; }
.s-h2-link { color: inherit; text-decoration: none; }
.s-h2-link:hover { color: var(--color-wine); }
.s-label { font-weight: 650; font-size: 14.5px; color: var(--color-mute); }
.s-list { list-style: none; margin-top: 16px; display: flex; flex-direction: column; }
.s-list li {
  position: relative; padding: 13px 0 13px 32px; border-bottom: 1px solid var(--color-line);
  font-size: 16.5px; line-height: 1.5;
}
.s-list li::before {
  content: "✓"; position: absolute; left: 0; top: 14px;
  display: grid; place-items: center; width: 20px; height: 20px; border-radius: 50%;
  background: var(--color-wine); color: #fff; font-size: 11px; font-weight: 700;
}
.s-ref {
  margin-top: 24px; display: grid; grid-template-columns: 120px 1fr; gap: 16px; align-items: center;
  padding: 10px; border-radius: 16px; background: #fff; border: 1px solid var(--color-line);
  color: var(--color-ink); text-decoration: none; transition: border-color .2s;
}
.s-ref:hover { border-color: var(--color-wine); }
.s-ref img { width: 120px; height: 75px; object-fit: cover; object-position: top; border-radius: 9px; }
.s-ref-t { font-weight: 700; font-size: 17px; }
.s-ref-t small { display: block; font-weight: 400; font-size: 14.5px; color: var(--color-mute); margin-bottom: 2px; }
.s-ref-t .arr { color: var(--color-wine); }

.s-maint {
  margin-top: clamp(48px, 7vw, 88px);
  padding: clamp(28px, 4vw, 48px); border-radius: 24px; background: var(--color-blush);
  display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(24px, 5vw, 72px); align-items: center;
}
.s-maint .lead { margin-top: 12px; color: var(--color-ink); }
.s-maint .pl { margin-top: 0; }
.faq-sec { padding-bottom: clamp(24px, 4vw, 48px); }

@media (max-width: 900px) { .s-grid, .s-maint { grid-template-columns: 1fr; } }
</style>
