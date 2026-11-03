/**
 * Imitation de `cloudflare:email` hors Cloudflare (dev, build local) — voir l'alias dans nuxt.config.ts.
 * Elle ne sert qu'à construire l'objet : sans binding CONTACT_EMAIL, la route n'envoie rien.
 */
export class EmailMessage {
  constructor(
    readonly from: string,
    readonly to: string,
    readonly raw: string,
  ) {}
}
