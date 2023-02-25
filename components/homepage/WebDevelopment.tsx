import React from 'react'
import { MdWebAsset } from 'react-icons/md';

import styles from '../../styles/WebDevelopment.module.scss';

export const WebDevelopment: React.FC = () => {
  return (
    <section id='web-development' className={styles.container}>
      <div className={styles.wrapper}>
        <div id='section-title' className={styles.title}>
          <div className={styles.roadmap__line}>
            <div className={styles.icon}>
              <div className={styles.filter}></div>
              <MdWebAsset style={{ color: '#fff', width: 30, height: 30, zIndex: 1 }} />
            </div>
            <div className={styles.line} />
          </div>
          <div id='description' className={styles.text}>
            <h3 className={styles.text__title}>Creating innovative and handcrafted websites</h3>
            <h2 className={styles.text__description}>
              <span>I believe</span> that every website is unique and should be treated as such.
            </h2>
            <p>That's why I take the time to understand each client's needs and create a custom design that reflects their business and vision. My handcrafted approach ensures that every website I create is unique and memorable.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
