import { QuizType } from "@/shared/types";
import { QuizCard } from "../QuizCard";

export function QuizShowcase({ quizes, }: { quizes: QuizType[] }) {

    return (
        <div className="flex flex-row w-full p-4 gap-4">
            {
                quizes.map((quiz) => (
                    <QuizCard quiz={quiz} />
                ))
            };
        </div>
    )
}