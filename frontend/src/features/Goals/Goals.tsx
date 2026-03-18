import type { GoalsProps } from "./Goals.type";
import GoalGButtonNav from "./components/GoalsGButtonNav";
import GoalsCard from "./components/GoalsCard";

const STYLE = {
    container: 'w-full h-full flex gap-4 overflow-x-auto overflow-hidden relative py-2 px-1 items-start ',
    goalCard: 'min-w-[180px] min-h-[240px] flex flex-1 flex-col justify-between p-6 rounded-4xl shadow-xs border-1 border-black/10 gap-6 transition hover:scale-102 cursor-default durations-600 ease-out',
}

const Goals = ({goals}: GoalsProps) => {
  return (  
    <div className="flex items-center gap-2">
        <div className={STYLE.container}>
            {goals.map((goal) => {
                
                return (
                    <GoalsCard {...goal}/>
                )
            })}
        </div>
        
        <GoalGButtonNav/>
    </div>
    )
}

export default Goals;
