<script setup lang="ts">
/**
 * Ambiance lofi générée à la volée (Web Audio API).
 * Aucun fichier audio, aucune licence : pad jazzy + crackle vinyle,
 * synthétisés dans le navigateur. Jamais d'autoplay.
 */
const playing = ref(false)
const ready = ref(false)

let ctx: AudioContext | null = null
let master: GainNode | null = null
let crackle: AudioBufferSourceNode | null = null
let timer: number | null = null
let step = 0

/* Progression jazzy classique : Am7 · Fmaj7 · Cmaj7 · G7 (fréquences en Hz) */
const CHORDS: number[][] = [
  [220.00, 261.63, 329.63, 392.00], // Am7
  [174.61, 220.00, 261.63, 329.63], // Fmaj7
  [130.81, 196.00, 261.63, 329.63], // Cmaj7
  [196.00, 246.94, 293.66, 349.23], // G7
]

const BAR = 3.4 // durée d'un accord, en secondes

function makeCrackle(context: AudioContext) {
  // bruit filtré + micro-pops aléatoires = grain de vinyle
  const len = context.sampleRate * 4
  const buf = context.createBuffer(1, len, context.sampleRate)
  const d = buf.getChannelData(0)
  for (let i = 0; i < len; i++) {
    d[i] = (Math.random() * 2 - 1) * 0.014
    if (Math.random() < 0.00035) d[i] += (Math.random() * 2 - 1) * 0.5
  }
  const src = context.createBufferSource()
  src.buffer = buf
  src.loop = true
  const hp = context.createBiquadFilter()
  hp.type = 'highpass'
  hp.frequency.value = 1400
  const g = context.createGain()
  g.gain.value = 0.5
  src.connect(hp).connect(g).connect(master!)
  src.start()
  return src
}

function playChord(at: number) {
  if (!ctx || !master) return
  const notes = CHORDS[step % CHORDS.length]!
  step++

  notes.forEach((freq, i) => {
    // deux oscillateurs légèrement désaccordés par note = épaisseur
    for (const detune of [-4, 4]) {
      const osc = ctx!.createOscillator()
      osc.type = i === 0 ? 'triangle' : 'sine'
      osc.frequency.value = freq
      osc.detune.value = detune

      const filt = ctx!.createBiquadFilter()
      filt.type = 'lowpass'
      filt.frequency.setValueAtTime(700, at)
      filt.frequency.linearRampToValueAtTime(1100, at + BAR * 0.5)
      filt.frequency.linearRampToValueAtTime(600, at + BAR)

      const g = ctx!.createGain()
      const peak = (i === 0 ? 0.16 : 0.09) / 2
      g.gain.setValueAtTime(0.0001, at)
      g.gain.exponentialRampToValueAtTime(peak, at + 0.9)
      g.gain.exponentialRampToValueAtTime(0.0001, at + BAR + 0.6)

      osc.connect(filt).connect(g).connect(master!)
      osc.start(at)
      osc.stop(at + BAR + 0.8)
    }
  })
}

function schedule() {
  if (!ctx) return
  playChord(ctx.currentTime + 0.05)
}

async function start() {
  // retour visuel immédiat : le bouton ne doit pas attendre le moteur audio
  playing.value = true
  try {
    if (!ctx) {
      ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
      master = ctx.createGain()
      master.gain.value = 0
      master.connect(ctx.destination)
      crackle = makeCrackle(ctx)
    }
    await ctx.resume()
    if (!playing.value) return // l'utilisateur a re-cliqué entre-temps
    master!.gain.cancelScheduledValues(ctx.currentTime)
    master!.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 1.2)
    schedule()
    timer = window.setInterval(schedule, BAR * 1000)
  }
  catch {
    playing.value = false
  }
}

function stop() {
  if (!ctx || !master) return
  master.gain.cancelScheduledValues(ctx.currentTime)
  master.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.7)
  if (timer) { clearInterval(timer); timer = null }
  playing.value = false
}

function toggle() {
  playing.value ? stop() : start()
}

onMounted(() => { ready.value = true })
onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
  crackle?.stop()
  ctx?.close()
})
</script>

<template>
  <button
    v-if="ready"
    class="lofi" :class="{ on: playing }"
    :aria-pressed="playing"
    :aria-label="$t(playing ? 'lofi.pause' : 'lofi.play')"
    :title="$t(playing ? 'lofi.pause' : 'lofi.play')"
    @click="toggle"
  >
    <span class="bars" aria-hidden="true">
      <i /><i /><i /><i />
    </span>
    <span class="label">{{ $t('lofi.label') }}</span>
  </button>
</template>

<style scoped>
.lofi {
  position: fixed; right: clamp(16px, 3vw, 28px); bottom: clamp(16px, 3vw, 28px);
  z-index: 20;
  display: flex; align-items: center; gap: 10px;
  padding: 9px 14px;
  background: color-mix(in srgb, var(--color-carbon) 92%, transparent);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-ash);
  color: var(--color-mute);
  font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase;
  cursor: pointer;
  transition: color .25s, border-color .25s;
}
.lofi:hover { color: var(--color-bone); border-color: var(--color-mute); }
.lofi.on { color: var(--color-bone); border-color: var(--color-wine); }
.lofi:focus-visible { outline: 1px solid var(--color-wine); outline-offset: 3px; }

.bars { display: flex; align-items: flex-end; gap: 2px; height: 12px; }
.bars i {
  width: 2px; height: 3px;
  background: var(--color-mute);
  transition: background .25s;
}
.lofi.on .bars i { background: var(--color-wine); }

@media (prefers-reduced-motion: no-preference) {
  .lofi.on .bars i { animation: eq .9s ease-in-out infinite; }
  .lofi.on .bars i:nth-child(2) { animation-delay: .15s; }
  .lofi.on .bars i:nth-child(3) { animation-delay: .3s; }
  .lofi.on .bars i:nth-child(4) { animation-delay: .45s; }
  @keyframes eq {
    0%, 100% { height: 3px; }
    50% { height: 12px; }
  }
}

@media (max-width: 640px) {
  .lofi .label { display: none; }
  .lofi { padding: 10px; }
}
</style>
