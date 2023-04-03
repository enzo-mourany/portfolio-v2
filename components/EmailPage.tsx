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
      className='hidden flex-col justify-center items-center fixed z-30 w-full h-full bg-blue'
      variants={variants}
      initial='closed'
      animate={isEmailPageOpen ? 'open' : 'closed'}
    >
      <div>
        <div
          className='absolute top-0 right-0 p-4 m-10 border-2 border-white opacity-50 hover:opacity-100 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:rotate-180'
          onClick={() => handleEmailPageClose()}
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='white'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <a href='mailto:enzo.mourany@outlook.com' className='text-white text-w-base'>contact@enzomourany.com</a>
      </div>
    </motion.div>
  )
};
