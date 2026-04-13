import CardSection from "./CardSection";
import Divider from "../../../../../ui/Divider/Divider";
import BalanceStatus from "./BalanceStatus";
import type { CardInfoProps } from "../../../../../ui/CreditCard/CreditCard.type";

interface CardsWrapperProps {
  currentCard: CardInfoProps;
  nextIndex: () => void;
  prevIndex: () => void;
}

const STYLE = {container: 'flex h-full gap-4'};

const CardsWrapper = ({currentCard, nextIndex, prevIndex}: CardsWrapperProps) => (
    <article className={STYLE.container} >
        <CardSection currentCard={currentCard} nextIndex={nextIndex} prevIndex={prevIndex}/>
        <Divider />
        <BalanceStatus currentCard={currentCard}/>        
    </article>
);

export default CardsWrapper;
