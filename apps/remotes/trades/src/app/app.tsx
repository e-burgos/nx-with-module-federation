import { NxWelcome, Layout } from '@membrane-webapp-mfe/ui';

export interface AppProps {
  withHost?: boolean;
}

export function App({ withHost }: AppProps) {
  return (
    <Layout withFrame={!withHost}>
      <NxWelcome title="trades" />
    </Layout>
  );
}

export default App;
