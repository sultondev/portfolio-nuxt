import en from './en.json'
import ru from './ru.json'
import uz from './uz.json'
export const messages = { en, ru, uz }

export default defineI18nConfig(() => ({
	legacy: false,
	globalInjection: true,
	locale: 'en',
	fallbackLocale: 'en',
	missingWarn: false,
	fallbackWarn: false,
	silentTranslationWarn: true,
	messages,
	pluralRules: {
		ru: function (choice: number, choicesLength: number) {
			if (choice === 0) {
				return 0
			}

			const teen = choice > 10 && choice < 20
			const endsWithOne = choice % 10 === 1

			if (choicesLength < 4) {
				return !teen && endsWithOne ? 1 : 2
			}
			if (!teen && endsWithOne) {
				return 1
			}
			if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
				return 2
			}

			return choicesLength < 4 ? 2 : 3
		},
	},
}))
