<script setup lang="ts">
import { steps } from '~/data/site'
</script>

<template>
  <ol class="ms">
    <li v-for="(s, i) in steps" :key="s.t" class="ms-step" data-reveal>
      <span class="ms-num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
      <h3>{{ s.t }}</h3>
      <p>{{ s.d }}</p>
    </li>
  </ol>
</template>

<style scoped>
.ms {
  list-style: none; counter-reset: step;
  display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: clamp(20px, 2.5vw, 32px);
}
.ms-step { position: relative; padding-top: 28px; }
.ms-step::before {
  content: ""; position: absolute; top: 9px; left: 0; right: calc(-1 * clamp(20px, 2.5vw, 32px));
  height: 1px; background: var(--color-line);
}
.ms-step:last-child::before { right: 0; }
.ms-step::after {
  content: ""; position: absolute; top: 4px; left: 0;
  width: 11px; height: 11px; border-radius: 50%; background: var(--color-wine);
  box-shadow: 0 0 0 5px var(--color-paper);
}
.ms-num { font-size: 14px; color: var(--color-wine); }
.ms-step h3 { margin-top: 10px; font-weight: 720; font-stretch: 110%; font-size: 21px; line-height: 1.2; letter-spacing: -.01em; }
.ms-step p { margin-top: 10px; font-size: 15.5px; line-height: 1.6; color: var(--color-graphite); }

@media (max-width: 900px) {
  .ms { grid-template-columns: 1fr 1fr; row-gap: 40px; }
  .ms-step::before { right: 0; }
}
@media (max-width: 560px) {
  .ms { grid-template-columns: 1fr; row-gap: 0; }
  .ms-step { padding: 0 0 28px 30px; }
  .ms-step::before { top: 6px; bottom: 0; left: 5px; right: auto; width: 1px; height: auto; }
  .ms-step:last-child::before { display: none; }
  .ms-step::after { top: 2px; }
  .ms-step h3 { margin-top: 4px; }
}
</style>
