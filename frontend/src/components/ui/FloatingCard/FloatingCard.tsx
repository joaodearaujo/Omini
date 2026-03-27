import type { FloatingCardProps } from "./FloatingCard.type";

const STYLE = {
  root: 'w-full flex-1 max-h-full min-h- flex flex-col items-center justify-center p-4 border-1 border-black/8 rounded-3xl bg-white',
  container: 'w-full h-fit flex flex-col gap-4',
  title: 'font-medium text-black'
}

const FloatingCard = ({children, title, style}: FloatingCardProps) => {
  return (
    <article style={style} className={STYLE.root} >
        <div className={STYLE.container}>
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
