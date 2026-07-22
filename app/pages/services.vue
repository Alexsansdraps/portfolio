<script setup lang="ts">
const { t, tm, rt, locale } = useI18n()
const localePath = useLocalePath()
const { public: { siteUrl } } = useRuntimeConfig()

function strings(key: string): string[] {
  const raw = tm(key) as unknown[]
  return Array.isArray(raw) ? raw.map(x => rt(x as any)) : []
}
interface Card { t: string, d: string }
function cards(key: string): Card[] {
  const raw = tm(key) as unknown[]
  if (!Array.isArray(raw)) return []
  return raw.map((x: any) => ({ t: rt(x.t), d: rt(x.d) }))
}

const pain = computed(() => strings('svc.pain.items'))
const offer = computed(() => cards('svc.offer.items'))
const method = computed(() => cards('svc.method.items'))
const why = computed(() => cards('svc.why.items'))

useSeoMeta({
  title: () => t('svc.meta.title'),
  description: () => t('svc.meta.description'),
  ogTitle: () => t('svc.meta.title'),
  ogDescription: () => t('svc.meta.description'),
  ogImage: () => `${siteUrl}/og/og-${locale.value}.jpg`,
})
</script>

<template>
  <main class="svc">
    <!-- HERO -->
    <section class="svc-hero wrap">
      <NuxtLink class="back" :to="localePath('index')">{{ $t('svc.hero.back') }}</NuxtLink>
      <p class="eyebrow">{{ $t('svc.hero.eyebrow') }}</p>
      <h1 class="s-title">
        {{ $t('svc.hero.t1') }}<br>
        <span class="accent">{{ $t('svc.hero.t2') }}</span>
      </h1>
      <p class="s-sub">{{ $t('svc.hero.sub') }}</p>
      <a class="btn" href="mailto:a.porhansl@icloud.com?subject=Projet%20%E2%80%94%20digitalisation">{{ $t('svc.hero.cta') }}</a>
    </section>

    <!-- PAIN -->
    <section class="wrap block">
      <h2 class="sec-label">{{ $t('svc.pain.title') }}</h2>
      <ul class="pain">
        <li v-for="(p, i) in pain" :key="i">{{ p }}</li>
      </ul>
    </section>

    <!-- OFFER -->
    <section class="wrap block">
      <h2 class="sec-label">{{ $t('svc.offer.title') }}</h2>
      <div class="cards">
        <article v-for="(o, i) in offer" :key="i" class="card">
          <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ o.t }}</h3>
          <p>{{ o.d }}</p>
        </article>
      </div>
    </section>

    <!-- METHOD -->
    <section class="wrap block">
      <h2 class="sec-label">{{ $t('svc.method.title') }}</h2>
      <div class="steps">
        <div v-for="(m, i) in method" :key="i" class="step">
          <span class="s-num">{{ i + 1 }}</span>
          <div>
            <h3>{{ m.t }}</h3>
            <p>{{ m.d }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY -->
    <section class="wrap block">
      <h2 class="sec-label">{{ $t('svc.why.title') }}</h2>
      <div class="why">
        <div v-for="(w, i) in why" :key="i" class="why-item">
          <h3>{{ w.t }}</h3>
          <p>{{ w.d }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="wrap svc-cta">
      <h2>{{ $t('svc.cta.title') }}<span>.</span></h2>
      <p>{{ $t('svc.cta.sub') }}</p>
      <a class="btn" href="mailto:a.porhansl@icloud.com?subject=Projet%20%E2%80%94%20digitalisation">{{ $t('svc.cta.btn') }}</a>
    </section>
  </main>
</template>

<style scoped>
.svc { padding-bottom: clamp(48px, 8vh, 90px); }
.wrap { max-width: 1240px; margin: 0 auto; padding-left: clamp(20px, 4vw, 56px); padding-right: clamp(20px, 4vw, 56px); }

.sec-label {
  font-weight: 300; font-size: 13px; letter-spacing: .3em; text-transform: uppercase;
  color: var(--color-bone); margin-bottom: clamp(24px, 4vh, 40px);
}
.sec-label::before { content: "— "; color: var(--color-wine); letter-spacing: 0; }
.block { padding-top: clamp(48px, 8vh, 96px); }

/* hero */
.svc-hero { padding-top: clamp(28px, 5vh, 52px); }
.back {
  font-family: var(--font-mono); font-size: 11.5px; letter-spacing: .08em;
  color: var(--color-mute); text-decoration: none;
}
.back:hover { color: var(--color-wine); }
.eyebrow {
  margin-top: clamp(26px, 5vh, 52px);
  font-family: var(--font-mono); font-size: clamp(10.5px, 1.05vw, 12.5px);
  color: var(--color-mute); letter-spacing: .06em;
}
.s-title {
  margin-top: 20px;
  font-weight: 700; font-stretch: 118%;
  font-size: clamp(30px, 5vw, 58px); line-height: 1.02;
  letter-spacing: -.01em; text-transform: uppercase; color: var(--color-bone);
}
.s-title .accent { color: var(--color-wine); }
.s-sub {
  margin-top: clamp(20px, 3vh, 30px);
  font-size: clamp(15px, 1.8vw, 19px); font-weight: 300; line-height: 1.6;
  max-width: 60ch; color: color-mix(in srgb, var(--color-bone) 85%, var(--color-mute));
}
.btn {
  display: inline-block; margin-top: clamp(24px, 4vh, 34px);
  font-family: var(--font-mono); font-size: 12px; letter-spacing: .12em; text-transform: uppercase;
  font-weight: 600; color: var(--color-void); background: var(--color-wine);
  padding: 15px 26px; text-decoration: none;
  transition: filter .2s, transform .2s;
}
.btn:hover { filter: brightness(1.12); transform: translateY(-1px); }
.btn:focus-visible { outline: 1px solid var(--color-wine); outline-offset: 3px; }

/* pain */
.pain { list-style: none; display: flex; flex-direction: column; gap: 14px; max-width: 62ch; }
.pain li {
  font-size: clamp(15px, 1.7vw, 18px); font-weight: 300; line-height: 1.5;
  color: color-mix(in srgb, var(--color-bone) 82%, var(--color-mute));
  padding-left: 22px; position: relative;
}
.pain li::before { content: "→"; position: absolute; left: 0; color: var(--color-wine); }

/* offer cards */
.cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: clamp(20px, 2.5vw, 32px); }
.card {
  border: 1px solid var(--color-ash); padding: clamp(20px, 2.5vw, 30px);
  transition: border-color .25s;
}
.card:hover { border-color: var(--color-wine); }
/* si nombre impair, la dernière carte prend toute la largeur au lieu d'être seule */
.cards .card:last-child:nth-child(odd) { grid-column: 1 / -1; }
.card .num { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--color-wine); }
.card h3 {
  margin-top: 12px; font-weight: 640; font-stretch: 82%;
  font-size: clamp(16px, 1.9vw, 20px); letter-spacing: .03em; text-transform: uppercase;
  color: var(--color-bone);
}
.card p {
  margin-top: 12px; font-size: 14.5px; line-height: 1.6; font-weight: 380;
  color: color-mix(in srgb, var(--color-bone) 78%, var(--color-mute));
}

