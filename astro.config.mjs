// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: confirmar se o domínio final continua sendo este antes do deploy em produção.
  site: 'https://gvsolucoesempresariais.com.br',

  integrations: [sitemap()],
});