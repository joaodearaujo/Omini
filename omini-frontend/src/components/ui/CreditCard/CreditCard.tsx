import type { CreditCardProps } from "./CreditCard.type";

import CreditCardContent from "./components/CardContent";

const STYLE = {
  CARD_LAYOUT: 'flex-shrink-0 min-w-[360px] max-w-[420px] aspect-[1.58/1] flex items-start justify-around p-6',
  CARD_THEME: `rounded-3xl cursor-default transition cursor-default`,
  CARD_ANIMATION: `transition-all ease-in-out duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/15`,
}
 
const CreditCard = ({creditCard}: CreditCardProps) => {
  return (
        <article className={`${STYLE.CARD_LAYOUT} 
                         ${STYLE.CARD_THEME}
                         ${STYLE.CARD_ANIMATION}`}

                          style={{backgroundColor: `${creditCard.color}`}}
            >
            <CreditCardContent  {...creditCard}/>
        </article>
  )
}

export default CreditCard;