'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles/LineButton.module.scss';

interface LineButtonProps {
    text: string;
}

const LineButton: React.FC<LineButtonProps> = ({text}) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const visibleTextVariants = {
    hover: { y: 30, opacity: 0, transition: { duration: 0.2 } },
    normal: { y: 0, opacity: 1, transition: { duration: 0.2 } }
  };

  const hiddenTextVariants = {
    hover: { y: 4, opacity: 1, transition: { duration: 0.2 } },
    normal: { y: -30, opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <div
      className={styles.button}
      style={{ backgroundColor: clicked ? '#fff' : 'transparent' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
    >
      <motion.p
        className={styles.button_text}
        variants={visibleTextVariants}
        animate={hover ? 'hover' : 'normal'}
      >
        {text}
      </motion.p>
      <motion.p
        className={styles.button_text_hover}
        style={{ color: clicked ? '#000' : '#fff' }}
        variants={hiddenTextVariants}
        animate={hover ? 'hover' : 'normal'}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default LineButton;