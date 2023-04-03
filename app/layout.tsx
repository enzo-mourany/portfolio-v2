'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import '../styles/globals.css';
import { AnalyticsWrapper } from '../components/analytics';
import { EmailPage } from '../components/EmailPage';
import GoogleAnalytics from './GoogleAnalytics';
import { Header } from './Header';
import { Menu } from './Menu';
import { Footer } from './Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isEmailPageOpen, setIsEmailPageOpen] = useState<boolean>(false);

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <html lang='fr'>
      <head />
      <GoogleAnalytics />
      <body className='bg-white'>
        <motion.main
          variants={variants}
          initial='hidden'
          animate='enter'
          exit='exit'
          transition={{ type: 'linear' }}
          className=''
        >
          <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <EmailPage isEmailPageOpen={isEmailPageOpen} setIsEmailPageOpen={setIsEmailPageOpen} />
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isEmailPageOpen={isEmailPageOpen} setIsEmailPageOpen={setIsEmailPageOpen} />
          {children}
          <Footer />
          <AnalyticsWrapper />
        </motion.main>
      </body>
    </html>
  )
}
