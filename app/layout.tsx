'use client';

import React, { useState } from 'react';

import '../styles/globals.css';
import { AnalyticsWrapper } from '../components/analytics';
import { EmailPage } from '../components/EmailPage';
import { Header } from './Header';
import { Menu } from './Menu';
import { Footer } from './Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isEmailPageOpen, setIsEmailPageOpen] = useState<boolean>(false);

  return (
    <html>
      <head />
      <body>
        <div>
          <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <EmailPage isEmailPageOpen={isEmailPageOpen} setIsEmailPageOpen={setIsEmailPageOpen} />
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isEmailPageOpen={isEmailPageOpen} setIsEmailPageOpen={setIsEmailPageOpen} />
          {children}
          <Footer />
          <AnalyticsWrapper />
        </div>
      </body>
    </html>
  )
}
