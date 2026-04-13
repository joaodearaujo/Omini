import type { ReactNode } from "react"
import SectionHeader from "../SectionHeader/SectionHeader"

interface WrapperProps {
  children: ReactNode,
  onClick: () => void;
  title: string, 
  isDisabled: boolean;
}

const Wrapper = ({title, onClick, children, isDisabled}: WrapperProps) => {
  return (
    <div className="relative flex flex-col w-full h-full gap-8">
      <SectionHeader title={title} onClick={onClick} isDisabled={isDisabled}/>
      {children}
    </div>
  )
}

export default Wrapper
