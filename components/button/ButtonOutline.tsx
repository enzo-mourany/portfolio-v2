import styles from '../../styles/ButtonOutline.module.scss';

export const ButtonOutline = () => (
  <button className={styles.button_outline}>
    <svg
      width='280'
      height='70'
      viewBox='-10 -10 300 90'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <rect
        x='.5'
        y='.5'
        width='278'
        height='69'
        rx='34.5'
        stroke='#fff'
        className={styles.bg_svg}
      />
      <rect
        x='.5'
        y='.5'
        width='278'
        height='69'
        rx='34.5'
        stroke='#fff'
        className={styles.filled}
        pathLength='1'
      />
    </svg>
  </button>
)