import type { CreditCardProps } from "./CreditCard.type";

import CreditCardContent from "./components/CardContent";

const CARD_LAYOUT = 'w-full max-w-[360px] aspect-[1.58/1] flex flex-col items-start justify-around p-6';
const CARD_THEME = 'rounded-4xl bg-linear-to-r cursor-pointer shadow-md from-[#197BBD] to-[#3391D0]'
const CARD_INTERACTION = 'transition ease-in-out duration-400 hover:scale-102'


const CreditCard = ({card}: CreditCardProps) => {
  return (
        <div className={`${CARD_LAYOUT} ${CARD_THEME} ${CARD_INTERACTION}`}>
            <CreditCardContent {...card}/>
        </div>
  )
}

export default CreditCard
