import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run about-us:serve:development',
        production: 'nx run about-us:serve:production',
      },
      ciWebServerCommand: 'nx run about-us:serve-static',
    }),
    baseUrl: 'http://localhost:4204',
  },
});
