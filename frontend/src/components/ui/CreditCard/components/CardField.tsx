import type { CardFieldProps } from "../CreditCard.type"

const STYLE = {
    wrapper: 'flex flex-col gap-1',
    label: 'w-fit text-[10px] uppercase tracking-wider font-medium',
    value: 'text-[14px] text-nowrap w-fit max-w-[180px] font-light capitalize truncate',
}

const CardField = ({label = 'label', value ='value'}: CardFieldProps) => {

    return (
        <div className={STYLE.wrapper}>
            <p className={STYLE.label}>{label}</p>
            <p className={STYLE.value}>{value}</p>
        </div>
    )
}

export default CardField