import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';



export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: '../rstewart.me/src/content/work', pattern: '**/*.md', }),
		// When using content, the loader is automatically set to glob
    // type: 'content', // 'content' for Markdown/MDX. Use 'data' for JSON/YAML
  }),
  schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
      email: z.string().email().optional(), // Use .email() for email validation
      website: z.string().url().optional(), // Use .url() for URL validation
      github: z.string().url().optional(),  // Use .url() for URL validation
		}),
  }



