import React from 'react';
import Image from 'next/image';

export const OptimizedShape1: React.FC = () => (
  <div className='absolute top-0 left-0'>
    <Image
      priority
      src='/public/svg/shape1.svg'
      height={1212}
      width={1219}
      alt='Shape 1'
    />
  </div>
);

export const OptimizedShape2: React.FC = () => (
  <div className='absolute top-0 left-0'>
    <Image
      priority
      src='/public/svg/shape2.svg'
      height={1472}
      width={929}
      alt='Shape 2'
    />
  </div>
);

export const OptimizedShape3: React.FC = () => (
  <div className='absolute top-0 left-0'>
    <Image
      priority
      src='/public/svg/shape3.svg'
      height={1389}
      width={880}
      alt='Shape 3'
    />
  </div>
);

export const OptimizedShape4: React.FC = () => (
  <div className='absolute top-0 left-0'>
    <Image
      priority
      src='/public/svg/shape4.svg'
      height={1207}
      width={961}
      alt='Shape 4'
    />
  </div>
);

export const OptimizedNoise: React.FC = () => (
  <div className='absolute top-0 left-0'>
    <Image
      priority
      src='/public/svg/noise.svg'
      height={1899}
      width={960}
      alt='Noise'
    />
  </div>
);
