import CreditCard from "../../../ui/CreditCard/CreditCard";
import FloatingCard from "../../../ui/FloatingCard/FloatingCard";
import CardFallback from "./CardFallback";

const STYLE = {
    cardsWrapper: 'max-w-full min-w-0 h-fit flex py-4 px-1 gap-4 justify-between overflow-x-auto',
}

type Banks =  'Nubank' | 'Santander' | 'Inter' | 'BTG Pactual';
type Flags =  'Mastercard' | 'Visa' | 'American Express';


export interface CardInfoProps {
    id: string;
    owner: string;
    bank: Banks;
    flag: Flags;
    number: string;
    date: string;
    color: string;
}

interface CardListProps {
    creditCards: CardInfoProps[];
    isLoading: boolean;
}

const CardsList = ({creditCards, isLoading}: CardListProps) => {

    if (isLoading) return <FloatingCard><p className="text-white">Loading goals...</p></FloatingCard>;

    const totalSlots = 4;
    const slotsAvailabe  = Array.from({ length:  totalSlots - creditCards.length});
    
  return (
    <FloatingCard>
        <section className={STYLE.cardsWrapper}>
            {creditCards.map(card => (<div className="group:hover bg-white"> 
                                        <CreditCard key={card.id} creditCard={card}/>
                                     </div> ))}

            {slotsAvailabe.map(() => ( <CardFallback /> ))}
        </section>
    </FloatingCard>
  )
}


export default CardsList;