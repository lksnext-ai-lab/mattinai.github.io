import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Cards, Card } from 'fumadocs-ui/components/card';
import { Callout } from 'fumadocs-ui/components/callout';
import { Steps, Step } from 'fumadocs-ui/components/steps';
import { Tabs, Tab } from 'fumadocs-ui/components/tabs';
import { OpenAPIPage } from '@/components/openapi-page';
import { Figure } from '@/components/figure';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    // Layout components
    Cards,
    Card,
    // Callouts: <Callout type="info|warn|error|success">
    Callout,
    // Numbered steps
    Steps,
    Step,
    // Tabs: <Tabs items={['A','B']}><Tab value="A">…</Tab></Tabs>
    Tabs,
    Tab,
    // OpenAPI page renderer — used by generated api-reference MDX files.
    // v11 generated files look for `OpenAPIPage`; v10 alias is `APIPage`.
    OpenAPIPage,
    APIPage: OpenAPIPage,
    // Screenshot figure with optional caption
    Figure,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
