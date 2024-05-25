import '@nuxtjs/i18n'
import type { NuxtConfig } from 'nuxt/config'

const locales = [
    {
        code: 'en',
        iso: 'en',
        file: 'en.json',
    },
    {
        code: 'ru',
        iso: 'ru',
        file: 'ru.json',
    },
    {
        code: 'uz',
        iso: 'uz',
        file: 'uz.json',
    },
]

export const i18nOptions: NuxtConfig['i18n'] = {
    langDir: 'locales/',
    defaultLocale: 'en',
    locales,
    // detectBrowserLanguage: {
    //     useCookie: true,
    //     cookieKey: 'AX_CAPITAL_LOCALIZATION',
    //     alwaysRedirect: true,
    // },
    skipSettingLocaleOnNavigate: false,
    types: 'composition',
    strategy: 'prefix_except_default',
    debug: false,
    vueI18n: 'src/locales/vueI18n.ts',
}

export const [i18n]: NuxtConfig['modules'] = [['@nuxtjs/i18n', i18nOptions]]
