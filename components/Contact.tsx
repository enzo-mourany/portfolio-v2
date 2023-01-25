'use client';

import React from 'react';
import Link from 'next/link';

import styles from '../styles/Contact.module.scss';

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
        <a href='mailto:enzo.mourany@outlook.com'>Send me a message</a>
      </div>
      <div className={styles.links}>
        <a href='https://github.com/enzo-mourany'>GitHub</a>
        <a href='https://www.linkedin.com/in/enzo-mourany/'>LinkedIn</a>
        <a href='/privacy'>Privacy & Terms</a>
        <Link href='/request'><p>Project Request</p></Link>
      </div>
    </div>
  )
};

export default Contact;