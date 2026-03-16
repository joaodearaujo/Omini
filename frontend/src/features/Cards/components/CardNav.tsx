import type { CardNavProps } from "../Cards.type";
import CardNavButton from "./CardNavButton";

const STYLE = {
  container: 'flex gap-4 w-fit h-full items-center justify-center',
}

const CardNav = ({children, nextIndex, prevIndex}: CardNavProps) => {

  return (
    <div className={STYLE.container}>
      <CardNavButton onClick={prevIndex}/>   
        {children}
      <CardNavButton isRight onClick={nextIndex} /> 
    </div>
  );
};

export default CardNav;