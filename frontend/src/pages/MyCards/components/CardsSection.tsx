import CreditCard from "../../../components/ui/CreditCard/CreditCard";
import { MOCK_CARDS } from "../../../mock/MOCK_CARDS";
import Form from "./Form";
import useFormVisibility from "../../../hooks/useFormVisibility";
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

const { isFormVisible, toggleForm, closeForm} = useFormVisibility()

  return (
    <div className={STYLE.container}>
      <SectionHeader onClick={toggleForm} title={HEADER_CONFIG.title} button={HEADER_CONFIG.button}/>

      {isFormVisible && (<Form onClick={closeForm}/>)}

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
