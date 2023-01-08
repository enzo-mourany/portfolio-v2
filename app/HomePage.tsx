import styles from '../styles/HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.name}>
            <p>Hi, I am Enzo Mourany</p>
          </div>
          <p>Frontend web and web mobile developer</p>
        </div>
        <div className={styles.right}>

        </div>
      </div>
    </div>
  );
};

export default HomePage;