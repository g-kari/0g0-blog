// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ],
    }
  },
  devtools: { enabled: false },
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode'
  ],
  content: {
    defaultLocale: "ja",
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    },
    navigation: {
      fields: ['author', 'publishedAt']
    },
    watch: {
      ws: {
        port: 4000,
        showURL: true
      }
    },
    experimental: {
      search: {
        indexed: true
      }
    }
  }
})
