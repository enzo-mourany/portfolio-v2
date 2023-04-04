'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { MenuContext } from '../contexts/MenuContextProvider';
import { PageLink } from './PageLink';

const LinkBox = () => {
  const { isMenuOpen, setIsMenuOpen } = React.useContext(MenuContext);

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

  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isHomeVisible ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0 }}
      >
        <PageLink title='Acceuil' subtitle='Introduction' link='/' style={isHovering ? {opacity: 0.2} : { opacity: 1 }} />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isAboutVisible ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0 }}
      >
        <PageLink title='Services' subtitle='Prestations et méthodes' link='/services' style={isHovering ? {opacity: 0.2} : { opacity: 1 }} />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isWorksVisible ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0 }}
      >
        <PageLink title='Portfolio' subtitle='Réalisations et projets' link='/works' style={isHovering ? {opacity: 0.2} : { opacity: 1 }} />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isContactVisible ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0 }}
      >
        <PageLink title='Contact' subtitle='Travaillons ensemble' link='/contact' style={isHovering ? {opacity: 0.2} : { opacity: 1 }} />
      </motion.div>
    </div>

  )
};

export default LinkBox;