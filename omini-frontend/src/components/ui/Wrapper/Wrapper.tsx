import type { ReactNode } from "react"
import SectionHeader from "../SectionHeader/SectionHeader"

interface WrapperProps {
  children: ReactNode,
  onClick: () => void;
  title: string, 
}

const Wrapper = ({title, onClick, children}: WrapperProps) => {
  return (
    <div className="relative flex flex-col w-full h-full gap-8">
      <SectionHeader title={title} onClick={onClick}/>
      {children}
    </div>
  )
}

export default Wrapper
