const STYLE = {
  CARD_LAYOUT: 'min-h-0 mekntyeplmcmin-w-[360px] aspect-[1.58/1] flex items-center justify-center p-6 ',
  CARD_THEME: `rounded-3xl cursor-default transition cursor-default border-1 border group border-black/10 cursor-pointer hover:border-black/50`,
  CARD_ANIMATION: `transition:transform hover:-translate-y-1 duration-500 ease-in-out`,
  icon: {className: 'text-secondary group-hover:text-strong transition-all duration-500 ease-in-out', size: 40}
}

const CardFallback = () => {
  return (
    <div className={`${STYLE.CARD_LAYOUT} ${STYLE.CARD_THEME} ${STYLE.CARD_ANIMATION}`}>
        <p className="text-extraSmall text-secondary">Card Slot</p>
    </div>
)
}

export default CardFallback
    