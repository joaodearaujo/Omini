import type { CreditCardProps } from "./CreditCard.type";

import CreditCardContent from "./components/CardContent";

const STYLE = {
  CARD_LAYOUT: 'flex-shrink-0 min-w-[360px] max-w-[420px] aspect-[1.58/1] flex items-start justify-around p-6',
  CARD_THEME: `rounded-3xl cursor-default shadow-lg transition cursor-default`,
}
 
const CreditCard = ({creditCard}: CreditCardProps) => {
  return (
        <article className={`${STYLE.CARD_LAYOUT} 
                         ${STYLE.CARD_THEME}`}

                          style={{backgroundColor: `${creditCard.color}`}}
            >
            <CreditCardContent  {...creditCard}/>
        </article>
  )
}

export default CreditCard;