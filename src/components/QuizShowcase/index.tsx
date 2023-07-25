import { QuizType } from "@/shared/types";
import { QuizCard } from "../QuizCard";

export function QuizShowcase({ quizes,size }: { quizes: {name:string,slug:string}[],size:number }) {

    return (
        <div className={`flex flex-row w-full p-4 gap-4 grid-flow-row grid-cols-${size}`}>
            {
                quizes.map((quiz) => (
                    <QuizCard quiz={quiz} />
                ))
            }
        </div>
    )
}