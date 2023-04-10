'use client';

import React from 'react';

import styles from '../../styles/Hero.module.scss';

const Hero: React.FC = () => {

  return (
    <section className={styles.container} id='hero__container'>
      <div className={styles.titles}>
        <h1
          className={styles.main__title}
        >
          <span className={styles.title} id='title'>
            <span>Création de </span>
          </span>
          <span className={styles.title} id='title'>
            <span>sites web pour les </span>
          </span>
          <span className={styles.title} id='title'>
            <span>entreprises, startups </span>
          </span>
          <span className={styles.title} id='title'>
            <span>et freelances </span>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
