import type { GoalCardProps } from "../Goals.type";
import CATEGORY_GOALS from "../../../../../utils/GoalCategory";

const STYLE = {
    goalCard: 'min-w-[180px] max-w-[220px] min-h-[220px] flex flex-1 flex-col justify-between p-6 rounded-4xl border-1 border-black/10 gap-8 cursor-default duration-600 ease-out bg-white',
    upWrapper: 'w-full h-fit flex flex-col gap-2',
    value: 'text-[24px] font-[400] text-[#696969] truncate whitespace-nowrap',
    date: 'text-[18px] text-[#AEAEAE] font-light',
    downWrapper: 'flex flex-col w-full gap-2 ',
    label: 'text-[16px] font-regular text-[#404040]',
}

const GoalsCard = ({value = 234, date ='10/12/30', label='Holidays'}: GoalCardProps) => {

    const Icon = CATEGORY_GOALS[label].icon;
    const color = CATEGORY_GOALS[label].color;

    return (
        <div className={STYLE.goalCard}>
            <div className={STYLE.upWrapper}>
                <strong className={STYLE.value}>{`R$ ${value}`}</strong>
                <span className={STYLE.date}>{date}</span>
            </div>

            <div className={STYLE.downWrapper}>
                <Icon size={24} className={color} />
                <small className={STYLE.label}>{label}</small>
            </div>
        </div>
    )
}

export default GoalsCard;