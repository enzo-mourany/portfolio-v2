'use client';

import React from 'react';
import Link from 'next/link';

import styles from '../styles/Contact.module.scss';

const Contact: React.FC = () => {

  return (
    <div className={styles.contact__container}>
      <div className={styles.contact__wrapper}>
        <div className={styles.contact__header}>
          <h1 className={styles.contact__header__title}>Get In Touch</h1>
        </div>
        <div className={styles.contact__hero}>
          <div className={styles.contact__hero__left}></div>
          <div className={styles.contact__hero__right}></div>
        </div>
        <div className={styles.contact__footer}>
          <div className={styles.contact__footer__left}>
          </div>
          <div className={styles.contact__footer__right}>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;