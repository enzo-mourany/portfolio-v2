'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import styles from '../styles/Contact.module.scss';
import LineButton from './input/LineButton';

const Contact: React.FC = () => {
  const [hover, setHover] = useState(false);
  const visibleTextVariants = {
    hover: { y: -50, opacity: 0, transition: { duration: 0.2 } },
    normal: { y: 0, opacity: 1, transition: { duration: 0.2 } }
  };

  const hiddenTextVariants = {
    hover: { y: -135, opacity: 1, transition: { duration: 0.2 } },
    normal: { y: -50, opacity: 0, transition: { duration: 0.2 } }
  };

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
        <a
          href='https://github.com/enzo-mourany'
          target='_blank'
          rel='noreferrer'
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={styles.links__link}
        >
          <motion.span
            className={styles.links__link__text}
            variants={visibleTextVariants}
            animate={hover ? 'hover' : 'normal'}
          >
            GitHub
          </motion.span>
          <motion.span
            className={styles.links__link__text__hover}
            variants={hiddenTextVariants}
            animate={hover ? 'hover' : 'normal'}
          >
            GitHub
          </motion.span>
        </a>
        <a href='https://www.linkedin.com/in/enzo-mourany/' target='_blank' rel='noreferrer'>LinkedIn</a>
      </div>
    </div>
  )
};

export default Contact;