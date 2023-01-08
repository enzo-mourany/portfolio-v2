import LineButton from "./input/LineButton";
import styles from '../styles/About.module.scss';

const About = () => {
    return (
            <div className={styles.wrapper}>
                <p className={styles.title}>MY PHYLOSOPHY</p>
                <p className={styles.description}>I create inclusive, accessible digital products, with experience working with startups and enterprise products. I believe in using product design as a tool to elevate human interaction with technology that scale.</p>
                <LineButton text="About Me" />
            </div>
    );
    };

export default About;