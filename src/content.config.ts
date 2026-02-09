import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // load .md files in the `src/content/blog/` directory
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),

  // type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(), // transform string to Date object
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

export const collections = { blog };
