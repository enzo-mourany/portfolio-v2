'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from '../../styles/AboutPage.module.scss';

const Page: React.FC = () => {
  return (
    <div className={styles.about__container}>
      <div className={styles.about__wrapper}>
        <div className={styles.about__intro}>
          <div className={styles.about__title}>
            <h1 className={styles.about__title__text}>I am a passionate and versatile web developer based in France</h1>
          </div>
          <p className={styles.about__description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quasi eius itaque odio. Necessitatibus, incidunt!</p>
        </div>
        <div className={styles.about__course}>
          <div className={styles.about__softskills}>
            <section>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus in aliquid, eum eveniet earum consectetur nobis adipisci voluptatum repellat rerum!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut, odit exercitationem officia suscipit assumenda quidem beatae magni natus itaque.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi numquam cumque rem fugit provident tempora nihil quis doloribus similique dolorum expedita, exercitationem odio labore molestias nisi ut quae omnis quibusdam.</p>
            </section>
          </div>
          <div className={styles.about__general__skills}>
            <section>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore id, reprehenderit porro eligendi deserunt iste impedit sunt eum voluptas inventore?</p>
            </section>
          </div>
          <div className={styles.about__objectivs}>
            <section>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident ipsam ipsum voluptatum illo! Nam impedit sed labore vitae repellat.</p>
            </section>
          </div>
          <div className={styles.about__reviews}>
            review
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;