const STYLE = {
    header: 'max-w-full flex justify-between items-center',
    title:  'font-medium text-[18px]',
    button:  'bg-black text-white font-[400] rounded-xl py-2 px-3 cursor-pointer transition duration-400',
}

interface SectionsHeaderProps {
    title: string,
    button: string,
    onClick?: () => void;
} 

const SectionHeader = ({onClick, title, button}: SectionsHeaderProps) => {
  return (
      <div className={STYLE.header}>
        <h2 className={STYLE.title}>{title}</h2>

        <button onClick={onClick} className={STYLE.button}>{button}</button>
      </div>
  )
}

export default SectionHeader