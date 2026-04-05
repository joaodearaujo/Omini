import CreditCard from "../../../ui/CreditCard/CreditCard";
import { MOCK_CARDS } from "../../../mock/MOCK_CARDS";

const STYLE = {
    container: 'w-full h-fit flex flex-col gap-8',
    cardsWrapper: 'max-w-full min-w-0 h-fit flex gap-2 justify-center',
}



const CardsWrapper = () => {


  return (
    <div className={STYLE.container}>
      <div className={STYLE.cardsWrapper}>
          {MOCK_CARDS.map((card) => {
            return (
              <CreditCard key={card.id} creditCard={card}/>
            )
          })}
      </div>
    </div>
  )
}

export default CardsWrapper
