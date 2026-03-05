'use client';
import React from 'react';
import styles from './styles.module.css';
import ContentContainer from '@/entity/Quiz/ui/content-container/ContentContainer';
import QuestionStep from './question-step/QuestionStep';
import Rewards from './rewards/Rewards';

const Question = () => {
    return (
        <div className={styles.questionStepWrapper}>
            <ContentContainer className={styles.content}>
                <QuestionStep />
                <Rewards />
            </ContentContainer>
        </div>
    );
};

export default Question;
