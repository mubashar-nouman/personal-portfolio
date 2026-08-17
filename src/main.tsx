import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

/**
 * Analytics lives here rather than in App so it never runs during the build-time
 * prerender, which has no browser to measure.
 */
const app = (
  <StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
  </StrictMode>
);

/**
 * The production build prerenders the app into #root so crawlers get real
 * content. Hydrate that markup when it exists; fall back to a client render in
 * dev, where #root is empty.
 */
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
