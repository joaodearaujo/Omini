import type { CardFieldProps } from "../CreditCard.type"

const STYLE = {
    wrapper: 'flex flex-col items-start gap-1',
    label: 'w-fit text-[10px] uppercase tracking-wider font-regular opacity-75',
    value: 'text-[14px] uppercase  w-fit max-w-[180px] font-medium truncate',
}

const CardField = ({label = 'label', value ='value'}: CardFieldProps) => {

    return (
        <div className={STYLE.wrapper}>
            <small className={STYLE.label}>{label}</small>
            <small className={STYLE.value}>{value}</small>
        </div>
    )
}

export default CardField