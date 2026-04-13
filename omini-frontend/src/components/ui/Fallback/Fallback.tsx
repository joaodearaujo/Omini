import type { LucideIcon } from "lucide-react"
import FloatingCard from "../FloatingCard/FloatingCard"

interface FallBackProps {
    title: string,
    icon: LucideIcon,
    text: string,
}

const STYLE =  {
    container: 'flex w-full h-full items-center justify-center',
    wrapper: 'flex flex-col items-center justify-center gap-2',
    icon: {size: 60, className: 'text-secondary/50'},
    text: 'text-small text-secondary/50 text-center'
}

const Fallback = ({title, icon, text}: FallBackProps) => {
    const Icon = icon

  return (
    <FloatingCard title={title} style={{flex: 1}}>
        <div className={STYLE.container}>
            <div className={STYLE.wrapper}>
                <Icon size={STYLE.icon.size} className={STYLE.icon.className}></Icon>
                <p className={STYLE.text}>{text}</p>
            </div>
        </div>
    </FloatingCard>
  )
}

export default Fallback
