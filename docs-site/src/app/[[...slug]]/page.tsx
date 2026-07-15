import { getPageImage, getPageMarkdownUrl, source } from '@/lib/source';
import { openapi } from '@/lib/openapi';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import { OpenAPIPage } from '@/components/openapi-page';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { gitConfig } from '@/lib/shared';
import type { OpenAPIPageProps } from 'fumadocs-openapi/ui';
import type { FC } from 'react';

export default async function Page(props: PageProps<'/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;

  // For OpenAPI pages, preload the bundled schema so the client component can
  // render without a live server (required for `output: 'export'`).
  let PreloadedOpenAPIPage: FC<OpenAPIPageProps> | undefined;
  if ('_openapi' in page.data && page.data._openapi) {
    const preloaded = await openapi.preloadOpenAPIPage(page);
    // Create a wrapper that injects `preloaded` into every OpenAPIPage call.
    PreloadedOpenAPIPage = (pageProps: OpenAPIPageProps) => (
      <OpenAPIPage {...pageProps} {...preloaded} />
    );
  }

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/docs-site/content/docs/${page.path}`}
        />
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
            // For OpenAPI pages, override OpenAPIPage/APIPage with preloaded version
            ...(PreloadedOpenAPIPage
              ? { OpenAPIPage: PreloadedOpenAPIPage, APIPage: PreloadedOpenAPIPage }
              : {}),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
