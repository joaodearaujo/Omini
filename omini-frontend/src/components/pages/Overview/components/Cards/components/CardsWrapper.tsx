import CardSection from "./CardSection";
import Divider from "../../../../../ui/Divider/Divider";
import BalanceStatus from "./BalanceStatus";
import useCardsNavigation from "../../../../../../hooks/useCardNavigation";
import { MOCK_CARDS } from "../../../../../mock/MOCK_CARDS";

const STYLE = {container: 'flex h-full gap-4'};

const CardsWrapper = () => {
  const {currentCard, nextIndex, prevIndex } = useCardsNavigation(MOCK_CARDS);

  return (
    <article className={STYLE.container} >
        <CardSection currentCard={currentCard} nextIndex={nextIndex} prevIndex={prevIndex}/>
        <Divider />
        <BalanceStatus currentCard={currentCard}/>        
    </article>
  )
};

export default CardsWrapper;
