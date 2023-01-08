import React from 'react';
import styles from '../styles/TechItem.module.scss';

interface TechItemProps {
    techName: string;
}

const TechItem: React.FC<TechItemProps> = ({ techName }) => {
    return (
        <div className={styles.box}>
            <p>{techName}</p>
        </div>
    )
};

export default TechItem;