import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bobgoo.com',
  output: 'static',
  trailingSlash: 'always',
  // These pages have very little CSS. Inline it so cached domain redirects
  // cannot turn stylesheet requests into blocked HTTP subrequests.
  build: {
    inlineStylesheets: 'always',
  },
});
