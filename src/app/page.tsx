import QuizView from '@/entity/Quiz/ui/quiz-view/QuizView';
import styles from './page.module.css';
import { getQuizData } from '@/entity/Quiz/lib/getQuizData';

export default async function Home() {
    const questions = await getQuizData();

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <QuizView questions={questions} />
            </main>
        </div>
    );
}
