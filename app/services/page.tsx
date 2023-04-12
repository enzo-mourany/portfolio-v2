import type { Metadata } from 'next';

import Hero from './Hero';
import Services from './Services';

export const metadata: Metadata = {
  title: 'Services | Enzo Mourany',
  description: 'Besoin d\'un site web professionnel ? Je propose des services de création de sites vitrine, landing page, application web, refonte de site web, site e-commerce et application mobile. Contactez-moi dès maintenant pour obtenir un devis personnalisé !'
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