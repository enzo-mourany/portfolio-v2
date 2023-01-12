'use client';

import React from 'react';
import Link from 'next/link';

import styles from '../styles/About.module.scss';
import LineButton from './input/LineButton';

const About = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>MY PHYLOSOPHY</p>
      <p className={styles.description}>I create inclusive, accessible digital products, with experience working with startups and enterprise products. I believe in using product design as a tool to elevate human interaction with technology that scale.</p>
      <Link href='/about'>
        <LineButton text='About Me' />
      </Link>
    </div>
  );
};

export default About;