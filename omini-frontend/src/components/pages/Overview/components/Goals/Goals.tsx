import GoalsCard from "../../../../ui/GoalsCard/GoalsCard";
import FloatingCard from "../../../../ui/FloatingCard/FloatingCard";
import type { GoalCardProps } from "../../../../ui/GoalsCard/GoalsCard";
import Fallback from "../../../../ui/Fallback/Fallback";
import { Goal } from "lucide-react";

export interface GoalsProps {
    goals: GoalCardProps[],
}

const STYLE = {
    container: 'flex max-h-full items-center',
    goalsWrapper: 'w-full h-[280px] min-h-0 flex flex-col gap-4 overflow-y-auto px-2 no-scrollbar',
    goalCard: 'min-w-[180px] min-h-[240px] shrink-0 flex flex-1 flex'
}

const Goals = ({ goals }: GoalsProps) => {

    if (goals.length === 0) {
    return <Fallback title="Goals" icon={Goal} text="You don't have any goal. Create a new one!"/>
   }

   return ( <FloatingCard title="Goals">
            <article className={STYLE.goalsWrapper}>
                {goals.map(goal => <GoalsCard {...goal}/>)}
            </article>        
    </FloatingCard>
)};

export default Goals;
