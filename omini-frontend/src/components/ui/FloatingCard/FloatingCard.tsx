import type { CSSProperties, ReactNode } from "react";
import useFadeIn from "../../../hooks/useFadeIn";

interface FloatingCardProps {
    children: ReactNode;
    title?: string;
    style?: CSSProperties;
}

const STYLE = {
  container: 'w-full max-h-full min-h-0 flex flex-col items-center justify-start p-6 border-1 border-black/8 rounded-4xl bg-white',
  wrapper: 'w-full max-h-full h-min-0 flex flex-col gap-4',
  title: 'text-title text-strong',
}

const FloatingCard = ({children, title, style}: FloatingCardProps) => {

  const  {isVisible } = useFadeIn();

  return (
    <div style={style} className={`${STYLE.container}`}>
        <div className={`${STYLE.wrapper} ${isVisible ? 'opacity-100 translate-x-0 ' : 'opacity-0 -translate-x-1'}`}>
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
