"use client";

import React from 'react';

import styles from '../styles/ScrollingText.module.scss';

interface ScrollingTextProps {
    text: string;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ text }) => {
    return (
        <div className={styles.container}>
            <span>- {text} - {text}&nbsp;</span>
            <span>- {text} - {text}&nbsp;</span>
        </div>
    )
}

export default ScrollingText