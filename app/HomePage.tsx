'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from '../styles/HomePage.module.scss';

import LineButton from '../components/input/LineButton';

const HomePage: React.FC = () => {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0
  });
  const controls = useAnimation();
  const text = [
    'Ligne 1',
    'Ligne 2',
    'Ligne 3',
    'Ligne 4',
  ];

  useEffect(() => {
    if (inView && !animationPlayed) {
      controls.start('visible');
      setAnimationPlayed(true);
    }
  }, [inView, animationPlayed, controls]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.name}>
            <p>Hi, I am Enzo Mourany</p>
          </div>
          <div className={styles.presentation} ref={ref}>
            <p>Frontend web and web mobile developer</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.description}>
            <p>I create inclusive, accessible digital products, with experience working with startups and enterprise products. I believe in using product design as a tool to elevate human interaction with technology that scale .</p>
          </div>
          <LineButton text="Let's Talk" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;