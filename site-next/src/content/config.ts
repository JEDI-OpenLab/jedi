import { defineCollection, z } from 'astro:content';

// Collection « Veille » : chaque article = un fichier Markdown dans src/content/veille/
const veille = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    category: z.string().optional(),       // thématique (ex-« chapitre ») pour les filtres
    dateEstimated: z.boolean().optional(),  // true => affiche « Archive » au lieu de la date
    image: z.string().optional(),           // illustration (chemin public, ex. /jedi/PIX/x.png)
    tag: z.string().optional(),
  }),
});

export const collections = { veille };
