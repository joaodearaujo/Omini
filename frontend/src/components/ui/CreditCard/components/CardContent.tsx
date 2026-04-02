import type { CreditCardContentProps } from "../CreditCard.type";
import CardField from "./CardField";

const STYLE = {
    wrapper: "flex-1 flex-shrink-0 h-full flex flex-col justify-between text-white",
    bank: 'font-medium uppercase tracking-wide',
    flag: 'text-[14px] font-light opacity-75 uppercase tracking-wider',
    number: 'text-[18px] font-medium truncate tracking-widest',
}

const CARDS_LABELS  = [
    {id: 'owner', label: 'Owner'},
    {id: 'expiryDate', label: 'Expiry Date'}
]

const CreditCardContent = ({bank = 'Nubank', flag = 'Mastercard', owner = 'Name', number =  '0000 0000 0000 000', date = '00/00'} : CreditCardContentProps ) => {
    return (
        <div className={STYLE.wrapper}>
            <header className="flex items-cente justify-between">
                <strong className={STYLE.bank}>{bank}</strong>
                <small className={STYLE.flag}>{flag}</small>
            </header>
            
            <p className={STYLE.number}>{number}</p>

            <footer className="w-full flex justify-between">
                {CARDS_LABELS.map((item) => <CardField key={item.id} label={item.label} 
                                                       value={item.label === 'Owner' ? owner : date}/>)}
            </footer>
        </div>
    )
}

export default CreditCardContent;