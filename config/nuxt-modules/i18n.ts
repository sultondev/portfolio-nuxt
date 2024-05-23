import { createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
    async setup(options, nuxt) {
        const { resolve } = createResolver(import.meta.url)

        // @ts-ignore
        nuxt.hook('i18n:registerModule', (register: any) => {
            register({
                // langDir path needs to be resolved
                langDir: resolve('../../lang'),
                locales: [
                    {
                        code: 'en',
                        file: 'en.json',
                    },
                    {
                        code: 'ru',
                        file: 'ru.json',
                    },
                    {
                        code: 'uz',
                        file: 'uz.json',
                    },
                ]
            })
        })
    }
})
