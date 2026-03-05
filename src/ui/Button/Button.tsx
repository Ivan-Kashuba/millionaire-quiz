'use client';
import React from 'react';
import styles from './styles.module.css';
import { ButtonProps } from '@/ui/Button/index';
const Button = ({ children, ...rest }: ButtonProps) => {
    return (
        <button
            {...rest}
            className={styles.generalButton}
        >
            {children}
        </button>
    );
};

export default Button;
