# Who Wants to Be a Millionaire?

A web quiz game inspired by the classic TV show. Answer multiple-choice questions, climb the reward ladder, and see how much you can win. Progress is saved in the browser so you can continue later.

## Idea

- **Home screen** — Start the game with a single tap.
- **Questions** — One question at a time with four possible answers. Choose the correct one to advance and earn the question’s reward.
- **Rewards ladder** — A side panel shows the reward for each step; the current and passed steps are highlighted.
- **Score** — When the game ends (wrong answer or completion), you see your total score and can start again.
- **Persistence** — Current question index and earned reward are stored in `localStorage`, so refreshing the page or coming back later continues from where you left off.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) (App Router)
- **UI:** React 19, TypeScript
- **Styling:** CSS Modules, global CSS variables
- **Fonts:** [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Inter, Google Fonts)
- **Tooling:** ESLint, Prettier, Husky (pre-commit lint-staged)

## Architecture

The project is organized in a **feature-slice style**:

- **`src/app`** — Next.js App Router: root layout, global styles, and the main page that fetches quiz data and renders the quiz view.
- **`src/entity/Quiz`** — The quiz feature:
  - **`lib`** — Data loading (`getQuizData` reads questions from `public/data.json`).
  - **`types`** — `Question`, `Answer`, `Quiz` and related types.
  - **`contexts`** — `QuizProvider` and `useQuizContext` for game state (current question, finished, reward, `tryAgain`, etc.) and `localStorage` sync.
  - **`ui`** — Quiz UI: `QuizView`, `Step` (router between Home / Question / Score), `HomeView`, `QuestionView` (question + rewards), `QuestionStep`, `AnswerButton`, `Rewards`, `RewardsList`, `Score`, `ContentContainer`.
- **`src/shared`** — Reusable across features:
  - **`constants`** — e.g. `localStorage` keys.
  - **`fonts`** — Next.js font config (Inter).
  - **`hooks`** — e.g. `useMediaQuery` for responsive behavior.
  - **`icons`** — SVG icons (Hand, Close, Menu).
  - **`utils`** — Helpers (e.g. safe context access).
- **`src/ui`** — Generic UI building blocks: `Button`, `Loader`.
- **`src/styles`** — Global style layers (e.g. `preflight.css`).

Path alias `@/*` points to `src/*` (see `tsconfig.json`).

## Project Structure

```
src/
├── app/                    # Next.js app
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Home page: loads data, renders QuizView
│   ├── globals.css         # CSS variables, base styles
│   └── page.module.css
├── entity/
│   └── Quiz/
│       ├── lib/            # getQuizData
│       ├── types/          # question, quiz
│       ├── contexts/       # QuizProvider, useQuizContext
│       └── ui/             # QuizView, Step, HomeView, QuestionView, Score, etc.
├── shared/
│   ├── constants/
│   ├── fonts/
│   ├── hooks/
│   ├── icons/
│   └── utils/
├── ui/                     # Button, Loader
└── styles/                 # preflight, etc.
public/
├── data.json               # Quiz questions and rewards
└── favicon.ico
```

## Quiz Data Format

Questions are stored in `public/data.json` as a JSON array. Each item has:

- **`question`** (string) — The question text.
- **`reward`** (string | number) — Reward for that step (e.g. `"$500"`, `"$1,000"`).
- **`answers`** — Array of `{ "id": "A"|"B"|"C"|"D", "answer": string, "isCorrect"?: true }`. Exactly one answer per question should have `isCorrect: true`.

Example:

```json
{
  "question": "What is the smallest positive integer that is divisible by both 6 and 8?",
  "reward": "$1,000",
  "answers": [
    { "id": "A", "answer": "12" },
    { "id": "B", "answer": "24", "isCorrect": true },
    { "id": "C", "answer": "48" }
  ]
}
```

## Requirements

- **Node.js** 18+
- **yarn**, **npm**, or **pnpm**

## Getting Started

Install dependencies:

```bash
yarn install
# or: npm install / pnpm install
```

Run the development server:

```bash
yarn dev
# or: npm run dev / pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command       | Description                |
|---------------|----------------------------|
| `yarn dev`    | Start dev server           |
| `yarn build`  | Production build           |
| `yarn start`  | Start production server    |
| `yarn lint`   | Run ESLint                 |

Pre-commit (Husky) runs Prettier and ESLint on staged files.

## Deploy

You can deploy the app to [Vercel](https://vercel.com) or any platform that supports Next.js. See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
