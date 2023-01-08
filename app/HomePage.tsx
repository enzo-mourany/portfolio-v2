import styles from '../styles/HomePage.module.scss';
import LineButton from '../components/input/LineButton';

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
          <div className={styles.line}></div>
          <div className={styles.description}></div>
          <LineButton text="Let's Talk" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;