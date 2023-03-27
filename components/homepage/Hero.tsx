import React from 'react';
import Link from 'next/link';

import styles from '../../styles/Hero.module.scss';

import LineButton from '../input/LineButton';
import { ButtonOutline } from '../button/ButtonOutline';

const Hero: React.FC = () => (
  <section className={styles.container} id='hero__container'>
    <div className={styles.titles}>
      <h1 className={styles.main__title} id='title'>Frontend web and web mobile developer</h1>
      <h3 className={styles.subtitle}>Hi, I am Enzo Mourany</h3>
    </div>
    <div className={styles.description}>
      <p id='description'>
        I create inclusive, accessible digital products, with experience working with startups and enterprise products.
      </p>
    </div>
    <div className={styles.buttons}>
      <Link href='/contact'>
        <LineButton text="Let's talk" />
      </Link>
      <ButtonOutline />
    </div>
  </section>
);

export default Hero;
