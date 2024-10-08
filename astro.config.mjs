// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';

// https://astro.build/config
export default defineConfig({
  site: 'https://goshkim.github.io',
  integrations: [
    mdx({
      syntaxHighlight: false,
      remarkPlugins: [remarkBreaks],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
            properties: {
              className: ['link'],
            },
          },
        ],
        [
          rehypeExternalLinks,
          {
            target: '_blank',
            rel: ['noopener noreferrer'],
            properties: {
              className: 'external-link',
            },
            content: {
              type: 'element',
              tagName: 'svg',
              properties: {
                xmlns: 'http://www.w3.org/2000/svg',
                width: '1em',
                height: '1em',
                viewBox: '0 0 24 24',
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: '2.5',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                class: 'icon icon-tabler icons-tabler-outline icon-tabler-external-link',
              },
              children: [
                {
                  type: 'element',
                  tagName: 'path',
                  properties: {
                    stroke: 'none',
                    d: 'M0 0h24v24H0z',
                    fill: 'none',
                  },
                },
                {
                  type: 'element',
                  tagName: 'path',
                  properties: {
                    d: 'M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6',
                  },
                },
                {
                  type: 'element',
                  tagName: 'path',
                  properties: {
                    d: 'M11 13l9 -9',
                  },
                },
                {
                  type: 'element',
                  tagName: 'path',
                  properties: {
                    d: 'M15 4h5v5',
                  },
                },
              ],
            },
          },
        ],
        [
          rehypePrettyCode,
          {
            defaultLang: 'plaintext',
            keepBackground: false,
            bypassInlineCode: true,
            theme: {
              light: 'github-light',
              dark: 'github-dark',
            },
          },
        ],
      ],
    }),
    react(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
  ],
});
