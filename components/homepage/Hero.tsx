import React from 'react';

import styles from '../../styles/Hero.module.scss';

const Hero: React.FC = () => (
  <section className={styles.container} id='hero__container'>
    <div className={styles.titles}>
      <h1 className={styles.main__title} id='title'>Créer des solutions web pour donner de la visibilité à votre marque</h1>
    </div>
    <div className={styles.description}>
      <p id='description'>
        Développeur web et mobile basé en France, spécialisé dans la création de solutions web pour les freelances, starups et entreprises
      </p>
    </div>
  </section>
);

export default Hero;
