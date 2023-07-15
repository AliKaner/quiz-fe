import { AnswerType, QuestionType } from "@/shared/types";
import { Answer } from "../Answer";


export function Question({ question }: { question:QuestionType}) {

    const answerClickHandle = () => {
        console.log("answer click handle");
    }
    return (
        <div className="flex flex-col items-center">
            <div>
                {question.text}
            </div>
            <div className="flex flex-row">
                {question.answers.map((answer, index) => (
                    <Answer key={index} onClick={answerClickHandle} answer={answer} />
                ))}
            </div>
        </div>
    );
}
