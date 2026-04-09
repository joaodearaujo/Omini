import SectionHeader from "../../../ui/SectionHeader/SectionHeader"
import GoalForm from "./GoalForm"
import { useState } from "react"
import GoalsList from "./GoalsList"
import { useGoals } from "../../../../hooks/useGoals"

const HEADER_CONFIG = {
 title: 'My Goals',
}

const GoalsWrapper = () => {

const { goals, loading, refresh } = useGoals();
const [ isFormOpen, setIsFormOpen ] = useState<boolean>(false)

  return (
    <div className="flex flex-col w-full h-full gap-8">
        <GoalForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} onGoalCreated={refresh}/>
        <SectionHeader title={HEADER_CONFIG.title} onClick={() => setIsFormOpen(true)}/>
        <GoalsList goals={goals} isLoading={loading} />
    </div>
  )
}

export default GoalsWrapper
