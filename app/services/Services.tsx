import React from 'react';
import Link from 'next/link';

import { ServiceCard } from '../../components/cards/ServiceCard';
import { ButtonOutline } from '../../components/button/ButtonOutline';

const Services: React.FC = () => {
  return (
    <section id='services' className='w-screen h-fit pb-20'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='flex flex-col items-center p-20'>
          <h2 className='w-3/5 lg:w-3/4 text-2xl sm:text-w-xs lg:text-w-base text-blue text-center'>Services</h2>
          <h3 className='w-full sm:w-3/5 lg:w-3/4 text-xl sm:text-3xl lg:text-xl opacity-50 text-center'>Je construis votre marque pour que vous puissiez vous concentrer sur le reste.</h3>
        </div>
        <div className='flex flex-col lg:flex-row flex-wrap justify-center gap-16 mb-20'>
          <ServiceCard
            title='Site Vitrine'
            description='Faites connaître votre entreprise avec un site web vitrine professionnel. Contactez-nous pour obtenir un devis !'
          />
          <ServiceCard
            title='Landing Page'
            description='Service de création de landing pages efficaces pour une conversion maximale et un retour sur investissement optimal.'
          />
          <ServiceCard
            title='Application Web'
            description='Développement d’applications web personnalisées et performantes pour une expérience utilisateur exceptionnelle.'
          />
          <ServiceCard
            title='Application Mobile'
            description='Développement d’applications mobiles personnalisées et performantes pour une expérience utilisateur exceptionnelle.'
          />
          <ServiceCard
            title='Site E-commerce'
            description='Lancez votre boutique en ligne avec notre service de création de site e-commerce. Obtenez un devis dès maintenant !'
          />
          <ServiceCard
            title='Refonte de site web'
            description='Boostez votre présence en ligne avec notre service de refonte de site web'
          />
        </div>
        <Link href='/contact'>
          <ButtonOutline text='Prenez rendez-vous' />
        </Link>
      </div>
    </section>
  )
}

export default Services;