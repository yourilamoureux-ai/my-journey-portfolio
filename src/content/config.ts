// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const jsonDataCollection = defineCollection({
  type: 'data',
  schema: z.object({
    //Define JSON-file structure
    profileImage: z.string(),
    profileAlt: z.string(),
    profileLink: z.string(),
    profileTitle: z.string(),
    profileName: z.string(),
    github: z.string().url().optional(),
    githubText: z.string().optional(),
    portfolioImage: z.string(),
    email: z.string().email(),
    linkedin: z.string().url().optional(),
    instagram: z.string().url(),
    youtube: z.string().url().optional(),
    x: z.string().url(),
    xIconName: z.string(),
    alias: z.string().optional(),
    contactSectionTitle: z.string(),
    contactSectionSubtitle: z.string(),
    contactSectionButtonText: z.string(),
    contactSectionButtonIcon: z.string(),
    techsTitle: z.string(),
    instagramIconName: z.string(),
    youtubeIconName: z.string().optional(),
    githubIconName: z.string().optional(),
    linkedinIconName: z.string().optional(),
    emailIconName: z.string(),  
    hobbies: z.array(z.string()),
    pageTitle: z.string(),
    pageDescription: z.string(),
    OGImage: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  staticData: jsonDataCollection,
};
