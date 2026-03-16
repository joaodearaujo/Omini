import type { CreditCardProps } from "../../../features/Cards/Cards.type";

import CreditCardContent from "./components/CardContent";

const CARD_LAYOUT = 'w-[360px] aspect-[1.58/1] flex items-start justify-around p-6';
const CARD_THEME = `rounded-4xl cursor-default shadow-sm transiton-colors`;
const CARD_INTERACTION = 'transition ease-in-out duration-400 hover:scale-101';

const CreditCard = ({card}: CreditCardProps) => {

  return (
        <div className={`${CARD_LAYOUT} ${CARD_THEME} ${CARD_INTERACTION}`}
        style={{backgroundColor : card.color}}>
            <CreditCardContent {...card}/>
        </div>
  )
}

export default CreditCard;