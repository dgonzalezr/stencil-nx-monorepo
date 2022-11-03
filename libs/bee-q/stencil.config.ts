import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'bee-q',
  taskQueue: 'async',
  plugins: [sass()],
  outputTargets: [
    { type: 'dist' },
    { type: 'dist-custom-elements' },
    { type: 'docs-readme' },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  devServer: {
    port: 8001,
    openBrowser: false,
  },
};
