import CreditCard from "../../../components/ui/CreditCard/CreditCard";
import { MOCK_CARDS } from "../../../mock/MOCK_CARDS";
import Form from "./Form";
import useFormVisibility from "../../../hooks/useFormVisibility";
import type { CardsSectionsHeaderProps } from "../Mycards.type";

const STYLE = {
    container:  'w-full h-fit flex flex-col gap-8',
    header: 'max-w-full flex justify-between items-center',
    sectionTitle:  'font-medium text-[18px]',
    button:  'bg-black text-white font-[500] rounded-xl py-2 px-3 cursor-pointer transition duration-400 hover:scale-104',
    cardsWrapper: 'max-w-full min-w-0 h-fit flex gap-4 overflow-x-auto justify-center',
}

const HEADER_CONFIG = {
 sectionTitle: 'My Cards',
 buttonName: '+ Add Card',
}

const CardsSectionHeader = ({onClick}: CardsSectionsHeaderProps) => {
  return (
      <div className={STYLE.header}>
        <h3 className={STYLE.sectionTitle}>{HEADER_CONFIG.sectionTitle}</h3>

        <button onClick={onClick} className={STYLE.button}>{HEADER_CONFIG.buttonName}</button>
      </div>
  )
}

const CardsSection = () => {

const { isFormVisible, toggleForm, closeForm} = useFormVisibility()

  return (
    <div className={STYLE.container}>
      <CardsSectionHeader onClick={toggleForm}/>

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
