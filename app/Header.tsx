import Link from 'next/link';
import React, { useContext } from 'react';

import { MenuContext } from '../contexts/MenuContextProvider';
import { EmailPageContext } from '../contexts/EmailPageContextProvider';

import Hamburger from '../components/input/Hamburger';
import { ButtonOutline } from '../components/button/ButtonOutline';

export const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const { isEmailPageOpen, setIsEmailPageOpen } = useContext(EmailPageContext);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleEmailPage = (): void => {
    setIsEmailPageOpen(!isEmailPageOpen);
  };

  return (
    <header className='flex justify-center'>
      <div className='flex flex-row justify-between items-center fixed z-40 w-full text-center px-16 py-8'>
        <div className='w-1/2 xs:w-48 text-left sm:text-center'>
          <Link href='/'>
            <p className='text-sm sm:text-xl font-normal text-blue'>Enzo MOURANY</p>
          </Link>
        </div>
        <div className='flex justify-around items-center w-1/2 xs:w-1/4'>
          <div className='hidden sm:flex' onClick={() => toggleEmailPage()}>
            <ButtonOutline text='contact' />
          </div>
          <div onClick={() => toggleMenu()} className='flex justify-end'>
            <Hamburger />
          </div>
        </div>
      </div>
    </header>
  )
};