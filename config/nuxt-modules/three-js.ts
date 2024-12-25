import type { NuxtConfig } from "nuxt/config";

const threeJsOptions: NuxtConfig["tres"] = {
  devtools: true,
  glsl: true,
};

export const [threeJs]: NuxtConfig["modules"] = [
  ["@tresjs/nuxt", threeJsOptions],
];
