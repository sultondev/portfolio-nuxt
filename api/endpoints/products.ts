import { useApiFetch } from '../client'

export const getProducts = <T>(
	slug?: string,
) => {
	const url = slug
		? `/products/${slug}/`
		: `/products`



	// can configure options here
	return useApiFetch<T>(url)
}
