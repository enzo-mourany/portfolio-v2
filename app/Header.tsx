import Link from 'next/link';
import React from 'react';

import Hamburger from '../components/input/Hamburger';
import { ButtonOutline } from '../components/button/ButtonOutline';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen}) => {
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='flex justify-center'>
      <div className='flex flex-row justify-between items-center fixed z-10 w-full text-center px-16 py-8'>
        <div className='w-1/2 xs:w-48 text-left sm:text-center'>
          <Link href='/'>
            <p className='text-sm sm:text-xl font-normal'>Enzo MOURANY</p>
          </Link>
        </div>
        <div className='flex justify-end md:justify-around items-center sm:justify-center w-1/2 xs:w-52 gap-2'>
          <div>
            <ButtonOutline text='contact' />
          </div>
          <div onClick={() => toggleMenu()}>
            <Hamburger isMenuOpen={isMenuOpen} />
          </div>
        </div>
      </div>
    </header>
  )
};