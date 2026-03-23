import type { GoalCardProps } from "../Goals.type";
import { Mountain, Brush, Gamepad2, HandCoins, type LucideIcon} from "lucide-react";

const STYLE = {
    goalCard: 'min-w-[180px] min-h-[220px] flex flex-1 flex-col justify-between p-6 rounded-4xl shadow-xs border-1 border-black/10 gap-6 transition hover:scale-102 cursor-default duration-600 ease-out',
    upWrapper: 'w-full h-fit flex flex-col gap-2',
    value: 'text-[24px] font-medium text-[#696969] truncate whitespace-nowrap',
    date: 'text-[18px] text-[#AEAEAE] font-light',
    downWrapper: 'flex flex-col w-full gap-2 ',
    label: 'text-[16px] font-regular text-[#404040]',
}

type GoalCategory = 'Holidays' | 'Renovation' | 'Gaming' | 'Savings';

const CATEGORY_GOALS: Record<GoalCategory, {icon: LucideIcon, color: string}> = {
    Holidays: {icon: Mountain, color: 'text-[#0ea5e9]'},
    Renovation: {icon: Brush, color: 'text-[#f97316]'},
    Gaming: {icon: Gamepad2, color: 'text-[#8b5cf6]'},
    Savings: {icon: HandCoins, color: 'text-[#10b981]'},
};

const GoalsCard = ({value = 234, date ='10/12/30', label= 'label'}: GoalCardProps) => {

    const Icon = CATEGORY_GOALS[label as GoalCategory].icon;
    const color = CATEGORY_GOALS[label as GoalCategory].color;

    return (
        <div key={label} className={STYLE.goalCard}>
            <div className={STYLE.upWrapper}>
                <strong className={STYLE.value}>{`R$ ${value}`}</strong>
                <span className={STYLE.date}>{date}</span>
            </div>

            <div className={STYLE.downWrapper}>
                <Icon size={24} className={color} ></Icon>
                <small className={STYLE.label}>{label}</small>
            </div>
        </div>
    )
}

export default GoalsCard;