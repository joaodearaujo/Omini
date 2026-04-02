import type { CSSProperties, ReactNode } from "react";

interface FloatingCardProps {
    children: ReactNode;
    title?: string;
    style?: CSSProperties;
}

const STYLE = {
  container: 'w-full max-h-full min-h-0 flex flex-col items-center justify-start p-6 border-1 shadow-xs border-black/8 rounded-4xl bg-white',
  wrapper: 'w-full max-h-full h-min-0 flex flex-col gap-4',
  title: 'font-medium text-black',
}

const FloatingCard = ({children, title, style}: FloatingCardProps) => {
  return (
    <div style={style} className={STYLE.container} >
        <div className={STYLE.wrapper}>
          { title && 
              <header className="w-fit">
                {<h2 className={STYLE.title}>{title}</h2>}
              </header>
          }
          {children}
        </div>
    </div>
  )
}

export default FloatingCard;
