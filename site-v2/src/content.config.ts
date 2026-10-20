import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Les billets de veille (src/content/docs/veille/) ajoutent une date, une thématique
// et, pour les plus anciens dont la date est incertaine, la mention « Archive ».
export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				date: z.coerce.date().optional(),
				category: z.string().optional(),
				dateEstimated: z.boolean().optional(),
			}),
		}),
	}),
};
