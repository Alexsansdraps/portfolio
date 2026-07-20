<script setup lang="ts">
const steps = ['s1', 's2', 's3'] as const
</script>

<template>
  <section id="apports" class="vs wrap">
    <h2 class="sec-label" data-reveal>{{ $t('value.title') }} <span class="range">{{ $t('value.range') }}</span></h2>

    <p class="vs-intro" data-reveal>{{ $t('value.intro') }}</p>

    <div class="vs-grid">
      <div v-for="(s, i) in steps" :key="s" class="vs-item" data-reveal>
        <span class="vs-num">{{ String(i + 1).padStart(2, '0') }}</span>
        <h3 class="vs-title">{{ $t(`value.${s}.t`) }}</h3>
        <p class="vs-desc">{{ $t(`value.${s}.d`) }}</p>
        <div v-if="s === 's2'" class="tags">
          <span class="tag">CLAUDE CODE</span><span class="tag">SPECS</span><span class="tag">REVIEWS</span><span class="tag">TESTS</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vs { padding-top: clamp(64px, 11vh, 120px); }
.sec-label {
  display: flex; align-items: baseline; gap: 18px;
  font-weight: 300; font-size: 13px; letter-spacing: .3em; text-transform: uppercase;
  color: var(--color-bone); margin-bottom: clamp(26px, 4vh, 40px);
}
.sec-label::before { content: "—"; color: var(--color-wine); letter-spacing: 0; }
.sec-label .range { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--color-mute); }

.vs-intro {
  font-size: clamp(17px, 2vw, 22px); font-weight: 300; line-height: 1.55;
  max-width: 58ch; color: var(--color-bone);
  margin-bottom: clamp(36px, 6vh, 56px);
}

.vs-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: clamp(24px, 3.5vw, 48px);
  border-top: 1px solid var(--color-ash);
  padding-top: clamp(28px, 4.5vh, 44px);
}
.vs-num {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
  color: var(--color-wine);
}
.vs-title {
  margin-top: 12px;
  font-weight: 640; font-stretch: 82%;
  font-size: clamp(15px, 1.6vw, 18px); letter-spacing: .04em; text-transform: uppercase;
  color: var(--color-bone);
}
.vs-desc {
  margin-top: 12px;
  font-size: 14.5px; line-height: 1.65; font-weight: 380;
  color: color-mix(in srgb, var(--color-bone) 80%, var(--color-mute));
  max-width: 44ch;
}
.tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
.tag {
  font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em;
  color: var(--color-mute); border: 1px solid var(--color-ash); padding: 5px 10px;
}

@media (max-width: 860px) {
  .vs-grid { grid-template-columns: 1fr; gap: 32px; }
  .vs-desc { max-width: 62ch; }
}
</style>
