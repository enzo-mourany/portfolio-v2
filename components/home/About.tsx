import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs';

import styles from '../../styles/About.module.scss';

export const About: React.FC = () => {
  return (
    <section id='about' className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div className={styles.roadmap__line}>
            <div className={styles.icon}>
              <div className={styles.filter}></div>
              <BsFillPersonFill style={{ color: '#fff', width: 25, height: 25, zIndex: 1 }} />
            </div>
            <div className={styles.line}>
            </div>
          </div>
          <div className={styles.text}>
            <h3 className={styles.text__title}>About Me</h3>
            <h2 className={styles.text__description}>
              <span>Supercharge collaboration.</span> We provide unlimited repositories, best-in-class version control, and the world’s most powerful open source community—so your team can work more efficiently together.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
