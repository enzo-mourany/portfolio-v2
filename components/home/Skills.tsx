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
              <span>My development skills</span> include using JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, HTML, CSS, Sass, Tailwind CSS and Java. I love using the latest technologies to create fast, user-friendly and responsive websites and mobile applications.
            </h2>
            <p>My goal is to help businesses go digital by providing them with superior digital solutions. I am very attentive to details and love to create unique and custom designs for each project.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
