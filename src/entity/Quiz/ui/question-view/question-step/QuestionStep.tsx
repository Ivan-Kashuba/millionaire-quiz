'use client';
import React, { useState } from 'react';
import styles from './styles.module.css';
import AnswerButton from './answer-button';
import { useQuizContext } from '@/entity/Quiz/contexts/quiz-context-provider';
const Question = () => {
    const { data, activeQuestion } = useQuizContext();
    const [disableButton, setDisableButton] = useState<boolean>(false);

    if (activeQuestion === null) return;

    return (
        <div className={styles.questionStepWrapper}>
            <h2>{data[activeQuestion].question}</h2>
            <div className={styles.questionStepAnswers}>
                {data[activeQuestion].answers.map((a) => (
                    <AnswerButton
                        key={a.id}
                        answer={a}
                        disableButton={disableButton}
                        setDisableButton={setDisableButton}
                    />
                ))}
            </div>
        </div>
    );
};

export default Question;
