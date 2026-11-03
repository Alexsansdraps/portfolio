# alexandraporhansl.com — Agence web freelance en Alsace

Site vitrine de l'agence web d'Alexandra (Mulhouse). Nuxt 4, français uniquement, pages pré-générées
et servies par Cloudflare Workers ; seul `/api/contact` tourne dans le Worker.

## Commandes

- `pnpm dev` — dev server (le formulaire n'envoie rien en dev : le message s'affiche dans la console)
- `pnpm build` — build + pré-génération de toutes les pages, à faire passer avant tout push
- Mise en ligne : **push sur `main`** → Cloudflare Workers Builds reconstruit et déploie (worker `portfolio`)

## Règles du projet

- **Français uniquement.** Textes partagés dans `app/data/` (`site.ts` : services, FAQ, zone ; `projects.ts` : réalisations ;
  `experience.ts` : parcours), le reste directement dans les pages.
- **Côté clients, zéro jargon** (accueil, services, réalisations, contact). Le vocabulaire technique n'a sa place que sur `/parcours`.
- **Pas de tarifs affichés** tant qu'Alexandra ne les a pas validés.
- Positionnement : **agence web freelance en Alsace**. Une seule interlocutrice, sur mesure, référencement pensé dès le départ.
- Design system : tokens dans `app/assets/css/main.css` (`paper`, `sand`, `ink`, `wine`, `plum`…). Thème clair papier,
  bandeaux sombres `.on-dark`, accent unique wine `#a1264c` (échantillonné sur le portrait). Boutons en pilule, cartes arrondies.
- Typo : Archivo variable (titres `font-stretch` 110–118 %, graisse 700–800) + JB Mono pour les méta. Fontes self-hostées
  dans `public/fonts/` (préchargées), ne pas ajouter de CDN.
- Animations : GSAP ScrollTrigger + Lenis via `app/plugins/scroll.client.ts` (`[data-reveal]`, `[data-depth]`, `[data-parallax]`,
  `[data-count]`, carte de zone, frise en serpentine du parcours — tracé dans `app/utils/serpentine.ts`).
  Respecter `prefers-reduced-motion` pour toute nouvelle animation.
- Le téléphone d'Alexandra n'apparaît jamais sur le site.

## Référencement

- Chaque page appelle `usePageSeo()` (title ≈ 60 car., description ≈ 155, canonical, Open Graph) — `app/composables/usePageSeo.ts`.
- Données structurées : `ProfessionalService` + `Person` + `WebSite` dans `app.vue`, `FAQPage` sur l'accueil uniquement,
  `Service`, `CreativeWork`, `BreadcrumbList` sur les pages concernées.
- URL canonique : `siteUrl` dans `nuxt.config.ts` (une seule source de vérité, `robots.txt` à garder synchro).
- Pré-génération avec `autoSubfolderIndex: false` : `/parcours` est servi tel quel, sans redirection vers `/parcours/`.
- Anciennes adresses (`/en/**`, `/de/**`, `/cv/**`) : vraies 301 via `routeRules`, exclues de la pré-génération.

## Formulaire de contact

`server/api/contact.post.ts` envoie un e-mail via **Cloudflare Email Routing** (binding `CONTACT_EMAIL`, déclaré dans
`nuxt.config.ts` → `nitro.cloudflare.wrangler`, car Nitro génère lui-même la config wrangler au build Cloudflare).
Destinataire : `a.porhansl@icloud.com` (doit être vérifié dans Email Routing). Sujet préfixé `[Site alexandraporhansl.com]`.
Hors Cloudflare, `cloudflare:email` est remplacé par `server/shims/cloudflare-email.ts`.
Protections : champ piège `site_web`, contrôle d'origine, longueurs max, pas de retour à la ligne dans les en-têtes.
