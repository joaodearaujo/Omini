import type { GoalsProps } from "./Goals.type";
import GoalGButtonNav from "./components/GoalsGButtonNav";
import GoalsCard from "./components/GoalsCard";
import useGoalsNavigation from "../../../../hooks/useGoalsNavigation";

const STYLE = {
    container: 'w-full h-full flex gap-4 overflow-x-auto p-2 no-scrollbar',
    goalCard: 'min-w-[180px] min-h-[240px] shrink-0 flex flex-1 flex'
}

const Goals = ({goals}: GoalsProps) => {

    const {goalsRef, goalsScrollNext, goalsScrollPrevious} = useGoalsNavigation()

  return (  
    <div className="flex max-h-full items-center gap-3"  >
        <GoalGButtonNav  onClick={goalsScrollPrevious}/>

        <div className={STYLE.container} ref={goalsRef}>
            {goals.map((goal) => {
                return (
                    <GoalsCard key={goal.id}{...goal}/>
                    )
                })}
        </div>
        
        <GoalGButtonNav isRight onClick={goalsScrollNext}/>
    </div>
    )
}

export default Goals;
