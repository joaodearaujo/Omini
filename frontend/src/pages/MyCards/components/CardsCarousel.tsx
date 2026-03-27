import CreditCard from "../../../components/ui/CreditCard/CreditCard";
import { MOCK_CARDS } from "../../../mock/MOCK_CARDS";


const STYLE = {
    container:  'w-full h-fit flex flex-col gap-8',
    header: 'max-w-full flex justify-between items-center',
    sectionTitle:  'font-medium text-[18px]',
    button:  'bg-black text-white rounded-xl py-2 px-3 cursor-pointer',
    cardsWrapper: 'max-w-full min-w-0 h-fit flex gap-4 overflow-x-auto justify-center',
}


const sectionTitle = 'My Cards';
const buttonName = '+ Add Card';

const CardsCarousel = () => {

  return (
    <div className={STYLE.container}>
      <div className={STYLE.header}>
        <h3 className={STYLE.sectionTitle}>{sectionTitle}</h3>
        <button className={STYLE.button}>{buttonName}</button>
      </div>
      
      <div className={STYLE.cardsWrapper}>
          {MOCK_CARDS.map((card) => {
            return (
              <CreditCard creditCard={card}/>
            )
          })}
      </div>
    </div>
  )
}

export default CardsCarousel
