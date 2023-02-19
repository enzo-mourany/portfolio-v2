import type { NextPage } from 'next';

import styles from '../../styles/ContactPage.module.scss';

import Contact from '../../components/Contact';

const ProjectRequest: NextPage = () => {
  return (
    <div className={styles.contact__container}>
      <div className={styles.contact__wrapper}>
        <Contact />
      </div>
    </div>
  );
};

export default ProjectRequest;