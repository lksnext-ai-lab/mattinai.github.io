import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, basePath, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`${basePath}/mattin-ai-logo.png`} alt={appName} className="h-6 w-auto" />
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
