import path from 'path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Local equivalent of the Vercel /cv → /resume.pdf rewrite so the short URL
 * works in `npm run dev` and `vite preview` as well as production.
 */
function cvRewrite(): Plugin {
  const rewrite = (url?: string) =>
    url === '/cv' || url === '/cv/' ? '/resume.pdf' : url;

  return {
    name: 'cv-rewrite',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        req.url = rewrite(req.url);
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        req.url = rewrite(req.url);
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cvRewrite()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['lucide-react'],
  },
});
