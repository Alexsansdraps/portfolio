// POST /api/contact — le formulaire de contact envoie un vrai e-mail via Cloudflare Email Routing
// (binding CONTACT_EMAIL déclaré dans nuxt.config.ts → wrangler). Aucun service tiers, aucune clé dans la page.
// Le destinataire (CONTACT_TO) doit être une adresse VÉRIFIÉE dans Email Routing, sinon l'envoi échoue.
import { EmailMessage } from 'cloudflare:email'

const SITE = 'alexandraporhansl.com'
const EXPEDITEUR = `formulaire@${SITE}`

// Champs du formulaire : nom technique, libellé dans l'e-mail, longueur max, obligatoire.
const CHAMPS = [
  ['nom', 'Nom', 120, true],
  ['email', 'E-mail', 160, true],
  ['entreprise', 'Entreprise', 160, false],
  ['telephone', 'Téléphone', 40, false],
  ['projet', 'Type de projet', 80, false],
  ['message', 'Message', 5000, true],
] as const

type Cle = typeof CHAMPS[number][0]

interface CloudflareEnv {
  CONTACT_EMAIL?: { send: (m: EmailMessage) => Promise<void> }
  CONTACT_TO?: string
}

export default defineEventHandler(async (event) => {
  // Avec JS, le formulaire attend du JSON ; sans JS, une redirection vers /contact/merci ou /contact?erreur=1.
  const enJson = (getHeader(event, 'accept') || '').includes('application/json')
  const repondre = (ok: boolean, message: string, statut: number) => {
    if (!enJson) return sendRedirect(event, ok ? '/contact/merci' : '/contact?erreur=1#formulaire', 303)
    setResponseStatus(event, statut)
    return { ok, message }
  }

  // Un navigateur envoie toujours son Origin sur un POST : on refuse les envois depuis un autre site.
  const origine = getHeader(event, 'origin')
  if (origine && !memeHote(origine, getRequestURL(event).host)) {
    return repondre(false, 'Origine refusée.', 403)
  }

  let form: FormData
  try {
    form = await readFormData(event)
  }
  catch {
    return repondre(false, 'Formulaire illisible.', 400)
  }

  // Champ piège invisible : un robot le remplit, un humain jamais. On fait semblant d'accepter.
  if (String(form.get('site_web') || '').trim()) return repondre(true, 'Merci.', 200)

  const v = {} as Record<Cle, string>
  for (const [cle, libelle, max, obligatoire] of CHAMPS) {
    let val = String(form.get(cle) || '').trim()
    if (obligatoire && !val) return repondre(false, `Le champ « ${libelle} » est obligatoire.`, 422)
    if (val.length > max) return repondre(false, `Le champ « ${libelle} » est trop long.`, 422)
    // Tout sauf le message finit potentiellement dans un en-tête (Subject, Reply-To) : pas de retour à la ligne.
    if (cle !== 'message') val = val.replace(/[\r\n]+/g, ' ')
    v[cle] = val
  }
  if (!/^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(v.email)) return repondre(false, 'Adresse e-mail invalide.', 422)

  // Le sujet dit d'où vient le message, pour le repérer d'un coup d'œil dans la boîte mail.
  const sujet = `[Site ${SITE}] ${v.projet || 'Nouveau message'} — ${v.nom}${v.entreprise ? ` (${v.entreprise})` : ''}`
  const corps = [
    `Nouveau message envoyé depuis le formulaire de ${SITE}`,
    '',
    ...CHAMPS.filter(([cle]) => cle !== 'message' && v[cle]).map(([cle, libelle]) => `${libelle} : ${v[cle]}`),
    '',
    'Message :',
    v.message,
    '',
    '—',
    'Répondez directement à cet e-mail : la réponse partira vers l’expéditeur.',
  ].join('\n')

  const env = (event.context.cloudflare?.env ?? {}) as CloudflareEnv
  const destinataire = env.CONTACT_TO
  if (!env.CONTACT_EMAIL || !destinataire) {
    if (import.meta.dev) {
      console.info(`[contact] (dev, rien n'est envoyé)\nSujet : ${sujet}\n\n${corps}`)
      return repondre(true, 'Message reçu (dev).', 200)
    }
    console.error('[contact] binding CONTACT_EMAIL ou CONTACT_TO absent')
    return repondre(false, 'L’envoi est momentanément indisponible.', 503)
  }

  const brut = construireEmail({
    de: `Site ${SITE} <${EXPEDITEUR}>`,
    a: destinataire,
    repondreA: `${v.nom} <${v.email}>`,
    sujet,
    texte: corps,
  })

  try {
    await env.CONTACT_EMAIL.send(new EmailMessage(EXPEDITEUR, destinataire, brut))
  }
  catch (err) {
    console.error('[contact] envoi impossible :', (err as Error)?.message)
    return repondre(false, 'L’envoi a échoué.', 502)
  }
  return repondre(true, 'Message envoyé.', 200)
})

function memeHote(origine: string, hote: string) {
  try {
    return new URL(origine).host === hote
  }
  catch {
    return false
  }
}

// E-mail MIME minimal : texte brut UTF-8 encodé en base64, sujet et noms encodés (RFC 2047).
function construireEmail({ de, a, repondreA, sujet, texte }: { de: string, a: string, repondreA: string, sujet: string, texte: string }) {
  const b64 = (s: string) => btoa(String.fromCharCode(...new TextEncoder().encode(s)))
  // Un mot encodé ne doit pas dépasser 75 caractères : on découpe (sans couper un caractère) et on replie la ligne.
  const motEncode = (s: string) => {
    if (/^[\x20-\x7E]*$/.test(s)) return s
    const morceaux: string[] = []
    let courant = ''
    for (const car of s) {
      if (new TextEncoder().encode(courant + car).length > 45) { morceaux.push(courant); courant = '' }
      courant += car
    }
    morceaux.push(courant)
    return morceaux.map(m => `=?UTF-8?B?${b64(m)}?=`).join('\r\n ')
  }
  // « Nom <adresse> » : seul le nom affiché est encodé.
  const adresse = (s: string) => s.replace(/^(.*?)\s*<([^>]+)>$/, (_, nom: string, mail: string) => `${motEncode(nom)} <${mail}>`)
  const corps64 = b64(texte).replace(/.{1,76}/g, '$&\r\n')
  return [
    `From: ${adresse(de)}`,
    `To: ${a}`,
    `Reply-To: ${adresse(repondreA)}`,
    `Subject: ${motEncode(sujet)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@${SITE}>`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: base64',
    '',
    corps64,
  ].join('\r\n')
}
