'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles/TextHoverAnimation.module.scss';

interface TextHoverAnimationProps {
  text: string;
  url: string;
}

const TextHoverAnimation: React.FC<TextHoverAnimationProps> = ({ text, url }) => {
  const lettersText: string[] = text.split('');

  const [hover, setHover] = useState(false);

  const container = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.5 + i * 0.04 },
    })
  };

  const visibleChild = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const hiddenChild = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.a
      className={styles.text__container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={url}
      variants={container}
      initial='hidden'
      animate={hover ? 'visible' : 'hidden'}
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {lettersText.map((letter, index) => (
        <motion.span
          className={styles.text__letter}
          variants={visibleChild}
          style={{ marginRight: '5px', wordWrap: 'normal', whiteSpace: 'pre-wrap'}}
          key={index}>
          {letter}
        </motion.span>
      ))}
    </motion.a>
  );
};

export default TextHoverAnimation;