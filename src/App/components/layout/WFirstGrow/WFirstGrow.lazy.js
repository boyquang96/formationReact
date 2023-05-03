import React, { lazy, Suspense } from 'react';

const LazyWFirstGrow = lazy(() => import('./WFirstGrow'));

const WFirstGrow = props => (
  <Suspense fallback={null}>
    <LazyWFirstGrow {...props} />
  </Suspense>
);

export default WFirstGrow;
