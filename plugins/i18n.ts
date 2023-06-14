import { createI18n } from 'vue-i18n'
import en from '@/lang/en.json'
import uz from '@/lang/uz.json'
import ru from '@/lang/ru.json'

const messages = {
    en,
    uz,
    ru
}
export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'en',
        messages,
    })

    vueApp.use(i18n)
})