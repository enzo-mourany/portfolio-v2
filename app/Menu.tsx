'use client';

import React from 'react';
import { motion } from 'framer-motion';

import LinkBox from '../components/LinkBox';

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const Menu: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const variants = {
    open: { display: 'flex', opacity: 1 },
    closed: { opacity: 0, transitionEnd: { display: 'none' } },
  };

  return (
    <motion.div
      className='hidden flex-col justify-center items-center fixed z-10 w-full h-full bg-white opacity-50'
      variants={variants}
      initial='closed'
      animate={isMenuOpen ? 'open' : 'closed'}
    >
      <div>
        <LinkBox isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </motion.div>
  );
};