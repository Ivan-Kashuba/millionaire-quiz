import { createContext, FC, useEffect, useState } from 'react';

import { useContextWithCheck } from '@/shared/utils/helper';
import { LOCALSTORAGE_KEYS } from '@/shared/constants/localStorage';
import Loader from '@/ui/Loader/Loader';
import { QuizContextProps, QuizProviderProps } from '.';

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

const QuizProvider: FC<QuizProviderProps> = ({ data, children }) => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
    const [finished, setFinished] = useState<boolean>(false);
    const [rewardCollected, setRewardCollected] = useState<string | number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedIndex = localStorage.getItem(LOCALSTORAGE_KEYS.CURRENT_QUESTION);
        const savedReward = localStorage.getItem(LOCALSTORAGE_KEYS.REWARD);
        if (savedIndex) {
            setActiveQuestion(parseInt(savedIndex));
        }
        if (savedReward) {
            setRewardCollected(savedReward);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (activeQuestion !== null) {
            localStorage.setItem(LOCALSTORAGE_KEYS.CURRENT_QUESTION, activeQuestion.toString());
            if (activeQuestion !== 0) {
                setRewardCollected(data[activeQuestion - 1].reward);
                localStorage.setItem(LOCALSTORAGE_KEYS.REWARD, data[activeQuestion - 1].reward.toString());
            }
        } else {
            localStorage.removeItem(LOCALSTORAGE_KEYS.CURRENT_QUESTION);
            localStorage.removeItem(LOCALSTORAGE_KEYS.REWARD);
        }
    }, [activeQuestion]);

    const tryAgain = () => {
        setFinished(false);
        setActiveQuestion(null);
        setRewardCollected(0);
    };

    if (loading) {
        return (
            <Loader
                customStyle={{
                    width: '100%',
                    minHeight: '100vh',
                }}
            />
        );
    }

    return (
        <QuizContext.Provider
            value={{
                activeQuestion,
                setActiveQuestion,
                finished,
                setFinished,
                rewardCollected,
                setRewardCollected,
                data,
                tryAgain,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};

const useQuizContext = () => useContextWithCheck(QuizContext);

export { QuizProvider, useQuizContext };
