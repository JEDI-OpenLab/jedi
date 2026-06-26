import { defineConfig } from 'astro/config';

// Le portail est publié sur https://jedi-openlab.github.io/jedi/
// (mêmes URL que l'actuel — aucun lien cassé au moment de la bascule).
export default defineConfig({
  site: 'https://jedi-openlab.github.io',
  base: '/jedi',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
