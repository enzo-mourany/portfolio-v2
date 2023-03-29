import Link from 'next/link';
import React from 'react';

import Hamburger from '../components/input/Hamburger';
import { ButtonOutline } from '../components/button/ButtonOutline';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  isEmailPageOpen: boolean;
  setIsEmailPageOpen: (isEmailPageOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, isEmailPageOpen, setIsEmailPageOpen }) => {
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleEmailPage = (): void => {
    setIsEmailPageOpen(!isEmailPageOpen);
  };

  return (
    <header className='flex justify-center'>
      <div className='flex flex-row justify-between items-center fixed z-20 w-full text-center px-16 py-8'>
        <div className='w-1/2 xs:w-48 text-left sm:text-center'>
          <Link href='/'>
            <p className='text-sm sm:text-xl font-normal text-blue'>Enzo MOURANY</p>
          </Link>
        </div>
        <div className='flex justify-around items-center w-1/2 xs:w-1/4'>
          <div className='hidden sm:flex' onClick={() => toggleEmailPage()}>
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