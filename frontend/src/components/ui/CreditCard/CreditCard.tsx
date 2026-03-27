import type { CreditCardProps } from "./CreditCard.type";

import CreditCardContent from "./components/CardContent";

const STYLE = {
  CARD_LAYOUT: 'flex-shrink-0 min-w-[360px] max-w-[420px] aspect-[1.58/1] flex items-start justify-around p-6',
  CARD_THEME: `rounded-3xl cursor-default shadow-md transition`,
  CARD_INTERACTION: 'transition ease-in-out duration-400 hover:scale-101',
}
 
const CreditCard = ({creditCard}: CreditCardProps) => {

  return (
        <div className={`${STYLE.CARD_LAYOUT} 
                         ${STYLE.CARD_THEME} 
                         ${STYLE.CARD_INTERACTION}`}

                         style={{backgroundColor: `${creditCard.color}`}}
            >
            <CreditCardContent  bank={creditCard.bank}
                                flag={creditCard.flag}
                                owner={creditCard.owner}
                                number= {creditCard.number}
                                date={creditCard.date}
                                />
        </div>
  )
}

export default CreditCard;