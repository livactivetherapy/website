// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Pick the site URL dynamically so OG images, canonical URLs, and the sitemap
// all match the host the build is actually being served from.
// - Vercel production → uses VERCEL_PROJECT_PRODUCTION_URL (which will be
//   "livactivetherapy.com" once that domain is attached as production, or the
//   stable .vercel.app subdomain until then)
// - Vercel preview    → uses VERCEL_URL (the unique preview deployment URL)
// - Local             → falls back to livactivetherapy.com
const getSiteUrl = () => {
  if (process.env.VERCEL_ENV === 'production' && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'https://livactivetherapy.com';
};

export default defineConfig({
  site: getSiteUrl(),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), mdx(), sitemap()],
});
