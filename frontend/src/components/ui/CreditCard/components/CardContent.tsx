import type { CreditCardContentProps } from "../CreditCard.type";
import CardField from "./CardField";

const STYLE = {
    wrapper: "flex-1 flex-shrink-0 h-full flex flex-col justify-between text-white",
    bank: 'font-medium uppercase tracking-wide',
    flag: 'text-[14px] font-light opacity-75 uppercase tracking-wider',
    number: 'text-[18px] font-medium truncate tracking-widest',
}

const labelOne = 'Card Holder';
const labelTwo = 'Expires';

const CreditCardContent = ({bank = 'bank', flag = 'flag', owner = 'Name', number =  '0000 0000 0000 000', date = '00/00'} : CreditCardContentProps ) => {

    return (
        <div className={STYLE.wrapper}>
            <div className="flex items-cente justify-between">
     
                <strong className={STYLE.bank}>{bank}</strong>
                 <img className="w-[42px]" 
                     src="./mastercard.svg" 
                     alt="" />
            </div>
            
            <span className={STYLE.number}>{number}</span>

            <div className="w-full flex justify-between">
                <CardField 
                    label={labelOne} 
                    value={owner}
                />

                <CardField 
                    label={labelTwo}
                     value={date}
                />
            </div>
        </div>
    )
}

export default CreditCardContent;