'use client';

import { createOpenAPIPage } from 'fumadocs-openapi/ui';

// createOpenAPIPage() is a client-side factory — this file must be 'use client'.
// The result is registered in getMDXComponents() as `OpenAPIPage` (v11) and `APIPage` (v10 alias).
export const OpenAPIPage = createOpenAPIPage();
