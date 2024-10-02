import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import imports from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tailwindcss from 'eslint-plugin-tailwindcss';
import unusedImports from 'eslint-plugin-unused-imports';
import testlint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...testlint.configs.recommended,
  ...astro.configs.recommended,
  ...tailwindcss.configs['flat/recommended'],
  {
    plugins: {
      import: imports,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      'astro/no-set-html-directive': 'off',
      'astro/no-unused-css-selector': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^\\u0000'], ['^@?\\w', '^'], ['^~?\\W'], ['^\\.']],
        },
      ],
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': ['error', { considerComments: true }],
      'import/no-duplicates': 'error',
      'import/no-commonjs': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
    settings: {
      tailwindcss: {
        callees: ['cn', 'cva'],
        config: './tailwind.config.mjs'
      },
    },
  },
];
