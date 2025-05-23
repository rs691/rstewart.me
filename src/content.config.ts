import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';



export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/work', pattern: '**/*.md', }),
		schema: z.object({
			title: z.string(),
			// The slug is the file name without the extension.
			slug: z.string().optional(),
			subtitle: z.string().optional(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			email: z.string().optional(),
			website: z.string().optional(),
			github: z.string().optional(),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};


