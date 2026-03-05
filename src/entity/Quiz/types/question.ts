export type Question = {
    question: string;
    answers: Answer[];
    reward: string | number;
};

export type Answer = {
    id: string;
    answer: string;
    isCorrect?: boolean;
};
