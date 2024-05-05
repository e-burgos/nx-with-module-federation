import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'derivatives',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
