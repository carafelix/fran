import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      cover: image().optional(),
    }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/obras",
  }),
  schema: ( { image }) =>
    z.object({
      titlo: z.string(),
      categoria: z.array(z.string()),
      serie: z.array(z.string()).optional(),
      fecha: z.date(),
      medio: z.string(),
      descript: z.string().optional(),
      ancho: z.number(),
      alto: z.number(),
      foto: image()
    }),
});

export const collections = { blog, projects };