/* method */
.steps { display: flex; flex-direction: column; }
.step {
  display: grid; grid-template-columns: 48px 1fr; gap: 20px; align-items: baseline;
  padding: clamp(16px, 2.5vh, 24px) 0;
  border-top: 1px solid var(--color-ash);
}
.steps .step:last-child { border-bottom: 1px solid var(--color-ash); }
.s-num {
  font-family: var(--font-mono); font-size: 20px; color: var(--color-wine);
}
.step h3 {
  font-weight: 640; font-stretch: 82%; font-size: 15px; letter-spacing: .04em; text-transform: uppercase;
  color: var(--color-bone);
}
.step p {
  margin-top: 6px; font-size: 14.5px; line-height: 1.55; font-weight: 380;
  color: color-mix(in srgb, var(--color-bone) 78%, var(--color-mute)); max-width: 60ch;
}

/* why */
.why { display: grid; grid-template-columns: repeat(2, 1fr); gap: clamp(24px, 3vw, 40px); }
.why .why-item:last-child:nth-child(odd) { grid-column: 1 / -1; }
.why-item h3 {
  font-weight: 640; font-stretch: 82%; font-size: 15px; letter-spacing: .04em; text-transform: uppercase;
  color: var(--color-wine);
}
.why-item p {
  margin-top: 10px; font-size: 14.5px; line-height: 1.6; font-weight: 380;
  color: color-mix(in srgb, var(--color-bone) 80%, var(--color-mute)); max-width: 46ch;
}

/* cta */
.svc-cta {
  margin-top: clamp(56px, 9vh, 100px);
  border-top: 1px solid var(--color-ash);
  padding-top: clamp(40px, 7vh, 72px);
}
.svc-cta h2 {
  font-weight: 700; font-stretch: 118%;
  font-size: clamp(26px, 3.6vw, 44px); text-transform: uppercase; letter-spacing: -.01em;
}
.svc-cta h2 span { color: var(--color-wine); }
.svc-cta p {
  margin-top: 12px; font-family: var(--font-mono); font-size: 12.5px;
  color: var(--color-mute); letter-spacing: .04em; max-width: 60ch; line-height: 1.6;
}

@media (max-width: 760px) {
  .cards, .why { grid-template-columns: 1fr; }
}
</style>
