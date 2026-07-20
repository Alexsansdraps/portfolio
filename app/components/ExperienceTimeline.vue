<script setup lang="ts">
import { jobs } from '~/data/experience'

const { tm, rt } = useI18n()

interface Bullet { k: string, t: string }

function bullets(id: string): Bullet[] {
  const raw = tm(`xp.jobs.${id}.bullets`) as unknown[]
  if (!Array.isArray(raw)) return []
  return raw.map((b: any) => ({ k: rt(b.k), t: rt(b.t) }))
}
</script>

<template>
  <section class="tl wrap">
    <h2 class="sec-label" data-reveal>{{ $t('xp.title') }} <span class="range">{{ $t('xp.range') }}</span></h2>

    <article v-for="job in jobs" :key="job.id" class="item" :class="{ now: job.now }" data-reveal>
      <div class="i-date">{{ job.dates }}</div>
      <div class="i-body">
        <p class="i-date-inline">{{ job.dates }}</p>
        <h3 class="i-role">{{ $t(`xp.jobs.${job.id}.role`) }}</h3>
        <p class="i-co"><b>{{ job.company }}</b> — {{ job.place }}</p>
        <div class="bullets">
          <p v-for="(b, i) in bullets(job.id)" :key="i"><b>{{ b.k }}</b> — {{ b.t }}</p>
        </div>
        <div class="tags">
          <span v-for="tag in job.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
.tl { padding: clamp(64px, 11vh, 120px) 0 0; }
.sec-label {
  display: flex; align-items: baseline; gap: 18px;
  font-weight: 300; font-size: 13px; letter-spacing: .3em; text-transform: uppercase;
  color: var(--color-bone); margin-bottom: clamp(30px, 5vh, 48px);
}
.sec-label::before { content: "—"; color: var(--color-wine); letter-spacing: 0; }
.sec-label .range { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--color-mute); }

.item {
  display: grid; grid-template-columns: 150px 1fr;
  gap: 0 clamp(24px, 3.5vw, 48px);
}
.i-date {
  font-family: var(--font-mono); font-size: 12px; color: var(--color-mute);
  letter-spacing: .04em; text-align: right; padding-top: 4px;
  white-space: nowrap;
}
.i-body {
  position: relative;
  border-left: 1px solid var(--color-ash);
  padding: 0 0 clamp(40px, 6vh, 60px) clamp(24px, 3vw, 40px);
}
.item:last-of-type .i-body { padding-bottom: 8px; }
.i-body::before {
  content: ""; position: absolute; left: -4.5px; top: 7px;
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--color-wine);
}
.item.now .i-body::before { animation: pulse 2.4s ease-in-out infinite; }
.i-role {
  font-weight: 640; font-stretch: 82%;
  font-size: clamp(17px, 2.1vw, 22px); letter-spacing: .04em; text-transform: uppercase;
  color: var(--color-bone);
}
.i-co {
  margin-top: 6px;
  font-weight: 300; font-size: 13.5px; letter-spacing: .14em; text-transform: uppercase;
  color: var(--color-mute);
}
.i-co b { font-weight: 400; color: var(--color-wine); }
.i-date-inline { display: none; }
.bullets { display: flex; flex-direction: column; gap: 10px; margin-top: 18px; max-width: 62ch; }
.bullets p { font-size: 14.5px; line-height: 1.65; font-weight: 380; color: color-mix(in srgb, var(--color-bone) 80%, var(--color-mute)); }
.bullets p b { font-weight: 550; color: var(--color-bone); }
.bullets p::before { content: "— "; color: var(--color-wine); }
.tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px; }
.tag {
  font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em;
  color: var(--color-mute); border: 1px solid var(--color-ash); padding: 5px 10px;
}

@media (max-width: 900px) {
  .item { grid-template-columns: 1fr; }
  .i-date { display: none; }
  .i-date-inline {
    display: block; font-family: var(--font-mono); font-size: 11.5px;
    color: var(--color-mute); letter-spacing: .05em; margin-bottom: 8px;
  }
}
</style>
