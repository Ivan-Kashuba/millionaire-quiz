'use client';
import React from 'react';
import styles from './styles.module.css';
import { useQuizContext } from '@/entity/Quiz/contexts/quiz-context-provider';
const RewardsList = () => {
    const { data, rewardCollected } = useQuizContext();

    return (
        <div className={styles.rewardsWrapper}>
            <div className={styles.rewardsItems}>
                {data.map((i) => (
                    <div
                        className={`${styles.rewardItem} ${i.reward === rewardCollected ? styles.selected : ''}`}
                        key={i.reward}
                    >
                        {i.reward}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RewardsList;
