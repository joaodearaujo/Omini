import type { GoalCardProps } from "../Goals.type";
import { Mountain, Brush, Gamepad2, HandCoins} from "lucide-react";

const STYLE = {
    goalCard: 'min-w-[180px] min-h-[240px] flex flex-1 flex-col justify-between p-6 rounded-4xl shadow-xs border-1 border-black/10 gap-6 transition hover:scale-102 cursor-default duration-600 ease-out',
    upWrapper: 'w-full h-fit flex flex-col gap-2',
    value: 'text-[24px] font-medium text-[#696969] truncate whitespace-nowrap',
    date: 'text-[18px] text-[#AEAEAE] font-light',
    downWrapper: 'flex flex-col w-full gap-2 ',
    label: 'text-[16px] font-regular text-[#404040]',
}

type GoalCategory = 'Holidays' | 'Renovation' | 'Gaming' | 'Savings';

 const CATEGORY_GOALS: Record<GoalCategory, React.ElementType> = {
    Holidays: Mountain,
    Renovation: Brush,
    Gaming: Gamepad2,
    Savings: HandCoins,
};

const GoalsCard = ({value = 234, date ='10/12/30', label= 'label'}: GoalCardProps) => {

    const Icon = CATEGORY_GOALS[label as GoalCategory] || HandCoins;

    return (
        <div className={STYLE.goalCard}>
            <div className={STYLE.upWrapper}>
                <p className={STYLE.value}>{`R$ ${value}`}</p>
                <p className={STYLE.date}>{date}</p>
            </div>

            <div className={STYLE.downWrapper}>
                <Icon size={24}></Icon>
                <p className={STYLE.label}>{label}</p>
            </div>
        </div>
    )
}

export default GoalsCard;