'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

import styles from '../styles/About.module.scss';
import LineButton from './input/LineButton';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const description = 'I have been passionate about web development for many years. I started learning the basics of coding several years ago and quickly discovered that I loved creating websites and applications. I am constantly looking for new technologies and methods to improve my skills and projects. Web development is a way for me to bring my ideas to life and share them with the world.';
  const linesPresentation = description.split('/n');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: i * 0.54 },
    })
  };

  const titleVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const button = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.4 } },
  };

  return (
    <div className={styles.wrapper}>
      <motion.p
        className={styles.title}
        variants={titleVariants}
        animate={isInView ? 'visible' : 'hidden'}
      >MY PHYLOSOPHY</motion.p>
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
      <motion.div
        variants={button}
        animate={isInView ? 'visible' : 'hidden'}
      >
        <Link href='/about'>
          <LineButton text='About Me' />
        </Link>
      </motion.div>
    </div>
  );
};

export default About;