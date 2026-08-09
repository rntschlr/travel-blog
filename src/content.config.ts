import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    description: z.string(),
    heroImage: z.string().optional(),
    location: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const photos = defineCollection({
  loader: glob({ pattern: "**/*.{yml,yaml}", base: "./src/content/photos" }),
  schema: z.object({
    image: z.string(),
    alt: z.string(),
    location: z.string().optional(),
    caption: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { posts, photos };
