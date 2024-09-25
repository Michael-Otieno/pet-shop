import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'about-us',
  exposes: {
    './Module':
      'apps/pages/about-us/about-us/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
