import React from 'react';

import styles from '../../styles/ContactPage.module.scss';

import Contact from '../../components/Contact';
import ScrollingText from '../../components/ScrollingText';

const Page: React.FC = () => {
  return (
    <div className={styles.contact__container}>
      <div className={styles.contact__wrapper}>
        <ScrollingText text='contact' />
        <Contact />
      </div>
    </div>
  );
};

export default Page;