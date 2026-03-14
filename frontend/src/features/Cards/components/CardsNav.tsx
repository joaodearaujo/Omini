import type { CardNavProps } from "../Cards.type";
import CardNavButton from "./CardsNavButton";

const CardNav = ({children, nextIndex, prevIndex}: CardNavProps) => {


  return (
    <div className="flex gap-3 w-full items-center justify-between">
      <CardNavButton onClick={prevIndex}/>   
      {children}
      <CardNavButton isRight onClick={nextIndex} /> 
    </div>
  );
};

export default CardNav