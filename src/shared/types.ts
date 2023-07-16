export type QuestionType = {
    question: string;
    options: string[];
}

export type QuizType = {
    questions: QuestionType[];
    title:string;
    id:number;
    slug:string;
    creator: {
      id:number;
      username:string;
      password:string;
    }
}