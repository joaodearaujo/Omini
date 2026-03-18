import type { CreditCardProps } from "./CreditCard.type";

import CreditCardContent from "./components/CardContent";

const STYLE = {
  CARD_LAYOUT: 'w-[360px] aspect-[1.58/1] flex items-start justify-around p-6',
  CARD_THEME: `rounded-4xl cursor-default shadow-sm transition`,
  CARD_INTERACTION: 'transition ease-in-out duration-400 hover:scale-101',
}
 
const CreditCard = ({card}: CreditCardProps) => {

  return (
        <div className={`${STYLE.CARD_LAYOUT} 
                         ${STYLE.CARD_THEME} 
                         ${STYLE.CARD_INTERACTION}`}

                         style={{backgroundColor : card.color}}
            >
            <CreditCardContent  bank={card.bank}
                                flag={card.flag}
                                owner={card.owner}
                                number= {card.number}
                                date={card.date}
                                />
        </div>
  )
}

export default CreditCard;