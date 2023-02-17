'use client';

import React, { useEffect } from 'react';

import styles from '../styles/Blob.module.scss';

export const Blob = () => {

  useEffect(() => {
    const blob = document.getElementById('blob');

    const handlePointerMove = (event: { clientX: unknown; clientY: unknown; }) => {
      const { clientX, clientY } = event;

      if (blob) {
        blob.style.left = `${clientX}px`;
        blob.style.top = `${clientY}px`;
      }
    };

    document.body.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div id='blob' className={styles.blob}></div>
  );
};