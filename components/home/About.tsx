import React from 'react'
import { BiCodeAlt } from 'react-icons/bi';

import styles from '../../styles/About.module.scss';

export const About: React.FC = () => {
  return (
    <section id='about' className={styles.container}>
      <div className={styles.wrapper}>
        <div id='section-title' className={styles.title}>
          <div className={styles.roadmap__line}>
            <div className={styles.icon}>
              <div className={styles.filter}></div>
              <BiCodeAlt style={{ color: '#fff', width: 25, height: 25, zIndex: 1 }} />
            </div>
            <div className={styles.line} />
          </div>
          <div id='description' className={styles.text}>
            <h3 className={styles.text__title}>About Me</h3>
            <h2 className={styles.text__description}>
              <span>I am a passionate web and mobile developer</span>  who loves to create innovative and modern websites and mobile applications.
            </h2>
            <p>My goal is to help businesses go digital by providing them with superior digital solutions. I am very attentive to details and love to create unique and custom designs for each project.</p>
          </div>
        </div>
      </div>
    </section>
  )
};
