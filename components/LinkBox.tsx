'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import styles from '../styles/LinkBox.module.scss';

interface LinkBoxProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const LinkBox: React.FC<LinkBoxProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [ref, inView] = useInView({
    threshold: 0
  });

  const [isHomeVisible, setIsHomeVisible] = useState<boolean>(false);
  const [isAboutVisible, setIsAboutVisible] = useState<boolean>(false);
  const [isWorksVisible, setIsWorksVisible] = useState<boolean>(false);
  const [isContactVisible, setIsContactVisible] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setIsHomeVisible(true), 300);
      setTimeout(() => setIsAboutVisible(true), 400);
      setTimeout(() => setIsWorksVisible(true), 500);
      setTimeout(() => setIsContactVisible(true), 600);
    } else {
      setIsHomeVisible(false);
      setIsAboutVisible(false);
      setIsWorksVisible(false);
      setIsContactVisible(false);
    }
  }, [inView]);

  interface BoxProps {
    title: string;
    subtitle: string;
    link: string;
  }

  const Box = ({ title, subtitle, link }: BoxProps): JSX.Element => {
    return (
      <Link
        className={styles.linkbox__container}
        href={link}
        onClick={() => handleClick()}
      >
        <p className={styles.linkbox__subtitle}>{subtitle}</p>
        <h1 className={styles.linkbox__title}>{title}</h1>
      </Link>
    );
  };

  return (
    <div className={styles.wrapper}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isHomeVisible ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0 }}
      >
        <Box title='Acceuil' subtitle='Introduction' link='/' />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isAboutVisible ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0 }}
      >
        <Box title='Services' subtitle='Prestations et méthodes' link='/services' />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isWorksVisible ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0 }}
      >
        <Box title='Portfolio' subtitle='Réalisations et projets' link='/works' />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isContactVisible ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0 }}
      >
        <Box title='Contact' subtitle='Travaillons ensemble' link='/contact' />
      </motion.div>
    </div>

  )
};

export default LinkBox;