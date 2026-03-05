'use client';
import React from 'react';
import styles from './styles.module.css';
import Button from '@/ui/Button/Button';
import { HandIcon } from '@/shared/icons';
import ContentContainer from '@/entity/Quiz/ui/content-container/ContentContainer';
import { useQuizContext } from '../../contexts/quiz-context-provider';
const Score = () => {
    const { rewardCollected, tryAgain } = useQuizContext();
    return (
        <div className={styles.scoreWrapper}>
            <ContentContainer className={styles.scoreContent}>
                <div className={styles.handIconWrapper}>
                    <HandIcon className={styles.handIcon} />
                </div>
                <div className={styles.scoreTextWrapper}>
                    <div>
                        <p>Total score:</p>
                        <p>{rewardCollected} earned</p>
                    </div>
                    <Button
                        aria-label="try again button"
                        onClick={tryAgain}
                    >
                        Try again
                    </Button>
                </div>
            </ContentContainer>
        </div>
    );
};

export default Score;
