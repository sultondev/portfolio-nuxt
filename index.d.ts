declare global {
	// SEO
	const ga: (a: any, a: any, a: any, a: any) => void
	const ym: (a: any, a: any, a: any) => void
	const dataLayer: any[] = []

	const cookieStore: {
		getAll: () => Promise<{ [key: string]: string }[]>
	}
}
export {}
