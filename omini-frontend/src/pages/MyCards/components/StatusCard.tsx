import FloatingCard from "../../../components/ui/FloatingCard/FloatingCard"
import type { StatusCardProps } from "../Mycards.type"
import useCountUp from "../../../hooks/useCountUp"

const STYLE = {
    container: 'flex flex-col w-full h-[100px] justify-between',
    headerWrapper: 'flex  items-center  justify-between',
    title: 'font-[500] text-[#404040] ',
    icon: {iconSize: 18, iconClass: 'text-[#404040]'},
    contentWrapper: 'flex flex-col gap-2',
    amount: 'text-[24px] font-[500] w-[120px]',
    description: 'font-light text-[#404040]',
}

const StatusCard = ({title, amount, icon, description}: StatusCardProps) => {

    const options = {
        prefix: 'R$'
    }

    const { countRef } = useCountUp(amount, options)

    const Icon = icon

  return (  
    <FloatingCard>
        <article className={STYLE.container}>
            <header className={STYLE.headerWrapper}>
                <h5 className={STYLE.title}>{title}</h5>
                <Icon size={STYLE.icon.iconSize} className={STYLE.icon.iconClass}></Icon>
            </header>

            <div className={STYLE.contentWrapper}>
                <span ref={countRef} className={STYLE.amount}>0</span>
                <small className={STYLE.description}>{description}</small>
            </div>
        </article>
    </FloatingCard>
)
}

export default StatusCard
