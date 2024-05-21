// https://nuxt.com/docs/api/configuration/nuxt-config
import TranslateModule from './modules/i18n'

export default defineNuxtConfig({
	sourcemap: {
		server: true,
		client: false
	},
	devtools: {
		enabled: true
	},
	modules: [
		TranslateModule,
		'@nuxt/image',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@pinia/nuxt',
		'@nuxtjs/i18n',
		'nuxt-icon',
		'@vueuse/nuxt',
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
		quality: 80,
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
