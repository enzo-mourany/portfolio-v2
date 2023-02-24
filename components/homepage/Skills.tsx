import React from 'react'
import { BiCodeAlt } from 'react-icons/bi';

import styles from '../../styles/Skills.module.scss';

export const Skills: React.FC = () => {
  return (
    <section id='skills' className={styles.container}>
      <div className={styles.wrapper}>
        <div id='section-title' className={styles.title}>
          <div className={styles.roadmap__line}>
            <div className={styles.icon}>
              <div className={styles.filter}></div>
              <BiCodeAlt style={{ color: '#fff', width: 30, height: 30, zIndex: 1 }} />
            </div>
            <div className={styles.line} />
          </div>
          <div id='description' className={styles.text}>
            <h3 className={styles.text__title}>Skills</h3>
            <h2 className={styles.text__description}>
              <span>Evolution and adaptability.</span> I use and stay informed on the latest technologies to develop efficient and easily maintainable applications and websites
            </h2>
            <p>My development skills include using JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, HTML, CSS, Sass, Tailwind CSS and Java. I love using the latest technologies to create fast, user-friendly and responsive websites and mobile applications.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
