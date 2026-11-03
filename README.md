# alexandraporhansl.com

Site de l'agence web freelance d'Alexandra Porhansl, à Mulhouse : sites vitrines, boutiques en ligne,
refontes et outils sur mesure pour les entreprises d'Alsace.

Pages : accueil, services et tarifs, audit gratuit, réalisations (La Chance Animation, MemoryLine),
mon parcours (frise animée en serpentine), contact (formulaire → e-mail), mentions légales.
Les prix (HT) sont dans `app/data/site.ts`.

## Stack

- [Nuxt 4](https://nuxt.com) + [@nuxtjs/sitemap](https://nuxtseo.com/sitemap), pages pré-générées
- Tailwind CSS v4 (tokens dans `app/assets/css/main.css`)
- GSAP ScrollTrigger + Lenis (`prefers-reduced-motion` respecté)
- Fontes self-hostées : Archivo variable + JetBrains Mono
- Cloudflare Workers (assets statiques + `/api/contact` avec Email Routing)

## Commandes

```bash
pnpm install        # deps
pnpm dev            # dev server
pnpm build          # build + pré-génération → .output/
```

## Déploiement

Push sur `main` → Cloudflare Workers Builds (`pnpm build` puis `wrangler deploy`). Nitro détecte l'environnement
Cloudflare et génère la config wrangler (avec le binding d'envoi d'e-mail déclaré dans `nuxt.config.ts`).

**Une fois, pour le formulaire de contact** : Cloudflare → zone `alexandraporhansl.com` → Email → Email Routing →
activer (Cloudflare remplace les anciens enregistrements MX/SPF d'IONOS), puis Destination addresses → ajouter
`a.porhansl96@gmail.com` et cliquer le lien de vérification reçu. Tant que ce n'est pas fait, le formulaire affiche
une erreur propre avec l'adresse e-mail en secours.

## Structure

```
app/
├─ components/    en-tête, pied de page, cartes de réalisation, carte de zone, FAQ, formulaire…
├─ composables/   usePageSeo, useJsonLd, breadcrumb
├─ data/          site.ts (services, FAQ, zone) · projects.ts (réalisations) · experience.ts (parcours)
├─ pages/         index, services, realisations/, parcours, contact/, mentions-legales
├─ plugins/       scroll.client.ts — Lenis + ScrollTrigger
└─ utils/         serpentine.ts — tracé de la frise
server/
└─ api/contact.post.ts — envoi du formulaire par Cloudflare Email Routing
public/           favicons, fonts/, og/, robots.txt
```
