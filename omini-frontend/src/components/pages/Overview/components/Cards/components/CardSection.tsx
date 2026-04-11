import CardNav from "./CardNav"
import CreditCard from "../../../../../ui/CreditCard/CreditCard"
import PaymentLimit from "./PaymentLimit"
import type { CardInfoProps } from "../../../../../ui/CreditCard/CreditCard.type"

const STYLE = { mainColumn: 'flex-1 flex max-h-full min-h-0 flex-col items-center justify-between gap-4'}

interface CardsSectionProps {
  currentCard: CardInfoProps;
  nextIndex: () => void;
  prevIndex: () => void;
}

const CardSection = ({currentCard, nextIndex, prevIndex}: CardsSectionProps) => (
 
    <section className={STYLE.mainColumn}>
        <CardNav nextIndex={nextIndex} prevIndex={prevIndex}>
            <CreditCard creditCard={currentCard}/>
        </CardNav>
        
        <PaymentLimit 
            limitUsage={currentCard.limitUsage}
            totalLimit={currentCard.totalLimit}
        />
    </section>
  );

export default CardSection;