import styles from '../styles/HomePage.module.scss';
import LineButton from '../components/input/LineButton';
import About from '../components/About';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.name}>
            <p>Hi, I am Enzo Mourany</p>
          </div>
          <div className={styles.presentation}>
            <p>Frontend web and web mobile developer</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.description}>
            <p>I create inclusive, accessible digital products, with experience working with startups and enterprise products. I believe in using product design as a tool to elevate human interaction with technology that scale .</p>
          </div>
          <LineButton text="Let's Talk" />
        </div>
      </div>
      <About />
    </div>
  );
};

export default HomePage;