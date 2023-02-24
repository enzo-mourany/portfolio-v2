'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import '../styles/globals.css';
import LinkBox from '../components/LinkBox';
import { AnalyticsWrapper } from '../components/analytics';
import { Header } from './Header';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const variants = {
    open: { display: 'flex', opacity: 1 },
    closed: { opacity: 0, transitionEnd: { display: 'none' } },
  };

  const menu: JSX.Element = (
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
          {menu}
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          {children}
          <AnalyticsWrapper />
        </div>
      </body>
    </html>
  )
}
