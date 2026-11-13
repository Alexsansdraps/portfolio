<script setup lang="ts">
const c = useContenu()
</script>

<template>
  <ol class="ms">
    <li v-for="(s, i) in c.steps" :key="s.t" class="ms-step" data-reveal>
      <span class="ms-num" aria-hidden="true">{{ i + 1 }}</span>
      <h3>{{ s.t }}</h3>
      <p>{{ s.d }}</p>
    </li>
  </ol>
</template>

<style scoped>
/* même présentation que « Comment je travaille » (page Parcours) : cartes blanches, numéros dans un rond, pointillé */
.ms { position: relative; list-style: none; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(16px, 2vw, 24px); }
.ms::before {
  content: ""; position: absolute; left: 16%; right: 16%; top: 54px; height: 0;
  border-top: 2px dashed color-mix(in srgb, var(--color-wine) 45%, transparent);
}
.ms-step {
  position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 12px;
  padding: clamp(22px, 2.4vw, 28px); border-radius: 22px; background: #fff;
  box-shadow: 0 18px 40px -30px rgb(29 22 26 / .45);
}
.ms-num {
  display: grid; place-items: center; width: 56px; height: 56px; border-radius: 50%;
  background: var(--color-wine); color: #fff; box-shadow: 0 0 0 6px #fff;
  font-weight: 780; font-stretch: 112%; font-size: 24px; line-height: 1;
}
.ms-step h3 { margin-top: 4px; font-weight: 740; font-stretch: 110%; font-size: 20px; letter-spacing: -.01em; line-height: 1.2; }
.ms-step p { font-size: 15.5px; line-height: 1.6; color: var(--color-graphite); }
@media (max-width: 900px) {
  .ms { grid-template-columns: 1fr; }
  .ms::before { display: none; }
}
</style>
