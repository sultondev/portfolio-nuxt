import type { NuxtConfig } from "@nuxt/schema";
import { i18n } from "./i18n";
import { device } from "./device";

export default [
  // eslint,
  // pinia,
  // tailwindcss,
  // swiper,
  // image,
  // '@nuxtjs/device',
  // '@vueuse/nuxt',
  i18n,
  device,
  "@nuxt/image",
  "@nuxtjs/tailwindcss",
  "@nuxtjs/color-mode",
  "@pinia/nuxt",
  "nuxt-icon",
  "@vueuse/nuxt",
  // threeJs,
] as NuxtConfig["modules"];
