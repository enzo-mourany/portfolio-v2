import React from 'react';
import Image from 'next/image';

export const OptimizedShape1: React.FC = () => (
  <div className='absolute top-0 left-0'>
    <Image
      priority
      src='/static/svg/shape1.svg'
      height={1557}
      width={1527}
      alt='Shape 1'
    />
  </div>
);

export const OptimizedShape2: React.FC = () => (
  <div className='absolute top-0 right-0'>
    <Image
      priority
      src='/static/svg/shape2.svg'
      height={1557}
      width={1527}
      alt='Shape 2'
    />
  </div>
);

export const OptimizedShape3: React.FC = () => (
  <div className='absolute bottom-0 left-0'>
    <Image
      priority
      src='/static/svg/shape3.svg'
      height={1557}
      width={1527}
      alt='Shape 3'
    />
  </div>
);

export const OptimizedShape4: React.FC = () => (
  <div className='absolute bottom-0 right-0'>
    <Image
      priority
      src='/static/svg/shape4.svg'
      height={1557}
      width={1527}
      alt='Shape 4'
    />
  </div>
);

export const OptimizedShape5: React.FC = () => (
  <div className='absolute top-0 left-0'>
    <Image
      priority
      src='/static/svg/shape5.svg'
      height={1557}
      width={1527}
      alt='Shape 5'
    />
  </div>
);
