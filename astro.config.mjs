import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oeps.app',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
