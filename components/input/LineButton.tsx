"use client";

import styles from '../../styles/LineButton.module.scss';

interface LineButtonProps {
    text: string;
}

const LineButton: React.FC<LineButtonProps> = ({text}) => {
    return (
        <div className={styles.button}>
            <p className={styles.button_text}>{text}</p>
        </div>
    );
    };

export default LineButton;