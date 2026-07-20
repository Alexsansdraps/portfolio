# Portfolio Alexandra Porhansl

One-page Nuxt 4 SSG, trilingue FR/EN/DE, design sobre dark (pas de mode clair pour l'instant).

## Commandes

- `pnpm dev` — dev server
- `pnpm generate` — build statique (`.output/public`), à faire passer avant tout push
- CV : sources `cv/*.html`, régénérer via Chrome headless `--print-to-pdf` vers `public/cv/`

## Règles du projet

- **Tout le texte visible vit dans `i18n/locales/{fr,en,de}.json`** — jamais de texte en dur dans les composants. Toute modif de contenu = les 3 langues d'un coup.
- Les données non traduites (dates, noms de boîtes, tags, positions carte) vivent dans `app/data/` ou dans le composant.
- Design system : tokens CSS dans `app/assets/css/main.css` (`--color-void/carbon/ash/bone/mute/wine/deep`). Accent unique : wine `#b26270`. Pas d'arrondis, pas d'ombres portées, hairlines 1px `ash`.
- Typo : Archivo variable (nom en `wdth 125/wght 700`, reste léger tracked uppercase) + JB Mono pour dates/méta. Fontes self-hostées dans `app/assets/fonts/`, ne pas ajouter de CDN.
- Animations : GSAP ScrollTrigger via `app/plugins/scroll.client.ts` — tout élément `[data-reveal]` est révélé au scroll. Respecter `prefers-reduced-motion` pour toute nouvelle animation.
- i18n : locale files rechargés seulement au restart du dev server si modifiés hors HMR (script externe).
- URL canonique : `siteUrl` dans `nuxt.config.ts` — une seule source de vérité (SEO, OG, sitemap, robots.txt à garder synchro).

## Contenu — points sensibles

- Positionnement : **full-stack à appétence front-end** (pas « front-end » seul).
- Niveaux de langues honnêtes : EN B1 → B2, DE A2 → B1. Jamais surjouer, jamais mentionner « avec des amis ».
- Le téléphone n'apparaît QUE dans les CV PDF, jamais sur le site.
- Claude Code : pratique construite sur le temps perso — formulation « je garde la main, l'outil démultiplie la vitesse », pas de multiplicateur chiffré inventé.
