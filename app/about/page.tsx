'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from '../../styles/AboutPage.module.scss';
import ScrollingText from '../../components/ScrollingText';
import Contact from '../../components/Contact';

const Page: React.FC = () => {
  return (
    <div className={styles.about__container}>
      <div className={styles.about__wrapper}>
        <div className={styles.about__intro}>
          <div className={styles.about__title}>
            <h1 className={styles.about__title__text}>I am a passionate and versatile web developer based in France</h1>
          </div>
          <p className={styles.about__description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quasi eius itaque odio. Necessitatibus, incidunt!</p>
        </div>
        <div className={styles.about__course}>
          <div className={styles.about__objectivs}>
            <section>
              <p>Creating beautiful and fast websites and mobile applications is something that I am truly passionate about. I believe that the web and mobile apps should not only be functional but also visually pleasing, and I am always striving to create user interfaces and experiences that are both aesthetically pleasing and intuitive. I have an excellent eye for design and I am skilled in using design principles to create attractive and user-friendly interfaces. I am also familiar with the latest design trends and I am able to create modern and responsive designs.</p>
            </section>
            <section className={styles.about__objectives__hidden}>
              <p>In addition to creating visually pleasing designs, I am also focused on making websites and mobile apps as fast as possible. I understand the importance of website performance and I am skilled in optimizing websites for speed and responsiveness. I am familiar with best practices for website performance optimization such as code minification, image optimization and caching. I am also experienced in using tools like Lighthouse and PageSpeed Insights to analyze and improve website performance.</p>
              <p>By combining my skills in design and website performance optimization, I am able to create websites and mobile apps that are both beautiful and fast. I believe that by creating websites and mobile apps with a great UI and UX and optimized for performance, we can make the web a more enjoyable and efficient place for everyone.</p>
            </section>
          </div>
          <div className={styles.about__softskills}>
            <section>
              <p>My ability to learn quickly and my passion for discovering new technologies are two of my strongest soft skills. I am always eager to expand my knowledge and skills, and I am able to quickly pick up new concepts and technologies. This makes me a valuable asset to any team, as I am able to adapt to changes and new challenges with ease.</p>
              <p>In terms of my front-end skills, I am proficient in a wide range of technologies including React, React Native, JavaScript, TypeScript, HTML, CSS, Sass, and TailwindCSS. I have experience building responsive and user-friendly web applications that look great on all devices. I am also familiar with best practices and design patterns to build maintainable and scalable web applications.</p>
              <p>When it comes to back-end development, I have a solid understanding of technologies such as Node.js, Express, Java, SQL, MongoDB, and Python. I am experienced in building robust and efficient server-side applications, and I am skilled in integrating these applications with front-end technologies. I have experience in building RESTful APIs, and I am familiar with security best practices to ensure the protection of user data.</p>
              <p>Lastly, I am proficient in using tools like Git, GitHub, Visual Studio Code, and Neovim. I am familiar with best practices for version control and I am able to work collaboratively on projects with other developers. Additionally, I am familiar with the features of these tools and I am able to customize and optimize them for my workflow. These tools have helped me to be more efficient and productive.</p>
            </section>
          </div>
          <div className={styles.about__general__skills}>
            <section>
              <p>One of my key strengths is my ability to work effectively in a team environment. I am a strong collaborator and communicator, and I am able to work well with others to achieve common goals. I understand the importance of clear and open communication, and I am always willing to listen to and consider the ideas and feedback of others. I am also able to give clear and constructive feedback to others to help them improve.</p>
              <p>I am able to lead by example and I am not afraid of taking initiative. I am comfortable with taking a leading role in a project and I am able to make decisions and solve problems independently when necessary. I am able to work well under pressure and I am able to adapt to changes and challenges quickly. These skills make me a valuable asset to any team and I am able to help to make a project successful by making sure that all the team members are working together and that the project is on track.</p>
            </section>
          </div>
          <div className={styles.about__reviews}>
            review
          </div>
        </div>
      </div>
      <ScrollingText text='Contact' />
      <Contact />
    </div>
  );
};

export default Page;