import type { FloatingCardProps } from "./FloatingCard.type";

const STYLE = {
  root: 'w-full flex-1 max-h-full flex flex-col items-center justify-center p-4 border-1 bg-surface-card border-black/10 rounded-3xl',
  container: 'w-full h-fit flex flex-col gap-4',
  title: 'font text-heading text-dark'
}

const FloatingCard = ({children, title, style}: FloatingCardProps) => {
  return (
    <article style={style} className={STYLE.root} >
        <div className={STYLE.container}>
          <div className="w-fit">
              <h2 className={STYLE.title}>{title}</h2>
          </div>

          {children}
        </div>
    </article>
  )
}

export default FloatingCard;
