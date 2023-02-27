import Link from 'next/link';
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';

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
            <Link href='/legal/privacy-policy'><p>Privacy Policy</p></Link>
          </li>
          <li>
            <Link href='/contact/terms-of-use'><p>Terms and condition</p></Link>
          </li>
          <li>
            <Link href='/blog'><p>Blog</p></Link>
          </li>
        </ul>
      </div>
      <div className={styles.center}>
        <p>Copyright @2023</p>
      </div>
      <div className={styles.right}>
        <ul>
          <li>
            <BsGithub style={{ color: '#fff', width: 20, height: 20, zIndex: 1 }} />
          </li>
          <li>
            <BsLinkedin style={{ color: '#fff', width: 20, height: 20, zIndex: 1 }} />
          </li>
          <li>
            <IoIosMail style={{ color: '#fff', width: 20, height: 20, zIndex: 1 }} />
          </li>
          <li>
            <IoCall style={{ color: '#fff', width: 20, height: 20, zIndex: 1 }} />
          </li>
        </ul>
      </div>
    </div>
  </div>
);
