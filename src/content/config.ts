import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

//define the base model for the 'project' page
const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        screenshots: z.array(image()),
        thumbnail: image()
    })
});

export const collections = {projects}