'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from '../styles/About.module.scss';
import LineButton from './input/LineButton';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const description = 'I create inclusive, accessible digital products, with experience working with startups and enterprise products. I believe in using product design as a tool to elevate human interaction with technology that scale.';
  const linesPresentation = description.split('/n');

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
      y: 20,
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
        animate='visible'
      />
      {linesPresentation.map((line, index) => (
        <motion.p
          variants={titleVariants}
          className={styles.description}
          key={index}>
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