import React from 'react';

import { ButtonOutline } from '../components/button/ButtonOutline';

export const Footer: React.FC = () => (
  <footer className='bg-blue'>
    <div>
      <div>
        <h2 className='text-white'>Contactez-moi pour parlez de votre projet</h2>
        <ButtonOutline text='Discuttons' />
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div></div>
  </footer>
);
