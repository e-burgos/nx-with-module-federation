import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'trades',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
