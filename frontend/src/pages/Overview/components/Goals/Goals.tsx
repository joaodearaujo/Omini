import type { GoalsProps } from "./Goals.type";
import GoalGButtonNav from "./components/GoalsGButtonNav";
import GoalsCard from "./components/GoalsCard";
import useGoalsNavigation from "../../../../hooks/useGoalsNavigation";
import FloatingCard from "../../../../components/ui/FloatingCard/FloatingCard";

const STYLE = {
    container: 'flex max-h-full items-center',
    goalsWrapper: 'w-full h-full flex gap-4 overflow-x-auto px-2 no-scrollbar',
    goalCard: 'min-w-[180px] min-h-[240px] shrink-0 flex flex-1 flex'
}

const Goals = ({goals}: GoalsProps) => {

    const {goalsRef, goalsScrollNext, goalsScrollPrevious} = useGoalsNavigation()

  return (   
    <FloatingCard title="Goals" style={{backgroundColor: 'transparent', border: 'none'}}>
        <div className={STYLE.container}  >
            <GoalGButtonNav  onClick={goalsScrollPrevious}/>

            <div className={STYLE.goalsWrapper} ref={goalsRef}>
                {goals.map((goal) => {
                    return (
                        <GoalsCard key={goal.id}{...goal}/>
                        )
                    })}
            </div>
            
            <GoalGButtonNav isRight onClick={goalsScrollNext}/>
        </div>
    </FloatingCard>
    )
}

export default Goals;
