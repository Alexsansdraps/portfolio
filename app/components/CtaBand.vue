<script setup lang="ts">
import { business } from '~/data/site'

withDefaults(defineProps<{ title?: string, text?: string }>(), {
  title: 'Un projet de site ? Hopla, on en parle !',
  text: 'Racontez-moi ce que vous avez en tête : un nouveau site, une refonte, un outil… On en discute, et je vous dis ce que je peux faire pour vous.',
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
          <NuxtLink to="/contact" class="btn cta-btn">Parlons de votre projet <span class="arr" aria-hidden="true">→</span></NuxtLink>
          <a :href="business.booking" class="cta-alt" target="_blank" rel="noopener">ou réserver directement un créneau ↗</a>
          <NuxtLink to="/audit-gratuit" class="cta-alt">ou commencer par un audit gratuit →</NuxtLink>
          <p class="cta-note">Je vous réponds sous 24 h.</p>
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
.cta-alt { color: #fff; font-weight: 620; text-decoration: underline; text-underline-offset: 4px; }
.cta-alt:hover { text-decoration-thickness: 2px; }
.cta-note { font-size: 14px; color: rgb(255 255 255 / .8); }
.cta-in :focus-visible { outline-color: #fff; }
@media (max-width: 860px) { .cta-in { grid-template-columns: 1fr; align-items: start; } }
</style>
