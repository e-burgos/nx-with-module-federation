import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'loans',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
