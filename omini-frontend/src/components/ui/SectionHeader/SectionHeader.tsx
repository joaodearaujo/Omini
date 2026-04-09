import FloatingCard from "../FloatingCard/FloatingCard";


const STYLE = {
    container: 'w-full h-fit flex justify-between items-center',
    title:  'font-medium text-[18px]',
    button:  'bg-black text-white font-[400] rounded-xl py-2 px-3 cursor-pointer',
}

interface SectionsHeaderProps {
    title: string,
    onClick?: () => void;
} 

const SectionHeader = ({onClick, title}: SectionsHeaderProps) => (
    <FloatingCard>
      <section className={STYLE.container}>
        <h2 className={STYLE.title}>{title}</h2>
        <button onClick={onClick} className={STYLE.button}>+ Add</button>
      </section>
    </FloatingCard>
  )

  
export default SectionHeader