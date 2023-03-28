'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface EmailPageProps {
  isEmailPageOpen: boolean;
  setIsEmailPageOpen: (isEmailPageOpen: boolean) => void;
}

export const EmailPage: React.FC<EmailPageProps> = ({ isEmailPageOpen, setIsEmailPageOpen }) => {
  const variants = {
    open: { display: 'flex', opacity: 1 },
    closed: { opacity: 0, transitionEnd: { display: 'none' } },
  };

  const handleEmailPageClose = () => {
    setIsEmailPageOpen(!isEmailPageOpen);
  };

  return (
    <motion.div
      className='hidden flex-col justify-center items-center fixed z-10 w-full h-full bg-blue'
      variants={variants}
      initial='closed'
      animate={isEmailPageOpen ? 'open' : 'closed'}
    >
      <div>
        <div
          className='absolute top-0 right-0 p-4 border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-blue'
          onClick={() => handleEmailPageClose()}
        >
          <p>Close</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <a href='mailto:enzo.mourany@outlook.com' className='text-white text-w-base'>enzo.mourany@outlook.com</a>
      </div>
    </motion.div>
  )
};
