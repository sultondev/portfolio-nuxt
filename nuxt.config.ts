// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        'nuxt-icon'
    ],
    colorMode: {
        classSuffix: ""
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.ts',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
})