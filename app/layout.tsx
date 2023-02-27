'use client';

import React, { useState } from 'react';

import '../styles/globals.css';
import { AnalyticsWrapper } from '../components/analytics';
import { Header } from './Header';
import { Menu } from './Menu';
import { Footer } from './Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <html>
      <head />
      <body className='bg-zinc-900'>
        <div>
          <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          {children}
          <Footer />
          <AnalyticsWrapper />
        </div>
      </body>
    </html>
  )
}
