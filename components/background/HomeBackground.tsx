import React from 'react';

import * as OSVG from '../../components/background/OptimizedSVG';

export const HomeBackground: React.FC = () => (
  <div style={{ width: '100vw' }}>
    <OSVG.OptimizedNoise />
    <OSVG.OptimizedShape1 />
    <OSVG.OptimizedShape2 />
    <OSVG.OptimizedShape3 />
    <OSVG.OptimizedShape4 />
    <OSVG.OptimizedShape5 />
  </div>
);