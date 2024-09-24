import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run contact-us:serve:development',
        production: 'nx run contact-us:serve:production',
      },
      ciWebServerCommand: 'nx run contact-us:serve-static',
    }),
    baseUrl: 'http://localhost:4201',
  },
});
