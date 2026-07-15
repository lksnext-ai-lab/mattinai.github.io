/**
 * Generates MDX pages from the Mattin AI OpenAPI spec into content/docs/api-reference/.
 *
 * Usage:
 *   node scripts/generate-openapi-docs.mjs
 *
 * Run this before `next build` or `next dev` whenever the spec changes.
 * It is also wired into package.json as a `predev` / `prebuild` script.
 *
 * The generated files are committed so that `next build` (output: 'export')
 * can statically generate all API reference pages without a live server.
 */

import { generateFiles } from 'fumadocs-openapi';
import { createOpenAPI } from 'fumadocs-openapi/server';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const openapi = createOpenAPI({
  input: {
    'mattin-ai': path.join(root, 'api-reference', 'openapi.json'),
  },
});

await generateFiles({
  input: openapi,
  output: path.join(root, 'content', 'docs', 'api-reference'),
  // meta: false — we maintain meta.json manually (it includes the introduction page
  // and we want full control over sidebar ordering).
  meta: false,
  // Add generated comment banner so editors know not to hand-edit
  addGeneratedComment: true,
});

console.log('[generate-openapi-docs] Done — pages written to content/docs/api-reference/');
