/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    darkMode: 'class',
    theme: {
        darkMode: 'class',
        extend: {
            colors: {
                primary: '#54b689',
                primaryHover: '#40976f',
                darkPrimaryHover: '#49a778',
                firstGray: '#111821',
                secondGray: '#1e2a3a',
                grayLighter: '#384f6c',
                grayLightHover:'#415c7c',
                grayDark: '#151e29',
                primaryLight: '#317355',
                textLight: 'hsla(0,0%,100%,0.95)',
                grayLight: 'hsla(0,0%,100%,0.7)',
                whiteGray: 'hsla(0,0%,100%,0.6)',
                textDark: '#292929',
                pDark: '#4e4e4e',
                hrClr: 'hsla(0,0%,100%,0.1)',
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