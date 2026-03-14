import type { CardInfo } from "../CreditCard.type";
import CardField from "./CardField";

const CreditCardContent = ({bank = 'bank', flag = 'flag', owner = 'Name', number =  '**** **** **** ****', date = '00/00'} : CardInfo) => {

    return (
        <div className="flex-1 max-w-full flex p-2 flex-col justify-between text-white">
            <div>
                <p className="font-semibold capitalize">{bank}</p>
                <p className="text-[12px] opacity-75 uppercase">{flag}</p>
            </div>
            
            <p className="text-[32px] font-semibold truncate">{number}</p>

            <div className="max-w-full flex gap-6">
                <CardField label="Owner" value={owner}/>
                <CardField label="Expiration Date" value={date}/>
            </div>
        </div>
    )
}

export default CreditCardContent;