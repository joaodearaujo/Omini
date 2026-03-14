import type { CreditCardProps } from "./CreditCard.type";

import CreditCardContent from "./components/CardContent";



const CreditCard = ({card}: CreditCardProps) => {

  const CARD_LAYOUT = 'min-w-[320px] max-w-[360px] aspect-[1.58/1] flex items-start justify-around p-6';
  const CARD_THEME = `rounded-4xl bg-linear-to-r cursor-pointer shadow-md border-1 border-black/10 transiton-colors`
  const CARD_INTERACTION = 'transition ease-in-out duration-400 hover:scale-102'

  return (
        <div className={`${CARD_LAYOUT} ${CARD_THEME} ${CARD_INTERACTION}`}
        style={{backgroundColor : card.color}}>
            <CreditCardContent {...card}/>
        </div>
  )
}

export default CreditCard
