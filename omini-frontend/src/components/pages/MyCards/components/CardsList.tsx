import CreditCard from "../../../ui/CreditCard/CreditCard";
import { MOCK_CARDS } from "../../../mock/MOCK_CARDS";

const STYLE = {
    cardsWrapper: 'max-w-full min-w-0 h-fit flex gap-2 justify-between',
}

const CardsList = () => {
  return (
      <section className={STYLE.cardsWrapper}>
          {MOCK_CARDS.map((card) => (<CreditCard key={card.id} creditCard={card}/>))}
      </section>
  )
}

export default CardsList
