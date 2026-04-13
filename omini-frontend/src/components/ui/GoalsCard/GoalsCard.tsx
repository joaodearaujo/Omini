import ProgressBar from "../ProgressBar/ProgressBar";
import { Mountain, Brush,Gamepad2, HandCoins } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import  useFormatNumber from "../../../hooks/useFormatNumber";

const STYLE = {
    container: 'flex w-full h-fit items-center justify-between p-4 rounded-3xl border-1 border-black/10',
    wrapper: 'flex flex-col w-full h-fit gap-2',
}

export interface GoalCardProps {
    name: string, 
    value: number,
    target: number,
    category: GoalCategory,
}

export type GoalCategory = 'Holidays' | 'Renovation' | 'Gaming' | 'Savings';

const CATEGORY_GOALS: Record<GoalCategory, {icon: LucideIcon, color: string, size: number}> = {
    Holidays: {icon: Mountain, color: 'text-[#0ea5e9]', size: 25},
    Renovation: {icon: Brush, color: 'text-[#f97316]', size: 25},
    Gaming: {icon: Gamepad2, color: 'text-[#8b5cf6]', size: 25},
    Savings: {icon: HandCoins, color: 'text-[#10b981]', size: 25},
} as const;

const GoalsCard = ({name, value, target, category}: GoalCardProps) => {

    const percentage = Math.round((value / target) * 100)
    const Icon = CATEGORY_GOALS[category].icon   
    const { format } = useFormatNumber();
  
    return (
            <article className={STYLE.container}>
                    <div className={STYLE.wrapper}>
                        <header className="w-full h-[30px] gap-2 items-center flex">
                            <Icon size={CATEGORY_GOALS[category].size} className={CATEGORY_GOALS[category].color}/>
                            <p className="text-small font-[500]">{name}</p>
                        </header>

                        <footer className="flex flex-col gap-2">
                            <div>
                                <ProgressBar track={value} indicator={target}/>
                            </div>

                            <div className="flex justify-between gap-2">
                                <p className="text-primary text-small">{`${format(value)} / ${format(target)}`}
                                </p>
                                <p className="text-small">{percentage}%</p>
                            </div>
                        </footer>
                    </div>
            </article>

    )
}

export default GoalsCard;