import type { UseFetchOptions } from 'nuxt/app'

export const onResponse: UseFetchOptions<unknown>['onResponse'] = (_ctx) => {}

export const onResponseError: UseFetchOptions<unknown>['onResponseError'] = (
  _ctx,
) => {}

export const onRequest: UseFetchOptions<unknown>['onRequest'] = (_ctx) => {}

export const onRequestError: UseFetchOptions<unknown>['onRequestError'] = (
  _ctx,
) => {}
