
export function NextButton({text, onClick}: {text:string; onClick:() => void;}) {
    return(
        <div onClick={() => onClick} className="ml-auto">
            {text}
        </div>
    );
}