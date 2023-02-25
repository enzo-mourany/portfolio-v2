import React from 'react'
import { FaPeopleCarry } from 'react-icons/fa';

import styles from '../../styles/Clients.module.scss';

export const Clients: React.FC = () => {
  return (
    <section id='clients' className={styles.container}>
      <div className={styles.wrapper}>
        <div id='section-title' className={styles.title}>
          <div className={styles.roadmap__line}>
            <div className={styles.icon}>
              <div className={styles.filter}></div>
              <FaPeopleCarry style={{ color: '#fff', width: 30, height: 30, zIndex: 1 }} />
            </div>
            <div className={styles.line} />
          </div>
          <div id='description' className={styles.text}>
            <h3 className={styles.text__title}>Client-centered approach</h3>
            <h2 className={styles.text__description}>
              I am very <span>client-focused</span> and believe in open and honest communication throughout the development process.
            </h2>
            <p>I work closely with my clients to ensure that their needs are met and that the final product is exactly what they wanted.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
