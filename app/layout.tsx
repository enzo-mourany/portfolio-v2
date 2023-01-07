"use client";

import Link from 'next/link';

import '../styles/globals.css';
import HomePage from './HomePage';
import Hamburger from '../components/input/Hamburger';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const header = (
        <header>
          <div className="flex flex-row justify-between text-center bg-black p-8">
            <div className="w-48">
                <Link href="/">
              <p className="text-white text-xl font-normal">Enzo Mourany</p>
            </Link>
            </div>
            <div className="w-48">
                <p className="text-white text-sm font-extralight uppercase">Portfolio ©2023</p>
            </div>
            <div className="w-48">
                <Hamburger />
            </div>
          </div>
        </header>
      );
  return (
    <html>
        <head />
        <body>
            <div>
                {header}
                <HomePage />
                {children}
            </div>
        </body>
    </html>
  )
}