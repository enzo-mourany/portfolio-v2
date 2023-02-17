'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import '../styles/globals.css';
import Hamburger from '../components/input/Hamburger';
import LinkBox from '../components/LinkBox';
import LineButton from '../components/input/LineButton';
import CommandMenu from '../components/CommandMenu';
import { Blob } from '../components/Blob';

import { AnalyticsWrapper } from './components/analytics';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const variants = {
    open: { display: 'flex', opacity: 1 },
    closed: { opacity: 0, transitionEnd: { display: 'none' } },
  };

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const header = (
    <header className='flex justify-center'>
      <div className='flex flex-row justify-between items-center fixed z-10 w-full text-center px-16 py-8 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0'>
        <div className='w-1/2 xs:w-48 text-left sm:text-center'>
          <Link href='/'>
            <p className='text-white text-sm sm:text-xl font-normal font-cormorant uppercase'>Enzo Mourany</p>
          </Link>
        </div>
        <div className='hidden sm:block w-48'>
          <p className='text-white text-sm font-extralight uppercase'>Portfolio ©2023</p>
        </div>
        <div className='flex justify-end md:justify-around items-center sm:justify-center w-1/2 xs:w-52 gap-2'>
          <Link href='/request' className='hidden md:block'>
            <LineButton text='Project Request' />
          </Link>
          <div onClick={() => toggleMenu()}>
            <Hamburger isMenuOpen={isMenuOpen} />
          </div>
        </div>
      </div>
    </header>
  );

  const menu = (
    <motion.div
      className='hidden flex-col justify-center items-center fixed z-10 w-full h-full bg-black opacity-50'
      variants={variants}
      initial='closed'
      animate={isMenuOpen ? 'open' : 'closed'}
    >
      <div>
        <LinkBox isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </motion.div>
  )

  return (
    <html>
      <head />
      <body className='bg-zinc-900'>
        <div>
          <CommandMenu pages={pages} />
          {menu}
          {header}
          {children}
          <Blob />
          <AnalyticsWrapper />
        </div>
      </body>
    </html>
  )
}
