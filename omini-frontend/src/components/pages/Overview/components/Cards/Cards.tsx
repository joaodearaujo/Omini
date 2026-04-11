import CardsWrapper from "./components/CardsWrapper"
import FloatingCard from "../../../../ui/FloatingCard/FloatingCard"
import type { CardInfoProps } from "../../../../ui/CreditCard/CreditCard.type";

interface CardsProps {
currentCard: CardInfoProps;
  nextIndex: () => void;
  prevIndex: () => void;
}

const Cards = ({currentCard, nextIndex, prevIndex}: CardsProps) => (
    <FloatingCard title="Cards">
      <CardsWrapper  currentCard={currentCard} nextIndex={nextIndex} prevIndex={prevIndex}/>
    </FloatingCard>
  );

export default Cards
