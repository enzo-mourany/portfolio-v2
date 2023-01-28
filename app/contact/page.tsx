import React from 'react';

import styles from '../../styles/ContactPage.module.scss';

import Contact from '../../components/Contact';

const Page: React.FC = () => {
  return (
    <div className={styles.contact__container}>
      <div className={styles.contact__wrapper}>
        <Contact />
      </div>
    </div>
  );
};

export default Page;