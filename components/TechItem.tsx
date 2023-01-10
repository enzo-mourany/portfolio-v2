import React from 'react';
import styles from '../styles/TechItem.module.scss';

interface TechItemProps {
    tech: string;
}

const TechItem: React.FC<TechItemProps> = ({ tech }) => {
  return (
    <div className={styles.box}>
      <p>{tech}</p>
    </div>
  )
};

export default TechItem;