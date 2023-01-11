'use client';

import React from 'react';
import Link from 'next/link';

import styles from '../styles/LinkBox.module.scss';

const LinkBox: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.linkbox__container} href='/' >
        <p className={styles.linkbox__subtitle}>Introduction</p>
        <h1 className={styles.linkbox__title}>Home</h1>
      </Link>
      <Link className={styles.linkbox__container} href='/about' >
        <p className={styles.linkbox__subtitle}>Skills and Phylosophy</p>
        <h1 className={styles.linkbox__title}>About</h1>
      </Link>
      <Link className={styles.linkbox__container} href='/works' >
        <p className={styles.linkbox__subtitle}>Projects and labs</p>
        <h1 className={styles.linkbox__title}>Works</h1>
      </Link>
      <Link className={styles.linkbox__container} href='/contact' >
        <p className={styles.linkbox__subtitle}>Get in touch</p>
        <h1 className={styles.linkbox__title}>Contact</h1>
      </Link>
    </div>

  )
};

export default LinkBox;