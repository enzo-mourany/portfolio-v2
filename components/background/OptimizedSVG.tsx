import React from 'react';
import Image from 'next/image';

export const OptimizedShape1: React.FC = () => (
  <div className='absolute'>
    <Image
      priority
      src='/static/svg/shape1.svg'
      height={1557}
      width={1527}
      alt='Shape 1'
    />
  </div>
);
