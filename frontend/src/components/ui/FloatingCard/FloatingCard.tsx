import type { FloatingCardProps } from "./FloatingCard.type";

const STYLE = {
  root: 'w-full h-fit max-h-[400px] flex flex-col items-center justify-center p-4 border-1 bg-white border-black/10 rounded-3xl',
  container: 'w-full h-fit flex flex-col gap-4',
  title: 'font-semibold text-[18px] text-[#404040]'
}

const FloatingCard = ({children, title, style}: FloatingCardProps) => {
  return (
    <article style={style} className={STYLE.root} >
        <div className={STYLE.container}>
          <div className="w-fit">
              <h1 className={STYLE.title}>{title}</h1>
          </div>

          {children}
        </div>
    </article>
  )
}

export default FloatingCard;
