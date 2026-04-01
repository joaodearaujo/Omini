import CreditCard from "../../../components/ui/CreditCard/CreditCard";
import { MOCK_CARDS } from "../../../mock/MOCK_CARDS";
import SectionHeader from "../../../components/ui/SectionHeader/SectionHeader";

const STYLE = {
    container: 'w-full h-fit flex flex-col gap-8',
    cardsWrapper: 'max-w-full min-w-0 h-fit flex gap-4 overflow-x-auto justify-center',
}

const HEADER_CONFIG = {
 title: 'My Cards',
 button: '+ Add Card',
}

const CardsSection = () => {


  return (
    <div className={STYLE.container}>
      <SectionHeader title={HEADER_CONFIG.title} button={HEADER_CONFIG.button}/>

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

export default CardsSection
