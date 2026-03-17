import type { CreditCardContentProps } from "../CreditCard.type";
import CardField from "./CardField";

const STYLE = {
    wrapper: 'flex-1 w-full h-full flex flex-col justify-between text-white',
    bank: 'font-medium capitalize tracking-wide',
    flag: 'text-[14px] font-light opacity-75 uppercase tracking-wider',
    number: 'text-[24px] font-medium truncate tracking-wider',
}

const labelOne = 'Owner';
const labelTwo = 'Expiration Date';

const CreditCardContent = ({bank = 'bank',
                            flag = 'flag',
                            owner = 'Name', 
                            number =  '0000 0000 0000 000',
                            date = '00/00'} : CreditCardContentProps ) => {

    return (
        <div className={STYLE.wrapper}>
            <div>
                <p className={STYLE.bank}>{bank}</p>
                <p className={STYLE.flag}>{flag}</p>
            </div>
            
            <p className={STYLE.number}>{number}</p>

            <div className="w-full flex gap-8">
                <CardField label={labelOne} value={owner}/>
                <CardField label={labelTwo} value={date}/>
            </div>
        </div>
    )
}

export default CreditCardContent;