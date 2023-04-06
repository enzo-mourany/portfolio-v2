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
            <span>Création de sites</span>
          </span>
          <span className={styles.title} id='title'>
            <span>web pour les </span>
          </span>
          <span className={styles.title} id='title'>
            <span>entreprises, startups </span>
          </span>
          <span className={styles.title} id='title'>
            <span>et freelances </span>
          </span>
        </h1>
      </div>
      <div className={styles.description}>
        <h2
          id='description'
        >
          Développeur web et mobile basé en France à Périgueux, spécialisé dans la création de solutions web pour les freelances, startups et entreprises
        </h2>
      </div>
    </section>
  );
};

export default Hero;
