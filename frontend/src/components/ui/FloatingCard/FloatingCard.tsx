import type { FloatingCardProps } from "./FloatingCard.type";

const STYLE = {
  container: 'w-full flex-1 max-h-full min-h-0 flex flex-col items-center justify-start p-6 border-1 border-black/8 rounded-4xl bg-white',
  wrapper: 'w-full max-h-full h-min-0 flex flex-col gap-4',
  title: 'font-medium text-black'
}

const FloatingCard = ({children, title, style}: FloatingCardProps) => {
  return (
    <article style={style} className={STYLE.container} >
        <div className={STYLE.wrapper}>
          { title && 
              <div className="w-fit">
                {<h2 className={STYLE.title}>{title}</h2>}
              </div>
          }

          {children}
        </div>
    </article>
  )
}

export default FloatingCard;
