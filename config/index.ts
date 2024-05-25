// https://nuxt.com/docs/api/configuration/nuxt-config
import modules from "./nuxt-modules"
import {noscript as seoNoscript, scripts as seoScripts} from './head/seo'
import {scripts} from './head/head-tags'
export default defineNuxtConfig({
	sourcemap: {
		server: false,
		client: false
	},
	devtools: {
		enabled: true
	},
	modules,
	srcDir: 'src/',
	routeRules: {
		'/**': {
			swr: false,
			cache: false,
		},
	},
	imports: {
		dirs: ['composable/**', 'store/**', 'api/'],
	},
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		}
	],
	// delayHydration: {
	// 	mode: 'mount',
	// },
	app: {
		rootId: 'sa',
		buildAssetsDir: 'sa',
		head: {
			titleTemplate: '%s | SULTONDEV',
			// meta: [...meta],
			// link: [...links],
			script: [...seoScripts, ...scripts],
			noscript: [...seoNoscript],
		},
	},
	colorMode: {
		preference: "dark",
		fallback: 'dark',
		classSuffix: ""
	},
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config.ts',
		exposeConfig: false,
		viewer: true,
	},
	image: {
		quality: 80,
	},
	i18n: {
		lazy: false,
		langDir: 'locales',
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
