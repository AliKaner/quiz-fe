import { AnswerType } from "@/shared/types";


export function Answer({ answer, onClick}: {answer:AnswerType; onClick: () => void;}) {
    return(
        <div onClick={() => onClick} className="flex flex-row">
            <div>
                {answer.text}
            </div>
            <div>
                
            </div>
        </div>
    );
}