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
- **Tarifs** : grille validée par Alexandra (base 400 € HT / jour, vendue au forfait), dans `app/data/site.ts`
  (`price` sur les cartes de l'accueil, `prices` sur la page Services via `PriceList`, `minPrice` pour les données structurées,
  `maintenance.prices`). Prix **hors taxes**, « à partir de » ou « sur devis ». Ne pas inventer de prix hors de cette grille :
  la reprendre aussi dans la FAQ (« Combien coûte un site internet ? ») si elle change. Jamais de taux journalier affiché.
- L'**audit gratuit** (`/audit-gratuit`) est à mettre en avant (accueil, menu, bandeau final, formulaire) — pour un site,
  un logiciel / des outils, ou sans site.
- Positionnement : **agence web freelance basée à Mulhouse, en Alsace**. Ne rien dire sur la zone de déplacement
  ni sur des clients « partout » (ni « Alsace uniquement », ni « monde entier »).
  Une seule interlocutrice, sur mesure, référencement (SEO) pensé dès le départ — le SEO est aussi un service à part entière.
- Pas de « premier échange gratuit » : seul l'audit est gratuit. Pas de « Demander un devis » : « Parlons de votre projet ».
- Ton naturel, à la première personne, sans slogans en deux temps ni formules toutes faites (« zéro jargon », « X, pas Y »…).
- Petits clins d'œil alsaciens bienvenus (Hopla, Merci vielmols, bretzel, sous-bock, Vosges / Rhin, Route des vins), avec parcimonie.
- **Aucune référence aux clients dans la FAQ** (les réalisations ont leurs propres pages).
- Textes de l'audit gratuit à la 1re personne du pluriel : « on » (« on fait le point »), boutons « Audit gratuit ».
- MemoryLine n'est pas alsacienne : pas de mention de l'Alsace pour elle. La Chance (Guebwiller) l'est.
- Design system : tokens dans `app/assets/css/main.css` (`paper`, `sand`, `ink`, `wine`, `plum`…). Thème clair papier,
  bandeaux sombres `.on-dark`, accent unique wine `#a1264c` (échantillonné sur le portrait). Boutons en pilule, cartes arrondies.
- Typo : Archivo variable (titres `font-stretch` 110–118 %, graisse 700–800) + JB Mono pour les méta. Fontes self-hostées
  dans `public/fonts/` (préchargées), ne pas ajouter de CDN.
- Animations : GSAP ScrollTrigger + Lenis via `app/plugins/scroll.client.ts` (`[data-reveal]`, `[data-depth]`, `[data-parallax]`,
  `[data-count]`, carte de l'Alsace, frise en serpentine du parcours — tracé dans `app/utils/serpentine.ts`).
  Respecter `prefers-reduced-motion` pour toute nouvelle animation.
- Le téléphone d'Alexandra n'apparaît jamais sur le site.
- Page Parcours : « développeuse full-stack salariée » dans l'intro ; Infosat n'apparaît que dans la frise. Pas de chiffres-clés en tête de page.

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
Destinataire : `a.porhansl96@gmail.com` (`contactTo` dans `nuxt.config.ts`, doit être vérifié dans Email Routing). Sujet préfixé `[Site alexandraporhansl.com]`.
Hors Cloudflare, `cloudflare:email` est remplacé par `server/shims/cloudflare-email.ts`.
Protections : champ piège `site_web`, contrôle d'origine, longueurs max, pas de retour à la ligne dans les en-têtes.
