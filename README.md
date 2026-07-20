# porhansl.dev — Portfolio

Portfolio d'Alexandra Porhansl — développeuse full-stack (appétence front), Mulhouse.
Trilingue **FR / EN / DE**, double discours **freelance / CDI** (`?mode=freelance|cdi`), timeline d'expérience, carte de mobilité tri-nationale interactive, CV PDF générés par pipeline HTML → PDF.

**Fait main avec [Claude Code](https://claude.com/claude-code)** — ce repo est la preuve directe de la méthode décrite sur le site.

## Stack

- [Nuxt 4](https://nuxt.com) (SSG) + [@nuxtjs/i18n](https://i18n.nuxtjs.org) + [@nuxtjs/sitemap](https://sitemap.nuxtjs.org)
- Tailwind CSS v4 (tokens dans `app/assets/css/main.css`)
- GSAP ScrollTrigger + Lenis (reveals, jauges, carte qui se dessine — `prefers-reduced-motion` respecté)
- Fontes self-hostées : Archivo variable (wdth 62–125) + JetBrains Mono, subsets woff2

## Commandes

```bash
pnpm install        # deps
pnpm dev            # dev server
pnpm generate       # build statique → .output/public
```

## CV (PDF)

Sources dans [`cv/`](cv/) (HTML A4, même identité visuelle en version imprimable).
Régénération via Chrome headless :

```bash
chrome --headless=new --allow-file-access-from-files --no-pdf-header-footer \
  --print-to-pdf=public/cv/cv-alexandra-porhansl-fr.pdf cv/cv-fr.html
```

## Déploiement

Statique — pensé pour Cloudflare Pages :
- build : `pnpm generate` · output : `.output/public`
- URL canonique : `siteUrl` dans `nuxt.config.ts` (surchargeable via `NUXT_PUBLIC_SITE_URL`)

## Structure

```
app/
├─ components/    sections de la one-page (Hero, Value, Stack, Timeline, Mobility, Languages, Cta)
├─ composables/   useAudienceMode — mode freelance/CDI (URL + cookie)
├─ data/          expériences (dates, boîtes, tags — le texte vit dans i18n/)
├─ plugins/       scroll.client.ts — Lenis + ScrollTrigger
└─ assets/        css (tokens), fontes, portrait
i18n/locales/     fr.json · en.json · de.json — 100 % du contenu
cv/               sources HTML des CV
public/           favicons, og/, cv/ (PDF), robots.txt
```
