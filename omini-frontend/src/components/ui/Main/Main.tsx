import type { ReactNode } from "react"
import Header from "../../features/Header/Header"
import useFadeIn from "../../../hooks/useFadeIn"

interface MainProps {
    title: string,
    subtitle: string, 
    children: ReactNode
}

const STYLE = {
    container: 'flex flex-col w-full h-full h-min-0 gap-8 transition-all duration-800',
}

const Main = ({title, subtitle, children}: MainProps) => {

  const { isVisible } = useFadeIn();

  return (
    <main className={`${STYLE.container} ${isVisible ? 'opacity-100 translate-x-0 ' : 'opacity-0 -translate-x-1'}`}>
        <Header title={title} subtitle={subtitle}/>
        {children}
    </main>
  )
}

export default Main
