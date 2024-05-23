export const links: any = [
	{
		rel: 'apple-touch-icon',
		sizes: '180x180',
		href:
			(process.env.NUXT_APP_CDN_URL?.replace(/\/$/, '') || '') +
			'/ico/apple-touch-icon.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '32x32',
		href:
			(process.env.NUXT_APP_CDN_URL?.replace(/\/$/, '') || '') +
			'/ico/favicon-32x32.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '16x16',
		href:
			(process.env.NUXT_APP_CDN_URL?.replace(/\/$/, '') || '') +
			'/ico/favicon-16x16.png',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
	},
	{
		as: 'style',
		rel: 'stylesheet',
		href: 'https://static.axcapital.ae/assets/chat/index.css',
	},
]

export const meta = [
	{
		name: 'google',
		content: 'notranslate',
	},
	{ name: 'theme-color', content: '#111010' },
	{ name: 'apple-mobile-web-app-capable', content: 'yes' },
	{
		name: 'apple-mobile-web-app-status-bar-style',
		content: 'black-translucent',
	},
	{ property: 'og:type', content: 'website' },
	{ property: 'og:site_name', content: 'AX CAPITAL' },
	{ name: 'msapplication-navbutton-color', content: '#111010' },
	{ name: 'apple-mobile-web-app-capable', content: 'yes' },
	{ name: 'apple-mobile-web-app-status-bar-style', content: '#111010' },
	{
		name: 'google-site-verification',
		content: '2dX0DSzqiLpnH22MR2TLgIuGk8HcEj4xIXaS0F90iqM',
	},
]

export const scripts = [
	// {
	// 	children: `setTimeout(()=>{const s=document.createElement('script');s.src='https://static.axcapital.ae/assets/chat/index.js';document.querySelector('body').appendChild(s)},4000)`,
	// },
	// {
	//   children: `setTimeout(()=>{const s=document.createElement('script');s.src='//embed.typeform.com/next/embed.js';document.querySelector('body').appendChild(s)},5000)`,
	// },
]
