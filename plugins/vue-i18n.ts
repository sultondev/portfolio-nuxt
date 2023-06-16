import { createI18n } from 'vue-i18n'
import uz from '@/lang/uz.json'
import en from '@/lang/en.json'
import ru from '@/lang/ru.json'

const messages = {
    uz,
    ru,
    en
}
export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: false,
        locale: 'en',
        messages,
    })

    vueApp.use(i18n)
})