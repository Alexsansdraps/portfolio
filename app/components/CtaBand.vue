<script setup lang="ts">
withDefaults(defineProps<{ title?: string, text?: string }>(), {
  title: 'Un projet de site ? Parlons-en.',
  text: '30 minutes chez vous, en visio ou au téléphone, gratuites et sans engagement : je me déplace partout en Alsace. Dites-moi ce dont vous avez besoin, je vous dis ce qui est possible.',
})
</script>

<template>
  <section class="cta" aria-labelledby="cta-title">
    <div class="wrap">
      <div class="cta-in" data-reveal>
        <div>
          <h2 id="cta-title" class="cta-t">{{ title }}</h2>
          <p class="cta-p">{{ text }}</p>
        </div>
        <div class="cta-actions">
          <NuxtLink to="/contact" class="btn cta-btn">Demander un devis gratuit <span class="arr" aria-hidden="true">→</span></NuxtLink>
          <p class="cta-note">Je réponds en général dans la journée.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta { padding-block: clamp(56px, 8vw, 104px); }
.cta-in {
  position: relative; overflow: hidden;
  display: grid; grid-template-columns: minmax(0, 1.5fr) auto; gap: 32px 56px; align-items: end;
  background: var(--color-wine); color: #fff;
  border-radius: 28px; padding: clamp(32px, 5vw, 64px);
}
.cta-in::after {
  content: ""; position: absolute; right: -120px; top: -160px; width: 420px; height: 420px; border-radius: 50%;
  background: radial-gradient(circle, rgb(255 255 255 / .16), transparent 70%);
  pointer-events: none;
}
.cta-t {
  font-weight: 780; font-stretch: 114%; font-size: clamp(30px, 4.2vw, 52px);
  line-height: 1.04; letter-spacing: -.02em; text-wrap: balance;
}
.cta-p { margin-top: 16px; max-width: 54ch; font-size: 17px; line-height: 1.6; color: rgb(255 255 255 / .86); }
.cta-actions { display: flex; flex-direction: column; gap: 12px; align-items: flex-start; position: relative; z-index: 1; }
.cta-btn { background: #fff; color: var(--color-wine-deep); border-color: #fff; }
.cta-btn:hover { background: var(--color-plum); color: #fff; border-color: var(--color-plum); }
.cta-note { font-family: var(--font-mono); font-size: 12px; letter-spacing: .04em; color: rgb(255 255 255 / .8); }
.cta-in :focus-visible { outline-color: #fff; }
@media (max-width: 860px) { .cta-in { grid-template-columns: 1fr; align-items: start; } }
</style>
