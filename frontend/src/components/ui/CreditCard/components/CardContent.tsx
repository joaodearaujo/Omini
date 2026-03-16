import type { CardInfo } from "../../../../features/Cards/Cards.type";
import CardField from "./CardField";

const CreditCardContent = ({bank = 'bank', flag = 'flag', owner = 'Name', number =  '**** **** **** ****', date = '00/00'} : CardInfo) => {

    return (
        <div className="flex-1 min-w-[300px] h-full max-h-[180px] flex flex-col  justify-between text-white">
            <div>
                <p className="font-medium capitalize">{bank}</p>
                <p className="text-[12px] font-light opacity-75 uppercase">{flag}</p>
            </div>
            
            <p className="text-[28px] font-medium truncate">{number}</p>

            <div className="max-w-full flex gap-6">
                <CardField label="Owner" value={owner}/>
                <CardField label="Expiration Date" value={date}/>
            </div>
        </div>
    )
}

export default CreditCardContent;