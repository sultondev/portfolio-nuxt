import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'
import { getApiHeaders } from './config/headers'
import {
  onRequest,
  onRequestError,
  onResponse,
  onResponseError,
} from './config/interseptors'

export function useApiFetch<T>(
  url: MaybeRef<string>,
  options: UseFetchOptions<T> = {},
) {
  const config = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.API_HOST,
    headers: getApiHeaders(),
    // cache request
    key: isRef(url) ? unref<string>(url) : url,
    lazy: true,
    server: true,
  }

  const {
    onResponse: onResponseO,
    onResponseError: onResponseErrorO,
    onRequest: onRequestO,
    onRequestError: onRequestErrorO,
  } = options

  // interceptors
  options.onResponse = async (ctx) => {
    typeof onResponse === 'function' && (await onResponse(ctx))
    typeof onResponseO === 'function' && (await onResponseO(ctx))
  }
  options.onResponseError = async (ctx) => {
    typeof onResponseError === 'function' && (await onResponseError(ctx))
    typeof onResponseErrorO === 'function' && (await onResponseErrorO(ctx))
  }
  options.onRequest = async (ctx) => {
    typeof onRequest === 'function' && (await onRequest(ctx))
    typeof onRequestO === 'function' && (await onRequestO(ctx))
  }
  options.onRequestError = async (ctx) => {
    typeof onRequestError === 'function' && (await onRequestError(ctx))
    typeof onRequestErrorO === 'function' && (await onRequestErrorO(ctx))
  }

  // just merge, assign  options
  const params = defu(options, defaults)
  return useFetch(url, params)
}
