import { dirname, join, resolve } from 'path';

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config = {
  docs: {},

  core: {},

  actions: { argTypesRegex: '^on[A-Z].*' },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  stories: [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.@(mdx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        zoom: false,
        backgrounds: false,
        outline: false,
        measure: false,
      },
    },
    {
      name: getAbsolutePath('@storybook/addon-coverage'),
      options: {
        istanbul: {
          include: ['../src/**'],
          debug: true,
        },
      },
    },
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      define: { 'process.env': {} },
      resolve: {
        alias: [
          {
            find: 'ui',
            replacement: resolve(__dirname, '../../ui/'),
          },
        ],
      },
    };
  },
};

export default config;
