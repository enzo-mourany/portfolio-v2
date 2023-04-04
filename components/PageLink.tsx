import React from 'react';
import Link from 'next/link';

import styles from '../styles/PageLink.module.scss';

import { MenuContext } from '../contexts/MenuContextProvider';

interface PageLinksProps {
  title: string;
  subtitle: string;
  link: string;
  style?: React.CSSProperties;
}

export const PageLink: React.FC<PageLinksProps> = ({ title, subtitle, link, style }) => {
  const { isMenuOpen, setIsMenuOpen } = React.useContext(MenuContext);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Link
      className={styles.linkbox__container}
      href={link}
      onClick={() => handleClick()}
    >
      <p
        style={style}
        className={styles.linkbox__subtitle}
      >{subtitle}</p>
      <h2
        style={style}
        className={styles.linkbox__title}
      >{title}</h2>
    </Link>
  );
};