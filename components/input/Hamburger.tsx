'use client';

import React, { useState } from 'react';
import styles from '../../styles/Hamburger.module.scss';

const Hamburger = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div
      className={styles.hamburger}
      onClick={() => setIsToggled(!isToggled)}
    >
      <span className={styles.hamburger__box}>
        <span className={styles.hamburger__inner} />
        <span className={styles.hamburger__inner} />
      </span>
    </div>
  );
};

export default Hamburger;