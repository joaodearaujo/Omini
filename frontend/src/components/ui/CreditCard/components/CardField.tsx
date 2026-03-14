import type { CardFieldProps } from "../CreditCard.type"

const CardField = ({label = 'label', value ='value'}: CardFieldProps) => {
    return (
        <div className="">
            <p className="text-nowrap text-[10px] opacity-70 uppercase tracking-wider font-medium">{label}</p>
            <p className="text-[14px] font-medium capitalize truncate">{value}</p>
        </div>
    )
}

export default CardField