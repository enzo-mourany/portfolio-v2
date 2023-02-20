'use client';

import React, { useState } from 'react';

import styles from '../../styles/AboutPage.module.scss';
import ScrollingText from '../../components/ScrollingText';
import Contact from '../../components/Contact';

const Page: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.about__container}>
      <div className={styles.about__wrapper}>
        <div className={styles.about__intro}>
          <div className={styles.about__title}>
            <h1 className={styles.about__title__text}>I am a passionate and versatile web developer based in France</h1>
          </div>
        </div>
        <div className={styles.about__course}>
          <div className={styles.about__objectivs}>
            <h2>Creating beautiful and fast websites and mobile applications is something that I am truly passionate about</h2>
            <p>I believe that the web and mobile apps should not only be functional but also visually pleasing, and I am always striving to create user interfaces and experiences that are both aesthetically pleasing and intuitive. I have an excellent eye for design and I am skilled in using design principles to create attractive and user-friendly interfaces. I am also familiar with the latest design trends and I am able to create modern and responsive designs.</p>
            <p>In addition to creating visually pleasing designs, I am also focused on making websites and mobile apps as fast as possible. I understand the importance of website performance and I am skilled in optimizing websites for speed and responsiveness. I am familiar with best practices for website performance optimization such as code minification, image optimization and caching. I am also experienced in using tools like Lighthouse and PageSpeed Insights to analyze and improve website performance.</p>
            <p>By combining my skills in design and website performance optimization, I am able to create websites and mobile apps that are both beautiful and fast. I believe that by creating websites and mobile apps with a great UI and UX and optimized for performance, we can make the web a more enjoyable and efficient place for everyone.</p>
          </div>
        </div>
      </div>
      <ScrollingText text='Contact' />
      <Contact />
    </div>
  );
};

export default Page;