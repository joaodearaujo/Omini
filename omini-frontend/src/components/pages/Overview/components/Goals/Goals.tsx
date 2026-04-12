import GoalsCard from "../../../../ui/GoalsCard/GoalsCard";
import FloatingCard from "../../../../ui/FloatingCard/FloatingCard";
import type { GoalCardProps } from "../../../../ui/GoalsCard/GoalsCard";

export interface GoalsProps {
    goals: GoalCardProps[],
}

const STYLE = {
    container: 'flex max-h-full items-center',
    goalsWrapper: 'w-full h-[280px] min-h-0 flex flex-col gap-4 overflow-y-auto px-2 no-scrollbar',
    goalCard: 'min-w-[180px] min-h-[240px] shrink-0 flex flex-1 flex'
}

const Goals = ({ goals }: GoalsProps) => (
    <FloatingCard title="Goals">
            <article className={STYLE.goalsWrapper}>
                {goals.map(goal => <GoalsCard {...goal}/>)}
            </article>        
    </FloatingCard>
);

export default Goals;
