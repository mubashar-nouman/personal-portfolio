/**
 * Build-time prerender.
 *
 * A Vite SPA ships an empty <div id="root">, so a crawler that does not execute
 * JavaScript sees zero words of content. This bundles the app for Node once,
 * renders it to static HTML, and injects that into dist/index.html. React
 * hydrates over the same markup at runtime, so behaviour is unchanged.
 */
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { build } from 'vite';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const indexPath = resolve(root, 'dist/index.html');
const ssrDir = resolve(root, '.ssr-tmp');

async function main() {
  // Bundle the app for Node. CSS is irrelevant here; the real stylesheet is
  // already linked from index.html.
  await build({
    root,
    logLevel: 'error',
    build: {
      ssr: resolve(root, 'src/App.tsx'),
      outDir: ssrDir,
      emptyOutDir: true,
      rollupOptions: { output: { entryFileNames: 'app.mjs' } },
    },
  });

  const { default: App } = await import(resolve(ssrDir, 'app.mjs'));
  const html = renderToString(createElement(App));

  const template = readFileSync(indexPath, 'utf8');
  if (!template.includes('<div id="root"></div>')) {
    throw new Error('prerender: could not find an empty #root to inject into');
  }
  writeFileSync(indexPath, template.replace('<div id="root"></div>', `<div id="root">${html}</div>`));

  rmSync(ssrDir, { recursive: true, force: true });

  // Report how much text a crawler will now see, so a regression is loud.
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(`prerender: ${html.length} bytes of HTML, ${text.length} chars of crawlable text`);
}

main().catch((error) => {
  console.error('prerender failed:', error);
  rmSync(ssrDir, { recursive: true, force: true });
  process.exit(1);
});
