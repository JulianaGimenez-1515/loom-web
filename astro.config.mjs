// @ts-check
import { defineConfig } from 'astro/config';

// En modo prueba (npm run dev), hace que /admin y /admin/ abran el panel de edición.
// (Una vez publicada en Netlify, /admin/ funciona sola.)
const panelEnDev = {
  name: 'panel-admin-dev',
  hooks: {
    'astro:server:setup': ({ server }) => {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/admin') {
          res.writeHead(301, { Location: '/admin/' });
          return res.end();
        }
        if (req.url === '/admin/') req.url = '/admin/index.html';
        next();
      });
    },
  },
};

// https://astro.build/config
export default defineConfig({
  integrations: [panelEnDev],
});
