import FloatingCard from "../../../components/ui/FloatingCard/FloatingCard"
import type { StatusCardProps } from "../Mycards.type"
import { GlassWater } from "lucide-react"


const STYLE = {
    container: 'flex flex-col w-full h-[100px] justify-between',
    headerWrapper: 'flex  items-center  justify-between',
    title: 'font-semibold text-[#404040] ',
    icon: {iconSize: 18, iconClass: 'text-[#404040]'},
    contentWrapper: 'flex flex-col gap-2',
    amount: 'font-semibold',
    description: 'font-light text-[#404040]',

}

const StatusCard = ({title, amount, description}: StatusCardProps) => {

    const Icon = GlassWater

  return (  
    <FloatingCard>
        <div className={STYLE.container}>
            <div className={STYLE.headerWrapper}>
                <small className={STYLE.title}>{title}</small>
                
                <Icon size={STYLE.icon.iconSize} className={STYLE.icon.iconClass}></Icon>
            </div>

            <div className={STYLE.contentWrapper}>
                <strong className={STYLE.amount}>{`R$ ${amount}`}</strong>
                <small className={STYLE.description}>{description}</small>
            </div>
        </div>
    </FloatingCard>
)
}

export default StatusCard
