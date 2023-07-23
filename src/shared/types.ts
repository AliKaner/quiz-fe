export type QuestionType = {
    question: string;
    options: string[];
}

export type QuizType = {
    questions: QuestionType[];
    title:string;
    id:number;
    slug:string;
    password?:string;
    creator: {
      id:number;
      username:string;
      password:string;
    }
}