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
            description='Service de création de sites vitrines de qualité supérieure pour une présence en ligne professionnelle et convaincante.'
          />
          <ServiceCard
            title='Landing Page'
            description='Service de création de landing pages efficaces pour une conversion maximale et un retour sur investissement optimal.'
          />
          <ServiceCard
            title='Web App'
            description='Développement d’applications web personnalisées et performantes pour une expérience utilisateur exceptionnelle.'
          />
          <ServiceCard
            title='Application Mobile'
            description='Développement d’applications mobiles personnalisées et performantes pour une expérience utilisateur exceptionnelle.'
          />
          <ServiceCard
            title='Site E-commerce'
            description='Service de création de sites e-commerce de qualité supérieure pour une présence en ligne professionnelle et convaincante.'
          />
          <ServiceCard
            title='Design Graphique'
            description='Service de création de design graphique de qualité supérieure pour une présence en ligne professionnelle et convaincante.'
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