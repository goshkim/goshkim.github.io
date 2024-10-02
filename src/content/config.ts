import { defineCollection, reference, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      title: z.string(),
      excerpt: z.string(),
      tags: z.array(z.string()),
      series: z
        .object({
          name: z.string(),
          entries: z.array(reference('posts')),
        })
        .optional(),
      prevPost: reference('posts').optional(),
      nextPost: reference('posts').optional(),
      thumbnail: image(),
      publishedDate: z.date(),
    }),
});

export const collections = { posts };
