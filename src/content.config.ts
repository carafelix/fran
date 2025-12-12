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

const obras = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/obras",
  }),
  schema: ( { image }) =>
    z.object({
      titulo: z.string().optional(),
      categoria: z.array(z.string()).optional(),
      serie: z.array(z.string()).optional(),
      fecha: z.date().optional(),
      medio: z.string().optional(),
      descript: z.string().optional(),
      ancho: z.number().optional(),
      alto: z.number().optional(),
      foto: image()
    }),
});

export const collections = { blog, obras };
