// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// Pokhara Heaven — Astro (hybrid) on Vercel.
// Pages are static/prerendered by default (fastest first paint); individual
// routes opt into on-demand serverless with `export const prerender = false`
// (see src/pages/api/reservar.ts). Images are optimized by astro:assets —
// Sharp in dev/build, Vercel's Image CDN in production (AVIF/WebP, responsive).
export default defineConfig({
  site: 'https://pokharaheaven.es',
  integrations: [sitemap()],
  adapter: vercel({
    imageService: true,
  }),
  image: {
    // Loosen when real photography is added from a remote source/CDN.
    // remotePatterns: [{ protocol: 'https' }],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
