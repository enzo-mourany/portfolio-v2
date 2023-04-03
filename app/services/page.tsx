import type { Metadata } from 'next';

import Hero from './Hero';
import Services from './Services';

export const metadata: Metadata = {
  title: 'Services',
};

const ServicesPage = () => {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
};

export default ServicesPage;