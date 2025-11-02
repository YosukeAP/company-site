// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // デプロイ後に実際のURLに変更
  integrations: [
    sitemap()
  ]
});
