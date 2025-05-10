// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  site: 'https://rstewart.me/',
  base: '/rstewart.me',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap(), react()],
});