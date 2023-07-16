import { QuizType } from "@/shared/types";
import { useRouter } from "next/router";

export function QuizCard({ quiz }: { quiz:QuizType}) {
    const router = useRouter();

    return (
        <div key={quiz.id} onClick={() => router.push(`quiz/${quiz.slug}`)} className="flex-1 flex flex-col bg-secondary rounded  shadow-2xl hover:scale-110">
            <div  className="flex-5">{quiz.title}</div>
            <div className="flex-1 bt-1">{quiz.creator.username}</div>
        </div>
    );
}