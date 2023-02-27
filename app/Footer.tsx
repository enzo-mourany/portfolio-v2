import Link from 'next/link';
import React from 'react';

import styles from '../styles/Footer.module.scss';

export const Footer: React.FC = () => (
  <div id='footer' className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <ul>
          <li>
            <Link href='/contact'><p>Contact</p></Link>
          </li>
          <li>
            <Link href='/contact'><p>Contact</p></Link>
          </li>
          <li>
            <Link href='/contact'><p>Contact</p></Link>
          </li>
          <li>
            <Link href='/contact'><p>Contact</p></Link>
          </li>
        </ul>
      </div>
      <div className={styles.center}>
        <p>Copyright @2023</p>
      </div>
      <div className={styles.right}>
      </div>
    </div>
  </div>
);
