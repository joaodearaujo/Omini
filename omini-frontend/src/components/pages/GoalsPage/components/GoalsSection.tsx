import GoalsCard from "../../../ui/GoalsCard/GoalsCard"
import { MOCK_GOALS } from "../../../mock/MOCK_GOALS"

const STYLE = {
    container: 'w-full h-max-full flex flex-col gap-8',
}

const GoalsSection = () => { 

   return (
    <div className={STYLE.container}>
        {MOCK_GOALS.map((item) => {
            return (
                <GoalsCard key={item.id} {...item}/>
            )   
        })}
    </div>
  )
}

export default GoalsSection
