export const scripts =
	process.env?.BUILD_MODE === 'prod'
		? [
			// {
			// 	children: `setTimeout(function(){(function (e,t,n,c,o,a,f){e.fbq || ((o=e.fbq=function () {o.callMethod ? o.callMethod.apply(o, arguments) : o.queue.push(arguments);}),e._fbq || (e._fbq = o),(o.push = o),(o.loaded = !0),(o.version = "2.0"),(o.queue = []),((a = t.createElement(n)).async = !0),(a.src = "https://connect.facebook.net/en_US/fbevents.js"),(f = t.getElementsByTagName(n)[0]).parentNode.insertBefore(a, f))})(window, document, "script"),fbq("init", "174010514168128"),fbq("track", "PageView")},4000)`,
			// },
			{
				children: `setTimeout((function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TDCWP9K2'),4000)`,
			},
		]
		: []

export const noscript: [] | {children: string; body: boolean}[] =
	process.env?.BUILD_MODE === 'prod'
		? [
			{
				children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDCWP9K2" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
				body: true,
			},
		]
		: []
