<script setup lang="ts">
const { mode } = useAudienceMode()
</script>

<template>
  <section class="cta wrap">
    <div class="cta-txt" data-reveal>
      <h2>{{ $t('cta.t1') }}<br>{{ $t('cta.t2') }}<span>.</span></h2>
      <p>{{ $t(`cta.${mode}`) }}</p>
    </div>
    <div class="cta-actions" data-reveal>
      <a class="cta-btn" href="mailto:a.porhansl@icloud.com">{{ $t('cta.btn') }}</a>
      <div class="cta-cvs">
        <a href="/cv/cv-alexandra-porhansl-fr.pdf" download>{{ $t('cta.cvFr') }}</a>
        <a href="/cv/cv-alexandra-porhansl-en.pdf" download>{{ $t('cta.cvEn') }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  margin-top: clamp(64px, 10vh, 110px);
  border-top: 1px solid var(--color-ash);
  padding-top: clamp(40px, 7vh, 72px);
  display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;
  gap: 24px 40px;
}
.cta-txt h2 {
  font-weight: 700; font-stretch: 118%;
  font-size: clamp(26px, 3.6vw, 44px); text-transform: uppercase; letter-spacing: -.01em;
  line-height: 1.05;
}
.cta-txt h2 span { color: var(--color-wine); }
.cta-txt p {
  margin-top: 12px;
  font-family: var(--font-mono); font-size: 12px; color: var(--color-mute); letter-spacing: .05em;
}
.cta-btn {
  font-family: var(--font-mono); font-size: 12px; letter-spacing: .12em; text-transform: uppercase;
  font-weight: 600; color: var(--color-void); background: var(--color-wine);
  padding: 16px 26px; text-decoration: none; white-space: nowrap;
  transition: filter .2s, transform .2s;
}
.cta-btn:hover { filter: brightness(1.12); transform: translateY(-1px); }
.cta-btn:focus-visible { outline: 1px solid var(--color-wine); outline-offset: 3px; }
.cta-actions { display: flex; flex-direction: column; gap: 14px; align-items: flex-start; }
.cta-cvs { display: flex; gap: 18px; }
.cta-cvs a {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
  color: var(--color-mute); text-decoration: underline;
  text-underline-offset: 4px; text-decoration-color: var(--color-ash);
  transition: color .2s;
}
.cta-cvs a:hover { color: var(--color-wine); text-decoration-color: var(--color-wine); }
</style>
