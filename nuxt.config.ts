import tailwindcss from '@tailwindcss/vite'

/**
 * URL canonique du site — UNE seule source de vérité
 * (canonical, données structurées, sitemap, OG images).
 * Surchargeable via NUXT_PUBLIC_SITE_URL sur l'hébergeur.
 */
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://alexandraporhansl.com'

/** Adresse qui reçoit les messages du formulaire de contact (doit être vérifiée dans Cloudflare Email Routing). */
const contactTo = 'a.porhansl@icloud.com'

/**
 * Build Cloudflare (Workers Builds pose WORKERS_CI) : `cloudflare:email` est fourni par le runtime.
 * Partout ailleurs (dev, build local), on le remplace par une imitation qui n'envoie rien.
 */
const cloudflareBuild = !!process.env.WORKERS_CI || (process.env.NITRO_PRESET || '').startsWith('cloudflare')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/sitemap'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  site: {
    url: siteUrl,
    name: 'Alexandra Porhansl — Agence web en Alsace',
    defaultLocale: 'fr',
  },

  runtimeConfig: {
    public: {
      siteUrl,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#f6f2ec' },
        { name: 'author', content: 'Alexandra Porhansl' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'preload', href: '/fonts/archivo.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-48.png', sizes: '48x48' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },

  sitemap: {
    exclude: ['/contact/merci'],
  },

  /* Anciennes adresses (site trilingue, CV) → 301 vers leur équivalent, pour garder le référencement acquis. */
  routeRules: {
    '/en': { redirect: { to: '/', statusCode: 301 } },
    '/en/services': { redirect: { to: '/services', statusCode: 301 } },
    '/en/legal-notice': { redirect: { to: '/mentions-legales', statusCode: 301 } },
    '/en/**': { redirect: { to: '/', statusCode: 301 } },
    '/de': { redirect: { to: '/', statusCode: 301 } },
    '/de/**': { redirect: { to: '/', statusCode: 301 } },
    '/cv/**': { redirect: { to: '/parcours', statusCode: 301 } },
  },

  nitro: {
    alias: cloudflareBuild ? {} : { 'cloudflare:email': '~~/server/shims/cloudflare-email' },
    // Toutes les pages sont pré-générées au build (rapides à servir) ; seul /api/contact tourne dans le Worker.
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml'],
      // /parcours.html plutôt que /parcours/index.html : Cloudflare sert alors /parcours tel quel,
      // sans redirection vers /parcours/ (une seule URL par page, celle du canonical).
      autoSubfolderIndex: false,
      // Les anciennes adresses restent des vraies 301 servies par le Worker, pas des pages HTML de redirection.
      ignore: [/^\/(en|de|cv)(\/|$)/],
    },
    // Build Cloudflare Workers : Nitro génère la config wrangler, on y ajoute l'envoi d'e-mail
    // (Cloudflare Email Routing). destination_address verrouille le destinataire côté Cloudflare.
    cloudflare: {
      wrangler: {
        // nom du Worker dans le tableau de bord Cloudflare (sinon Nitro en déduit un du dépôt Git)
        name: 'portfolio',
        send_email: [{ name: 'CONTACT_EMAIL', destination_address: contactTo }],
        vars: { CONTACT_TO: contactTo },
      },
    },
  },
})
