'use client';

import React from 'react';
import Link from 'next/link';

import styles from '../styles/Contact.module.scss';

const Contact: React.FC = () => {

  return (
    <div className={styles.contact__container}>
      <div className={styles.contact__wrapper}>
        <div className={styles.contact__header}>
          <h2 className={styles.contact__header__title}>Get In Touch</h2>
        </div>
        <div className={styles.contact__hero}>
          <div className={styles.contact__hero__left}>
            <h2 className={styles.contact__hero__subtitle}>Bring your projects to life</h2>
          </div>
          <div className={styles.contact__hero__right}>
            <div className={styles.link__box}>
              <div className={styles.link__box__header}>
                <h3 className={styles.link__box__header__title}>Contact Info</h3>
              </div>
              <div className={styles.link__box__content}>
                <ul>
                  <li>
                    <a href='mailto:enzo.mourany@outlook.com'>Email</a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/in/enzo-mourany/' target='_blank' rel='noreferrer'>LinkedIn</a>
                  </li>
                  <li>
                    <a href='https://github.com/enzo-mourany' target='_blank' rel='noreferrer'>GitHub</a>
                  </li>
                  <li>
                    <a href='https://calendly.com/enzomourany'>Calendly</a>
                  </li>
                  <li>
                    <Link href='/request'><p>Project Request</p></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contact__footer}>
          <div className={styles.contact__footer__left}>
            <h3>Ressources</h3>
            <ul>
              <li><Link href='/legal/privacy-policy'>Privacy Policy</Link></li>
              <li><Link href='/legal/terms-of-use'>Terms and Conditions</Link></li>
              <li><Link href='/'>Blog</Link></li>
            </ul>
          </div>
          <div className={styles.contact__footer__right}>
            <p>Copyright ©2023</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;