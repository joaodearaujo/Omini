import {  ChevronRight, ChevronLeft } from "lucide-react";
import type { GoalButtonNavProps } from "../Goals.type";

const STYLE = {
    button: 'flex  w-fit h-fit items-center justify-center rounded-full cursor-pointer hover:scale-105 transition duration-300 ease-in-out z-10',
    icon: 'group-hover:scale-101 text-[#404040]',
}

const GoalGButtonNav = ({onClick, isRight} : GoalButtonNavProps) => {

  const Icon = isRight ? ChevronRight : ChevronLeft

    return (
        <button onClick={onClick} className={STYLE.button}>
            <Icon size={30} className={STYLE.icon}/>
        </button>
    )
}

export default GoalGButtonNav;