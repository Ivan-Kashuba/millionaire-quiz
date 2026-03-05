'use client';
import React from 'react';
import { QuizProvider } from '../../contexts/quiz-context-provider';
import { Question } from '../../types/question';
import Step from '../step/Step';


const QuizView = ({ questions }: { questions: Question[] }) => {
  return (
    <QuizProvider data={questions}>
      <Step />
    </QuizProvider>
  );
};

export default QuizView;
