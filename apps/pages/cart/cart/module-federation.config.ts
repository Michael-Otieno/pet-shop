import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cart',
  exposes: {
    './Module': 'apps/pages/cart/cart/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
