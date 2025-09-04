// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 1. Blog collection schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    pubDate: z.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()),
    languages: z.array(z.string()),
  }),
});

// 2. Static data schema
const staticDataCollection = defineCollection({
  type: 'data',
  schema: z.object({
    // Core contact info
    email: z.string().email(),

    // Social links (all optional)
    x: z.string().url().optional(),
    instagram: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    youtube: z.string().url().optional(),
    github: z.string().url().optional(),

    // Icon names (all optional)
    contactSectionButtonIcon: z.string(),
    instagramIconName: z.string().optional(),
    emailIconName: z.string().optional(),
    xIconName: z.string().optional(),
    linkedinIconName: z.string().optional(),
    youtubeIconName: z.string().optional(),
    githubIconName: z.string().optional(),

    // Images
    fallbackImage: z.object({
      url: z.string(),
      alt: z.string().optional(),
    }),
  }),
});

// 3. Export collections
export const collections = {
  blog: blogCollection,
  staticData: staticDataCollection,
};
