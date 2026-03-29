import type { CreditCardContentProps } from "../CreditCard.type";
import CardField from "./CardField";

const STYLE = {
    wrapper: "flex-1 flex-shrink-0 h-full flex flex-col justify-between text-white",
    bank: 'font-medium uppercase tracking-wide',
    flag: 'text-[14px] font-light opacity-75 uppercase tracking-wider',
    number: 'text-[18px] font-medium truncate tracking-widest',
}

const CARDS_LABELS  = [
    {label: 'Owner'},
    {label: 'Expiry Date'}
]

const CreditCardContent = ({bank = 'Nubank', flag = 'Mastercard', owner = 'Name', number =  '0000 0000 0000 000', date = '00/00'} : CreditCardContentProps ) => {
    return (
        <div className={STYLE.wrapper}>
            <div className="flex items-cente justify-between">
                <strong className={STYLE.bank}>{bank}</strong>
                <small className={STYLE.flag}>{flag}</small>
            </div>
            
            <span className={STYLE.number}>{number}</span>

            <div className="w-full flex justify-between">
                {CARDS_LABELS.map((item) => <CardField label={item.label} 
                                                       value={item.label === 'Owner' ? owner : date}/>)}
            </div>
        </div>
    )
}

export default CreditCardContent;