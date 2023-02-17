'use client';

import React, { useEffect } from 'react';

import styles from '../styles/Blob.module.scss';

export const Blob = () => {

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

  return (
    <>
      <div id='blob' className={styles.blob}></div>
      <div id='blur' className={styles.blur}></div>
    </>
  );
};