/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/components/**/*.{js,vue,ts}",
        "./src/layouts/**/*.vue",
        "./src/pages/**/*.vue",
        "./src/plugins/**/*.{js,ts}",
        "./src/nuxt.config.{js,ts}",
        "./src/app.vue",
        "./src/error.vue"
    ],
    darkMode: 'class',
    theme: {
        darkMode: 'class',
        extend: {
            colors: {
                primary: '#54b689',
                primaryHover: '#40976f',
                primaryLightHover: '#78c5a2',
                primaryDarkHover: '#317355',
                darkPrimaryHover: '#49a778',
                primaryDarker: '#317355',
                graySub: '#6c757d',
                firstGray: '#111821',
                secondGray: '#1e2a3a',
                grayLighter: '#384f6c',
                grayLightHover:'#415c7c',
                grayDark: '#151e29',
                grayDarker: '#6c757d',
                primaryLight: '#317355',
                textLight: 'hsla(0,0%,100%,0.95)',
                grayLight: 'hsla(0,0%,100%,0.7)',
                whiteGray: 'hsla(0,0%,100%,0.6)',
                solidGray: '#c3c3c3',
                tbBrClrDark: "hsla(0,0%,100%,0.1)",
                tbBrClrWhite: 'rgba(0,0,0,0.1)',
                whiteLight: '#fafafa',
                textDark: '#292929',
                pDark: '#4e4e4e',
                pDarkHover: '#292929',
                hrClr: 'hsla(0,0%,100%,0.1)',
            },
            boxShadow: {
                'cardItem': '0 0 20px rgba(1,1,1,.2)!important',
                'blogCard': '0 0 13px rgba(1,1,1,.2)!important',
            }
        },
        screens: {
            'xs': '320px',

            '2xs': '420px',

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    },
    plugins: [],
}
