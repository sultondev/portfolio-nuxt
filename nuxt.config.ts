// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        'nuxt-icon'
    ],
    i18n: {
        vueI18n: './i18n.config.ts' // if you are using custom path, default
    }
})