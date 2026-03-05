import React, { CSSProperties } from 'react';

import styles from './styles.module.css';
const Loader = ({ customStyle }: { customStyle?: CSSProperties }) => {
    return (
        <div
            className={styles.skeleton}
            style={customStyle}
        ></div>
    );
};

export default Loader;
