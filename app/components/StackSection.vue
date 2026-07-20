<script setup lang="ts">
const { tm, rt } = useI18n()

const GROUPS = ['front', 'back', 'data', 'ops', 'method'] as const

function items(group: string): string[] {
  const raw = tm(`stack.groups.${group}.items`) as unknown[]
  return Array.isArray(raw) ? raw.map(i => rt(i as any)) : []
}
</script>

<template>
  <section id="stack" class="st wrap">
    <h2 class="sec-label" data-reveal>{{ $t('stack.title') }} <span class="range">{{ $t('stack.range') }}</span></h2>

    <div class="st-rows">
      <div v-for="g in GROUPS" :key="g" class="st-row" data-reveal>
        <span class="st-k">{{ $t(`stack.groups.${g}.label`) }}</span>
        <div class="tags">
          <span v-for="i in items(g)" :key="i" class="tag">{{ i }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.st { padding-top: clamp(64px, 11vh, 120px); }
.sec-label {
  display: flex; align-items: baseline; gap: 18px;
  font-weight: 300; font-size: 13px; letter-spacing: .3em; text-transform: uppercase;
  color: var(--color-bone); margin-bottom: clamp(26px, 4vh, 40px);
}
.sec-label::before { content: "—"; color: var(--color-wine); letter-spacing: 0; }
.sec-label .range { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--color-mute); }

.st-rows { display: flex; flex-direction: column; }
.st-row {
  display: grid; grid-template-columns: 120px 1fr;
  gap: 10px clamp(20px, 3vw, 40px); align-items: baseline;
  padding: 16px 0;
  border-top: 1px solid var(--color-ash);
}
.st-row:last-of-type { border-bottom: 1px solid var(--color-ash); }
.st-k {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em;
  color: var(--color-wine); text-transform: uppercase;
}
.tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tag {
  font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em;
  color: var(--color-mute); border: 1px solid var(--color-ash); padding: 5px 10px;
  transition: color .2s, border-color .2s;
}
.tag:hover { color: var(--color-bone); border-color: var(--color-mute); }

@media (max-width: 640px) {
  .st-row { grid-template-columns: 1fr; gap: 8px; padding: 14px 0; }
}
</style>
