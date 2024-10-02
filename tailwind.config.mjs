/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';
import animate from 'tailwindcss-animate';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        default: {
          50: 'rgb(var(--color-default-50))',
          100: 'rgb(var(--color-default-100))',
          200: 'rgb(var(--color-default-200))',
          300: 'rgb(var(--color-default-300))',
          400: 'rgb(var(--color-default-400))',
          500: 'rgb(var(--color-default-500))',
          600: 'rgb(var(--color-default-600))',
          700: 'rgb(var(--color-default-700))',
          800: 'rgb(var(--color-default-800))',
          900: 'rgb(var(--color-default-900))',
          950: 'rgb(var(--color-default-950))',
        },
        primary: {
          50: 'rgb(var(--color-primary-50))',
          100: 'rgb(var(--color-primary-100))',
          200: 'rgb(var(--color-primary-200))',
          300: 'rgb(var(--color-primary-300))',
          400: 'rgb(var(--color-primary-400))',
          500: 'rgb(var(--color-primary-500))',
          600: 'rgb(var(--color-primary-600))',
          700: 'rgb(var(--color-primary-700))',
          800: 'rgb(var(--color-primary-800))',
          900: 'rgb(var(--color-primary-900))',
          950: 'rgb(var(--color-primary-950))',
        },
      },
      fontFamily: {
        blackHanSans: ['Black Han Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: 'selector',
  plugins: [typography, animate],
};
