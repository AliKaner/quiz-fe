export type QuestionType = {
    question: string;
    options: string[];
}

export type QuizType = {
    questions: QuestionType[];
}