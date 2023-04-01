import React from 'react';
import Link from 'next/link';

import { ButtonOutline } from '../components/button/ButtonOutline';

export const Footer: React.FC = () => (
  <footer className='bg-blue z-10'>
    <div className='flex flex-col md:flex-row justify-between p-6'>
      <div>
        <h2 className='text-white'>Contactez-moi pour parlez de votre projet</h2>
        <Link href='/contact' >
          <ButtonOutline text='Discuttons' />
        </Link>
      </div>
      <div className='flex flex-row flex-wrap gap-8'>
        <ul className='flex flex-col text-white text-lg gap-2'>
          <li className='font-medium'>Navigation</li>
          <li className='footer-link'>
            <Link href='/'>Accueil</Link>
          </li>
          <li className='footer-link'>
            <Link href='/services'>Services</Link>
          </li>
          <li className='footer-link'>
            <Link href='/portfolio'>Portfolio</Link>
          </li>
          <li className='footer-link'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <ul className='flex flex-col text-white text-lg gap-2'>
          <li className='font-medium'>Services</li>
          <li className='footer-link'>
            <Link href='/'>Site Vitrine</Link>
          </li>
          <li className='footer-link'>Landing Page</li>
          <li className='footer-link'>Web App</li>
          <li className='footer-link'>Application Mobile</li>
        </ul>
        <ul className='flex flex-col text-white text-lg gap-2'>
          <li className='font-medium'>Informations</li>
          <li className='opacity-50'>Développeur Web et Mobile</li>
          <li className='opacity-50'>Périgueux, France</li>
        </ul>
        <ul className='flex flex-col text-white text-lg gap-2'>
          <li className='font-medium'>Contact</li>
          <li className='footer-link'>
            <a href='mailto:contact@enzomourany.com'>contact@enzomourany.com</a>
          </li>
          <li className='footer-link'>
            <a href='https://www.linkedin.com/in/enzomourany/'>LinkedIn</a>
          </li>
          <li className='footer-link'>
            <a href='https://www.malt.fr/profile/enzomourany/'>Malt</a>
          </li>
          <li className='footer-link'>
            <a href='https://calendly.com/enzomourany/projectrequest'>Calendly</a>
          </li>
          <li className='footer-link'>
            <a href='https://githuv.com/enzo-mourany'>GitHub</a>
          </li>
        </ul>
      </div>
    </div>
    <div className='flex flex-row flex-wrap justify-center gap-5 text-md mt-20 pb-3'>
      <p className='text-center text-white opacity-50'>©2023 legal</p>
      <p className='text-center footer-link'>Privacy Policy</p>
      <p className='text-center footer-link'>Terms of Service</p>
      <p className='text-center text-white opacity-50'>enzomourany.com</p>
    </div>
  </footer>
);
