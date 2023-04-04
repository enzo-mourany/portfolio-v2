import styles from '../styles/Blob.module.scss';

export const Blob = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blob}></div>
      <div className={styles.blur}></div>
    </div>
  )
};