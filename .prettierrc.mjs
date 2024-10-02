/** @type {import("prettier").Config} */
export default {
  semi: true,
  useTabs: false,
  printWidth: 100,
  tabWidth: 2,
  arrowParens: 'avoid',
  singleQuote: true,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn', 'cva'],
  tailwindConfig: './tailwind.config.mjs',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
