'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from '../../styles/About.module.scss';

const Page: React.FC = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={styles.about__container}
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        exit={{ y: '-100%' }}
        transition={{ duration: 1 }}
      >
        <p>About</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Page;