<script setup lang="ts">
import { business } from '~/data/site'

/**
 * Formulaire de contact → POST /api/contact (e-mail via Cloudflare Email Routing).
 * Fonctionne sans JavaScript (redirection vers /contact/merci) ; avec JS, envoi sans recharger la page.
 */
const projets = ['Site vitrine', 'Boutique en ligne', 'Refonte de site', 'Outil sur mesure', 'Autre / je ne sais pas encore']

const etat = ref<'idle' | 'envoi' | 'ok' | 'erreur'>('idle')
const erreur = ref('')
const route = useRoute()
onMounted(() => {
  // retour d'un envoi sans JavaScript qui a échoué
  if (route.query.erreur) { etat.value = 'erreur'; erreur.value = 'L’envoi n’a pas abouti.' }
})

async function envoyer(e: Event) {
  const form = e.currentTarget as HTMLFormElement
  etat.value = 'envoi'
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
    const data = await res.json().catch(() => ({})) as { ok?: boolean, message?: string }
    if (res.ok && data.ok) {
      etat.value = 'ok'
      form.reset()
    }
    else {
      etat.value = 'erreur'
      erreur.value = data.message || 'L’envoi a échoué.'
    }
  }
  catch {
    etat.value = 'erreur'
    erreur.value = 'Connexion impossible.'
  }
}
</script>

<template>
  <div id="formulaire" class="cf">
    <div v-if="etat === 'ok'" class="cf-ok" role="status">
      <p class="cf-ok-t">Merci, votre message est bien parti&nbsp;!</p>
      <p>Je vous réponds en général dans la journée, à l’adresse e-mail que vous avez indiquée.</p>
      <button type="button" class="link cf-again" @click="etat = 'idle'">Envoyer un autre message</button>
    </div>

    <form v-else action="/api/contact" method="post" class="cf-form" @submit.prevent="envoyer">
      <div class="row two">
        <div class="field">
          <label for="cf-nom">Votre nom <span aria-hidden="true">*</span></label>
          <input id="cf-nom" name="nom" type="text" autocomplete="name" required maxlength="120">
        </div>
        <div class="field">
          <label for="cf-entreprise">Entreprise</label>
          <input id="cf-entreprise" name="entreprise" type="text" autocomplete="organization" maxlength="160">
        </div>
      </div>
      <div class="row two">
        <div class="field">
          <label for="cf-email">E-mail <span aria-hidden="true">*</span></label>
          <input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="160">
        </div>
        <div class="field">
          <label for="cf-tel">Téléphone <small>(facultatif)</small></label>
          <input id="cf-tel" name="telephone" type="tel" autocomplete="tel" maxlength="40">
        </div>
      </div>

      <fieldset class="field">
        <legend>Votre projet</legend>
        <div class="choices">
          <label v-for="(p, i) in projets" :key="p" class="choice">
            <input type="radio" name="projet" :value="p" :checked="i === 0">
            <span>{{ p }}</span>
          </label>
        </div>
      </fieldset>

      <div class="field">
        <label for="cf-message">Votre message <span aria-hidden="true">*</span></label>
        <textarea
          id="cf-message" name="message" rows="6" required maxlength="5000"
          placeholder="Votre activité, ce que vous aimeriez, un site qui vous plaît, une échéance…"
        />
      </div>

      <!-- piège à robots : invisible pour les humains -->
      <div class="hp" aria-hidden="true">
        <label for="cf-site">Ne pas remplir</label>
        <input id="cf-site" name="site_web" type="text" tabindex="-1" autocomplete="off">
      </div>

      <p v-if="etat === 'erreur'" class="cf-err" role="alert">
        {{ erreur }} Vous pouvez réessayer, ou m’écrire directement à
        <a :href="`mailto:${business.email}`">{{ business.email }}</a>.
      </p>

      <div class="cf-foot">
        <button class="btn" type="submit" :disabled="etat === 'envoi'">
          {{ etat === 'envoi' ? 'Envoi…' : 'Envoyer mon message' }} <span class="arr" aria-hidden="true">→</span>
        </button>
        <p class="cf-note">
          Vos informations servent uniquement à vous répondre : elles ne sont ni stockées sur ce site, ni transmises à des tiers.
          <NuxtLink to="/mentions-legales">En savoir plus</NuxtLink>
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped>
.cf { background: #fff; border: 1px solid var(--color-line); border-radius: 24px; padding: clamp(22px, 3.5vw, 40px); }
.cf-form { display: flex; flex-direction: column; gap: 20px; }
.row.two { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.field { display: flex; flex-direction: column; gap: 8px; border: 0; min-width: 0; }
label, legend { font-weight: 620; font-size: 15px; }
label span, legend span { color: var(--color-wine); }
label small { font-weight: 400; color: var(--color-mute); }
input[type="text"], input[type="email"], input[type="tel"], textarea {
  width: 100%; font: inherit; font-size: 16px; color: var(--color-ink);
  background: var(--color-paper); border: 1px solid var(--color-line); border-radius: 12px;
  padding: 13px 14px; transition: border-color .2s, background .2s;
}
textarea { resize: vertical; min-height: 150px; line-height: 1.55; }
input:hover, textarea:hover { border-color: color-mix(in srgb, var(--color-ink) 30%, var(--color-line)); }
input:focus, textarea:focus { outline: none; border-color: var(--color-wine); background: #fff; box-shadow: 0 0 0 3px var(--color-blush); }
legend { margin-bottom: 10px; }
.choices { display: flex; flex-wrap: wrap; gap: 8px; }
.choice { position: relative; cursor: pointer; font-weight: 500; }
.choice input { position: absolute; opacity: 0; inset: 0; cursor: pointer; }
.choice span {
  display: inline-block; padding: 10px 16px; border-radius: 999px;
  border: 1px solid var(--color-line); background: var(--color-paper); font-size: 15px;
  transition: background .2s, border-color .2s, color .2s;
}
.choice:hover span { border-color: var(--color-wine); }
.choice input:checked + span { background: var(--color-wine); border-color: var(--color-wine); color: #fff; }
.choice input:focus-visible + span { outline: 2px solid var(--color-wine); outline-offset: 3px; }

.hp { position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden; }

.cf-err {
  padding: 14px 16px; border-radius: 12px; background: #fdecec; color: #8a1c1c; font-size: 15px; line-height: 1.5;
}
.cf-err a { color: inherit; font-weight: 650; }
.cf-foot { display: flex; flex-wrap: wrap; align-items: center; gap: 16px 24px; }
.cf-foot .btn:disabled { opacity: .6; cursor: progress; }
.cf-note { flex: 1; min-width: 220px; font-size: 13px; line-height: 1.5; color: var(--color-mute); }
.cf-note a { color: inherit; }

.cf-ok { padding: 12px 4px; }
.cf-ok-t { font-weight: 780; font-stretch: 112%; font-size: clamp(24px, 3vw, 32px); letter-spacing: -.01em; color: var(--color-wine); }
.cf-ok p + p { margin-top: 10px; color: var(--color-graphite); }
.cf-again { margin-top: 18px; background: none; border: 0; padding: 0; cursor: pointer; font: inherit; font-weight: 600; }

@media (max-width: 640px) { .row.two { grid-template-columns: 1fr; } }
</style>
