import type { UseFetchOptions } from "nuxt/app";

export const getApiHeaders = (): UseFetchOptions<unknown>["headers"] => {
  const { locale } = useI18n();

  return {
    "X-Accept-Language": locale.value,
    "Accept-Language": locale.value,
  };
};
