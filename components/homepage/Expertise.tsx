import React from 'react'

import { Card } from '../cards/Card';

import { ButtonOutline } from '../button/ButtonOutline'

export const Expertise: React.FC = () => {
  return (
    <section id='expertise' className='w-screen'>
      <div className='flex flex-col w-full h-full'>
        <div className='p-20'>
          <h2 className='text-blue text-4xl'>Mon expertise en tant que développeur</h2>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-5'>
          <Card title='Front-end' description='Je développe des interfaces web responsives et performantes avec React, Next.js, Tailwind CSS, TypeScript, HTML et CSS.' />
          <Card title='Back-end' description='Je développe des API REST avec Node.js, Express, MongoDB, Mongoose, TypeScript, HTML et CSS.' />
          <Card title='Mobile' description='Je développe des applications mobiles avec React Native, Expo, TypeScript, HTML et CSS.' />
          <Card title='CMS' description='Je développe des sites web avec WordPress, WooCommerce, Elementor, Divi, Beaver Builder, Gutenberg, HTML et CSS.' />
        </div>
        <div className='flex justify-center p-20'>
          <ButtonOutline text='Améliorez votre visibilité' />
        </div>
      </div>
    </section>
  )
}
