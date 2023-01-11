'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import '../styles/globals.css';
import Hamburger from '../components/input/Hamburger';
import menu from './menu';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const variants = {
    open: { display: 'flex', opacity: 1 },
    closed: { display: 'hidden', opacity: 0 },
  };

  const header = (
    <header>
      <div className='flex flex-row justify-between fixed w-full text-center p-8'>
        <div className='w-48'>
          <Link href='/' onClick={() => toggleMenu()}>
            <p className='text-white text-xl font-normal'>Enzo Mourany</p>
          </Link>
        </div>
        <div className='w-48'>
          <p className='text-white text-sm font-extralight uppercase'>Portfolio ©2023</p>
        </div>
        <div className='w-48'>
          <Hamburger />
        </div>
      </div>
    </header>
  );

  const menu = (
    <motion.div
      className='hidden flex-col justify-center items-center fixed w-full h-full bg-black opacity-50'
      variants={variants}
      initial='closed'
      animate={isMenuOpen ? 'open' : 'closed'}
    >
      <p>Hello</p>
    </motion.div>
  )

  return (
    <html>
      <head />
      <body className='bg-white dark:bg-black'>
        <div>
          {header}
          {menu}
          {children}
        </div>
      </body>
    </html>
  )
}