import Link from 'next/link';
import React, { useState } from 'react';

import Hamburger from '../components/input/Hamburger';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='flex justify-center'>
      <div className='flex flex-row justify-between items-center fixed z-10 w-full text-center px-16 py-8'>
        <div className='w-1/2 xs:w-48 text-left sm:text-center'>
          <Link href='/'>
            <p className='text-white text-sm sm:text-xl font-normal'>Enzo MOURANY</p>
          </Link>
        </div>
        <div className='hidden sm:block w-48'>
          <p className='text-white text-sm font-extralight uppercase'>Portfolio ©2023</p>
        </div>
        <div className='flex justify-end md:justify-around items-center sm:justify-center w-1/2 xs:w-52 gap-2'>
          <div onClick={() => toggleMenu()}>
            <Hamburger isMenuOpen={isMenuOpen} />
          </div>
        </div>
      </div>
    </header>
  )
};