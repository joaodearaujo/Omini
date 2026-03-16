import type { CardFieldProps } from "../../../../features/Cards/Cards.type"

const CardField = ({label = 'label', value ='value'}: CardFieldProps) => {
    return (
        <div className="flex flex-col gap-1">
            <p className="text-nowrap text-[10px] opacity-70 uppercase tracking-wider font-medium">{label}</p>
            <p className="text-[14px] ont-light capitalize truncate">{value}</p>
        </div>
    )
}

export default CardField