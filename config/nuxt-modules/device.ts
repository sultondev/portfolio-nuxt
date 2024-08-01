import type { NuxtConfig } from "nuxt/config";
import { i18nOptions } from "~~/config/nuxt-modules/i18n";

const deviceOptions: NuxtConfig["device"] = {
  refreshOnResize: true,
};

export const [device]: NuxtConfig["modules"] = [
  ["@nuxtjs/device", deviceOptions],
];
