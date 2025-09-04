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
    profileImage: z.string(),
    profileAlt: z.string(),
    profileLink: z.string(),
    profileTitle: z.string(),
    profileName: z.string(),
    portfolioImage: z.string(),
    email: z.string().email(),
    x: z.string().url().optional(),
    instagram: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    youtube: z.string().url().optional(),
    contactSectionTitle: z.string(),
    contactSectionSubtitle: z.string(),
    contactSectionButtonText: z.string(),
    contactSectionButtonIcon: z.string(),
    techsTitle: z.string(),
    instagramIconName: z.string(),
    emailIconName: z.string(),
    xIconName: z.string(),
    hobbies: z.array(z.string()),
    pageTitle: z.string(),
    pageDescription: z.string(),
    OGImage: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    fallbackImage: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

// 3. Export collections
export const collections = {
  blog: blogCollection,
  staticData: staticDataCollection,
};
