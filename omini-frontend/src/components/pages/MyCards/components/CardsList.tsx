import CreditCard from "../../../ui/CreditCard/CreditCard";
import FloatingCard from "../../../ui/FloatingCard/FloatingCard";

const STYLE = {
    cardsWrapper: 'max-w-full min-w-0 h-fit flex gap-2 justify-between',
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

    if (!Array.isArray(creditCards) || creditCards.length === 0) {
        return (
            <FloatingCard>
                <p className="text-gray-500">No Cards found.</p>
            </FloatingCard>
        );
    }
  return (
      <section className={STYLE.cardsWrapper}>
          {creditCards.map((card) => (<CreditCard key={card.id} creditCard={card}/>))}
      </section>
  )
}

export default CardsList;