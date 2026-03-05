'use client';
import React, { useState } from 'react';
import useMediaQuery from '@/shared/hooks/useMediaQuery';
import { CloseIcon, MenuIcon } from '@/shared/icons';
import styles from './styles.module.css';
import RewardsList from './rewards-list/RewardsList';
const Rewards = () => {
    const isTablet = useMediaQuery('(max-width: 768px)');
    const [showRewards, setShowRewards] = useState(false);
    return (
        <>
            {!isTablet ? (
                <RewardsList />
            ) : (
                <div className={styles.menuWrapper}>
                    <div className={styles.menuTopWrapper}>
                        <button onClick={() => setShowRewards(!showRewards)}>
                            {showRewards ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                    {showRewards && <RewardsList />}
                </div>
            )}
        </>
    );
};

export default Rewards;
