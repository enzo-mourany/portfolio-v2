"use client";

import React from 'react'

import styles from '../styles/ScrollingText.module.scss';

const ScrollingText: React.FC = () => {
    return (
        <div className={styles.container}>
            <span>- WORKS - WORKS&nbsp;</span>
            <span>- WORKS - WORKS&nbsp;</span>
        </div>
    )
}

export default ScrollingText