import React from 'react';

import styles from './styles.module.css';
import { HandIcon } from '@/shared/icons';
import Button from '@/ui/Button/Button';
import ContentContainer from '@/entity/Quiz/ui/content-container/ContentContainer';
import { useQuizContext } from '../../contexts/quiz-context-provider';

const HomeView = () => {
    const { setActiveQuestion } = useQuizContext();

    return (
        <div className={styles.homeWrapper}>
            <ContentContainer className={styles.homeContent}>
                <div className={styles.handIconWrapper}>
                    <HandIcon className={styles.handIcon} />
                </div>
                <div className={styles.homeTextWrapper}>
                    <h1>Who wants to be a millionaire?</h1>
                    <Button
                        aria-label="start button"
                        onClick={() => setActiveQuestion(0)}
                    >
                        Start
                    </Button>
                </div>
            </ContentContainer>
        </div>
    );
};

export default HomeView;
