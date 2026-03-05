'use client';
import React, { useState } from 'react';
import styles from './styles.module.css';
import { useQuizContext } from '@/entity/Quiz/contexts/quiz-context-provider';
import { AnswerButtonProps, ButtonStatus } from '.';

const AnswerButton = ({ answer, disableButton, setDisableButton }: AnswerButtonProps) => {
    const { activeQuestion, setActiveQuestion, setFinished, data } = useQuizContext();
    const [status, setStatus] = useState<ButtonStatus>('idle');

    if (activeQuestion === null) return;

    const goToNextStep = () => {
        if (answer.isCorrect) {
            if (data.length - 1 === activeQuestion) {
                setFinished(true);
                setActiveQuestion(null);
            } else {
                setActiveQuestion(activeQuestion + 1);
            }
        } else {
            setActiveQuestion(null);
            setFinished(true);
        }
    };
    const handleClick = () => {
        setDisableButton(true);
        setStatus('selected');

        setTimeout(() => {
            setStatus(answer.isCorrect ? 'correct' : 'wrong');

            setTimeout(() => {
                goToNextStep();
                setDisableButton(false);
                setStatus('idle');
            }, 500);
        }, 1000);
    };

    return (
        <button
            disabled={disableButton}
            aria-disabled={disableButton}
            aria-label={`answer ${answer.id}: ${answer.answer}`}
            className={`${styles.answerButton} ${status === 'selected'
                    ? styles.selected
                    : status === 'correct'
                        ? styles.correct
                        : status === 'wrong'
                            ? styles.wrong
                            : ''
                }`}
            onClick={handleClick}
        >
            <span>{answer.id}</span> {answer.answer}
        </button>
    );
};

export default AnswerButton;
