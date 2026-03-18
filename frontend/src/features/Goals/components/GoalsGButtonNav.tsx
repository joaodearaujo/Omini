import {  ChevronRight } from "lucide-react";

const STYLE = {
    button: 'flex  w-fit h-fit items-center justify-center rounded-full bg-[#F0F0F0] cursor-pointer hover:scale-105 transition duration-300 ease-in-out z-10',
    icon: 'group-hover:scale-101 text-[#404040]',
}

const GoalGButtonNav = () => {
  const Icon = ChevronRight

    return (
        <button className={STYLE.button}>
            <Icon size={30} className={STYLE.icon}/>
        </button>
    )
}

export default GoalGButtonNav;