import { AnswerType } from "@/shared/types";


export function Answer({ answer, onClick}: {answer:string; onClick: () => void;}) {
    return(
        <div onClick={() => onClick} className="flex bg-primary flex-1 bg-light p-4 items-center justify-center flex-row text-center rounded shadow-xl hover:shadow-2xl hover:scale-110 w-full hover:scale-1.2">
            <div className="text-center  ">
                {answer}
            </div>
            <div>

            </div>
        </div>
    );
}