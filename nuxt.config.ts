// https://nuxt.com/docs/api/configuration/nuxt-config
import TranslateModule from './modules/i18n'
export default defineNuxtConfig({
    modules: [
        TranslateModule,
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        'nuxt-icon',
    ],
    colorMode: {
        preference: "dark",
        fallback: 'dark',
        classSuffix: ""
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.ts',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
    image: {
        quality: 10,
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536
        },
    },
    i18n: {
        lazy: false,
        langDir: 'lang',
        locales: [
            {
                code: 'en',
                file: 'en.json'
            },
            {
                code: 'ru',
                file: 'ru.json'
            },
            {
                code: 'uz',
                file: 'uz.json'
            }
        ],
        defaultLocale: 'en'
    },
})