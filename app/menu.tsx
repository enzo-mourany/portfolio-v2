'use client';

import React, { useState } from 'react';

interface menuProps {
  isMenuOpen: boolean;
}

const menu: React.FC<menuProps> = ({ isMenuOpen }) => {
  return (
    <div className='flex flex-col justify-center items-center fixed w-full h-full bg-black opacity-50'>
      <p>Hello</p>
    </div>
  );
};

export default menu;