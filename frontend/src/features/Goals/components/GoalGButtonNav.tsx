import {  ChevronRight } from "lucide-react";

const GoalGButtonNav = () => {
  const Icon = ChevronRight

    return (
        <button className="flex  w-fit h-fit items-center justify-center rounded-full  bg-[#F0F0F0] cursor-pointer hover:scale-105 transition duration-300 ease-in-out z-10 ">
            <Icon size={30} className="grou-hover:scale-101"/>
        </button>
    )
}

export default GoalGButtonNav;