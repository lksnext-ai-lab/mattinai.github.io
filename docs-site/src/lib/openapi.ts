import { createOpenAPI } from 'fumadocs-openapi/server';
import path from 'node:path';

/**
 * OpenAPI server instance for Mattin AI public API.
 *
 * The spec path is resolved relative to the project root so it works
 * both during `next build` (cwd = project root) and in the generation script.
 *
 * `output: 'export'` means there is no runtime server — all page data is
 * statically baked at build time via generateStaticParams / generateFiles.
 */
export const openapi = createOpenAPI({
  input: {
    // key = schema ID referenced in generated MDX frontmatter `preload` array
    'mattin-ai': path.resolve(process.cwd(), 'api-reference/openapi.json'),
  },
});
