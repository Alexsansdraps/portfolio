import tailwindcss from '@tailwindcss/vite'

/**
 * URL canonique du site — UNE seule source de vérité.
 * À la mise en prod : si le domaine final n'est pas porhansl.dev,
 * changer ici OU poser NUXT_PUBLIC_SITE_URL / NUXT_SITE_URL sur l'hébergeur.
 */
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://porhansl.dev'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  site: {
    url: siteUrl,
    name: 'Alexandra Porhansl',
  },

  runtimeConfig: {
    public: {
      siteUrl,
    },
  },

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0a0a0c' },
        { name: 'author', content: 'Alexandra Porhansl' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-48.png', sizes: '48x48' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },

  i18n: {
    baseUrl: siteUrl,
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'en', language: 'en-GB', name: 'English', file: 'en.json' },
      { code: 'de', language: 'de-DE', name: 'Deutsch', file: 'de.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang',
      redirectOn: 'root',
    },
  },
})
