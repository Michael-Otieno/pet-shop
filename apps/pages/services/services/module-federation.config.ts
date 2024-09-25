import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'services',
  exposes: {
    './Module':
      'apps/pages/services/services/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
