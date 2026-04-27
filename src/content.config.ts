import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/services' }),
  schema: z.object({
    lang: z.enum(['en', 'es']),
    slug: z.string(),
    title: z.string(),
    summary: z.string(),
    icon: z.string(),
    order: z.number().default(100),
    conditions: z.array(z.string()).default([]),
    whatToExpect: z.array(z.string()).default([]),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    credentials: z.string(),
    role: z.object({ en: z.string(), es: z.string() }),
    bio: z.object({ en: z.string(), es: z.string() }),
    photo: z.string().optional(),
    languages: z.array(z.string()).default(['English']),
    order: z.number().default(100),
    founder: z.boolean().optional().default(false),
  }),
});

export const collections = { services, team };
