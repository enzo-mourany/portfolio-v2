'use client';

import React, { useEffect, useState } from 'react';

import styles from '../styles/Blob.module.scss';

export const Blob = () => {

  const [isDisplayed, setIsDisplayed] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsDisplayed(false);
      } else {
        setIsDisplayed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const blob = document.getElementById('blob');

    const handlePointerMove = (event: { clientX: unknown; clientY: unknown; }) => {
      const { clientX, clientY } = event;

      if (blob) {
        blob.animate({
          left: `${clientX}px`,
          top: `${clientY}px`,
        }, { duration: 3000, fill: 'forwards' });
      }
    };

    document.body.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  if (!isDisplayed) {
    return null;
  }

  return (
    <>
      <div id='blob' className={styles.blob}></div>
      <div id='blur' className={styles.blur}></div>
    </>
  );
};