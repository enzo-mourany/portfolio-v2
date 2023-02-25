import React from 'react'
import { HiOutlineDeviceMobile } from 'react-icons/hi';

import styles from '../../styles/MobileApps.module.scss';

export const MobileApps: React.FC = () => {
  return (
    <section id='mobile-apps' className={styles.container}>
      <div className={styles.wrapper}>
        <div id='section-title' className={styles.title}>
          <div className={styles.roadmap__line}>
            <div className={styles.icon}>
              <div className={styles.filter}></div>
              <HiOutlineDeviceMobile style={{ color: '#fff', width: 30, height: 30, zIndex: 1 }} />
            </div>
            <div className={styles.line} />
          </div>
          <div id='description' className={styles.text}>
            <h3 className={styles.text__title}>Mobile Application Development</h3>
            <h2 className={styles.text__description}>
              I am also an <span>experienced mobile app developer</span> and am passionate about creating innovative and functional mobile apps.
            </h2>
            <p>I use the latest technologies to create responsive, user-friendly and efficient mobile apps for iOS and Android platforms.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
