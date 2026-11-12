<script setup lang="ts">
import { business } from '~/data/site'

/**
 * Formulaire de contact → POST /api/contact (e-mail via Cloudflare Email Routing).
 * Fonctionne sans JavaScript (redirection vers /contact/merci) ; avec JS, envoi sans recharger la page.
 */
const projets = ['Audit gratuit', 'Site vitrine', 'Boutique en ligne', 'Référencement naturel (SEO)', 'Refonte de site', 'Outil sur mesure', 'Autre / je ne sais pas encore']

/** projet : choix coché au départ (« Audit gratuit » sur la page de l'audit, par exemple) */
const props = withDefaults(defineProps<{ projet?: string }>(), { projet: 'Audit gratuit' })

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
      <p class="t-h2">Merci, votre message est bien parti.</p>
      <p class="muted">Je vous réponds sous 24 heures, à l’adresse e-mail que vous avez indiquée.</p>
      <button type="button" class="cf-again" @click="etat = 'idle'">Envoyer un autre message</button>
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

      <div class="field">
        <label for="cf-site-actuel">Votre site actuel <small>(facultatif)</small></label>
        <input id="cf-site-actuel" name="site_actuel" type="text" inputmode="url" autocomplete="url" maxlength="300" placeholder="www.monsite.fr, ou rien si vous n’en avez pas encore">
      </div>

      <fieldset class="field">
        <legend>Votre demande</legend>
        <div class="choices">
          <label v-for="p in projets" :key="p" class="choice">
            <input type="radio" name="projet" :value="p" :checked="p === props.projet">
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
          {{ etat === 'envoi' ? 'Envoi…' : 'Envoyer mon message' }}
        </button>
        <p class="small cf-note">
          Vos informations servent uniquement à vous répondre. Elles ne sont ni enregistrées sur ce site, ni transmises à qui que ce soit.
          <NuxtLink to="/mentions-legales">En savoir plus</NuxtLink>
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped>
.cf-form { display: flex; flex-direction: column; gap: 22px; }
.row.two { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
.field { display: flex; flex-direction: column; gap: 6px; border: 0; min-width: 0; }
label, legend { font-weight: 500; font-size: 17px; }
label small { font-weight: 400; color: var(--color-mute); }
input[type="text"], input[type="email"], input[type="tel"], textarea {
  width: 100%; font: inherit; font-size: 18px; color: var(--color-ink);
  background: var(--color-paper); border: 1px solid #8c8c8c; border-radius: 0;
  padding: 11px 12px; transition: border-color .2s;
}
textarea { resize: vertical; min-height: 160px; line-height: 1.5; }
input:hover, textarea:hover { border-color: var(--color-ink); }
input:focus, textarea:focus { outline: 2px solid var(--color-ink); outline-offset: 0; border-color: var(--color-ink); }
::placeholder { color: #8c8c8c; }
legend { margin-bottom: 8px; }
.choices { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px 24px; }
.choice { display: flex; align-items: center; gap: 10px; cursor: pointer; font-weight: 400; font-size: 18px; }
.choice input { width: 18px; height: 18px; margin: 0; accent-color: var(--color-ink); flex-shrink: 0; }

.hp { position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden; }

.cf-err { padding: 12px 14px; border-left: 3px solid #a11a1a; background: #fbeeee; color: #7a1414; font-size: 17px; line-height: 1.5; }
.cf-foot { display: flex; flex-wrap: wrap; align-items: center; gap: 16px 28px; }
.cf-foot .btn:disabled { opacity: .6; cursor: progress; }
.cf-note { flex: 1; min-width: 240px; }

.cf-ok .muted { margin-top: 12px; }
.cf-again { margin-top: 20px; background: none; border: 0; padding: 0; cursor: pointer; font: inherit; text-decoration: underline; text-underline-offset: .2em; }

@media (max-width: 640px) { .row.two, .choices { grid-template-columns: 1fr; } }
</style>
