import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shop',
  exposes: {
    './Module': 'apps/pages/shop/shop/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
