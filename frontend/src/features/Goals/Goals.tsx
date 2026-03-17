
import type { GoalCardProps } from "./Goals.type"
import type { GoalsProps } from "./Goals.type";
import { Mountain, Brush, Gamepad2, HandCoins} from "lucide-react";
import GoalGButtonNav from "./components/GoalGButtonNav";

const STYLE = {
    container: 'w-full h-full flex gap-4 overflow-x-auto overflow-hidden relative px-4',
    goalCard: 'min-w-[200px] h-[250px] flex flex-1 flex-col p-6 rounded-4xl shadow-xs border-1 border-black/10 justify-between',
}


 const CATEGORY_GOALS: Record<string, React.ElementType> = {
    Holidays: Mountain,
    Renovation: Brush,
    Gaming: Gamepad2,
    Savings: HandCoins,
};

const GoalCard = ({value = 234, date ='10/12/30', label= 'label'}: GoalCardProps) => {

    const Icon = CATEGORY_GOALS[label];

    return (
        <div className={STYLE.goalCard}>
            <div className="w-full h-fit flex flex-col gap-2">
                <p className="text-[24px] font-medium text-[#696969] truncate whitespace-nowrap">{`R$ ${value}`}</p>
                <p className="text-[18px] text-[#AEAEAE] font-light">{date}</p>
            </div>

            <div className="flex flex-col w-full gap-2 ">
                <Icon size={32}></Icon>
                <p className="text-[20px] font-regular text-[#404040]">{label}</p>
            </div>
        </div>
    )
}

const Goals = ({goals}: GoalsProps) => {
  return (
    <div className="flex items-center justify-center pr-8">
        <GoalGButtonNav/>

        

        <div className={STYLE.container}>
            {goals.map((goal) => {

                return (
                    <GoalCard {...goal}/>
                )
            })}
        </div>
    </div>
    )
}

export default Goals;
