import type { CardInfo } from "../../../../features/Cards/Cards.type";
import CardField from "./CardField";

const STYLE = {
    container: 'flex-1 w-full h-full flex flex-col justify-between text-white',
    bank: 'font-medium capitalize tracking-wide',
    flag: 'text-[14px] font-light opacity-75 uppercase tracking-wider',
    number: 'text-[24px] font-medium truncate tracking-wider',
}

const CreditCardContent = ({bank = 'bank', flag = 'flag', owner = 'Name', number =  '**** **** **** ****', date = '00/00'} : CardInfo) => {

    return (
        <div className={STYLE.container}>
            <div>
                <p className={STYLE.bank} >{bank}</p>
                <p className={STYLE.flag}>{flag}</p>
            </div>
            
            <p className={STYLE.number}>{number}</p>

            <div className="w-full flex gap-8">
                <CardField label="Owner" value={owner}/>
                <CardField label="Expiration Date" value={date}/>
            </div>
        </div>
    )
}

export default CreditCardContent;