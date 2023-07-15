export function Percentage({value}: {value:number}) {
    return (
        <div className={`${value > 50 ? "green" : "red"}`}>
          `% ${value}`
        </div>
      );
      
}