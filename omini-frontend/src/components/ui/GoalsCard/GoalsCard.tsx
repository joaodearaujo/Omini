import ProgressBar from "../ProgressBar/ProgressBar";
import { Mountain, Brush,Gamepad2, HandCoins } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const STYLE = {
    container: 'flex w-full h-fit items-center justify-between gap-4 p-4 rounded-3xl border-1 border-black/10',
    wrapper: 'flex flex-col w-full h-fit gap-4',
}

export interface GoalCardProps {
    name: string, 
    value: number,
    target: number,
    category: GoalCategory,
}

export type GoalCategory = 'Holidays' | 'Renovation' | 'Gaming' | 'Savings';

const CATEGORY_GOALS: Record<GoalCategory, {icon: LucideIcon, color: string, size: number}> = {
    Holidays: {icon: Mountain, color: 'text-[#0ea5e9]', size: 50},
    Renovation: {icon: Brush, color: 'text-[#f97316]', size: 50},
    Gaming: {icon: Gamepad2, color: 'text-[#8b5cf6]', size: 50},
    Savings: {icon: HandCoins, color: 'text-[#10b981]', size: 50},
} as const;

const GoalsCard = ({name, value, target, category}: GoalCardProps) => {

    const percentage = Math.round((value / target) * 100)

    const Icon = CATEGORY_GOALS[category].icon   

    return (
            <article className={STYLE.container}>
                    <div aria-hidden="true" className="flex-shrink-0">
                        <Icon size={CATEGORY_GOALS[category].size} className={CATEGORY_GOALS[category].color}/>
                    </div>

                    <div className={STYLE.wrapper}>
                        <header className="w-full flex justify-between">
                            <h3 className="font-[500]">{name}</h3>
                        
                                {/* <span className="px-2 bg-gray-100 rounded-2xl">
                                </span> */}
                        </header>

                        <footer className="flex flex-col gap-2">
                            <div>
                                <ProgressBar track={value} indicator={target} color="#197BBD"/>
                            </div>

                            <div className="flex justify-between gap-2">
                                <p className="text-[#404040] font-regular text-[16px]">{`R$${value} / R$${target}`}

                                </p>
                                <h4 className="font-[400]">{percentage}%</h4>
                            </div>
                        </footer>
                    </div>
            </article>

    )
}

export default GoalsCard;