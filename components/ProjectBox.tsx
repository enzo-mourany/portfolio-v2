import React from 'react';
import styles from '../styles/ProjectBox.module.scss';

import TechItem from './TechItem';

const ProjectBox: React.FC = () => {
    return (
        <div className={styles.box}>
            <div className={styles.header}>
                <p>Project Type</p>
                <p>Project Date</p>
            </div>
            <div className={styles.title}>
                <p>Project Title</p>
            </div>
            <div className={styles.footer}>
                <div className={styles.item}>
                    <TechItem techName="React Native" />
                </div>
                <div className={styles.item}>
                    <TechItem techName="Typescript" />
                </div>
            </div>
        </div>
    )
};

export default ProjectBox;