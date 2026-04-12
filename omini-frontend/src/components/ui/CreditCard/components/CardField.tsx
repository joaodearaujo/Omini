import type { CardFieldProps } from "../CreditCard.type"

const STYLE = {
    wrapper: 'flex flex-col w-fit items-start gap-1',
    label: 'w-fit text-[10px] uppercase tracking-wider opacity-75',
    value: 'text-[12px] uppercase w-fit max-w-[180px] truncate',
}

const CardField = ({label = 'label', value ='value'}: CardFieldProps) => {
    return (
        <dl className={STYLE.wrapper}>
            <dt className={STYLE.label}>{label}</dt>
            <dd className={STYLE.value}>{value}</dd>
        </dl>
    )
}

export default CardField    