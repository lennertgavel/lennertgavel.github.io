import fs from 'node:fs';
import path from 'node:path';

// Tab images live in the public asset folders (assets/<slug>/…). This module is
// server-only (uses `fs`) and runs at build time, so images are discovered
// automatically — drop a file into a tab's folder and it appears in the carousel.
//
// Note: process.cwd() is used instead of import.meta.url because Vite's SSR
// bundler resolves import.meta.url to the compiled chunk location during
// `astro build`, making relative paths unreliable.
const assetsDir = path.join(process.cwd(), 'assets');

const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

/**
 * All images in a tab's asset folder, sorted alphabetically (numeric-aware),
 * returned as public URLs. Non-images (e.g. icon.svg) are ignored.
 */
export function getTabImages(slug: string): string[] {
  let files: string[] = [];
  try {
    files = fs.readdirSync(path.join(assetsDir, slug));
  } catch {
    return [];
  }

  return files
    .filter((file) => imageExtensions.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map((file) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${slug}/${file}`);
}
