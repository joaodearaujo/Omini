import FloatingCard from "../FloatingCard/FloatingCard";
import { Plus } from "lucide-react";


const STYLE = {
    container: 'w-full h-fit flex justify-between items-center',
    title:  'text-title',
    button: 'flex items-center gap-1 bg-black text-title text-white group transition duration-500 rounded-xl py-2 px-3 cursor-pointer hover:scale-105',
    icon: {className:'transition-transform duration-500 ease-in-out group-hover:rotate-180', size: 20}
}

interface SectionsHeaderProps {
    title: string,
    onClick: () => void;
    isDisabled?: boolean;
} 

const SectionHeader = ({onClick, title, isDisabled}: SectionsHeaderProps) => {

    const Icon = Plus

    return (
      <FloatingCard>
      <section className={STYLE.container}>
        <h2 className={STYLE.title}>{title}</h2>
        <button onClick={onClick} disabled={isDisabled} className={STYLE.button}><span><Icon size={STYLE.icon.size} className={STYLE.icon.className}/></span>Add</button>
      </section>
    </FloatingCard>
    )
}

  
export default SectionHeader