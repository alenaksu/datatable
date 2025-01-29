import type { StorybookConfig } from '@storybook/web-components-vite';
import { InlineConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      server: {
        hmr: {
          clientPort: process.env.CODESPACES ? 443 : undefined, // <== this is the magic
        },
      },
    } as InlineConfig);
  },
};

export default config;
