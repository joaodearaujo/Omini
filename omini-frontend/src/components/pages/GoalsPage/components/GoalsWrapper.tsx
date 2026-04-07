import FloatingCard from "../../../ui/FloatingCard/FloatingCard"
import useFadeIn from "../../../../hooks/useFadeIn"
import SectionHeader from "../../../ui/SectionHeader/SectionHeader"
import GoalForm from "./GoalForm"
import { useState } from "react"

const HEADER_CONFIG = {
 title: 'My Goals',
}

const GoalsWrapper = () => {

const { isVisible } =  useFadeIn()
const [ isFormOpen, setIsFormOpen ] = useState<boolean>(false)

  return (
    <div className={`w-full h-full transition-all duration-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        <GoalForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}></GoalForm>

      <FloatingCard>
        <section className="p-2">
          <SectionHeader title={HEADER_CONFIG.title} onClick={() => setIsFormOpen(true)} />
        </section>
      </FloatingCard>
    </div>
  )
}

export default GoalsWrapper
