import type { FloatingCardProps } from "./FloatingCard.type";

const STYLE = {
  root: 'w-full h-fit flex flex-col justify-center items-center p-6 border-1 bg-white border-black/10 rounded-3xl',
  container: 'w-full h-full flex flex-col gap-4',
  title: 'font-semibold text-[18px] text-[#404040]'
}

const FloatingCard = ({children, title, style}: FloatingCardProps) => {
  return (
    <article className={STYLE.root} style={style}>
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
