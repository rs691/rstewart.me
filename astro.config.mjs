// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  site: 'https://rstewart.me', // Correct format for your domain
  base: '/rs691/rstewart.me/',                  // Remove or set to '/' for a root domain
  integrations: [mdx(), sitemap(), react()],
});