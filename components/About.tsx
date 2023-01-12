'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

import styles from '../styles/About.module.scss';
import LineButton from './input/LineButton';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const description = 'I create inclusive, accessible digital products, with experience working with startups and enterprise products. I believe in using product design as a tool to elevate human interaction with technology that scale.';
  const linesPresentation = description.split('/n');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: i * 0.04 },
    })
  };

  const titleVariants = {
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
      y: 50,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>MY PHYLOSOPHY</p>
      <motion.div
        ref={ref}
        variants={container}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}
      />
      {linesPresentation.map((line, index) => (
        <motion.p
          key={index}
          className={styles.description}
          variants={titleVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          style={{ marginRight: '5px', wordWrap: 'normal', whiteSpace: 'pre-wrap' }}
        >
          {line}
        </motion.p>
      ))}
      <motion.div />
      <Link href='/about'>
        <LineButton text='About Me' />
      </Link>
    </div>
  );
};

export default About;