'use client';
import React from 'react';

import Score from '@/entity/Quiz/ui/score/Score';
import HomeView from '@/entity/Quiz/ui/home-view/HomeView';
import { useQuizContext } from '../../contexts/quiz-context-provider';
import QuestionView from '../question-view/QuestionView';

const Step = () => {
    const { finished, activeQuestion } = useQuizContext();

    if (finished) return <Score />;

    if (activeQuestion !== null) return <QuestionView />;

    return <HomeView />;
};

export default Step;
