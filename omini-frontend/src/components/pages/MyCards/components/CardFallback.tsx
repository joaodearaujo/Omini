import { Plus } from "lucide-react"

const STYLE = {
  CARD_LAYOUT: 'min-h-0 min-w-0 w-[360px] aspect-[1.58/1] flex items-center justify-center p-6 ',
  CARD_THEME: `rounded-3xl cursor-default transition cursor-default border-1 border group border-black/20 cursor-pointer hover:border-black/100`,
  CARD_ANIMATION: `transition:transform hover:scale-102 duration-500 ease-in-out`,
  icon: {className: 'text-secondary group-hover:text-strong transition-all duration-500 ease-in-out', size: 40}
}

const CardFallback = () => {
    const Icon = Plus 
  return (<div className={`${STYLE.CARD_LAYOUT} ${STYLE.CARD_THEME} ${STYLE.CARD_ANIMATION}`}><Icon className={STYLE.icon.className} size={STYLE.icon.size}/></div>)
}

export default CardFallback
    