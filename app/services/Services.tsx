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
            description='Obtenez un site vitrine de qualité pour présenter votre entreprise. Augmentez votre visibilité en ligne dès maintenant.'
          />
          <ServiceCard
            title='Landing Page'
            description='Convertissez vos visiteurs en clients avec une landing page optimisée. Boostez vos ventes et améliorez votre ROI.'
          />
          <ServiceCard
            title='Application Web'
            description='Obtenez une application web adaptée à vos besoins. Automatisez vos processus métier et améliorez votre productivité.'
          />
          <ServiceCard
            title='Application Mobile'
            description="Lancez votre application mobile pour toucher un public toujours plus large. Augmentez votre visibilité et votre chiffre d'affaires."
          />
          <ServiceCard
            title='Site E-commerce'
            description="Lancez votre boutique en ligne avec un site e-commerce efficace. Gagnez en visibilité et en chiffre d'affaires."
          />
          <ServiceCard
            title='Refonte de site web'
            description="Découvrez les avantages d'une refonte de site web et les étapes à suivre pour réussir votre projet. Améliorez votre site pour augmenter votre trafic."
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