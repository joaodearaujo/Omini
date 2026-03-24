import FloatingCard from "../../../components/ui/FloatingCard/FloatingCard"
import type { StatusCardProps } from "../Mycards.type"


const StatusCard = ({title, amount, description}: StatusCardProps) => {
  return (  
    <FloatingCard>
        <div className="flex flex-col w-full h-[100px] justify-between">
            <div>
                <small>{title}</small>
            </div>

            <div className="flex flex-col gap-2">
                <strong>{amount}</strong>
                <small>{description}</small>
            </div>
        </div>
    </FloatingCard>
)
}

export default StatusCard
