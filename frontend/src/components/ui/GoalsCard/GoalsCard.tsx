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
            <div className={STYLE.container}>
                <Icon size={40} className={`${color}`}/>
                        <div className={STYLE.wrapper}>

                            <div className="w-full flex justify-between">
                                <h3 className="font-[500]">{label}</h3>
                            
                                <div className="px-2 bg-gray-100 rounded-2xl" >
                                    <small className="text-[12px]">{date}</small>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <ProgressBar track={value} indicator={targetValue} color="#197BBD"/>

                                <div className="flex justify-between gap-2">
                                    <span className="font-[300]">{`R$${value} / R$${targetValue}`}</span>
                                    <span className="font-[400]">{percentage}%</span>
                                </div>
                            </div>
                        </div>
            </div>

    )
}

export default GoalsCard;