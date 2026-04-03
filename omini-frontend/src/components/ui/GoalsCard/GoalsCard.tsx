import type { GoalCategory } from "../../../utils/GoalCategory";
import CATEGORY_GOALS from "../../../utils/GoalCategory";
import ProgressBar from "../ProgressBar/ProgressBar";

const STYLE = {
    container: 'flex w-full h-fit items-center justify-between gap-4 p-4 rounded-3xl border-1 border-black/10 shadow-xs',
    wrapper: 'flex flex-col w-full h-fit gap-4',
}

export interface GoalCardProps {
    id: string,
    value: number,
    targetValue: number,
    date: string,
    label: GoalCategory,
}

const GoalsCard = ({value, targetValue, date, label}: GoalCardProps) => {
    const Icon = CATEGORY_GOALS[label].icon
    const color = CATEGORY_GOALS[label].color
    const percentage = Math.round((value / targetValue) * 100)

    return (
            <article className={STYLE.container}>
                    <div aria-hidden="true" className="flex-shrink-0">
                        <Icon size={40} className={`${color}`}/>
                    </div>

                    <div className={STYLE.wrapper}>
                        <header className="w-full flex justify-between">
                            <h3 className="font-[500]">{label}</h3>
                        
                            <span className="px-2 bg-gray-100 rounded-2xl">
                                <time dateTime={date} className="text-[12px]">{date}</time>   
                            </span>
                        </header>

                        <footer className="flex flex-col gap-2">
                            <div>
                                <ProgressBar track={value} indicator={targetValue} color="#197BBD"/>
                            </div>

                            <div className="flex justify-between gap-2">
                                <p className="text-[#404040] font-regular text-[16px]">{`R$${value} / R$${targetValue}`}

                                </p>
                                <h4 className="font-[400]">{percentage}%</h4>
                            </div>
                        </footer>
                    </div>
            </article>

    )
}

export default GoalsCard;