import GoalsCard from "../../../ui/GoalsCard/GoalsCard"
import { useGoals } from "../../../../hooks/useGoal"

const STYLE = {
    container: 'w-full h-max-full flex flex-col gap-8',
}

const GoalsSection = () => { 

    const{ goals }= useGoals()

    return (
    <div className={STYLE.container}>
        {goals.map((item) => {
            return (
                <GoalsCard key={item.id} {...item}/>
            )   
        })}
    </div>
  )
}

export default GoalsSection
