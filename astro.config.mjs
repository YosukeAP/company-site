// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // デプロイ後に実際のURLに変更
  site: 'https://example.com',

  integrations: [
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});