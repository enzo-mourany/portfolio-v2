'use client';

import React, { useContext } from 'react';

import styles from '../../styles/Hamburger.module.scss';

import { MenuContext } from '../../contexts/MenuContextProvider';

const Hamburger = () => {
  const { isMenuOpen } = useContext(MenuContext);
  return (
    <div
      className={styles.hamburger__container}
    >
      <span className={isMenuOpen ? styles.hamburger__box__open : styles.hamburger__box}>
        <span className={styles.hamburger__inner} />
        <span className={styles.hamburger__inner} />
      </span>
    </div>
  );
};

export default Hamburger;