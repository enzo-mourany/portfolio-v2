'use client';

import React from 'react';
import Link from 'next/link';

import styles from '../styles/LinkBox.module.scss';

interface LinkBoxProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const LinkBox: React.FC<LinkBoxProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  interface BoxProps {
    title: string;
    subtitle: string;
    link: string;
  }

  const Box = ({ title, subtitle, link }: BoxProps) => {
    return (
      <Link className={styles.linkbox__container} href={link} onClick={() => handleClick()} >
        <p className={styles.linkbox__subtitle}>{subtitle}</p>
        <h1 className={styles.linkbox__title}>{title}</h1>
      </Link>
    );
  };

  return (
    <div className={styles.wrapper}>
      <Box title='Home' subtitle='Introduction' link='/' />
      <Box title='About' subtitle='Skills and Phylosophy' link='/about' />
      <Box title='Works' subtitle='Projects and labs' link='/works' />
      <Box title='Contact' subtitle='Get in touch' link='/contact' />
    </div>

  )
};

export default LinkBox;