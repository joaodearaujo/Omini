import GoalForm from "./GoalForm"
import { useState } from "react"
import GoalsList from "./GoalsList"
import { useGoals } from "../../../../hooks/useGoals"
import Wrapper from "../../../ui/Wrapper/Wrapper"

const WRAPPER_CONFIG = {
  title: 'My Goals',
}

const GoalsWrapper = () => {
  const { goals, loading, refresh, addGoal } = useGoals();
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)

  return (
    <Wrapper title={WRAPPER_CONFIG.title} onClick={() => setIsFormOpen(true)}>
      <GoalForm
        isFormOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onGoalCreated={refresh}
        onAddGoal={addGoal}
      />
      <GoalsList goals={goals} isLoading={loading} />
    </Wrapper>
  )
}

export default GoalsWrapper
