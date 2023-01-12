'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from '../styles/HomePage.module.scss';

import LineButton from '../components/input/LineButton';

const HomePage: React.FC = () => {
  const presentation = 'Frontend web and web mobile developer';
  const wordsPresentation = presentation.split(' ');
  const wordsPresentationWithSpace = wordsPresentation.map((word) => word + ' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: i * 0.04 },
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.name}>
            <p>Hi, I am Enzo Mourany</p>
          </div>
          <div className={styles.presentation}>
            <motion.div variants={container} initial='hidden' animate='visible'>
              {wordsPresentationWithSpace.map((word, index) => (
                <motion.span variants={child} style={{ marginRight: '5px', wordWrap: 'normal', whiteSpace: 'pre-wrap' }} key={index}>
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.description}>
            <p>I create inclusive, accessible digital products, with experience working with startups and enterprise products. I believe in using product design as a tool to elevate human interaction with technology that scale .</p>
          </div>
          <Link href='/contact'>
            <LineButton text="Let's Talk" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;