<script setup lang="ts">
import { steps } from '~/data/site'
</script>

<template>
  <ol class="ms">
    <li v-for="(s, i) in steps" :key="s.t" data-reveal>
      <span class="ms-n num" aria-hidden="true">{{ i + 1 }}.</span>
      <div>
        <h3 class="t-h3">{{ s.t }}</h3>
        <p class="muted">{{ s.d }}</p>
      </div>
    </li>
  </ol>
</template>

<style scoped>
.ms { list-style: none; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 clamp(24px, 4vw, 56px); }
.ms li { display: grid; grid-template-columns: 2.2em 1fr; padding: 20px 0; border-top: 1px solid var(--color-hair); }
.ms-n { font-size: clamp(22px, 2vw, 26px); line-height: 1.2; color: var(--color-mute); }
.ms p { margin-top: 6px; }
@media (max-width: 760px) { .ms { grid-template-columns: 1fr; } }
</style>
