// import { ModuleOptions } from "@tresjs/nuxt"
import type {NuxtConfig} from "@nuxt/schema";

// const threeJsOptions: ModuleOptions  = {
// 	devtools: true,
// 	modules: true
// }

export const [threeJs]: NuxtConfig['modules'] = [
	['@tresjs/nuxt', {}]
]
