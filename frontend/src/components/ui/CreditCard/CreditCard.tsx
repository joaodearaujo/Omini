import type { CreditCardProps, FieldProps } from "./CreditCard.type";

const CARD_LAYOUT = 'w-full max-w-[360px] aspect-[1.58/1] flex flex-col items-start justify-around p-4';
const CARD_THEME = 'rounded-4xl bg-linear-to-r cursor-pointer shadow-md from-[#197BBD] to-[#3391D0]'
const CARD_INTERACTION = 'transition ease-in-out duration-400 hover:scale-102'

const CardField = ({label, value}: FieldProps) => {
    return (
        <div className="">
            <p className="text-nowrap text-[10px] opacity-70 uppercase tracking-wider font-medium">{label?? 'empty'}</p>
            <p className="text-[14px] font-medium capitalize truncate">{value?? 'none'}</p>
        </div>
    )
}

const CreditCardContent = ({bank, flag, number, owner, date} : CreditCardProps) => {
    return (
        <div className="flex-1 max-w-full flex flex-col justify-between text-white">
            <div>
                <p className="font-semibold capitalize">{bank?? 'bank'}</p>
                <p className="text-[12px] opacity-75 uppercase">{flag?? 'flag'}</p>
            </div>
            
            <p className="text-[32px] font-semibold truncate">{number?? '**** **** **** ****'}</p>

            <div className="max-w-full flex gap-6">
                <CardField label="Owner" value={owner}/>
                <CardField label="Expiration Date" value={date}/>
            </div>
        </div>
    )
}

const CreditCard = ({bank, flag, number, owner, date}: CreditCardProps) => {
  return (
        <div className={`${CARD_LAYOUT} ${CARD_THEME} ${CARD_INTERACTION}`}>
            <CreditCardContent 

            bank={bank}
            flag={flag}
            number={number}
            owner={owner}
            date={date}
            />

        </div>
  )
}

export default CreditCard
