import * as React from 'react';

import { Frame } from '@membrane-webapp-mfe/ui';
import { AppRoutes } from '@membrane-webapp-mfe/client';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Frame>
        <AppRoutes />
      </Frame>
    </React.Suspense>
  );
}

export default App;
