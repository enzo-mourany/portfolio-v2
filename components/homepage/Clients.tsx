import React from 'react'
import { FaPeopleCarry } from 'react-icons/fa';

import styles from '../../styles/WebDevelopment.module.scss';

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
              <span>I believe</span> I am very client-focused and believe in open and honest communication throughout the development process. I work closely with my clients to ensure that their needs are met and that the final product is exactly what they wanted.
            </h2>
            <p>That&apos;s why I take the time to understand each client&apos;s needs and create a custom design that reflects their business and vision. My handcrafted approach ensures that every website I create is unique and memorable.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
