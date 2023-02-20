import React from 'react';

import styles from '../../styles/AboutPage.module.scss';
import ScrollingText from '../../components/ScrollingText';
import Contact from '../../components/Contact';

const Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <div className={styles.title}>
            <h1 className={styles.title__text}>I am a passionate and versatile web developer based in France</h1>
          </div>
        </div>
        <div className={styles.course}>
          <div className={styles.objectivs}>
            <h2>Creating beautiful and fast websites and mobile applications is something that I am truly passionate about</h2>
            <p>Hi! I'm a passionate web and mobile developer who loves creating innovative and modern websites and mobile applications. My goal is to help businesses go digital by providing them with superior digital solutions. I am very detail-oriented and enjoy creating unique and custom designs for each project.</p>
            <p>My development skills include using JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, HTML, CSS, Sass, Tailwind CSS and Java. I love using the latest technologies to create fast, user-friendly and responsive websites and mobile applications.</p>
            <div className={styles.content}>
              <h2>Creating innovative and handcrafted websites</h2>
              <p>I believe that every website is unique and should be treated as such. That's why I take the time to understand each client's needs and create a custom design that reflects their business and vision. My handcrafted approach ensures that every website I create is unique and memorable.</p>
            </div>
            <div className={styles.content}>
              <h2>Mobile Application Development</h2>
              <p>I am also an experienced mobile application developer and am passionate about creating innovative and functional mobile applications. I use the latest technologies to create responsive, user-friendly and efficient mobile apps for iOS and Android platforms.</p>
            </div>
            <div className={styles.content}>
              <h2>Customer-centric approach</h2>
              <p>I am very client-centric and believe in open and honest communication throughout the development process. I work closely with my clients to ensure their needs are met and that the final product is exactly what they wanted.</p>
            </div>
          </div>
        </div>
      </div>
      <ScrollingText text='Contact' />
      <Contact />
    </div>
  );
};

export default Page;