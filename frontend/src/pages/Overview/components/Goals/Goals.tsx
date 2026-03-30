import type { GoalsProps } from "./Goals.type";
import GoalsCard from "../../../../components/ui/GoalsCard/GoalsCard";
import FloatingCard from "../../../../components/ui/FloatingCard/FloatingCard";

const STYLE = {
    container: 'flex max-h-full items-center',
    goalsWrapper: 'w-full h-[260px] min-h-0 flex flex-col gap-4 overflow-y-auto px-2 no-scrollbar',
    goalCard: 'min-w-[180px] min-h-[240px] shrink-0 flex flex-1 flex'
}

const Goals = ({goals}: GoalsProps) => {

  return (   
    <FloatingCard title="Goals">
        <div className={STYLE.container}  >
            <div className={STYLE.goalsWrapper}>
                {goals.map((goal) => {
                    return (
                        <GoalsCard key={goal.id}{...goal}/>
                        )
                    })}
            </div>        
        </div>
    </FloatingCard>
    )
}

export default Goals;
