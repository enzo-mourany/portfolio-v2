'use client';

import React from 'react';
import Script from 'next/script';
import { motion } from 'framer-motion';

import '../styles/globals.css';

import { MenuProvider } from '../contexts/MenuContextProvider';
import { EmailPageProvider } from '../contexts/EmailPageContextProvider';

import { AnalyticsWrapper } from '../components/analytics';
import { EmailPage } from '../components/EmailPage';
import GoogleAnalytics from './GoogleAnalytics';
import { Header } from './Header';
import { Menu } from './Menu';
import { Footer } from './Footer';

const Main = ({ children }: { children: React.ReactNode }) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <motion.main
      variants={variants}
      initial='hidden'
      animate='enter'
      exit='exit'
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.main>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <body>
        <GoogleAnalytics />
        <MenuProvider>
          <EmailPageProvider>
            <Main>
              <Menu />
              <EmailPage />
              <Header />
              {children}
              <Footer />
              <AnalyticsWrapper />
            </Main>
          </EmailPageProvider>
        </MenuProvider>
      </body>
      <Script src='/js/main.js' />
    </html>
  )
}
