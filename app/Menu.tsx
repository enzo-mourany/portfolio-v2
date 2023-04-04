'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { MenuContext } from '../contexts/MenuContextProvider';
import LinkBox from '../components/LinkBox';

export const Menu = () => {
  const { isMenuOpen, setIsMenuOpen } = React.useContext(MenuContext);

  const variants = {
    open: { display: 'flex', opacity: 1 },
    closed: { opacity: 0, transitionEnd: { display: 'none' } },
  };

  return (
    <motion.div
      className='hidden flex-col justify-center items-center fixed z-30 w-full h-full bg-white opacity-50'
      variants={variants}
      initial='closed'
      animate={isMenuOpen ? 'open' : 'closed'}
    >
      <div>
        <LinkBox />
      </div>
    </motion.div>
  );
};