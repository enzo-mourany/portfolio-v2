'use client';

import React from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles/Hero.module.scss';

const Hero: React.FC = () => {
  const title = 'Donner de la visibilité aux entreprises de demain';
  const words: string[] = title.split(' ');

  const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.5 + i * 0.04 },
    })
  };

  const wordsVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 16,
        stiffness: 200
      }
    }
  };

  return (
    <section className={styles.container} id='hero__container'>
      <div className={styles.titles}>
        <motion.h1
          className={styles.main__title}
          id='title'
          variants={sentenceVariants}
          initial='hidden'
          animate='visible'
        >
          {words.map((word: string) => (
            <motion.span
              key={word}
              className={styles.title}
              variants={wordsVariants}
              initial='hidden'
              animate='visible'
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>
      </div>
      <div className={styles.description}>
        <p id='description'>
          Développeur web et mobile basé en France à Périgueux, spécialisé dans la création de solutions web pour les freelances, startups et entreprises
        </p>
      </div>
    </section>
  );
};

export default Hero;
