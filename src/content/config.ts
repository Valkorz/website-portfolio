import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

//define the base model for the 'project' page
const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: ({ image }) =>
      z.object({
        projectName: z.string(),
        githubPage: z.string().optional(),
        title: z.string(),
        description: z.string(),
        version: z.string().optional(),
        author: z.string(),
        contributors: z.array(z.string()).optional(),
        tags: z.array(z.string()),
        dateOfCreation: z.date(),
        screenshots: z.array(image()),
        thumbnail: image(),
      }),
});

export const collections = {projects}