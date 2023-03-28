import React from 'react';
import Link from 'next/link';

import { ButtonOutline } from '../components/button/ButtonOutline';

export const Footer: React.FC = () => (
  <footer className='bg-blue'>
    <div>
      <div>
        <h2 className='text-white'>Contactez-moi pour parlez de votre projet</h2>
        <ButtonOutline text='Discuttons' />
      </div>
      <div className='flex flex-row gap-8'>
        <ul className='flex flex-col text-white text-xl gap-2'>
          <li className='font-medium'>Navigation</li>
          <li className='opacity-50'>
            <Link href='/'>Accueil</Link>
          </li>
          <li className='opacity-50'>Services</li>
          <li className='opacity-50'>Blog</li>
          <li className='opacity-50'>Contact</li>
        </ul>
        <ul className='flex flex-col text-white text-xl gap-2'>
          <li className='font-medium'>Services</li>
          <li className='opacity-50'>
            <Link href='/'>Site Vitrine</Link>
          </li>
          <li className='opacity-50'>Landing Page</li>
          <li className='opacity-50'>Web App</li>
          <li className='opacity-50'>Mobile App</li>
        </ul>
        <ul className='flex flex-col text-white text-xl gap-2'>
          <li className='font-medium'>Informations</li>
          <li className='opacity-50'>Développeur Web et Mobile</li>
          <li className='opacity-50'>Périgueux, France</li>
        </ul>
        <ul className='flex flex-col text-white text-xl gap-2'>
          <li className='font-medium'>Contact</li>
          <li className='opacity-50'>contact@enzomourany.com</li>
          <li className='opacity-50'>LinkedIn</li>
          <li className='opacity-50'>Malt</li>
          <li className='opacity-50'>Calendly</li>
          <li className='opacity-50'>GitHub</li>
        </ul>
      </div>
    </div>
    <div></div>
  </footer>
);
