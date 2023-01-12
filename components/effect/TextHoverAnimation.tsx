'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles/TextHoverAnimation.module.scss';

interface TextHoverAnimationProps {
  text: string;
  url: string;
}

const TextHoverAnimation: React.FC<TextHoverAnimationProps> = ({ text, url }) => {
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
    <motion.a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className={styles.text__container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial='hidden'
    >
      <motion.span
        className={styles.text__letter}
        variants={visibleTextVariants}
        animate={hover ? 'hover' : 'normal'}
      >
        {text}
      </motion.span>
      <motion.span
        className={styles.text__letter__hidden}
        variants={hiddenTextVariants}
        animate={hover ? 'hover' : 'normal'}
      >
        {text}
      </motion.span>
    </motion.a>
  );
};

export default TextHoverAnimation;