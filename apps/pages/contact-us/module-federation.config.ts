import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'contact-us',
  exposes: {
    './Module': 'apps/pages/contact-us/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
