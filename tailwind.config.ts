import type {Config} from 'tailwindcss';

export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    css: ['~/assets/css/tailwind.css'],
    theme: {
        extend: {
            colors: {
                extra: {
                    'purple': '#C699FF',
                    'green': '#1CD760',
                    'yellow': '#FECE00',
                    'blue': '#81BCF9',
                    'gray': '#4D4D4D',
                    'black': '#161614',
                }
            },
            fontSize: {
                '2xs': ['0.625rem', '0.750rem'],
            },
            fontFamily: {
                'sans': ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
            }
        },
    },
} satisfies Config;