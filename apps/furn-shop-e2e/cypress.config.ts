import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run furn-shop:serve:development',
        production: 'nx run furn-shop:serve:production',
      },
      ciWebServerCommand: 'nx run furn-shop:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
