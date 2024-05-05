import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'collateral',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
