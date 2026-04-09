import type { ReactNode } from "react"
import Header from "../../features/Header/Header"

interface MainProps {
    title: string,
    subtitle: string, 
    children: ReactNode
}

const STYLE = {
    container: 'flex flex-col w-full h-full h-min-0 gap-8 transition-all duration-800',
}

const Main = ({title, subtitle, children}: MainProps) => {
  return (
    <main className={STYLE.container}>
        <Header title={title} subtitle={subtitle}/>
        {children}
    </main>
  )
}

export default Main
