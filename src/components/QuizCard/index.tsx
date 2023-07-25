import { QuizType } from "@/shared/types";
import Image from "next/image";
import { useRouter } from "next/router";

export function QuizCard({ quiz }: { quiz: {name:string,slug:string} }) {
    const router = useRouter();

    return (
        <div key={quiz.name} onClick={() => router.push(`quiz/${quiz.slug}`)} className="flex-1 flex flex-col bg-secondary rounded  shadow-2xl hover:scale-110 rounded-2xl bg-white">
            <Image className=" rounded-t-lg" width={240} height={360} src={'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'} alt={`${quiz.name} image`} />
            <div className="flex-5 text-center">{quiz.name}</div>
        </div>
    );
}