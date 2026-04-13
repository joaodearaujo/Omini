
const STYLE = {
  CARD_LAYOUT: 'min-h-0 min-w-0 w-[360px] aspect-[1.58/1] flex items-center justify-center p-6',
  CARD_THEME: `rounded-3xl cursor-default transition cursor-default border-1 border-dashed border-black/50`,
}

const CardFallback = () => {
  return (<div className={`${STYLE.CARD_LAYOUT} ${STYLE.CARD_THEME}`}></div>)
}

export default CardFallback
