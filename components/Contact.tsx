'use client';

import React from 'react';

import styles from '../styles/Contact.module.scss';

import TextHoverAnimation from './effect/TextHoverAnimation';

const Contact: React.FC = () => {

  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <div className={styles.text_box}>
          <p>I can help you to realize your project</p>
        </div>
        <div className={styles.text_box}>
          <p>Get in touch</p>
        </div>
        <div className={styles.text_box}>
          <p>© 2023 all rights reserved</p>
        </div>
      </div>
      <div className={styles.email}>
        <p>Send me a message</p>
        <a href='mailto:enzo.mourany@outlook.com'>enzo.mourany@outlook.com</a>
      </div>
      <div className={styles.links}>
        <TextHoverAnimation text='GitHub' url='https://github.com/enzo-mourany' />
        <TextHoverAnimation text='LinkedIn' url='https://www.linkedin.com/in/enzo-mourany/' />
      </div>
    </div>
  )
};

export default Contact;